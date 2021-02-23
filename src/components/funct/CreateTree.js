import * as  BABYLON from '@babylonjs/core';


const CreateTree = (name: any, x: any, y: any, z: any, scene: any, shadowGenerator: any, woodMaterial: any, grassMaterial: any) => {
    var trunk = BABYLON.Mesh.CreateCylinder(name + "trunk", 7, 2, 2, 12, 1, scene);
    trunk.position = new BABYLON.Vector3(x, y, z);
    trunk.material = woodMaterial;

    var leafs = BABYLON.Mesh.CreateSphere(name + "leafs", 20, 7, scene);
    leafs.position = new BABYLON.Vector3(x, y + 5.0, z);
    leafs.material = grassMaterial;

    shadowGenerator.getShadowMap().renderList.push(trunk);
    shadowGenerator.getShadowMap().renderList.push(leafs);
}

export default CreateTree;
