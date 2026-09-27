import { useCallback, useEffect, useState } from "react";
import { isItemAvailable, type StockSnapshot } from "../lib/stock";
import { getStock } from "../server/stock";

export function useStock(pollMs = 20000) {
  const [stock, setStock] = useState<StockSnapshot | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await getStock();
      setStock(res.stock);
    } catch (e) {
      console.error("[useStock]", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
    const id = window.setInterval(() => void refresh(), pollMs);
    return () => window.clearInterval(id);
  }, [refresh, pollMs]);

  const available = useCallback(
    (id: string) => isItemAvailable(stock, id),
    [stock],
  );

  return { stock, loading, available, refresh };
}
