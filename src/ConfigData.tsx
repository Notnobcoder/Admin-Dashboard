// * !!!!!!!!!!!!!!!!! shirt data  !!!!!!!!! */
export const CONFIG_CATEGORIES = { shirt: "shirt", trouser: "trouser" };
export const SHIRT_CONFIG_TYPES = {
  shirt_fit: "shirt",
  collar: "collar",
  cuffs: "cuffs",
  back: "back",
  placket: "placket",
  pocket: "pocket",
  pocket_placement: "pocket_placement",
  sleeves: "sleeves",
  yoke: "yoke",
  hemline: "hemline",
  tucked: "tucked",
};
export const SHIRT_TUCKED = {
  type: "",
  in: "in",
  out: "out",
};
SHIRT_TUCKED.type = SHIRT_TUCKED.out;
export const SHIRT_FITTING = {
  slim: "slim",
  regular: "regular",
  relaxed: "relaxed",
  type: "",
};
SHIRT_FITTING.type = SHIRT_FITTING.regular;
export const COLLAR_TYPES = [
  "Cutaway_Collar",
  "Forword_Point_Collar",
  "Mandarin_Collar",
  "Pinned_Collar",
  "Semi_Cutaway_Collar",
  "Spread_Collar",
  "Tab_Collar",
  "Classic_Collar",
  "Rounded_Collar",
  "Button_Down_Collar",
  "Tuxedo_Wing_Tip_Collar",
  "Two_Button_Classic_Collar",
];
export const CUFFS_TYPES = [
  "1_Button",
  "1_Button_Rounded",
  "1_Button_Notch",
  "2_Button_Notch",
  "2_Button_Rounded",
  "2_Button",
  "French_Rounded",
  "Convertible_Cuff",
  "French",
  "Barrel_Cuff",
  "French_Notch",
];
// export const SHIRT_TYPES = ["Slim_Fit", "Regular_Fit", "Relaxed_Fit"];
export const BACK_TYPES = [
  "plain_back",
  "box_pleat",
  "side_pleat",
  "darted_back",
  "centre_pleat",
];
export const PLACKET_TYPES = [
  "Front_Placket",
  "Tuxedo_Front_Pleated",
  "Tuxedo_placket",
  "Wide_Front_Placket",
  "Covered_Placket",
  "French_Placket",
  "Popover_Placket",
];
export const POCKET_TYPES = [
  "Welt_Pocket_With_Button",
  "Welt_Pocket_With_Flap",
  "Welt_Pocket_With_Tap",
  "Welt_Pocket_with_Zip",
  "Welt_Pocket",
  "Classic_Flap",
  "classic",
  "Box_Pleat_Flap",
  "Box_pleat",
  "Inverted_Pleat",
  "Safari_pocket",
];
export const SLEEVES_TYPES = [
  "long_sleeve",
  "short_sleeve",
  "french_cuff_sleeve",
];
export const YOKE_TYPES = ["split_yoke", "western_yoke", "normal_yoke"];
export const HEMLINE_TYPES = ["Classic", "Rounded", "Shirttail"];

export const TROUSER_CONFIG = {
  trouser_style: "trouser_style",
  pocket_style: "pocket_style",
  hemline_style: "trouser_hemline_style",
  lining_style: "lining_style",
  waste_style: "waste_style",
};
export const TROUSER_HEMLINE = ["regular", "fold"];
export const TROUSER_STYLE = [
  "slim",
  "two_pleat",
  "classic",
  "flat_front",
  "one_pleat_front",
];
export const TROUSER_POCKET_STYLE = [
  "slim",
  "two_pleat",
  "classic",
  "flat_front",
];
export const TROUSER_WAIST_STYLE = ["side_adjusters", "belt_loops", "normal"];

/* !!!!!!!!!!!!!!!!! kurti data/ !!!!!!!!! */
export const KURTI_CONFIG_TYPES = {
  length: "length",
  front_neck: "front_neck",
  back_neck: "back_neck",
  hemline: "hemline",
  bottom_wear: "bottom_wear",
  sleeve: "sleeve",
  slit: "slit",
};
export const KURTI_LENGTH = { short: "short", medium: "medium", long: "long" };
export const FRONT_NECK = [
  "cut_out_with_button",
  "double_keyhole_neckline",
  "Flower_cut_out_neckline",
  "pleats_with_frills",
  "one_side_placket",
  "Mock_button_placket_front",
  "keyhole",
  "keyhole_with_cutout",
  "Raglan_jacket",
  "scalloped_front_neck",
  "split_crew_neck_front",
  "Square_neckline_with_buttons",
  "square_neck_front",
  "split_crew_neck_front",
  "sweetheart_front_neck",
  "wave_neck",
  "Asymmetrical_front_neck",
  "bib_with_frills",
  "bib_with_pleats_neckline",
  "centre_pleats_neckline",
  "Criss_Cross",
  "boat_neck",
];
//keyhole,keyhole_with_cutout,wave_neck,Criss_Cross,boat_neck

export const BACK_NECK = [
  "basic_neck",
  "crew_neck_back",
  "criss_cross_back",
  "curved_square_back_neck",
  "diamond_neck_back",
  "deep_back_btn",
  "fisheye_keyhole_back",
  "floral_cut_out",
  "lock_with_button",
  "pleated_back",
  "Pleats_in_the_back",
  "raglan_cut_out",
  "round_with_v_back",
  "scalloped_back_neck",
  "square_neck_back",
  "smooth_v_shape",
  "stylish_back",
  "v_shape_back_neckline_with_a_loop",
  "v_shape_back",
  "wave_back",
  "wave_cut_out",
  "zip_in_the_back",
  "back_deep_neck",
  "back_neck_fabric_button",
];
// basic_neck,deep_back_btn,smooth_v_shape,"stylish_back","wave_back","back_neck_fabric_button"
export const BOTTOM_WEAR = [
  "hem_with_front",
  "overlap",
  "side_placket",
  "side_slits",
  "zig_zag",
  "basic_pants",
  "bell_bottom",
  "fold_up",
];
export const KURTI_SLEEVES = [
  "cap_sleeve",
  "Churidar_Sleeves",
  "cuff_sleeve",
  "Drapped_Sleeves",
  "Pleats_in_sleeves",
  "petal_sleeve",
  "layered",
  "Long_Sleeves",
  "poet_sleeve",
  "puffed_sleeve",
  "roll_up_sleeve",
  "ruffle_sleeve",
  "short_sleeve",
  "short_tab",
  "slit_sleeves_btn",
  "slit_sleeve",
  "3_4th_sleeves",
  "bishop_sleeve",
  "button_tab",
];
