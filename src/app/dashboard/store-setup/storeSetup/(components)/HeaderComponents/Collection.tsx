import { useState } from "react";
import Men3dStore from "../Men3dStore";
import MenCollections from "../MenCollection";
import Women3dStore from "../Women3dStore";
import WomenCollection from "../WomenCollection";
import { useApp } from "@/context/AppProvider";

type CollectionProps = {};

export const Collection: React.FC<CollectionProps> = () => {
  const [selected, setSelected] = useState<string>("Women");
  const { readyMade } = useApp();
  return (
    <div>
      {/* selected gender women */}
      {readyMade === "3dStore" ? (
        <div>
          {selected === "Women" ? (
            <WomenCollection onGenderChange={() => setSelected("Men")} />
          ) : (
            <MenCollections onGenderChange={() => setSelected("Women")} />
          )}
        </div>
      ) : (
        <div>
          <div>
            {selected === "Women" ? (
              <Women3dStore onGenderChange={() => setSelected("Men")} />
            ) : (
              <Men3dStore onGenderChange={() => setSelected("Women")} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
