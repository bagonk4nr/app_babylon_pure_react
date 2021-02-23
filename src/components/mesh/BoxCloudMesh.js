
import React from 'react';
import * as BABYLON from '@babylonjs/procedural-textures';
import * as BABYLONCore from '@babylonjs/core';


const BoxCloudMeshs = (props: any) => {


    let customMaterial = new BABYLONCore.StandardMaterial("boxCloud", props.Scener);;

    //Using a procedural texture to create the sky
    let boxCloud = BABYLONCore.Mesh.CreateSphere("boxCloud", 100, 1000, props.Scener);
    boxCloud.position = new BABYLONCore.Vector3(0, 0, 12);
    let cloudProcText = new BABYLON.CloudProceduralTexture("cloud", 1024, props.Scener);
    customMaterial.emissiveTexture = cloudProcText;
    customMaterial.backFaceCulling = false;
    customMaterial.emissiveTexture.coordinatesMode = BABYLONCore.Texture.SKYBOX_MODE;
    boxCloud.material = customMaterial;

    return <></>;
}

export default BoxCloudMeshs;
