import * as BABYLON from '@babylonjs/core';

const CreateFontain = (name: any, x: any, y: any, z: any, scene: any, shadowGenerator: any, marbleMaterial: any, fireMaterial: any) => {
    var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 20, scene);
    torus.position = new BABYLON.Vector3(x, y, z);
    torus.material = marbleMaterial;

    var fontainGround = BABYLON.Mesh.CreateBox("fontainGround", 4, scene);
    fontainGround.position = new BABYLON.Vector3(x, y - 2, z);
    fontainGround.material = marbleMaterial;

    var fontainSculptur1 = BABYLON.Mesh.CreateCylinder("fontainSculptur1", 2, 2, 1, 10, 1, scene);
    fontainSculptur1.position = new BABYLON.Vector3(x, y, z);
    fontainSculptur1.material = marbleMaterial;

    var fontainSculptur2 = BABYLON.Mesh.CreateSphere("fontainSculptur2", 7, 1.7, scene);
    fontainSculptur2.position = new BABYLON.Vector3(x, y + 0.9, z);
    fontainSculptur2.material = fireMaterial;
    fontainSculptur2.rotate(new BABYLON.Vector3(1.0, 0.0, 0.0), Math.PI / 2.0, BABYLON.Space.LOCAL);

    shadowGenerator.getShadowMap().renderList.push(torus);
    shadowGenerator.getShadowMap().renderList.push(fontainSculptur1);
    shadowGenerator.getShadowMap().renderList.push(fontainSculptur2);
}

export default CreateFontain;
