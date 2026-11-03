#!/bin/bash
# ==============================================================================
# Poke N Bowl - Générateur de commande test avec TOUS les suppléments
# ==============================================================================
# Usage :
#   ./scripts/test-order-all-supplements.sh [OPTIONS] [PRINTER_IP]
#
# Exemples :
#   # 1. Générer et afficher le ticket en console (+ auto-print caisse POS) :
#   ./scripts/test-order-all-supplements.sh
#
#   # 2. Générer ET imprimer directement sur l'Epson locale en 1 seconde :
#   ./scripts/test-order-all-supplements.sh 192.168.1.50
#
#   # 3. Tester en local (localhost:3000) :
#   ./scripts/test-order-all-supplements.sh --local
# ==============================================================================

set -e

BASE_URL="https://pokenbowl.be"
PRINTER_IP=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --local)
      BASE_URL="http://localhost:3000"
      shift
      ;;
    --url)
      BASE_URL="$2"
      shift 2
      ;;
    --ip)
      PRINTER_IP="$2"
      shift 2
      ;;
    --help|-h)
      echo "Usage: $0 [--local] [--url <URL>] [--ip <PRINTER_IP>] [PRINTER_IP]"
      exit 0
      ;;
    *)
      if [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        PRINTER_IP="$1"
      fi
      shift
      ;;
  esac
done

echo "================================================================================"
echo " 🥗 POKE N BOWL - GÉNÉRATION DE COMMANDE TEST AVEC TOUS LES SUPPLÉMENTS"
echo "================================================================================"
echo "📍 Cible : $BASE_URL/api/create-test-order?type=all-supplements"
echo ""

# Appel API pour créer la commande en base de données
RESPONSE=$(curl -s -X POST "$BASE_URL/api/create-test-order?type=all-supplements" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json")

if command -v jq >/dev/null 2>&1; then
  SUCCESS=$(echo "$RESPONSE" | jq -r '.success // false')
  ORDER_ID=$(echo "$RESPONSE" | jq -r '.order.id // "INCONNU"')
  ORDER_TOTAL=$(echo "$RESPONSE" | jq -r '.order.total // 0')
  RECEIPT_TEXT=$(echo "$RESPONSE" | jq -r '.receiptPreview // ""')
  SOAP_ENVELOPE=$(echo "$RESPONSE" | jq -r '.soapEnvelope // ""')
else
  SUCCESS=$(echo "$RESPONSE" | grep -o '"success":true' || true)
  ORDER_ID=$(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
  ORDER_TOTAL=$(echo "$RESPONSE" | grep -o '"total":[0-9.]*' | head -1 | cut -d':' -f2)
  RECEIPT_TEXT=$(curl -s "$BASE_URL/api/create-test-order?type=all-supplements&format=text")
fi

if [[ "$SUCCESS" != "true" && -z "$SUCCESS" ]]; then
  echo "❌ Erreur lors de la génération de la commande :"
  echo "$RESPONSE"
  exit 1
fi

echo "✅ Commande de test enregistrée avec succès !"
echo "🆔 Référence commande : # $ORDER_ID"
echo "💰 Total : $ORDER_TOTAL EUR"
echo "🖨️ Statut caisse POS  : PENDING (déclenche l'impression automatique du POS)"
echo ""
echo "================================================================================"
echo " 🧾 RENDU VISUEL DU TICKET THERMIQUE 48 COLONNES (Style Takeaway.com) :"
echo "================================================================================"
echo ""
if [ -n "$RECEIPT_TEXT" ]; then
  echo "$RECEIPT_TEXT"
else
  curl -s "$BASE_URL/api/create-test-order?type=all-supplements&format=text"
fi
echo ""
echo "================================================================================"

# Si une IP d'imprimante est passée, envoi direct via le protocole ePOS Epson SOAP
if [ -n "$PRINTER_IP" ]; then
  echo ""
  echo "🖨️ Envoi direct du flux XML ePOS vers l'Epson TM-m30II (https://$PRINTER_IP:8043)..."
  if [ -n "$SOAP_ENVELOPE" ]; then
    PRINT_RES=$(curl -k -s -w "\nHTTP_STATUS:%{http_code}" -X POST \
      "https://$PRINTER_IP:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000" \
      -H "Content-Type: text/xml; charset=utf-8" \
      -H 'SOAPAction: ""' \
      --data-binary "$SOAP_ENVELOPE" 2>&1 || true)
    
    echo "Réponse imprimante :"
    echo "$PRINT_RES"
    echo ""
    echo "✅ Données envoyées à l'imprimante !"
  fi
else
  echo ""
  echo "💡 Astuce : Vous pouvez aussi imprimer directement ce ticket sur votre Epson locale"
  echo "   sans passer par le navigateur, en ajoutant son adresse IP :"
  echo "   $0 192.168.1.50"
fi
