import React from 'react';
import * as BABYLON from '@babylonjs/core';
// import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

const ArcRotateCameras = (props: any) => {


    let Camerer = new BABYLON.ArcRotateCamera("Camera", 1, 1.2, 25, new BABYLON.Vector3(10, 0, 0), props.Scener);
    let canvas = props.Scener.getEngine().getRenderingCanvas();
    Camerer.upperBetaLimit = 1.2;
    Camerer.attachControl(canvas, true);
    props.Scener.registerBeforeRender( () => {
        Camerer.alpha += 0.001 * props.Scener.getAnimationRatio();
    });

    return <>{Camerer}</>;

}

export default ArcRotateCameras;
