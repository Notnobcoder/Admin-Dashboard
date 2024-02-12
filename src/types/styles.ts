export type AllStylesD = {
  _id: string;
  name: string;
  productImage: string;
  gender: GenderD;
};

export type GenderD = {
  name: string;
  categories: CategoryD[];
};

export type CategoryD = {
  _id: string;
  name: string;
  subcategories: SubcategoryD[];
};

export type SubcategoryD = {
  _id: string;
  name: string;
  subCatImage: string;
  subCatNumber: string;
  styles: StyleD[];
};

export type StyleD = {
  catStyleName: string;
  catStyleNumber: string;
  styleImage: string;
  flag: boolean;
  _id: string;
};

// =========================================================

export type UserStylesD = {
  name: string;
  productNumber: string;
  genderName: string;
  productName: string;
  productImage: string;
  categories: UserCategoryD[];
  catStyleNameArraytoDelete: string[];
};

export type UserCategoryD = {
  name: string;
  catImage: string;
  catNumber: string;
  styles: UserStyleD[];
  _id?: string;
};

export type UserStyleD = {
  catStyleName: string;
  catStyleNumber: string;
  styleImage: string;
  styleGlbImage?: string;
  flag?: boolean;
  _id?: string;
};

// ======================================================================

export type allActiveStylesD = {
  _id: string;
  storeId: string;
  ownFlag: boolean;
  seen: boolean;
  name: string;
  productNumber: string;
  genderName: string;
  productName: string;
  productImage: string;
  categories: UserCategoryD[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

// =============== Measurements types ============================

export type AllMeasurementsD = {
  _id: string;
  name: string;
  gender: string;
  categoriename: string;
  measurements: MeasurementD[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type MeasurementD = {
  name: string;
  mesurmentImage: string;
  _id?: string;
};

// ---------------------

export type AddMeasurementD = {
  name: string;
  gender: string;
  categoriename: string;
  measurements: MeasurementD[];
  catMeasurmentNameArraytoDelete: string[];
};

// -----------------

export type AllActiveMeasurementsD = {
  storeId: string;
  ownFlag: boolean;
  name: string;
  gender: string;
  categoriename: string;
  measurements: MeasurementD[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

// ================================================================
