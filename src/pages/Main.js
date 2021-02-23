import React from 'react';
// import
//   { Engines, Scenes, ArcRotateCameras,
// DirectionalLights,
// BrickTextures, FireTextures, GrassTextures,
// MarbleTextures, WoodTextures,
// BoxCloudMeshs, MacadamMesh, SquareMesh } from '../components/Component';
import Engines from '../components/Engine';
// import Scenes from '../components/Scene';
// import DirectionalLights from '../components/lights/DirectionalLight';
import ArcRotateCameras from '../components/camera/ArcRotateCamera';
import TextureMaps from '../components/maps/TextureMaps';
// import BrickTextures from '../components/textures/BrickTexture';
// import FireTextures from '../components/textures/FireTexture';
// import GrassTextures from '../components/textures/GrassTexture';
// import MarbleTextures from '../components/textures/MarbleTexture';
// import WoodTextures from '../components/textures/WoodTexture';
import BoxCloudMeshs from '../components/mesh/BoxCloudMesh';
import MacadamMesh from '../components/mesh/MacadamMesh';
import SquareMesh from '../components/mesh/SquareMesh';
import '@babylonjs/gui';
import '@babylonjs/inspector';
import '@babylonjs/loaders';
import '@babylonjs/post-processes';
import '@babylonjs/serializers';
import * as CANNON from 'cannon';
window.CANNON = CANNON;

const Main: React.FC = (props: any) => {
  // console.log(props.assetsTexture + ' Main');
  // const CanvasID = document.getElementById(props.IDCanvas)  as HTMLCanvasElement;
  return (
    <Engines IDCanvas={'appcanvas'} antialias={true} adaptToDeviceRatio={true} pathCustomTextures={props.assetsTexture}>
    <ArcRotateCameras />
    <SquareMesh />
    <TextureMaps />
    <MacadamMesh />
    <BoxCloudMeshs />
    </Engines>
  );

}

export default Main;
