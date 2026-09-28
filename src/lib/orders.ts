export type PaymentMethod = "online" | "on_site";
export type FulfillmentMethod = "delivery" | "pickup";
export type OrderStatus =
  | "pending_payment"
  | "paid"
  | "awaiting_pickup"
  | "cancelled"
  | "expired";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  toppings: string[];
}

export interface OrderCustomer {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  fulfillment: FulfillmentMethod;
  requestedTime: string;
  address?: string;
  postalCode?: string;
  city?: string;
  deliveryFee?: number;
}

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  molliePaymentId?: string;
  customer: OrderCustomer;
  items: OrderItem[];
  total: number;
  currency: "EUR";
}

export function generateOrderId(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PNB-${date}-${rand}`;
}
