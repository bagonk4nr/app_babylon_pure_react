
import StandardMaterials from '../materials/StandardMaterial';
import * as BABYLON from '@babylonjs/procedural-textures';
// import CreateBosquet from '../funct/CreateBosquet';
// import CreateTree from '../funct/CreateTree';
// import CreateTorch from '../funct/CreateTorch';
// import DirectionalLights from '../lights/DirectionalLight';

const GrassTextures = (props: any) => {

      let StandardMaterial = StandardMaterials("grass", props.Scener);

      let grassTexture = new BABYLON.GrassProceduralTexture("grass textbawl", 256, props.Scener);
      StandardMaterial.ambientTexture = grassTexture;

      // let lighter = DirectionalLights(Scener);
      //
      // let ShadowGenerator = new BABYLONCore.ShadowGenerator(1024, lighter);

      // CreateBosquet("b1", -9, 1, 9, Scener, ShadowGenerator, StandardMaterial);
      // CreateBosquet("b2", -9, 1, -9, Scener, ShadowGenerator, StandardMaterial);
      // CreateBosquet("b3", 9, 1, 9, Scener, ShadowGenerator, StandardMaterial);
      // CreateBosquet("b4", 9, 1, -9, Scener, ShadowGenerator, StandardMaterial);
      //
      // CreateTree("a1", 0, 3.5, 0, Scener, ShadowGenerator, null, StandardMaterial);
      //
      // CreateTorch("torch1", 15, 0.5, 5, Scener, ShadowGenerator, null, null, StandardMaterial);
      // CreateTorch("torch2", 15, 0.5, -5, Scener, ShadowGenerator, null, null, StandardMaterial);
      // CreateTorch("torch3", 25, 0.5, 5, Scener, ShadowGenerator, null, null, StandardMaterial);
      // CreateTorch("torch4", 25, 0.5, -5, Scener, ShadowGenerator, null, null, StandardMaterial);

    return StandardMaterial;

}

export default GrassTextures;
