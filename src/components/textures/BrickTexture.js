
import StandardMaterials from '../materials/StandardMaterial';
import * as BABYLON from '@babylonjs/procedural-textures';
// import CreateTorch from '../funct/CreateTorch';
// import DirectionalLights from '../lights/DirectionalLight';

const BrickTextures = (props: any) => {

    let StandardMaterial = StandardMaterials("brick", props.Scener);

    let brickTexture = new BABYLON.BrickProceduralTexture("brick text", 512, props.Scener);
    brickTexture.numberOfBricksHeight = 2;
    brickTexture.numberOfBricksWidth = 3;
    StandardMaterial.diffuseTexture = brickTexture;

    // let lighter = DirectionalLights(props.Scener);
    //
    // let ShadowGenerator = new BABYLONCore.ShadowGenerator(1024, lighter);
    //
    // CreateTorch("torch1", 15, 0.5, 5, props.Scener, ShadowGenerator, StandardMaterial, null, null);
    // CreateTorch("torch2", 15, 0.5, -5, props.Scener, ShadowGenerator, StandardMaterial, null, null);
    // CreateTorch("torch3", 25, 0.5, 5, props.Scener, ShadowGenerator, StandardMaterial, null, null);
    // CreateTorch("torch4", 25, 0.5, -5, props.Scener, ShadowGenerator, StandardMaterial, null, null);

    return StandardMaterial;
}

export default BrickTextures;
