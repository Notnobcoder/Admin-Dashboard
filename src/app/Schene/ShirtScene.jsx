import * as THREE from "three";

import * as CONFIG_DATA from "../../ConfigData";
// import { FABRICS } from "../fabric-form/(components)/Sidebars/Fabric";
// import * as SHIRT_CONFIG from "../FashionConfig/ShirtConfig";

import * as SHIRT_CONFIG from "./ShirtConfig";
import {
  MODEL_SCALE,
  degrees_to_radians,
  VIEW_TYPE,
  STYLE_CATEGORIES,
} from "@/components/web3d";
export let shirtScene;

export const value = 33;

export class ShirtScene {
  constructor(root) {
    shirtScene = this;
    this.root = root;

    this.shirt = { model: "", texture: "" };
    this.collar = {
      model: "",
      texture: "",
      btn_color: "#ffffff",
      thread_color: "#ffffff",
      hole_color: "#ffffff",
    };
    this.cuffs = {
      model: "",
      texture: "",
      btn_color: "#ffffff",
      thread_color: "#ffffff",
      hole_color: "#ffffff",
      type: "normal",
    };
    this.placket = {
      model: "",
      texture: "",
      btn_color: "#ffffff",
      thread_color: "#ffffff",
      hole_color: "#ffffff",
    };
    this.shirt_back = { model: "", texture: "" };
    this.pocket = { model: "", texture: "", type: "single" };
    this.secondPocket = { model: "", texture: "" };
    this.sleeves = { model: "", texture: "", type: "full", name: "normal" };
    this.yoke = { model: "", texture: "" };
    this.trouser = {
      model: "",
      fold_model: "",
      vest_belt_model: "",
      texture: "",
    };
    this.belt = { model: "", texture: "" };
    this.scene = new THREE.Scene("shirt_scene");
    this.embroidery = { pos_type: "left_chest" };
    root.setCurrentScene(this.scene);
    root.loadAsset();
    root.initLight();
    this.init();
    STYLE_CATEGORIES.type = STYLE_CATEGORIES.shirt;
  }
  init() {
    this.loadModel(
      `./3dmodel/shirt_asset/hemline_style/${CONFIG_DATA.SHIRT_FITTING.type}/${CONFIG_DATA.HEMLINE_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/collar_style/${CONFIG_DATA.COLLAR_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.collar,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/cuffs_style/${CONFIG_DATA.CUFFS_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.cuffs,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/placket_style/tucked_out/${CONFIG_DATA.PLACKET_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.placket,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/back_style//${CONFIG_DATA.SHIRT_FITTING.type}/tuck_out/${CONFIG_DATA.BACK_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.back,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/sleeves_style/${CONFIG_DATA.SLEEVES_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.sleeves,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/yoke_style/${CONFIG_DATA.YOKE_TYPES[0]}.glb`,
      CONFIG_DATA.SHIRT_CONFIG_TYPES.yoke,
    );
    // this.loadModel(
    //   `./3dmodel/shirt_asset/pocket_style/${CONFIG_DATA.POCKET_TYPES[0]}.glb`,
    //   CONFIG_DATA.SHIRT_CONFIG_TYPES.pocket
    // );
    this.loadModel(
      `./3dmodel/shirt_asset/trouser/style/${CONFIG_DATA.TROUSER_STYLE[0]}.glb`,
      CONFIG_DATA.TROUSER_CONFIG.trouser_style,
    );
    // paint style
    this.loadModel(
      `./3dmodel/shirt_asset/trouser/waist/${CONFIG_DATA.TROUSER_WAIST_STYLE[0]}.glb`,
      CONFIG_DATA.TROUSER_CONFIG.waste_style,
    );
    this.loadModel(
      `./3dmodel/shirt_asset/trouser/hemline/fold.glb`,
      CONFIG_DATA.TROUSER_CONFIG.hemline_style,
    );
    // this.loadModel(`./3dmodel/male/belt.glb`, "belt");

    const text_canvas = document.createElement("canvas");
    const ratio = window.devicePixelRatio;
    text_canvas.width = 256 * ratio;
    text_canvas.height = 128 * ratio;

    this.text_ctx = text_canvas.getContext("2d");
    this.text_ctx.imageSmoothingEnabled = false;
    this.text_ctx.fillStyle = "rgba(255,0,0,0)";
    this.text_ctx.fillRect(0, 0, text_canvas.width, text_canvas.height);
    this.text_ctx.textAlign = "center";
    this.text_ctx.fillStyle = "#ffffff";
    this.text_ctx.font = "48px sans-serif";
    this.text_ctx.fillText("", text_canvas.width / 2, text_canvas.height / 2);
    const text_texture = new THREE.CanvasTexture(text_canvas);
    text_texture.colorSpace = THREE.SRGBColorSpace;
    text_texture.wrapS = THREE.RepeatWrapping;
    text_texture.wrapT = THREE.RepeatWrapping;
    this.text_material = new THREE.MeshStandardMaterial({ map: text_texture });
    this.text_material.metalness = 0;
    this.text_material.roughness = 1;
    this.text_material.transparent = true;
    this.text_material.color = new THREE.Color(0xff0000);
    this.text_material.emissive = new THREE.Color(0xff0000);
    text_texture.needsUpdate = true;
    this.text_material.needsUpdate = true;
    const geometry = new THREE.PlaneGeometry(0.2, 0.1, 32, 32);
    this.text_plan = new THREE.Mesh(geometry, this.text_material);
    this.scene.add(this.text_plan);
    this.text_plan.visible = true;

    this.updateTextPosition("front_middle");
  }
  loadModel(path, type) {
    this.root.glbLoader.load(path, (gltf) => {
      const tmpModel = gltf.scene;
      tmpModel.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
      SHIRT_CONFIG.AddShirtConfigModels(tmpModel, type);
      this.root.modelRoot.add(tmpModel);
    });
  }
  setInnerTexture(img, model) {
    const texture = this.root.textureLoader.load(img);
    model.traverse((child) => {
      if (child.isMesh && child.name.includes("inner")) {
        if (texture) {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(0.002, 0.002);
          texture.center.x = 0;
          texture.center.y = 0;
          texture.flipY = true;
          texture.needsUpdate == true;
        }
        child.material.needsUpdate == true;
        child.material.map = texture;
      }
    });
  }
  updateShirtTexture(img, tile) {
    switch (STYLE_CATEGORIES.type) {
      case STYLE_CATEGORIES.shirt:
        this.shirt.texture = this.root.loadTexture(
          this.shirt.model,
          img,
          tile,
          CONFIG_DATA.SHIRT_CONFIG_TYPES.shirt_fit,
        );
        this.cuffs.texture = this.root.updateTexture(
          this.cuffs.model,
          this.shirt.texture,
          tile,
        );
        this.collar.texture = this.root.updateTexture(
          this.collar.model,
          this.shirt.texture,
          tile,
        );
        this.placket.texture = this.root.updateTexture(
          this.placket.model,
          this.shirt.texture,
          tile,
        );
        this.shirt_back.texture = this.root.updateTexture(
          this.shirt_back.model,
          this.shirt.texture,
          tile,
        );
        this.pocket.texture = this.root.updateTexture(
          this.pocket.model,
          this.shirt.texture,
          tile,
        );
        this.sleeves.texture = this.root.updateTexture(
          this.sleeves.model,
          this.shirt.texture,
          tile,
        );
        this.yoke.texture = this.root.updateTexture(
          this.yoke.model,
          this.shirt.texture,
          tile,
        );
        break;
      case STYLE_CATEGORIES.trouser:
        this.trouser.texture = this.root.loadTexture(
          this.trouser.model,
          img,
          tile,
        );
        this.root.updateTexture(
          this.trouser.vest_belt_model,
          this.trouser.texture,
          tile,
        );
        break;
    }
  }
  changePocketType(types) {
    if (this.pocket.model) {
      switch (types) {
        case 0:
          this.pocket.model.scale.x = -1 * MODEL_SCALE;
          this.root.modelRoot.remove(this.secondPocket.model);
          this.pocket.type = "single";
          break;
        case 1:
          this.pocket.model.scale.x = 1 * MODEL_SCALE;
          this.root.modelRoot.remove(this.secondPocket.model);
          this.pocket.type = "single";
          break;
        case 2:
          if (this.pocket.model.visible) {
            this.pocket.type = "double";
            this.pocket.model.scale.x = 1 * MODEL_SCALE;
            this.secondPocket.model.scale.x = -1 * MODEL_SCALE;
            this.root.modelRoot.add(this.secondPocket.model);
          }
          break;
      }
    }
  }
  changeButtonColor(color, type, select) {
    select == 2 &&
      this.collar.model.traverse((child) => {
        this.collar.btn_color = color;
        this.changeButtonThreadColor(child, type, color);
      });
    select == 2 &&
      this.placket.model.traverse((child) => {
        this.placket.btn_color = color;
        this.changeButtonThreadColor(child, type, color);
      });
    this.cuffs.model.traverse((child) => {
      this.cuffs.btn_color = color;
      this.changeButtonThreadColor(child, type, color);
    });
    select == 2 &&
      this.pocket.model &&
      this.pocket.model.traverse((child) => {
        this.pocket.btn_color = color;
        this.changeButtonThreadColor(child, type, color);
        // if(child.isMesh && child.name.includes("MatShape")){
        //     this.changeColor(child,color);
        // }
      });
  }
  changeButtonThreadColor(child, type, color) {
    this.root.setZoomType(VIEW_TYPE.front_zoom);
    const name = child.name.toLowerCase();
    child.name = name;
    if (child.isMesh) {
      if (type === "button" && child.name.includes("button")) {
        this.changeColor(child, color);
      } else if (
        type === "thread" &&
        child.name.includes("thread") &&
        !child.name.includes("hole")
      ) {
        this.changeColor(child, color);
      } else if (type === "thread_hole" && child.name.includes("thread_hole")) {
        console.log("innnnnnnnn hole", "      ", type);
        this.changeColor(child, color);
      }
    }
  }
  changeColor(mesh, color) {
    mesh.material.color = new THREE.Color(color);
    if (mesh.material.emissive) mesh.material.emissive = new THREE.Color(color);
  }
  updateText(value, color, font_family) {
    console.log("!! value!! ", color, "     ", value, "        ", font_family);
    this.text_ctx.clearRect(
      0,
      0,
      this.text_ctx.canvas.width,
      this.text_ctx.canvas.height,
    );
    this.text_ctx.fillStyle = color;
    this.text_ctx.font = `48px ${font_family}`;
    this.text_ctx.fillText(
      value,
      this.text_ctx.canvas.width / 2,
      this.text_ctx.canvas.height / 2,
    );
    this.text_material.map.needsUpdate = true;
    this.text_material.color = new THREE.Color(color);
    this.text_material.emissive = new THREE.Color(color);
    this.text_material.needsUpdate = true;
  }
  updateTextPosition(place) {
    this.embroidery.pos_type = place;
    this.text_plan.rotation.set(
      degrees_to_radians(-10),
      0,
      degrees_to_radians(0),
    );
    this.text_plan.scale.set(1, 1, 1);
    this.text_plan.visible = true;
    const zPos = 0.12;
    switch (place) {
      case "left_chest":
        this.text_plan.position.set(-0.12, 2.32, zPos);
        break;
      case "right_chest":
        this.text_plan.position.set(0.12, 2.32, zPos);
        this.text_plan.rotation.set(0, 0, 0);
        break;
      case "left_cuff":
        this.text_plan.visible = this.sleeves.type === "full";
        if (this.sleeves.type === "full") {
          this.text_plan.position.set(-0.39, 1.51, zPos);
          this.text_plan.rotation.set(
            degrees_to_radians(-10),
            0,
            degrees_to_radians(90),
          );
        }
        break;
      case "right_cuff":
        this.text_plan.visible = this.sleeves.type === "full";
        if (this.sleeves.type === "full") {
          this.text_plan.position.set(0.39, 1.51, zPos);
          this.text_plan.rotation.set(
            degrees_to_radians(-10),
            0,
            degrees_to_radians(90),
          );
        }
        break;
      case "left_sleeve":
        this.text_plan.position.set(
          this.sleeves.type === "full" ? -0.36 : -0.35,
          this.sleeves.type === "full" ? 2.089 : 2.169,
          0.0499,
        );
        this.text_plan.rotation.set(
          degrees_to_radians(-10),
          0,
          degrees_to_radians(85),
        );
        break;
      case "right_sleeve":
        this.text_plan.position.set(
          this.sleeves.type === "full" ? 0.36 : 0.35,
          this.sleeves.type === "full" ? 2.089 : 2.169,
          0.0499,
        );
        this.text_plan.rotation.set(
          degrees_to_radians(-10),
          0,
          degrees_to_radians(95),
        );
        this.text_plan.scale.set(-1, -1, 1);
        break;
      case "front_middle":
        this.text_plan.position.set(0.01, 2.05, 0.19);
        this.text_plan.rotation.set(
          degrees_to_radians(-10),
          0,
          degrees_to_radians(90),
        );
        break;
      case "back_neck":
        this.text_plan.position.set(0, 2.509, 0.139);
        this.root.setZoomType(VIEW_TYPE.back);
        break;
      case "back_shirt":
        this.text_plan.position.set(0, 2.369, 0.209);
        this.root.setZoomType(VIEW_TYPE.back);
        break;
      default:
        this.text_plan.position.set(0, 2.05, 0.19);
        break;
    }
  }
}
