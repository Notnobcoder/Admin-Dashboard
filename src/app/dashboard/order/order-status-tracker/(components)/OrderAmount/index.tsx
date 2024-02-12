import { OrderCard } from "./OrderCard";
import { Subtotal } from "./SubTotal";

// --------------     utils

export const ORDER_SHIRT_DATA = [
  { id: 1, heading: "Fabric", price: "₹ 100.0" },
  { id: 2, heading: "Making Charges", price: "₹ 100.0" },
  { id: 3, heading: "Style Contrast", price: "₹ 99.0" },
  { id: 4, heading: "Buttons", price: "₹ 99.0" },
  { id: 5, heading: "Embroidery", price: "₹ 299.0" },
];

export const ORDER_LADIES_SHIRT_DATA = [
  { id: 1, heading: "Fabric", price: "₹ 100.0" },
  { id: 2, heading: "Making Charges", price: "₹ 100.0" },
  { id: 3, heading: "Style ", price: "₹ 0.0" },
  { id: 4, heading: "Contrast ", price: "₹ 50.0" },
];

export default function OrderAmount() {
  return (
    <div className="w-[30%] m-3 rounded-lg flex items-center flex-col justify-center p-2 bg-[#E4E4E44D] ">
      <h3 className="text-lg font-bold">Order Amount </h3>
      {/* order Card  */}
      <OrderCard
        heading="Shirt"
        headingValue="₹ 1,239"
        data={ORDER_SHIRT_DATA}
      />
      <OrderCard
        heading="Ladies Shirt"
        headingValue="₹ 1,711"
        data={ORDER_LADIES_SHIRT_DATA}
      />
      {/* subtotal */}
      <Subtotal />
    </div>
  );
}
