
import StandardMaterials from '../materials/StandardMaterial';
import * as BABYLON from '@babylonjs/procedural-textures';
// import DirectionalLights from '../lights/DirectionalLight';
// import CreateFontain from '../funct/CreateFontain';

const MarbleTextures = (props: any) => {


    let StandardMaterial = StandardMaterials("marble", props.Scener);

    let marbleTexture = new BABYLON.MarbleProceduralTexture("marble", 512, props.Scener);
    marbleTexture.numberOfTilesHeight = 5;
    marbleTexture.numberOfTilesWidth = 5;
    StandardMaterial.ambientTexture = marbleTexture;

    // let lighter = DirectionalLights(props.Scener);
    //
    // let ShadowGenerator = new BABYLONCore.ShadowGenerator(1024, lighter);
    //
    // CreateFontain("fontain", 20, 0.25, 0, props.Scener, ShadowGenerator, StandardMaterial, null);

    return StandardMaterial;

}

export default MarbleTextures;
