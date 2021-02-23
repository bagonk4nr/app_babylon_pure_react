import StandardMaterials from '../materials/StandardMaterial';
import * as BABYLON from '@babylonjs/procedural-textures';
// import DirectionalLights from '../lights/DirectionalLight';
// import CreateFontain from '../funct/CreateFontain';


const FireTextures = (props: any) => {

    let StandardMaterial = StandardMaterials("fire", props.Scener);

    let fireTexture = new BABYLON.FireProceduralTexture("fire", 256, props.Scener);
    StandardMaterial.diffuseTexture = fireTexture;
    StandardMaterial.opacityTexture = fireTexture;

    // let lighter = DirectionalLights(props.Scener);
    //
    // let ShadowGenerator = new BABYLONCore.ShadowGenerator(1024, lighter);
    //
    // CreateFontain("fontain", 20, 0.25, 0, props.Scener, ShadowGenerator, StandardMaterial, null);

    return StandardMaterial;

}

export default FireTextures;
