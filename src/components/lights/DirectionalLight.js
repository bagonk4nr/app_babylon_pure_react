import * as BABYLON from '@babylonjs/core';


const DirectionalLights = (props: any) => {

  let Lighter = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-0.5, -1, -0.5), props.scener);
  Lighter.diffuse = new BABYLON.Color3(1, 1, 1);
  Lighter.specular = new BABYLON.Color3(1, 1, 1);
  // Lighter.groundColor = new BABYLON.Color3(0, 0, 0);
  Lighter.position = new BABYLON.Vector3(20, 40, 20);

  return Lighter
}

export default DirectionalLights;
