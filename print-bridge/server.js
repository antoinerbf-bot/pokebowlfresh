/**
 * Print Bridge local ultra-léger pour Epson TM-m30III
 * - 0 dépendance npm (utilise les modules natifs `http` et `net` de Node.js)
 * - Reçoit les requêtes HTTP POST /print avec CORS autorisé pour la tablette
 * - Transmet directement les octets ESC/POS en TCP vers le port 9100 de l'imprimante Epson
 */
const http = require("http");
const net = require("net");

const PORT = 3001;

const server = http.createServer((req, res) => {
  // En-têtes CORS pour autoriser la tablette Android
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", bridge: "Epson Print Bridge active" }));
    return;
  }

  if (req.method === "POST" && req.url === "/print") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const payload = JSON.parse(body);
        const printerIp = payload.printerIp || "192.168.1.100";
        const printerPort = parseInt(payload.printerPort, 10) || 9100;
        const dataBase64 = payload.dataBase64;

        if (!dataBase64) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing dataBase64" }));
          return;
        }

        const buffer = Buffer.from(dataBase64, "base64");
        const socket = new net.Socket();
        socket.setTimeout(6000);

        socket.connect(printerPort, printerIp, () => {
          socket.write(buffer, () => {
            socket.end();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true, message: "Ticket envoyé à l'Epson avec succès" }));
          });
        });

        socket.on("timeout", () => {
          socket.destroy();
          res.writeHead(504, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: `Délai d'attente dépassé vers l'imprimante ${printerIp}:${printerPort}` }));
        });

        socket.on("error", (err) => {
          socket.destroy();
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: `Erreur de connexion imprimante : ${err.message}` }));
        });
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Requête invalide : " + err.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`=======================================================`);
  console.log(` POKENBOWL — LOCAL PRINT BRIDGE EPSON TM-m30III        `);
  console.log(` Port d'écoute : http://0.0.0.0:${PORT}                  `);
  console.log(` Prêt à relayer les tickets de la tablette vers l'Epson `);
  console.log(`=======================================================`);
});

