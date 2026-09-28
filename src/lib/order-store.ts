import type { Order } from "./orders";

/** In-memory store until restaurant software / DB is connected */
const orderStore = new Map<string, Order>();

export function getOrderFromStore(id: string): Order | undefined {
  return orderStore.get(id);
}

export function listOrdersFromStore(): Order[] {
  return Array.from(orderStore.values()).sort(
    (a, b) => b.createdAt.localeCompare(a.createdAt),
  );
}

export function upsertOrder(order: Order) {
  orderStore.set(order.id, order);
}
