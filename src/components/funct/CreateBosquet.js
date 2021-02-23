import * as BABYLON from '@babylonjs/core';

const CreateBosquet = (name: any, x: any, y: any, z: any, scene: any, shadowGenerator: any, grassMaterial: any) => {
    var bosquet = BABYLON.Mesh.CreateBox(name, 2, scene);
    bosquet.position = new BABYLON.Vector3(x, y, z);
    bosquet.material = grassMaterial;

    var bosquetbawl = BABYLON.Mesh.CreateBox(name + "bawl", 1, scene);
    bosquetbawl.position = new BABYLON.Vector3(x, y + 1, z);
    bosquetbawl.material = grassMaterial;

    shadowGenerator.getShadowMap().renderList.push(bosquet);
    shadowGenerator.getShadowMap().renderList.push(bosquetbawl);
}

export default CreateBosquet;
