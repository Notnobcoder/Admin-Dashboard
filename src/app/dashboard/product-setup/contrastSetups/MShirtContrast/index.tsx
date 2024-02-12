import ChangeFabrics from "./ChangeFabrics";
import { CONTRASTDATA_BUTTONS } from "./data";
import { CardComponent } from "./CardComponent";
import { EmbroideryFonts } from "./Embroidery/Font";
import { ThreadColor } from "./Embroidery/ThreadColor";
import { Position } from "./Embroidery/Position";
import { SwitchComp } from "@/components/SwitchComp";

interface ContrastDataVal {
  id: number;
  data: any;
  heading: string;
}

export const MShirtContrast = () => {
  return (
    <div className="md:h-full md:overflow-y-auto scrollbar-hide md:px-6 md:py-5">
      <div className="max-md:h-full font-jost">
        <div>
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-bold ">Style Contrast</h4>
            <SwitchComp isSelectedProp />
          </div>
          <div>
            <h4 className="text-sm text-graydark">₹99</h4>
          </div>
        </div>

        <div className="my-2">
          <ChangeFabrics />
        </div>
        <hr className="text-dark-pink border-dashed" />
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-bold ">Buttons</h4>
            <SwitchComp isSelectedProp />
          </div>
          <div>
            <h4 className="text-sm text-graydark">₹99</h4>
          </div>
        </div>
        {CONTRASTDATA_BUTTONS.map((item: ContrastDataVal) => (
          <div key={item.id}>
            <CardComponent data={item.data} heading={item.heading} />
          </div>
        ))}
        <hr className="text-dark-pink border-dashed" />
        {/* emboroidary */}
        <div>
          <div className="mt-4">
            <div className="flex items-center gap-4">
              <h4 className="text-xl font-bold ">Embroidery</h4>
              <SwitchComp isSelectedProp />
            </div>
            <div>
              <h4 className="text-sm text-graydark">₹99</h4>
            </div>
          </div>
          {/* component */}
          <EmbroideryFonts heading="Embroidery Font" />
          <ThreadColor heading="Thread Color" />
          <Position heading="Embroidary Position" />
        </div>
      </div>
    </div>
  );
};
