// @ts-nocheck
import React, { useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ColorRing } from "react-loader-spinner";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { ShirtScene, shirtScene } from "../app/Schene/ShirtScene";

const fabricNavbarHeight = 90;

let threeContainer;
let web3DObj: ThreeWeb;
export const GENDER = { type: "male", male: "male", female: "female" };
export const FASHION_CONFIG = { type: "Shirt" };
GENDER.type = GENDER.male;
export const VIEW_TYPE = {
  front_zoom: "front_zoom",
  back_zoom: "back_zoom",
  back: "back",
  side: "side",
  front: "front",
  type: "",
};
VIEW_TYPE.type = VIEW_TYPE.front;
export const STYLE_CATEGORIES = {
  type: "",
  shirt: "shirt",
  trouser: "trouser",
};
// scale for 3d model and shirt
export const MODEL_SCALE = 0.0155;
const shadow_map = { width: 1024, height: 1024 };
export const defaultTexture = "https://lovoj.s3.amazonaws.com/fab4.webp";
export const trouserTexture = "https://lovoj.s3.amazonaws.com/fab4.webp";
const CAMERA_SETTING = {
  in_fov: 50,
  male_in_y: 2.461,
  male_out_y: 2,
  male_in_z: 1.9,
  male_out_z: 3.427,
  female_in_y: 2.24,
  female_out_y: 1.847,
  female_in_z: 1.944,
  female_out_z: 3.413,
  cam_in_y: 2.6,
  cam_out_y: 2.15,
  cam_in_z: 2.283,
  cam_out_z: 3.357,
  cam_in_angle: -7.41,
  cam_out_angle: -7.41,
};
const createScene = (catagories, root) => {
  console.log(web3DObj, "     HELLOO  ");
  switch (catagories) {
    case "Shirt":
      new ShirtScene(root);
      break;
    case "Kurti":
      new KurtiScene(root);
      break;
  }
};
const Web3D = ({ fashion_type, gender }) => {
  // const { addProducts } = useApp();
  threeContainer = useRef(null);
  const [zoom, setZoom] = React.useState(false);

  React.useEffect(() => {
    if (threeContainer.current) return;
    web3DObj = new ThreeWeb(fashion_type, gender);
  }, [gender, fashion_type]);
  React.useEffect(() => {
    return () => {
      console.log("Component is about to unmount");
      if (threeContainer.current && web3DObj) {
        console.log(
          web3DObj.currentScene.children.length,
          "        ",
          "Component is about to unmount"
        );
        web3DObj.clearScene();
      }
    };
  }, []);
  return (
    <Root
      className="w-full relative mx-auto"
      height={fabricNavbarHeight}
      dynamicheight={0}
    >
      <div className="md:hidden absolute top-3 right-1 rounded flex flex-col justify-center items-center">
        {/* <ProductDetails /> */}
        {/* <AddProduct /> */}
      </div>
      <ImageRoot
        id="3d-container"
        height={fabricNavbarHeight}
        dynamicheight={0}
      />
      <div className="absolute z-50 w-fit top-3 right-0 md:left-3 left-0">
        <MdOutlineZoomInMap size={30} />
      </div>
      <div
        id="3dLoading"
        className="absolute w-full h-full bg-[#ffffff] left-0 top-0"
      >
        <div className="z-50 bg-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto">
          <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      </div>
      <div className="absolute z-50 w-fit top-3 right-0 md:left-3 left-0">
        <div
          className="w-fit"
          onClick={() => {
            if (web3DObj) {
              web3DObj.setZoom(true);
              setZoom(web3DObj.zoom);
            }
          }}
        >
          {!zoom && <MdOutlineZoomInMap size={30} />}
          {zoom && <MdOutlineZoomOutMap size={30} />}
        </div>
      </div>
    </Root>
  );
};
export default Web3D;
export class ThreeWeb {
  private camera: THREE.Camera;
  private render: THREE.WebGLRenderer;
  private textureLoader: THREE.TextureLoader;
  public glbLoader: GLTFLoader;
  private dirLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  public orbitController: OrbitControls;
  private canvasW: number;
  private canvasH: number;
  private modelRoot: THREE.Object3D;
  private male: { model: ""; texture: "" };
  private female: { model: ""; texture: "" };
  private zoom: boolean;
  private currentScene: THREE.Scene;
  constructor(fashion_type, gender) {
    threeContainer.current = document.getElementById("3d-container");
    this.scene = null;
    this.camera = null;
    this.render = null;
    this.textureLoader = null;
    this.glbLoader = null;
    this.dirLight = null;
    this.ambientLight = null;
    this.orbitController = null;
    this.canvasW = 0;
    this.canvasH = 0;
    this.modelRoot = null;
    this.male = { model: "", texture: "" };
    this.female = { model: "", texture: "" };
    this.zoom = false;
    this.currentScene = null;
    web3DObj = this;
    GENDER.type = gender;
    FASHION_CONFIG.type = fashion_type;
    this.face_tex = { front: "", left: "", back: "" };

    if (GENDER.type === GENDER.male) {
      CAMERA_SETTING.cam_in_y = CAMERA_SETTING.male_in_y;
      CAMERA_SETTING.cam_out_y = CAMERA_SETTING.male_out_y;
      CAMERA_SETTING.cam_in_z = CAMERA_SETTING.male_in_z;
      CAMERA_SETTING.cam_out_z = CAMERA_SETTING.male_out_z;
    } else {
      CAMERA_SETTING.cam_in_y = CAMERA_SETTING.female_in_y;
      CAMERA_SETTING.cam_out_y = CAMERA_SETTING.female_out_y;
      CAMERA_SETTING.cam_in_z = CAMERA_SETTING.female_in_z;
      CAMERA_SETTING.cam_out_z = CAMERA_SETTING.female_out_z;
    }
    console.log(CAMERA_SETTING, " setting");
    this.init();
  }
  init() {
    this.canvasW = threeContainer.current.clientWidth;
    this.canvasH = threeContainer.current.clientHeight;
    console.log(this.canvasW, "divide", this.canvasH);
    this.camera = new THREE.PerspectiveCamera(
      CAMERA_SETTING.in_fov,
      this.canvasW / this.canvasH,
      0.1,
      1000
    );
    this.camera.position.set(
      0,
      CAMERA_SETTING.cam_in_y,
      CAMERA_SETTING.cam_in_z
    ); //this.camera.position.set(0, 0, 2.8);
    this.camera.rotation.set(
      degrees_to_radians(CAMERA_SETTING.cam_in_angle),
      0,
      0
    );
    this.render = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.render.outputColorSpace = THREE.SRGBColorSpace;
    this.render.setPixelRatio(window.devicePixelRatio);
    this.render.setClearColor(0x000000, 0);
    this.render.setSize(this.canvasW, this.canvasH);
    this.render.shadowMap.enabled = true;
    this.render.shadowMap.type = THREE.PCFSoftShadowMap; //THREE.PCFShadowMap
    // console.log(this.render.toneMappingExposure," !!!!!!! tone mapping!!!!!!!!!",this.render.toneMapping);
    // this.render.toneMapping = THREE.ReinhardToneMappinge;
    // this.render.toneMappingExposure = 1;
    // this.render.toneMappingExposure = Math.pow(0.7, 5.0);  // -> exposure: 0.168
    threeContainer.current.appendChild(this.render.domElement);
    this.render.setAnimationLoop(() => this.renderScene());
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.initOrbitController();
    createScene(FASHION_CONFIG.type, this);
  }
  initLight() {
    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    this.dirLight.position.set(4.259, 4.231, 6.904);
    this.dirLight.castShadow = true;
    // this.dirLight.shadow.camera.top = 3;
    // this.dirLight.shadow.camera.bottom = -3;
    // this.dirLight.shadow.camera.left = -3;
    // this.dirLight.shadow.camera.right = 3;
    this.dirLight.shadow.camera.near = 0.1;
    this.dirLight.shadow.camera.far = 500;
    this.dirLight.shadow.mapSize.width = shadow_map.width;
    this.dirLight.shadow.mapSize.height = shadow_map.height;
    this.currentScene.add(this.dirLight);

    this.dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
    this.dirLight2.position.set(-3.716, 3.678, -3.593);
    this.dirLight2.castShadow = true;
    // this.dirLight2.shadow.camera.top = 3;
    // this.dirLight2.shadow.camera.bottom = -3;
    // this.dirLight2.shadow.camera.left = -3;
    // this.dirLight2.shadow.camera.right = 3;
    this.dirLight2.shadow.camera.near = 0.1;
    this.dirLight2.shadow.camera.far = 500;
    this.dirLight2.shadow.mapSize.width = shadow_map.width;
    this.dirLight2.shadow.mapSize.height = shadow_map.height;
    this.currentScene.add(this.dirLight2);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.currentScene.add(this.ambientLight);

    // this.createLight(0xffffff,{x:0,y:2.125,z:-1.046},1.5,2);
    // this.createLight(0xffffff,{x:-1.219,y:2.431,z:0.926},3,2);
    // this.createLight(0xffffff,{x:-0.201,y:2.644,z:-1.202},3,2);
    // this.createLight(0xffffff,{x:1.806,y:1.472,z:1.582},2,2);
    // this.createLight(0xffffff,{x:-0.886,y:2.093,z:-1.169},4,2.52);
  }
  createLight(color, pos, intensity, decay) {
    const bias = -0.0001;
    const pointLight = new THREE.PointLight(color, intensity, 200, decay);
    pointLight.position.set(pos.x, pos.y, pos.z);
    pointLight.color = new THREE.Color("0xffffff"); //0E5079
    pointLight.castShadow = true;
    pointLight.shadow.bias = bias;
    pointLight.shadow.mapSize.width = shadow_map.width;
    pointLight.shadow.mapSize.height = shadow_map.height;
    pointLight.shadow.camera.top = 3;
    pointLight.shadow.camera.bottom = -3;
    pointLight.shadow.camera.left = -3;
    pointLight.shadow.camera.right = 3;
    pointLight.shadow.camera.near = 0.1;
    pointLight.shadow.camera.far = 20;
    this.currentScene.add(pointLight);
    return pointLight;
  }
  initOrbitController() {
    this.orbitController = new OrbitControls(
      this.camera,
      this.render.domElement
    );
    // this.orbitController.enablePan = false;
    this.orbitController.target.set(0, this.camera.position.y, 0);
    this.orbitController.minDistance = 1;
    this.orbitController.maxDistance = CAMERA_SETTING.cam_in_z;
    this.orbitController.minPolarAngle = degrees_to_radians(50);
    this.orbitController.maxPolarAngle = degrees_to_radians(90);
    this.orbitController.enabled = false;
  }
  setCurrentScene(scene) {
    this.currentScene = scene;
  }
  renderScene() {
    if (this.currentScene) this.render.render(this.currentScene, this.camera);
    if (this.modelRoot) {
      this.modelRoot.rotation.x = 0;
    }
  }
  resize() {
    this.canvasW = threeContainer.current.clientWidth;
    this.canvasH = threeContainer.current.clientHeight;
    this.camera.aspect = this.canvasW / this.canvasH;
    this.camera.updateProjectionMatrix();
    this.render.setSize(this.canvasW, this.canvasH);
    console.log(
      "!!!!!!!!! width!!!!!!!!!!! ",
      this.canvasW,
      "  !!!!!!!!!! height!!!!!!!!!!      ",
      this.canvasH,
      "     "
    );
  }
  loadAsset() {
    this.loadingManager = new THREE.LoadingManager();
    this.modelRoot = new THREE.Object3D();
    this.glbLoader = new GLTFLoader(this.loadingManager);
    this.dracoLoader = new DRACOLoader(this.loadingManager);
    this.dracoLoader.setDecoderPath("./draco/gltf/");
    this.glbLoader.setDRACOLoader(this.dracoLoader);
    this.textureLoader = new THREE.TextureLoader(this.loadingManager);
    if (GENDER.type === GENDER.male) {
      this.glbLoader.load("3dmodel/male/male_model.glb", (gltf) => {
        this.male.model = gltf.scene;
        this.modelRoot.add(this.male.model);
        this.male.model.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
        this.male.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.name.includes("face_plane")) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
          }
        });
      });
    } else {
      this.glbLoader.load("3dmodel/female/female_avatar.glb", (gltf) => {
        this.female.model = gltf.scene;
        this.modelRoot.add(this.female.model);
        this.female.model.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
        this.female.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.name.includes("face_plane")) {
              child.receiveShadow = false;
              child.castShadow = false;
            } else if (child.name.includes("body_2")) {
              child.receiveShadow = false;
            }
          }
        });
      });
    }
    this.currentScene.add(this.modelRoot);
    this.setZoomType(VIEW_TYPE.front);
    const pos = { x: 0, y: 0, z: 0, val: 0.01 };
    document.addEventListener("keydown", (e) => {
      // console.log(e.key) ;
      switch (e.key) {
        case "ArrowLeft":
          pos.x -= pos.val;
          break;
        case "ArrowRight":
          pos.x += pos.val;
          break;
        case "ArrowUp":
          pos.y += pos.val;
          break;
        case "ArrowDown":
          pos.y -= pos.val;
          break;
        case "1":
          pos.z -= pos.val;
          break;
        case "2":
          pos.z += pos.val;
          break;
        default:
          break;
      }
      if (shirtScene) {
        //  shirtScene.text_plan.position.set(pos.x,pos.y,pos.z);
      }
      // console.log("!!! pos!! ", pos);
    });
    this.loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
      document.getElementById("3dLoading").style.display = "flex";
    };
    this.loadingManager.onLoad = () => {
      document.getElementById("3dLoading").style.display = "none";
    };
  }

  cleanObject(model) {
    if (!model) return;
    model.traverse((child) => {
      if (child.material) {
        child.material.dispose();
        if (child.material.map) child.material.map.dispose();
      }
      if (child.geometry) child.geometry.dispose();
    });
    this.modelRoot.remove(model);
    model = null;
  }
  setZoomType(type) {
    console.log("innnnnnnnnnnnnnnnn setZoomType ========= ", type);
    if (!this) return;
    this.orbitController.enabled = false;
    VIEW_TYPE.type = type;
    switch (type) {
      case VIEW_TYPE.front_zoom:
        this.setZoom(false);
        this.camera.fov = 35;
        this.modelRoot.rotation.y = degrees_to_radians(0);
        if (this.face_tex.front.length < 1) {
          let face =
            GENDER.type == "male"
              ? "3dmodel/male/face_images/front_face.png"
              : "3dmodel/female/face_img/Front.png";
          this.face_tex.front = this.textureLoader.load(face);
        }
        this.changeFace(this.face_tex.front);
        break;
      case VIEW_TYPE.side:
        if (GENDER.type !== "male") return;
        this.setZoom(false);
        this.modelRoot.rotation.y = degrees_to_radians(78);
        if (this.face_tex.left.length < 1) {
          let face =
            GENDER.type == "male"
              ? "3dmodel/male/face_images/side.png"
              : "3dmodel/female/face_img/Side.png";
          this.face_tex.left = this.textureLoader.load(face);
        }
        this.changeFace(this.face_tex.left);
        break;
      case VIEW_TYPE.back:
      case VIEW_TYPE.back_zoom:
        this.setZoom(false);
        this.modelRoot.rotation.y = degrees_to_radians(180);
        if (this.face_tex.back.length < 1) {
          let face =
            GENDER.type == "male"
              ? "3dmodel/male/face_images/back.png"
              : "3dmodel/female/face_img/Back.png";
          this.face_tex.back = this.textureLoader.load(face);
        }
        this.changeFace(this.face_tex.back);
        if (VIEW_TYPE.type === VIEW_TYPE.back_zoom) {
          this.camera.position.set(0, 1.469, 2.2);
          this.camera.updateProjectionMatrix();
          this.updateOrbitController();
        }
        break;
      default:
      case VIEW_TYPE.front:
        this.setZoom(false);
        this.modelRoot.rotation.y = degrees_to_radians(0);
        if (this.face_tex.front.length < 1) {
          let face =
            GENDER.type == "male"
              ? "3dmodel/male/face_images/front_face.png"
              : "3dmodel/female/face_img/Front.png";
          this.face_tex.front = this.textureLoader.load(face);
        }
        this.changeFace(this.face_tex.front);
        break;
    }
    if (shirtScene && shirtScene.text_plan) {
      console.log("!!!!!!!! type!!!!!!!! ", shirtScene.embroidery.pos_type);
      if (
        shirtScene.embroidery.pos_type === "back_shirt" ||
        shirtScene.embroidery.pos_type === "back_neck"
      ) {
        shirtScene.text_plan.visible = VIEW_TYPE.type == VIEW_TYPE.back;
      } else if (
        shirtScene.embroidery.pos_type === "left_cuff" ||
        shirtScene.embroidery.pos_type === "right_cuff" ||
        shirtScene.embroidery.pos_type === "left_sleeve" ||
        shirtScene.embroidery.pos_type === "right_sleeve"
      ) {
        shirtScene.text_plan.visible = VIEW_TYPE.type == VIEW_TYPE.front;
      } else {
        shirtScene.text_plan.visible = VIEW_TYPE.type != VIEW_TYPE.back;
      }
    }
    this.camera.updateProjectionMatrix();
  }
  changeFace(texture) {
    const model = GENDER.type == "male" ? this.male.model : this.female.model;
    if (!model) return;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    model.traverse((child) => {
      if (child.isMesh && child.name.includes("face_plane")) {
        child.visible = true;
        child.material.map = texture;
        if (GENDER.type === "male") {
          child.rotation.set(
            degrees_to_radians(90),
            degrees_to_radians(180),
            degrees_to_radians(180)
          );
          if (texture === this.face_tex.left) {
            child.rotation.z = degrees_to_radians(102);
            child.position.set(0.465, 178, -0.847);
          } else if (texture === this.face_tex.back) {
            child.rotation.z = degrees_to_radians(0);
            child.position.set(-0.5, 178, -3.032);
          } else if (texture === this.face_tex.front) {
            child.position.set(0, 175.742, -3.032);
          }
        } else {
          child.rotation.set(
            degrees_to_radians(90),
            degrees_to_radians(0),
            degrees_to_radians(180)
          );
          if (texture === this.face_tex.left) {
            child.rotation.z = degrees_to_radians(-90);
            child.position.set(0, 154, -5.7);
          } else if (texture === this.face_tex.back) {
            child.position.set(-2.172, 158.741, -6.214);
            child.rotation.z = degrees_to_radians(0);
            // child.position.set(0, 154.5, -15.4);
          } else if (texture === this.face_tex.front) {
            // child.position.set(0, 156.187, -6.747);
            child.position.set(1, 158.741, -6.214);
          }
        }
        child.material.needsUpdate = true;
      }
    });
  }
  enableModelFace(enable) {
    const model = GENDER.type == "male" ? this.male.model : this.female.model;
    if (!model) return;
    model.traverse((child) => {
      if (child.isMesh && child.name.includes("face_plane")) {
        child.visible = enable;
      }
    });
  }
  setZoom(isUpdate) {
    if (isUpdate) {
      this.zoom = !this.zoom;
    }
    this.camera.fov = CAMERA_SETTING.in_fov;
    switch (STYLE_CATEGORIES.type) {
      case STYLE_CATEGORIES.trouser:
        this.camera.position.set(
          0,
          this.zoom ? CAMERA_SETTING.cam_out_y : 1.989,
          this.zoom ? CAMERA_SETTING.cam_out_z : 2
        );
        this.camera.rotation.set(
          degrees_to_radians(this.zoom ? CAMERA_SETTING.cam_out_angle : -26),
          0,
          0
        );
        break;
      default:
        this.camera.position.set(
          0,
          this.zoom ? CAMERA_SETTING.cam_out_y : CAMERA_SETTING.cam_in_y,
          this.zoom ? CAMERA_SETTING.cam_out_z : CAMERA_SETTING.cam_in_z
        );
        if (VIEW_TYPE.type === VIEW_TYPE.back) {
        }
        this.camera.rotation.set(
          degrees_to_radians(
            this.zoom
              ? CAMERA_SETTING.cam_out_angle
              : CAMERA_SETTING.cam_in_angle
          ),
          0,
          0
        );
        break;
    }
    this.camera.updateProjectionMatrix();
    this.updateOrbitController();
  }
  updateOrbitController() {
    const value =
      STYLE_CATEGORIES.type != STYLE_CATEGORIES.trouser ? 0.25 : 0.98;
    let dy = this.zoom ? 0.445 : value;
    this.orbitController.target = new THREE.Vector3(
      0,
      this.camera.position.y - dy,
      0
    );
    this.orbitController.maxDistance = this.camera.position.z * 1.5;
  }
  loadTexture(model, tex, tileObj, type) {
    const texture = this.textureLoader.load(tex);
    this.updateTexture(model, texture, tileObj, type);
    return texture;
  }
  updateTexture(model, texture, tileObj, type) {
    if (!model) return;
    model.traverse((child) => {
      if (child.isMesh) {
        if (child.name.includes("Zipper")) {
          child.material.roughness = 0.5;
          child.material.metalness = 1;
        }
        if (
          !child.parent.name.includes("MatShape") &&
          !child.name.includes("MatShape") &&
          !child.name.includes("Zipper") &&
          !child.name.includes("button") &&
          !child.name.includes("Button") &&
          !child.name.includes("thread") &&
          !child.name.includes("buutonhole")
        ) {
          this.applyTexture(child, texture, tileObj, type);
        }
      }
    });
    return texture;
  }
  applyTexture(child, texture, tileObj, type) {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(
        0.002 * (tileObj ? tileObj.tile_x : 1),
        0.002 * (tileObj ? tileObj.tile_y : 1)
      );
      texture.center.x = 0;
      texture.center.y = 0;
      texture.flipY = true;
      texture.needsUpdate == true;
      texture.rotation = tileObj ? tileObj.angle : 0;
    }
    child.material.map = texture;
    child.material.roughness = 1;
    child.material.metalness = 0;
    child.material.needsUpdate = true;
  }
  applyShadow(model, isCast, isReceive) {
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = isCast;
        child.receiveShadow = isReceive;
      }
    });
  }
  setColor(mesh, color, metal, roughness) {
    if (mesh) {
      mesh.material.color = new THREE.Color(color); //0E5079
      mesh.material.roughness = roughness;
      mesh.material.metalness = metal;
    }
  }
  clearScene = () => {
    this.currentScene.children.forEach((child) => {
      console.log(" !!!!!!!  clearScene!!!!!!!!!!  ");
      this.removeObject(child);
    });
  };
  removeObject = (obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      obj.material.dispose();
      console.log(" !!!!!!!  object clear !!!!!!!!!!  ");
    }
    if (obj.children) {
      obj.children.forEach((child) => {
        this.removeObject(child);
      });
    }
  };
}

export const degrees_to_radians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const Root = styled.div<any>`
  /* height: calc(100vh - 40px); */
  height: calc(100dvh - ${(p) => p.height}px);
  @media screen and (max-width: 767px) {
    height: calc(100dvh - ${(p) => 240 + p.dynamicheight}px) !important;
    width: calc(100% - 16px);
  }
  /* width: 700px; */
`;
const ImageRoot = styled.div<any>`
  position: absolute;
  pointer-events: all;
  left: 0;
  right: 0;
  top: 0;
  width: calc(100vw - 950px);
  height: calc(100dvh - ${(p) => p.height + p.dynamicheight}px);
  @media screen and (max-width: 767px) {
    height: calc(100dvh - ${(p) => 240 + p.dynamicheight}px) !important;
    width: calc(100vw - 16px);
    canvas {
      height: calc(100dvh - ${(p) => 240 + p.dynamicheight}px) !important;
      width: auto !important;
      margin: auto;
    }
  }

  @media screen and (min-width: 768px) {
    canvas {
      height: calc(100dvh - ${(p) => p.height + p.dynamicheight}px) !important;
      width: auto !important;
      margin: auto;
    }
  }
`;

export { web3DObj };
const Test = styled.div`
  .my-canvas {
    width: 50rem;
    max-width: 50rem;
    height: 100vh;
    position: absolute;
  }
`;
