import * as BABYLON from '@babylonjs/core';

const CreateTorch = (name: any, x: any, y: any, z: any, scene: any, shadowGenerator: any,
  brickMaterial: any, woodMaterial: any, grassMaterial: any) => {
    //createBrickBlock
    var brickblock = BABYLON.Mesh.CreateBox(name + "brickblock", 1, scene);
    brickblock.position = new BABYLON.Vector3(x, y, z);
    brickblock.material = brickMaterial;

    //createWood
    var torchwood = BABYLON.Mesh.CreateCylinder(name + "torchwood", 2, 0.25, 0.1, 12, 1, scene);
    torchwood.position = new BABYLON.Vector3(x, y + 1, z);
    torchwood.material = woodMaterial;

    //leafs
    var leafs2 = BABYLON.Mesh.CreateSphere(name + "leafs2", 10, 1.2, scene);
    leafs2.position = new BABYLON.Vector3(x, y + 2, z);
    leafs2.material = grassMaterial;

    shadowGenerator.getShadowMap().renderList.push(torchwood);
    shadowGenerator.getShadowMap().renderList.push(leafs2);
    shadowGenerator.getShadowMap().renderList.push(brickblock);
}

export default CreateTorch;
