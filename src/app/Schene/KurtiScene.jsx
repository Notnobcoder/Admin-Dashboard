import * as THREE from "three";
import { MODEL_SCALE, defaultTexture } from "../../components/Web3D";
import * as CONFIG_DATA from "../../ConfigData";
export let kurtiSceneObj;
export class KurtiScene {
  constructor(root) {
    kurtiSceneObj = this;
    this.root = root;
    this.kurti = { model: "", texture: "" };
    this.bottom = { model: "", texture: "" };
    this.front_neck = { model: "", texture: "" };
    this.back_neck = { model: "", texture: "" };
    this.sleeves = { model: "", texture: "" };

    this.scene = new THREE.Scene("kurti_scene");
    root.setCurrentScene(this.scene);
    root.loadAsset();
    root.initLight();
    this.init();
  }
  init() {
    this.loadKurtiModel(
      `3dmodel/kurti_asset/neck/front/${CONFIG_DATA.FRONT_NECK[0]}.glb`,
      CONFIG_DATA.KURTI_CONFIG_TYPES.front_neck,
    );
    this.loadKurtiModel(
      `3dmodel/kurti_asset/neck/back/${CONFIG_DATA.BACK_NECK[0]}.glb`,
      CONFIG_DATA.KURTI_CONFIG_TYPES.back_neck,
    );
    this.loadKurtiModel(
      `3dmodel/kurti_asset/sleeves/${CONFIG_DATA.KURTI_SLEEVES[0]}.glb`,
      CONFIG_DATA.KURTI_CONFIG_TYPES.sleeve,
    );
    this.loadKurtiModel(
      `3dmodel/kurti_asset/length/long/log.glb`,
      CONFIG_DATA.KURTI_CONFIG_TYPES.length,
    );
    this.loadKurtiModel(
      `3dmodel/kurti_asset/bottom/${CONFIG_DATA.BOTTOM_WEAR[0]}.glb`,
      CONFIG_DATA.KURTI_CONFIG_TYPES.bottom_wear,
    );
  }
  loadKurtiModel(path, type) {
    this.root.glbLoader.load(path, (gltf) => {
      const tmpModel = gltf.scene;
      tmpModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
      switch (type) {
        case CONFIG_DATA.KURTI_CONFIG_TYPES.front_neck:
          this.root.cleanObject(this.front_neck.model);
          this.front_neck.model = tmpModel;
          this.setKurtiTexture(this.front_neck, defaultTexture);
          this.root.applyShadow(this.front_neck.model, true, false);
          break;
        case CONFIG_DATA.KURTI_CONFIG_TYPES.back_neck:
          this.root.cleanObject(this.back_neck.model);
          this.back_neck.model = tmpModel;
          this.root.applyShadow(this.back_neck.model, true, false);
          this.setKurtiTexture(this.back_neck, defaultTexture);
          break;
        case CONFIG_DATA.KURTI_CONFIG_TYPES.length:
          this.root.cleanObject(this.kurti.model);
          this.kurti.model = tmpModel;
          this.root.applyShadow(this.kurti.model, true, false);
          this.setKurtiTexture(this.kurti, defaultTexture);
          break;
        case CONFIG_DATA.KURTI_CONFIG_TYPES.sleeve:
          this.root.cleanObject(this.sleeves.model);
          this.sleeves.model = tmpModel;
          this.root.applyShadow(this.sleeves.model, true, false);
          this.setKurtiTexture(this.sleeves, defaultTexture);
          break;
        case CONFIG_DATA.KURTI_CONFIG_TYPES.bottom_wear:
          this.root.cleanObject(this.bottom.model);
          this.bottom.model = tmpModel;
          this.root.applyShadow(this.bottom.model, true, false);
          this.setKurtiTexture(this.bottom, defaultTexture);
          break;
      }
      this.root.modelRoot.add(tmpModel);
    });
  }
  setKurtiTexture(model, img, tile) {
    if (model.texture) {
      this.root.updateTexture(model.model, model.texture, tile);
    } else {
      model.texture = this.root.loadTexture(model.model, img, tile);
    }
  }
  updateKurtiTexture(img, tile) {
    this.kurti.texture = this.root.loadTexture(this.kurti.model, img, tile);
    this.sleeves.texture = this.root.updateTexture(
      this.sleeves.model,
      this.kurti.texture,
      tile,
    );
    this.front_neck.texture = this.root.updateTexture(
      this.front_neck.model,
      this.kurti.texture,
      tile,
    );
    this.back_neck.texture = this.root.updateTexture(
      this.back_neck.model,
      this.kurti.texture,
      tile,
    );
    this.bottom.texture = this.root.updateTexture(
      this.bottom.model,
      this.kurti.texture,
      tile,
    );
  }
}
