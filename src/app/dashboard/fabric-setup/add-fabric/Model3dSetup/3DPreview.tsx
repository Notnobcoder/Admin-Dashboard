// @ts-nocheck
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styled from "styled-components";
import { Spinner } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
let texture: any = null,
  textureLoader: THREE.TextureLoader,
  container: any;
let scene: THREE.Scene;

const Loading = () => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
      id="loading"
    >
      <Spinner size="lg" />
    </div>
  );
};

const Preview3D = ({
  textureImg,
  textureProperty,
  remove3dImage,
}: {
  textureImg: any;
  textureProperty: any;
  remove3dImage: () => void;
}) => {
  container = React.useRef(null);

  React.useEffect(() => {
    if (container.current) {
      setTexture(textureProperty);
      return;
    }
    init3D(textureImg, textureProperty);
  }, []);
  React.useEffect(() => {
    return () => {
      if (container.current) {
        clearScene();
      }
    };
  }, []);
  setTexture(textureProperty);

  return (
    <Wrapper className="relative" id="3d_web">
      <div
        className="absolute z-50 right-5 top-5 bg-dark-pink w-6 h-6 hidden items-center justify-center rounded-full text-white cursor-pointer"
        onClick={remove3dImage}
        id="closeButton"
      >
        <IoClose className="text-lg" />
      </div>
      <Loading />
    </Wrapper>
  );
};
export default Preview3D;
const init3D = (textureImg, textureProperty) => {
  container.current = document.getElementById("3d_web");
  const render = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  render.outputColorSpace = THREE.SRGBColorSpace;
  render.setPixelRatio(window.devicePixelRatio);
  render.setClearColor(0x000000, 0);
  render.setSize(container.current.clientWidth, container.current.clientHeight);
  render.shadowMap.enabled = true;
  render.shadowMap.type = THREE.PCFSoftShadowMap; //THREE.PCFShadowMap
  container.current.appendChild(render.domElement);
  scene = new THREE.Scene("3d_scene");
  const camera = new THREE.PerspectiveCamera(
    50,
    container.current.clientWidth / container.current.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2.461, 1.9);
  camera.rotation.set(-0.174, 0, 0);
  render.setAnimationLoop(() => {
    render.render(scene, camera);
  });
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.position.set(4.259, 4.231, 6.904);
  dirLight.castShadow = true;
  //  dirLight.shadow.camera.top = 3;
  //  dirLight.shadow.camera.bottom = -3;
  //  dirLight.shadow.camera.left = -3;
  //  dirLight.shadow.camera.right = 3;
  dirLight.shadow.camera.near = 0.01;
  dirLight.shadow.camera.far = 500;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  scene.add(dirLight);

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
  dirLight2.position.set(-3.716, 3.678, -3.593);
  dirLight2.castShadow = true;
  //  dirLight2.shadow.camera.top = 3;
  //  dirLight2.shadow.camera.bottom = -3;
  //  dirLight2.shadow.camera.left = -3;
  //  dirLight2.shadow.camera.right = 3;
  dirLight2.shadow.camera.near = 0.01;
  dirLight2.shadow.camera.far = 500;
  dirLight2.shadow.mapSize.width = 1024;
  dirLight2.shadow.mapSize.height = 1024;
  scene.add(dirLight2);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const orbitController = new OrbitControls(camera, render.domElement);
  // this.orbitController.enablePan = false;
  orbitController.target.set(0, 2, 0);
  orbitController.minDistance = 1;
  orbitController.maxDistance = 5;
  orbitController.update();

  const loadingManager = new THREE.LoadingManager();
  const glbLoader = new GLTFLoader(loadingManager);
  const dracoLoader = new DRACOLoader(loadingManager);
  dracoLoader.setDecoderPath("./draco/gltf/");
  glbLoader.setDRACOLoader(dracoLoader);
  textureLoader = new THREE.TextureLoader(loadingManager);
  texture = textureLoader.load(textureImg);
  setTexture(textureProperty);
  glbLoader.load("/model/shirt.glb", (gltf) => {
    const shirtModel = gltf.scene;
    scene.add(shirtModel);
    shirtModel.scale.set(0.015, 0.015, 0.015);
    shirtModel.traverse((child) => {
      if (child.isMesh) {
        if (
          !child.name.includes("button") &&
          !child.name.includes("thread") &&
          !child.name.includes("thread_hole")
        )
          child.material.map = texture;
        child.material.roughness = 1;
        child.material.metalness = 0;
        if (child.name.includes("shirt_front")) {
          child.castShadow = false;
          child.receiveShadow = true;
        } else {
          child.castShadow = true;
        }
      }
    });
  });
  window.addEventListener("resize", () => {
    camera.aspect =
      container.current.clientWidth / container.current.clientHeight;
    camera.updateProjectionMatrix();
    render.setSize(
      container.current.clientWidth,
      container.current.clientHeight
    );
  });
  loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
    console.log("!!! on start!!! ");
    document.getElementById("loading").style.display = "inline-block";
    document.getElementById("closeButton").style.display = "none";
  };
  loadingManager.onLoad = () => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("closeButton").style.display = "flex";
    console.log("!!! on none!!! ");
  };
};
const clearScene = () => {
  console.log(" !!!!!!!  clearScene!!!!!!!!!!      ", scene);
  if (!scene) return;
  scene.children.forEach((child) => {
    console.log(" !!!!!!!  clearScene!!!!!!!!!!      ", child);
    removeObject(child);
  });
};
const removeObject = (obj) => {
  if (obj instanceof THREE.Mesh) {
    obj.geometry.dispose();
    obj.material.dispose();
    console.log(" !!!!!!!  object clear !!!!!!!!!!  ");
  }
  if (obj.children) {
    obj.children.forEach((child) => {
      removeObject(child);
    });
  }
};
const setTexture = (prop: any) => {
  // console.log("innnnnnn setTexture")
  if (!texture) return;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  // texture.magFilter = THREE.NearestFilter;
  // texture.minFilter = THREE.NearestFilter;
  texture.repeat.set(prop.tilex * 0.001, prop.tiley * 0.001);
  // texture.offset.x = 0.5;
  // texture.offset.y = 0.5;
  texture.rotation = prop.rotation;
  texture.flipY = false;
  texture.needsUpdate == true;
};
const Wrapper = styled.div`
  /* width: 45rem;
  height: 50rem; */
  /* width: 664px; */
  width: 100%;
  height: 28rem;
  background-color: transparent;
`;

// const Preview3D = ({
//   textureImg,
//   textureProperty,
// }: {
//   textureImg: any;
//   textureProperty: any;
// }) => {
//   console.log(textureProperty);

//   setTexture(textureImg, textureProperty);
//   const Loading=()=> {
//     return (
//       <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center">
//         <Spinner size="lg" />
//       </div>
//     );
//   }
//   modelMat = new THREE.MeshStandardMaterial({
//     map: texture,
//     color: 0xffffff,
//   });
//   return (
//     <Wrapper className="relative" id = "3d_web">
//       <Suspense fallback={<Loading />}>
//         <Canvas colorManagement
//                shadowMap
//                camera={ {near:.1,far:1000,zoom:1,fov:50,position:[0,5,3.9030],rotation:[-0.261,0,0]}}
//             >
//           <ambientLight intensity={.8}/>
//           <directionalLight
//             intensity={1}
//             position={[6.954,7.229,8.991]}
//             castShadow
//             shadow-mapSize-height={1024}
//             shadow-mapSize-width={1024}
//             shadow-camera-top = {3}
//             shadow-camera-bottom = {-3}
//             shadow-camera-left = {-3}
//             shadow-camera-right = {3}
//             shadow-camera-near ={ 0.1}
//             shadow-camera-far = {500}
//           />
//           <directionalLight
//             intensity={1}
//             position={[-6.713,5.117,-7.399]}
//             castShadow
//             shadow-mapSize-height={1024}
//             shadow-mapSize-width={1024}
//             shadow-camera-top = {3}
//             shadow-camera-bottom = {-3}
//             shadow-camera-left = {-3}
//             shadow-camera-right = {3}
//             shadow-camera-near ={ 0.1}
//             shadow-camera-far = {500}
//           />
//           {<GlbModel url={"/model/scene.glb"} castShadow/>}
//           <OrbitControls enableRotate={true} enableZoom={true} target={[0,4,0]}/>
//         </Canvas>
//       </Suspense>
//     </Wrapper>
//   );
// };

// const GlbModel = ({ url }: { url: any }) => {
//   console.log("!! %%%%%%%%%%%%%%%%% change!2222! ");
//   const dracoLoader = new DRACOLoader();
//   m3dModel = useLoader(GLTFLoader, url, (loader) => {
//     dracoLoader.setDecoderPath("/draco/gltf/");
//     dracoLoader.setDecoderConfig({ type: "js" });
//     loader.setDRACOLoader(dracoLoader);
//   });
//   //   m3dModel.scene.scale.set(0.02, 0.02, 0.02);
//   m3dModel.scene.scale.set(.03,.03,.03);
//   m3dModel.scene.position.set(0,0,0);
//   m3dModel.scene.traverse((node: any) => {
//     if (node.isMesh) {
//        if(!node.name.includes("button") && !node.name.includes("thread") && !node.name.includes("thread_hole"))
//         node.material.map = texture;
//         node.material.roughness = 1;
//         node.material.metalness = 0;
//         node.material.needsUpdate = true;
//         node.castShadow = true;
//         if(node.name.includes("shirt_front")){
//            node.receiveShadow = true;
//            node.castShadow = true;
//         }
//         else{
//            node.castShadow = true;
//         }
//         console.log(node.castShadow,"        ",node.name);
//     }
//   });
//   return <primitive object={m3dModel.scene} dispose={null} />;
// };
