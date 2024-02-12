import React from "react";
import { StoreSetup } from "./storeSetup";
import ProductSetup from "../product-setup/ProductSetup";
import ProductSetupProvider from "../product-setup/(components)/ProductSetupProvider";

export default function page() {
  return (
    <div className="p-2 lg:p-6">
      <StoreSetup />
      {/* <ProductSetupProvider gender="Men" apparel="Shirt">
          <ProductSetup />
        </ProductSetupProvider> */}
    </div>
  );
}
