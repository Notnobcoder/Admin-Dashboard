// -----contrast
// collar
const Cshirt1 = "/contrast/collar1.svg";
const Cshirt2 = "/contrast/collar2.svg";
const Cshirt3 = "/contrast/collar3.svg";
// cuff
const Cuff1 = "/contrast/cuff1.svg";
const Cuff2 = "/contrast/cuff2.svg";
const Cuff3 = "/contrast/cuff3.svg";

// buttons
const CButton1 = "/contrast/Cbutton1.svg";
const CButton2 = "/contrast/Cbutton2.svg";

const noIcon = "/contrast/buttonContrast/NoIcon.png";
const CuffIcon = "/contrast/buttonContrast/Cuff.png";
const ShirtIcon = "/contrast/buttonContrast/Shirt.png";

// // tick image
// const TickImage = "/contrast/tick.svg";
//
// // buttonColor
// const ButtonC1 = "/contrast/buttonC.svg";
// const ButtonC2 = "/contrast/buttonC2.svg";
// const ButtonC3 = "/contrast/buttonC3.svg";
// const ButtonC4 = "/contrast/buttonC4.svg";
// const ButtonC5 = "/contrast/buttonC5.svg";
// const ButtonC6 = "/contrast/buttonC6.svg";
// const ButtonC7 = "/contrast/buttonC7.svg";
// const ButtonC8 = "/contrast/buttonC8.svg";
//
// // button contrast
// const ButtonContrast1 = "/contrast/buttonContrast1.svg";
// const ButtonContrast2 = "/contrast/buttonContrast2.svg";
// const ButtonContrast3 = "/contrast/buttonContrast3.svg";
//
// // color images grid
// const GreenButton = "/contrast/greenDark.png";
// const OrangeButton = "/contrast/orange.png";
// const LightGreenButton = "/contrast/lightGreen.png";
// const RedButton = "/contrast/red.png";

export const CollarData = [
  {
    id: 1,
    label: "Default",
    imageLink: Cshirt1,
  },
  {
    id: 2,
    label: "All",
    imageLink: Cshirt2,
  },
  {
    id: 3,
    label: "Inner Fabric",
    imageLink: Cshirt3,
  },
];

export const CuffData = [
  {
    id: 1,
    label: "Default",
    imageLink: Cuff1,
  },
  {
    id: 2,
    label: "All",
    imageLink: Cuff2,
  },
  {
    id: 3,
    label: "Inner Fabric",
    imageLink: Cuff3,
  },
];

export const PlacketData = [
  {
    id: 1,
    label: "Default",
    imageLink:
      "/Images/contrast/men/shirt/placket-styles/default-placket-styles.png",
    value: "Default",
    price: "₹0",
  },
  {
    id: 2,
    label: "All",
    imageLink:
      "/Images/contrast/men/shirt/placket-styles/all-placket-styles.png",
    value: "All",
    price: "₹500",
  },
];

export const PocketData = [
  {
    id: 1,
    label: "Default",
    imageLink: "/Images/contrast/men/shirt/pocket_styles/classic.png",
    value: "Default",
    price: "₹0",
  },
  {
    id: 2,
    label: "All",
    imageLink: "/Images/contrast/men/shirt/pocket_styles/nonClassic.png",
    value: "All",
    price: "₹500",
  },
];

export const SleeveData = [
  {
    id: 1,
    label: "Default",
    imageLink: "/Images/contrast/men/shirt/yolk_styles/sleeves22.png",
    value: "All",
    price: "₹500",
  },
  {
    id: 2,
    label: "All",
    imageLink: "/Images/contrast/men/shirt/sleeves_styles/longSleeves.png",
    value: "Default",
    price: "₹0",
  },
];

export const YokeData = [
  {
    id: 1,
    label: "Default",
    imageLink: "/Images/contrast/men/shirt/yolk_styles/normalYoke.png",
    value: "Default",
    price: "₹0",
  },
  {
    id: 2,
    label: "All",
    imageLink: "/Images/contrast/men/shirt/yolk_styles/normalYoke22.png",
    value: "All",
    price: "₹500",
  },
];

export const ButtonData = [
  {
    id: 1,
    label: "Default",
    imageLink: Cshirt1,
  },
  {
    id: 2,
    label: "All",
    imageLink: Cshirt2,
  },
];

export const ButtonColorData = [
  {
    id: 1,
    imageLink: CButton1,
    value: "By Default",
    price: "₹0",
  },
  {
    id: 2,
    imageLink: CButton2,
    value: "Custom",
    price: "₹500",
  },
];

export const ButtonContrastData = [
  {
    id: 1,
    imageLink: noIcon,
    value: "By Default",
  },
  {
    id: 2,
    imageLink: CuffIcon,
    value: "All ( +4 ₹ )",
  },
  {
    id: 3,
    imageLink: ShirtIcon,
    value: "Only Cuff",
  },
];

export const CONTRASTDATA_BUTTONS = [
  { id: 1, data: ButtonColorData, heading: "Buttons" },
  { id: 2, data: ButtonContrastData, heading: "Button Contrast" },
];
