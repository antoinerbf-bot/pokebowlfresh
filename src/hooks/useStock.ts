import { useCallback, useEffect, useState } from "react";
import { isItemAvailable, type StockSnapshot } from "../lib/stock";
import { getStock } from "../fn/stock";

/** Poll stock every 20s so menu reflects real-time availability */
export function useStock(pollMs = 20000) {
  const [stock, setStock] = useState<StockSnapshot | null>(null);
  const [persistent, setPersistent] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await getStock();
      setStock(res.stock);
      setPersistent(res.persistent);
    } catch {
      // keep last known stock on network error
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

  return { stock, persistent, available, refresh };
}
