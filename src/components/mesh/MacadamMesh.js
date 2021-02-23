
import React from 'react';
import * as BABYLON from '@babylonjs/procedural-textures';
import * as BABYLONCore from '@babylonjs/core';


const MacadamMesh = (props: any) => {

    let customMaterial = new BABYLONCore.StandardMaterial("macadam", props.Scener);;

    let macadam = BABYLONCore.Mesh.CreateGround("square", 20, 20, 2, props.Scener);
    macadam.position = new BABYLONCore.Vector3(20, 0, 0);
    let customProcTextmacadam = new BABYLON.RoadProceduralTexture("customtext", 512, props.Scener);
    customMaterial.diffuseTexture = customProcTextmacadam;
    macadam.material = customMaterial;
    macadam.receiveShadows = true;

    return <></>;

}

export default MacadamMesh;
