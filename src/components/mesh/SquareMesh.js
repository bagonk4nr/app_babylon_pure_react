
import * as BABYLONCore from '@babylonjs/core';
import '@babylonjs/materials';
import '@babylonjs/post-processes';
import '@babylonjs/loaders';
import '@babylonjs/serializers';
import '@babylonjs/inspector';
import * as CANNON from 'cannon';
window.CANNON = CANNON;

const SquareMesh = (props: any) => {


    let customMaterial = new BABYLONCore.StandardMaterial('custommat', props.Scener);;

    //Create a square of grass using a custom procedural texture
    let square = BABYLONCore.Mesh.CreateGround('square', 20, 20, 2, props.Scener);
    square.position = new BABYLONCore.Vector3(0, 0, 0);

    // require('../../assets/land/textures/dirt.jpg');
    // let pathTextures = require('../../assets/land/textures/grass.png');
    // console.log(__dirnames.default);
    // let grassURI = Textures.grass.default;
    // console.log('grassURI: ' + grassURI);
    let pathTextures = './assets/land';
    // console.log(pathTextures);

    let customProcText = new BABYLONCore.CustomProceduralTexture('customtext', pathTextures, 1024, props.Scener);
    // let customProcText = new BABYLONTextures.GrassProceduralTexture('customtext', 1024, props.Scener);
    customMaterial.ambientTexture = customProcText;
    square.material = customMaterial;
    square.receiveShadows = true;

    // return <></>;

}

export default SquareMesh;
