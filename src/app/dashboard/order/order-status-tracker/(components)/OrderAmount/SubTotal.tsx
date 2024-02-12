type SubtotalProps = {};

export const Subtotal: React.FC<SubtotalProps> = () => {
  return (
    <div className="w-full px-2 py-1 text-xs font-bold">
      <div className="flex items-center justify-between">
        <h3>Subtotal</h3>
        <h5>₹ 2,950</h5>
      </div>
      <div className="flex items-center justify-between">
        <h3>Coupon</h3>
        <h5 className="text-green-600"> -10.0</h5>
      </div>
      <div className="flex items-center justify-between">
        <h3>Delivery Free</h3>
        <h5>₹ 50.0</h5>
      </div>
      {/* total amount */}
      <div className="w-full my-2">
        <hr className="border-dashed" />
        <div className="flex w-full my-3 justify-between">
          <div>
            <h4>Total</h4>
            <h5 className="text-black/50">(Inclusive of all taxes)</h5>
          </div>
          <h5>₹ 2,990</h5>
        </div>
        <hr className="border-dashed" />
      </div>
      {/* delivery date */}

      <div>
        <h4 className="font-bold">
          Delivery Date: <span className="text-black/80">22/01/2024</span>
        </h4>
        <div className="mt-3">
          <h3>Shipping Address</h3>
          <p className="text-black/80">
            Bijay Sahoo, 123, Main Street ,City, State, Country, 110001
          </p>
        </div>
      </div>
    </div>
  );
};
