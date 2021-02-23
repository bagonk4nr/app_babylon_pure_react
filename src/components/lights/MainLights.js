import React, { Component } from 'react';
import EngineCls from '../class/EnginesCls';
import DirectionalLights from '../lights/DirectionalLight';

const MainLighters = () => {

  const onSceneReady = (Scener: any) => {

    const lighter = DirectionalLights(Scener);
    return lighter;

  }

  return <>
      <EngineCls onSceneReady={onSceneReady} />
    </>;

}
