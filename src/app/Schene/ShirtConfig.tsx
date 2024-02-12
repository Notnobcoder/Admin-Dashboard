// @ts-nocheck
import * as THREE from "three";
import * as CONFIG_DATA from "../../ConfigData";

import { shirtScene } from "./ShirtScene";
import {
  defaultTexture,
  MODEL_SCALE,
  trouserTexture,
  VIEW_TYPE,
} from "@/components/web3d";
// import { hemLineNo, backStyleNo, placketStyleNo } from "../fabric-form/Style";
export const AddShirtConfigModels = (tmpModel, type) => {
  switch (type) {
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.collar:
      shirtScene.root.cleanObject(shirtScene.collar.model);
      shirtScene.collar.model = tmpModel;
      if (shirtScene.collar.texture) {
        shirtScene.root.updateTexture(
          shirtScene.collar.model,
          shirtScene.collar.texture,
        );
      } else {
        shirtScene.collar.texture = shirtScene.root.loadTexture(
          shirtScene.collar.model,
          defaultTexture,
        );
      }
      shirtScene.root.applyShadow(shirtScene.collar.model, true, false);
      shirtScene.collar.model.traverse((child) => {
        if (child.isMesh) {
          if (child.name.includes("button")) {
            shirtScene.changeColor(child, shirtScene.collar.btn_color);
          }
        }
      });
      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.cuffs:
      shirtScene.root.cleanObject(shirtScene.cuffs.model);
      shirtScene.cuffs.model = tmpModel;
      shirtScene.cuffs.model.visible = shirtScene.sleeves.type === "full";
      if (shirtScene.cuffs.texture)
        shirtScene.root.updateTexture(
          shirtScene.cuffs.model,
          shirtScene.cuffs.texture,
        );
      else
        shirtScene.cuffs.texture = shirtScene.root.loadTexture(
          shirtScene.cuffs.model,
          defaultTexture,
        );
      shirtScene.root.applyShadow(shirtScene.cuffs.model, true, false);
      shirtScene.cuffs.model.traverse((child) => {
        if (child.isMesh) {
          if (child.name.includes("button")) {
            shirtScene.changeColor(child, shirtScene.cuffs.btn_color);
          }
        }
      });
      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit:
      shirtScene.root.cleanObject(shirtScene.shirt.model);
      shirtScene.shirt.model = tmpModel;
      shirtScene.root.applyShadow(shirtScene.shirt.model, false, true);
      shirtScene.shirt.model.traverse((child) => {
        if (
          child.name.includes("FRT_4_Node") ||
          child.name.includes("MatShape") ||
          child.name.includes("back_Node") ||
          child.name.includes("-SLV")
        ) {
          child.traverse((c) => {
            if (c.material) {
              c.material.dispose();
            }
            if (c.geometry) {
              c.geometry.dispose();
            }
            c.visible = false;
          });
          child.visible = false;
          shirtScene.shirt.model.remove(child);
        }
        if (
          child.name.includes("Pattern_4802921_Node") ||
          child.name.includes("Pattern_4802922_Node")
        ) {
          child.visible = shirtScene.sleeves.type === "full";
        }
        if (child.name.includes("yoke_Node")) {
          child.traverse((c) => {
            if (c.material) {
              c.material.dispose();
            }
            if (c.geometry) {
              c.geometry.dispose();
            }
            c.visible = false;
          });
          child.visible = false;
          shirtScene.shirt.model.remove(child);
        }
        if (child.isMesh) {
          child.receiveShadow = true;
        }
      });
      if (shirtScene.shirt.texture)
        shirtScene.root.updateTexture(
          shirtScene.shirt.model,
          shirtScene.shirt.texture,
        );
      else
        shirtScene.shirt.texture = shirtScene.root.loadTexture(
          shirtScene.shirt.model,
          defaultTexture,
        );
      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.placket:
      shirtScene.root.cleanObject(shirtScene.placket.model);
      shirtScene.placket.model = tmpModel;
      if (shirtScene.placket.texture)
        shirtScene.root.updateTexture(
          shirtScene.placket.model,
          shirtScene.placket.texture,
        );
      else
        shirtScene.placket.texture = shirtScene.root.loadTexture(
          shirtScene.placket.model,
          defaultTexture,
        );
      shirtScene.root.applyShadow(shirtScene.placket.model, true, false);
      shirtScene.placket.model.traverse((child) => {
        if (child.isMesh) {
          if (
            child.name.includes("button") ||
            child.name.includes("thread") ||
            child.name.includes("thread_hole")
          )
            shirtScene.changeColor(child, shirtScene.placket.btn_color);
        }
      });
      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.back:
      shirtScene.root.cleanObject(shirtScene.shirt_back.model);
      shirtScene.shirt_back.model = tmpModel;
      shirtScene.root.applyShadow(shirtScene.shirt_back.model, true, false);
      if (shirtScene.shirt_back.texture)
        shirtScene.root.updateTexture(
          shirtScene.shirt_back.model,
          shirtScene.shirt_back.texture,
        );
      else
        shirtScene.shirt_back.texture = shirtScene.root.loadTexture(
          shirtScene.shirt_back.model,
          defaultTexture,
        );
      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.pocket:
      shirtScene.root.cleanObject(shirtScene.pocket.model);
      shirtScene.pocket.model = tmpModel;
      shirtScene.pocket.model.scale.x = -1 * MODEL_SCALE;
      if (shirtScene.secondPocket.model)
        shirtScene.root.cleanObject(shirtScene.secondPocket.model);
      shirtScene.pocket.model.position.z = 0.005;
      shirtScene.secondPocket.model = tmpModel.clone();
      if (shirtScene.pocket.type === "double") {
        shirtScene.secondPocket.model.scale.x = 1 * MODEL_SCALE;
        shirtScene.root.modelRoot.add(shirtScene.secondPocket.model);
      } else shirtScene.root.modelRoot.remove(shirtScene.secondPocket.model);
      if (shirtScene.shirt.texture)
        shirtScene.pocket.texture = shirtScene.shirt.texture;
      if (shirtScene.pocket.texture)
        shirtScene.root.updateTexture(
          shirtScene.pocket.model,
          shirtScene.pocket.texture,
        );
      else
        shirtScene.pocket.texture = shirtScene.root.loadTexture(
          shirtScene.pocket.model,
          defaultTexture,
        );
      shirtScene.pocket.model.traverse((child) => {
        if (child.isMesh) {
          if (child.name.includes("button"))
            shirtScene.changeColor(child, shirtScene.pocket.btn_color);
        }
      });
      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.sleeves:
      shirtScene.root.cleanObject(shirtScene.sleeves.model);
      shirtScene.sleeves.model = tmpModel;
      shirtScene.root.applyShadow(shirtScene.sleeves.model, false, false);
      if (shirtScene.cuffs.model)
        shirtScene.cuffs.model.visible = shirtScene.sleeves.type === "full";
      shirtScene.shirt.model &&
        shirtScene.shirt.model.traverse((child) => {
          if (
            child.name.includes("Pattern_4802921_Node") ||
            child.name.includes("Pattern_4802922_Node")
          ) {
            child.visible = shirtScene.sleeves.type === "full";
          }
        });
      if (shirtScene.sleeves.texture)
        shirtScene.root.updateTexture(
          shirtScene.sleeves.model,
          shirtScene.sleeves.texture,
        );
      else
        shirtScene.root.loadTexture(shirtScene.sleeves.model, defaultTexture);
      shirtScene.updateTextPosition(shirtScene.embroidery.pos_type);

      break;
    case CONFIG_DATA.SHIRT_CONFIG_TYPES.yoke:
      shirtScene.root.cleanObject(shirtScene.yoke.model);
      shirtScene.yoke.model = tmpModel;
      shirtScene.root.applyShadow(shirtScene.yoke.model, false, false);
      if (shirtScene.yoke.texture)
        shirtScene.root.updateTexture(
          shirtScene.yoke.model,
          shirtScene.yoke.texture,
        );
      else
        shirtScene.yoke.texture = shirtScene.root.loadTexture(
          shirtScene.yoke.model,
          defaultTexture,
        );
      break;
    case CONFIG_DATA.TROUSER_CONFIG.trouser_style:
      shirtScene.root.cleanObject(shirtScene.trouser.model);
      shirtScene.trouser.model = tmpModel;
      shirtScene.root.applyShadow(shirtScene.trouser.model, false, false);
      if (shirtScene.trouser.texture)
        shirtScene.root.updateTexture(
          shirtScene.trouser.model,
          shirtScene.trouser.texture,
        );
      else
        shirtScene.trouser.texture = shirtScene.root.loadTexture(
          shirtScene.trouser.model,
          trouserTexture,
        );
      break;
    case CONFIG_DATA.TROUSER_CONFIG.waste_style:
      shirtScene.root.cleanObject(shirtScene.trouser.vest_belt_model);
      shirtScene.trouser.vest_belt_model = tmpModel;
      shirtScene.root.applyShadow(
        shirtScene.trouser.vest_belt_model,
        false,
        false,
      );
      if (shirtScene.trouser.texture)
        shirtScene.root.updateTexture(
          shirtScene.trouser.vest_belt_model,
          shirtScene.trouser.texture,
        );
      else
        shirtScene.trouser.texture = shirtScene.root.loadTexture(
          shirtScene.trouser.vest_belt_model,
          trouserTexture,
        );
      break;
    case CONFIG_DATA.TROUSER_CONFIG.hemline_style:
      shirtScene.root.cleanObject(shirtScene.trouser.fold_model);
      shirtScene.trouser.fold_model = tmpModel;
      shirtScene.root.applyShadow(shirtScene.trouser.fold_model, true, false);
      if (shirtScene.trouser.texture)
        shirtScene.root.updateTexture(
          shirtScene.trouser.fold_model,
          shirtScene.trouser.texture,
        );
      else
        shirtScene.trouser.texture = shirtScene.root.loadTexture(
          shirtScene.trouser.fold_model,
          trouserTexture,
        );
      shirtScene.trouser.fold_model.visible = false;
      break;
  }
};
export const UpdateShirtStyle = (index, type) => {
  if (shirtScene.root) {
    switch (type) {
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.collar:
        shirtScene.root.setZoomType(VIEW_TYPE.front_zoom);
        index %= CONFIG_DATA.COLLAR_TYPES.length;
        shirtScene.loadModel(
          `./3dmodel/shirt_asset/collar_style/${CONFIG_DATA.COLLAR_TYPES[index]}.glb`,
          type,
        );
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.cuffs:
        if (shirtScene.sleeves.type === "full") {
          shirtScene.root.setZoomType(VIEW_TYPE.back_zoom);
          index %= CONFIG_DATA.CUFFS_TYPES.length;
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/cuffs_style/${CONFIG_DATA.CUFFS_TYPES[index]}.glb`,
            type,
          );
        }
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit:
        shirtScene.root.setZoomType(VIEW_TYPE.front);
        let shirt_type = "";
        if (index === 0)
          shirt_type = CONFIG_DATA.SHIRT_FITTING.type =
            CONFIG_DATA.SHIRT_FITTING.slim;
        else if (index === 1)
          shirt_type = CONFIG_DATA.SHIRT_FITTING.type =
            CONFIG_DATA.SHIRT_FITTING.regular;
        else
          shirt_type = CONFIG_DATA.SHIRT_FITTING.type =
            CONFIG_DATA.SHIRT_FITTING.relaxed;

        if (CONFIG_DATA.SHIRT_TUCKED.type === CONFIG_DATA.SHIRT_TUCKED.in) {
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/tucked_in/${shirt_type}_in.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/back_style/${shirt_type}/tuck_in/${
              CONFIG_DATA.BACK_TYPES[backStyleNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.back,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/placket_style/tucked_in/${
              CONFIG_DATA.PLACKET_TYPES[placketStyleNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.placket,
          );
        } else {
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/hemline_style/${shirt_type}/${
              CONFIG_DATA.HEMLINE_TYPES[hemLineNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/back_style/${shirt_type}/tuck_out/${
              CONFIG_DATA.BACK_TYPES[backStyleNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.back,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/placket_style/tucked_out/${
              CONFIG_DATA.PLACKET_TYPES[placketStyleNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.placket,
          );
        }
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.back:
        index %= CONFIG_DATA.BACK_TYPES.length;
        shirtScene.root.setZoomType(VIEW_TYPE.back);
        if (CONFIG_DATA.SHIRT_TUCKED.type === CONFIG_DATA.SHIRT_TUCKED.in) {
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/back_style/${CONFIG_DATA.SHIRT_FITTING.type}/tuck_in/${CONFIG_DATA.BACK_TYPES[index]}.glb`,
            type,
          );
        } else {
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/back_style/${CONFIG_DATA.SHIRT_FITTING.type}/tuck_out/${CONFIG_DATA.BACK_TYPES[index]}.glb`,
            type,
          );
        }

        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.placket:
        shirtScene.root.setZoomType(VIEW_TYPE.front);
        index %= CONFIG_DATA.PLACKET_TYPES.length;
        let style_type = "";
        if (CONFIG_DATA.SHIRT_TUCKED.type == CONFIG_DATA.SHIRT_TUCKED.in)
          style_type = "tucked_in";
        else style_type = "tucked_out";
        // console.log("%%%%%%%%%%% ",style_type);
        shirtScene.loadModel(
          `./3dmodel/shirt_asset/placket_style/${style_type}/${CONFIG_DATA.PLACKET_TYPES[index]}.glb`,
          type,
        );
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.pocket:
        shirtScene.root.setZoomType(VIEW_TYPE.front);
        if (index >= CONFIG_DATA.POCKET_TYPES.length) {
          shirtScene.pocket.model.visible = false;
          if (shirtScene.secondPocket.model)
            shirtScene.secondPocket.model.visible = false;
        } else {
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/pocket_style/${CONFIG_DATA.POCKET_TYPES[index]}.glb`,
            type,
          );
        }
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.sleeves:
        shirtScene.root.setZoomType(VIEW_TYPE.front);
        shirtScene.sleeves.type = index === 0 ? "full" : "half";
        index %= CONFIG_DATA.SLEEVES_TYPES.length;
        shirtScene.loadModel(
          `./3dmodel/shirt_asset/sleeves_style/${CONFIG_DATA.SLEEVES_TYPES[index]}.glb`,
          type,
        );
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.yoke:
        shirtScene.root.setZoomType(VIEW_TYPE.back);
        index %= CONFIG_DATA.YOKE_TYPES.length;
        shirtScene.loadModel(
          `./3dmodel/shirt_asset/yoke_style/${CONFIG_DATA.YOKE_TYPES[index]}.glb`,
          type,
        );
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.hemline:
        if (CONFIG_DATA.SHIRT_TUCKED.type === CONFIG_DATA.SHIRT_TUCKED.out) {
          type = CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit;
          shirtScene.root.setZoomType(VIEW_TYPE.front);
          index %= CONFIG_DATA.HEMLINE_TYPES.length;
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/hemline_style/${CONFIG_DATA.SHIRT_FITTING.type}/${CONFIG_DATA.HEMLINE_TYPES[index]}.glb`,
            type,
          );
        }
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.pocket_placement:
        shirtScene.root.setZoomType(VIEW_TYPE.front);
        shirtScene.changePocketType(index);
        break;
      case CONFIG_DATA.SHIRT_CONFIG_TYPES.tucked:
        if (index === 0) {
          CONFIG_DATA.SHIRT_TUCKED.type = CONFIG_DATA.SHIRT_TUCKED.out;
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/hemline_style/${CONFIG_DATA.SHIRT_FITTING.type}/${CONFIG_DATA.HEMLINE_TYPES[index]}.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/placket_style/tucked_out/${
              CONFIG_DATA.PLACKET_TYPES[placketStyleNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.placket,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/back_style/${
              CONFIG_DATA.SHIRT_FITTING.type
            }/tuck_out/${CONFIG_DATA.BACK_TYPES[backStyleNo - 1]}.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.back,
          );
        } else {
          CONFIG_DATA.SHIRT_TUCKED.type = CONFIG_DATA.SHIRT_TUCKED.in;
          index %= CONFIG_DATA.PLACKET_TYPES.length;
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/tucked_in/${CONFIG_DATA.SHIRT_FITTING.type}_in.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/placket_style/tucked_in/${
              CONFIG_DATA.PLACKET_TYPES[placketStyleNo - 1]
            }.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.placket,
          );
          shirtScene.loadModel(
            `./3dmodel/shirt_asset/back_style/${
              CONFIG_DATA.SHIRT_FITTING.type
            }/tuck_in/${CONFIG_DATA.BACK_TYPES[backStyleNo - 1]}.glb`,
            CONFIG_DATA.SHIRT_CONFIG_TYPES.back,
          );
        }
        break;
    }
  }
};
export const updateTrouserStyle = (index, type) => {
  switch (type) {
    case CONFIG_DATA.TROUSER_CONFIG.trouser_style:
      index %= CONFIG_DATA.TROUSER_STYLE.length;
      shirtScene.loadModel(
        `./3dmodel/shirt_asset/trouser/style/${CONFIG_DATA.TROUSER_STYLE[index]}.glb`,
        CONFIG_DATA.TROUSER_CONFIG.trouser_style,
      );
      break;
    case CONFIG_DATA.TROUSER_CONFIG.hemline_style:
      shirtScene.trouser.fold_model.visible = index === 1;
      if (shirtScene.trouser.texture)
        shirtScene.root.updateTexture(
          shirtScene.trouser.fold_model,
          shirtScene.trouser.texture,
        );

      break;
    case CONFIG_DATA.TROUSER_CONFIG.waste_style:
      shirtScene.loadModel(
        `./3dmodel/shirt_asset/trouser/waist/${CONFIG_DATA.TROUSER_WAIST_STYLE[index]}.glb`,
        CONFIG_DATA.TROUSER_CONFIG.waste_style,
      );
      break;
  }
};
