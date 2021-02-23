
import StandardMaterials from '../materials/StandardMaterial';
import * as BABYLON from '@babylonjs/procedural-textures';
// import CreateTree from '../funct/CreateTree';
// import DirectionalLights from '../lights/DirectionalLight';
// import CreateTorch from '../funct/CreateTorch';

const WoodTextures = (props: any) => {

    let StandardMaterial = StandardMaterials('wood', props.Scener);

    let woodTexture = new BABYLON.WoodProceduralTexture("wood text", 1024, props.Scener);
    woodTexture.ampScale = 50.0;
    StandardMaterial.diffuseTexture = woodTexture;

    // let lighter = DirectionalLights(props.Scener);
    //
    // let ShadowGenerator = new BABYLONCore.ShadowGenerator(1024, lighter);
    //
    // CreateTree("a1", 0, 3.5, 0, props.Scener, ShadowGenerator, StandardMaterial, null);
    // CreateTorch("torch1", 15, 0.5, 5, props.Scener, ShadowGenerator, null, StandardMaterial, null);
    // CreateTorch("torch2", 15, 0.5, -5, props.Scener, ShadowGenerator, null, StandardMaterial, null);
    // CreateTorch("torch3", 25, 0.5, 5, props.Scener, ShadowGenerator, null, StandardMaterial, null);
    // CreateTorch("torch4", 25, 0.5, -5, props.Scener, ShadowGenerator, null, StandardMaterial, null);

    return StandardMaterial;

}

export default WoodTextures;
