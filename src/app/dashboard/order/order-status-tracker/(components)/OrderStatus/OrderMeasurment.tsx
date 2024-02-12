"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const AnkleImg = "/Images/measurment/measure/ankle-n.png";
const ArmscyeImg = "/Images/measurment/measure/Armscye.png";
const BicepsImg = "/Images/measurment/measure/Biceps.png";
const CalfImg = "/Images/measurment/measure/Calf.png";
const ChestImg = "/Images/measurment/measure/Chest.png";
const CrotchBackImg = "/Images/measurment/measure/crotchBack.png";
const CrotchFrontImg = "/Images/measurment/measure/crotchFront.png";
const ElbowImg = "/Images/measurment/measure/Elbow.png";
const ForearmImg = "/Images/measurment/measure/Forearm.png";
const FrontJacketImg = "/Images/measurment/measure/frontJacket.png";
const FullBackImg = "/Images/measurment/measure/fullBack.png";
const FullShoulderImg = "/Images/measurment/measure/fullShoulder.png";
const FullSleeveImg = "/Images/measurment/measure/fullSleeve.png";
const HalfBackImg = "/Images/measurment/measure/halfBack.png";
const HalfShoulderImg = "/Images/measurment/measure/halfShoulder.png";
const HipsImg = "/Images/measurment/measure/Hips.png";
const KneeImg = "/Images/measurment/measure/Knee.png";
const NeckImg = "/Images/measurment/measure/Neck.png";
const OverArmImg = "/Images/measurment/measure/Overarm.png";
const PantInseamImg = "/Images/measurment/measure/Overarm.png";
const PantOutSeam = "/Images/measurment/measure/pantOutSeam.png";
const PantWaistImg = "/Images/measurment/measure/pantWaist.png";
const SleeveImg = "/Images/measurment/measure/Sleeve.png";
const ThighImg = "/Images/measurment/measure/Thigh.png";
const WaistImg = "/Images/measurment/measure/Waist.png";
const WhristImg = "/Images/measurment/measure/Wrists.png";

// // --------------------------------------- Female page measure
// export const FAnkleImg = "/Images/measurment/measure/female/Anklee.png";
// export const FArmscyeImg = "/Images/measurment/measure/female/Armscye.png";
// export const FBicepsImg = "/Images/measurment/measure/female/Biceps.png";
// export const FCalfImg = "/Images/measurment/measure/female/Calf.png";
// export const FChestImg = "/Images/measurment/measure/female/Chest.png";
// export const FCrotchBackImg =
//   "/Images/measurment/measure/female/crotchBack.png";
// export const FCrotchFrontImg =
//   "/Images/measurment/measure/female/crotchFront.png";
// export const FElbowImg = "/Images/measurment/measure/female/Elbow.png";
// export const FForearmImg = "/Images/measurment/measure/female/Forearm.png";
// export const FFrontJacketImg =
//   "/Images/measurment/measure/female/frontJacket.png";
// export const FFullBackImg = "/Images/measurment/measure/female/fullBack.png";
// export const FFullShoulderImg =
//   "/Images/measurment/measure/female/fullShoulder.png";
// export const FFullSleeveImg =
//   "/Images/measurment/measure/female/fullSleeve.png";
// export const FHalfBackImg = "/Images/measurment/measure/female/halfBack.png";
// export const FHalfShoulderImg =
//   "/Images/measurment/measure/female/halfShoulder.png";
// export const FHipsImg = "/Images/measurment/measure/female/Hips.png";
// export const FKneeImg = "/Images/measurment/measure/female/Knee.png";
// export const FNeckImg = "/Images/measurment/measure/female/Neck.png";
// export const FOverArmImg = "/Images/measurment/measure/female/Overarm.png";
// export const FPantInseamImg = "/Images/measurment/measure/female/Overarm.png";
// export const FPantOutSeam = "/Images/measurment/measure/female/pantOutSeam.png";
// export const FPantWaistImg = "/Images/measurment/measure/female/pantWaist.png";
// export const FSleeveImg = "/Images/measurment/measure/female/Sleeve.png";
// export const FThighImg = "/Images/measurment/measure/female/Thigh.png";
// export const FWaistImg = "/Images/measurment/measure/female/Waist.png";
// export const FWhristImg = "/Images/measurment/measure/female/Wrists.png";

type OrderMeasurmentProps = {};

export const ORDER_MEASURMENT_MEN_DATA = [
  { id: 1, imageLink: NeckImg, heading: "Neck" },
  { id: 2, imageLink: HalfShoulderImg, heading: "Half Shoulder" },
  { id: 3, imageLink: FullShoulderImg, heading: "Full Shoulder" },
  { id: 4, imageLink: ArmscyeImg, heading: "Armscye " },
  { id: 5, imageLink: OverArmImg, heading: "Overarm" },
  { id: 6, imageLink: ChestImg, heading: "Chest" },
  { id: 7, imageLink: FrontJacketImg, heading: "Front Jacket" },
  { id: 8, imageLink: SleeveImg, heading: "Sleeve" },
  { id: 9, imageLink: FullSleeveImg, heading: "Full Sleeve" },
  { id: 10, imageLink: FullBackImg, heading: "Full Back" },
  { id: 11, imageLink: HalfBackImg, heading: "Half Back" },
  { id: 12, imageLink: BicepsImg, heading: "Biceps" },
  { id: 13, imageLink: ElbowImg, heading: "Elbow" },
  { id: 14, imageLink: ForearmImg, heading: "Forearm" },
  { id: 15, imageLink: WhristImg, heading: "Whrist" },
  { id: 16, imageLink: PantInseamImg, heading: "Trouser Inseam" },
  { id: 17, imageLink: PantOutSeam, heading: "Trouser Inseam" },
  { id: 18, imageLink: CrotchFrontImg, heading: "Crotch Front" },
  { id: 19, imageLink: CrotchBackImg, heading: "Crotch Back" },
  { id: 20, imageLink: WaistImg, heading: "Waist" },
  { id: 21, imageLink: PantWaistImg, heading: "Waist" },
  { id: 22, imageLink: HipsImg, heading: "Hips" },
  { id: 23, imageLink: ThighImg, heading: "Thigh" },
  { id: 24, imageLink: KneeImg, heading: "Knee" },
  { id: 25, imageLink: CalfImg, heading: "Calf" },
  { id: 26, imageLink: AnkleImg, heading: "AnkleImg" },
];

// export const WomenValue = [
//   { id: 1, imageLink: NeckImg, heading: "Neck" },
//   { id: 2, imageLink: HalfShoulderImg, heading: "Half Shoulder" },
//   { id: 3, imageLink: FullShoulderImg, heading: "Full Shoulder" },
//   { id: 4, imageLink: ArmscyeImg, heading: "Armscye " },
//   { id: 5, imageLink: OverArmImg, heading: "Overarm" },
//   { id: 6, imageLink: ChestImg, heading: "Chest" },
//   { id: 7, imageLink: FrontJacketImg, heading: "Front Jacket" },
//   { id: 8, imageLink: SleeveImg, heading: "Sleeve" },
//   { id: 9, imageLink: FullSleeveImg, heading: "Full Sleeve" },
//   { id: 10, imageLink: FullBackImg, heading: "Full Back" },
//   { id: 11, imageLink: HalfBackImg, heading: "Half Back" },
//   { id: 12, imageLink: BicepsImg, heading: "Biceps" },
//   { id: 13, imageLink: ElbowImg, heading: "Elbow" },
//   { id: 14, imageLink: ForearmImg, heading: "Forearm" },
//   { id: 15, imageLink: WhristImg, heading: "Whrist" },
//   { id: 16, imageLink: PantInseamImg, heading: "Trouser Inseam" },
//   { id: 17, imageLink: PantOutSeam, heading: "Trouser Inseam" },
//   { id: 18, imageLink: CrotchFrontImg, heading: "Crotch Front" },
//   { id: 19, imageLink: CrotchBackImg, heading: "Crotch Back" },
//   { id: 20, imageLink: WaistImg, heading: "Waist" },
//   { id: 21, imageLink: PantWaistImg, heading: "Waist" },
//   { id: 22, imageLink: HipsImg, heading: "Hips" },
//   { id: 23, imageLink: ThighImg, heading: "Thigh" },
//   { id: 24, imageLink: KneeImg, heading: "Knee" },
//   { id: 25, imageLink: CalfImg, heading: "Calf" },
//   { id: 26, imageLink: AnkleImg, heading: "AnkleImg" },
// ];
//
export const OrderMeasurment: React.FC<OrderMeasurmentProps> = ({}) => {
  const [Open, setOpen] = useState(true);
  return (
    <div className="border p-7 border-gray rounded-lg my-4">
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={() => setOpen(!Open)}
      >
        <h3 className="text-2xl font-bold">Measurement </h3>
        <FaAngleDown
          className="text-dark-pink cursor-pointer"
          onClick={() => setOpen(!Open)}
          size={24}
        />
      </div>
      {Open ? (
        <div className="grid grid-cols-3 gap-3 mt-11">
          {ORDER_MEASURMENT_MEN_DATA.map((_, key) => (
            <div key={key} className="flex items-center gap-4">
              <Image
                className="rounded-lg"
                src={_.imageLink}
                width={110}
                height={100}
                alt="measurment image "
              />
              <div>
                <h3 className="font-bold text-sm">{_.heading}</h3>
                <h5>12 In</h5>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
