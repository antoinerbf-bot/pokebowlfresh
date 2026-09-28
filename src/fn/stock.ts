import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { buildDefaultStock, type StockItem } from "../lib/stock";
import {
  assertAdminPin,
  loadStock,
  redisConfigured,
  saveStock,
} from "../lib/stock-store";

export const getStock = createServerFn({ method: "GET" }).handler(async () => {
  const stock = await loadStock();
  return {
    stock,
    persistent: redisConfigured(),
  };
});

export const setStockItem = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().min(1),
      id: z.string().min(1),
      available: z.boolean(),
      qty: z.number().int().min(0).nullable().optional(),
    }),
  )
  .handler(async ({ data }) => {
    assertAdminPin(data.pin);
    const stock = await loadStock();
    const prev: StockItem = stock.items[data.id] ?? { available: true, qty: null };
    stock.items[data.id] = {
      available: data.available,
      qty: data.qty === undefined ? prev.qty : data.qty,
    };
    await saveStock(stock);
    return { stock, persistent: redisConfigured() };
  });

export const setManyStock = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().min(1),
      updates: z.array(
        z.object({
          id: z.string(),
          available: z.boolean(),
          qty: z.number().int().min(0).nullable().optional(),
        }),
      ),
    }),
  )
  .handler(async ({ data }) => {
    assertAdminPin(data.pin);
    const stock = await loadStock();
    for (const u of data.updates) {
      const prev: StockItem = stock.items[u.id] ?? { available: true, qty: null };
      stock.items[u.id] = {
        available: u.available,
        qty: u.qty === undefined ? prev.qty : u.qty,
      };
    }
    await saveStock(stock);
    return { stock, persistent: redisConfigured() };
  });

export const resetStock = createServerFn({ method: "POST" })
  .validator(z.object({ pin: z.string().min(1) }))
  .handler(async ({ data }) => {
    assertAdminPin(data.pin);
    const stock = buildDefaultStock();
    await saveStock(stock);
    return { stock, persistent: redisConfigured() };
  });
