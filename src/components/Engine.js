import React from 'react'
import EngineCls from './class/EnginesCls';

import ArcRotateCameras from './camera/ArcRotateCamera';
import BrickTextures from './textures/BrickTexture';
import FireTextures from './textures/FireTexture';
import GrassTextures from './textures/GrassTexture';
import MarbleTextures from './textures/MarbleTexture';
import WoodTextures from './textures/WoodTexture';

import TextureMaps from './maps/TextureMaps';

import BoxCloudMeshs from './mesh/BoxCloudMesh';
import MacadamMesh from './mesh/MacadamMesh';
import SquareMesh from './mesh/SquareMesh';

const Engines = (props: any) => {

  const prop = {
    engineOptions: { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false},
  };

  const onSceneReady = (scene: any) => {
    const prop = {
      Scener: scene,
      pathCustomTextures: props.pathCustomTextures
    };

    ArcRotateCameras(prop);

    let brick = BrickTextures(prop);
    let fire = FireTextures(prop);
    let grass = GrassTextures(prop);
    let marble = MarbleTextures(prop);
    let wood = WoodTextures(prop);

    const textures = {
      Scener: scene,
      woodMaterial: wood,
      grassMaterial: grass,
      marbleMaterial: marble,
      fireMaterial: fire,
      brickMaterial: brick,
    };

    TextureMaps(textures);
    // console.log(prop.pathCustomTextures + ' Engine');
    BoxCloudMeshs(prop);
    MacadamMesh(prop);
    SquareMesh(prop);

    return scene;
  }

  return <>
  <EngineCls engineOptions={prop.engineOptions} antialias={props.antialias} adaptToDeviceRatio={props.adaptToDeviceRatio} onSceneReady={onSceneReady}  IDCanvas={props.IDCanvas}/>
  </>;

}

export default Engines;
