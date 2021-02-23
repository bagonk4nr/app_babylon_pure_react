
import * as BABYLON from '@babylonjs/core';

const StandardMaterials = (name: any, scene: any) => {

    let StandardMaterial = new BABYLON.StandardMaterial(name, scene);;

    return StandardMaterial;

}

export default StandardMaterials;
