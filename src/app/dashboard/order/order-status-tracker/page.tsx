import { OrderStyle } from "./(components)/OrderStatus/OrderStyle";
import { ShirtStatus } from "./(components)/OrderStatus/ShirtStatus";
import { OrderMeasurment } from "./(components)/OrderStatus/OrderMeasurment";
import { OrderSpecialInstuctions } from "./(components)/OrderStatus/OrderSpecialInstructions";
import { OrderContrast } from "./(components)/OrderStatus/OrderContrast";
import OrderAmount from "./(components)/OrderAmount";
import OrderStepper from "./(components)/OrderStatus/OrderStepper";

export default function OrderStatusTracker() {
  return (
    <div className="flex gap-1 bg-white items-start border border-gray rounded-lg justify-between w-full">
      <div className="w-full p-4">
        <div className="flex  item-center mb-4 justify-between">
          <h3 className="text-2xl font-bold">
            Order ID <span className="font-semibold">: IN1021127</span>
          </h3>
          <h4 className="text-2xl font-bold">Order Date: 11/01/2024 </h4>
        </div>
        <div className="border h-[80vh] overflow-y-auto border-gray rounded-lg p-4">
          {/* stepper */}
          <OrderStepper />
          {/* shirt status */}
          <ShirtStatus />
          {/* styles status */}
          <OrderStyle />
          {/* contrast status */}
          <OrderContrast />
          {/* measurment status */}
          <OrderMeasurment />
          {/* Special Instructions status */}
          <OrderSpecialInstuctions />
        </div>
      </div>
      <OrderAmount />
    </div>
  );
}
