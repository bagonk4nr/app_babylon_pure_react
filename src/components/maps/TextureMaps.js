import React from 'react';
import DirectionalLights from '../lights/DirectionalLight';
import * as BABYLONCore from '@babylonjs/core';
import CreateBosquet from '../funct/CreateBosquet';
import CreateTree from '../funct/CreateTree';
import CreateTorch from '../funct/CreateTorch';
import CreateFontain from '../funct/CreateFontain';

const TextureMaps = (props: any) => {

  let lighter = DirectionalLights(props.Scener);

  let shadowGenerator = new BABYLONCore.ShadowGenerator(1024, lighter);

  CreateBosquet("b1", -9, 1, 9, props.Scener, shadowGenerator,  props.grassMaterial);
  CreateBosquet("b2", -9, 1, -9, props.Scener, shadowGenerator,  props.grassMaterial);
  CreateBosquet("b3", 9, 1, 9, props.Scener, shadowGenerator,  props.grassMaterial);
  CreateBosquet("b4", 9, 1, -9, props.Scener, shadowGenerator,  props.grassMaterial);

  CreateTree("a1", 0, 3.5, 0, props.Scener, shadowGenerator, props.woodMaterial, props.grassMaterial);

  //Creating a fontain
  CreateFontain("fontain", 20, 0.25, 0, props.Scener, shadowGenerator, props.marbleMaterial, props.fireMaterial);
  CreateTorch("torch1", 15, 0.5, 5, props.Scener, shadowGenerator, props.brickMaterial, props.woodMaterial, props.grassMaterial);
  CreateTorch("torch2", 15, 0.5, -5, props.Scener, shadowGenerator, props.brickMaterial, props.woodMaterial, props.grassMaterial);
  CreateTorch("torch3", 25, 0.5, 5, props.Scener, shadowGenerator, props.brickMaterial, props.woodMaterial, props.grassMaterial);
  CreateTorch("torch4", 25, 0.5, -5, props.Scener, shadowGenerator, props.brickMaterial, props.woodMaterial, props.grassMaterial);

  return <></>;
}

export default TextureMaps;
