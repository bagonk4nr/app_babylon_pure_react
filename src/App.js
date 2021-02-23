import React from 'react';
import {
   View
} from 'react-native';
import Main from './pages/Main';

const App: () => React$Node = () => {

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', resizeMode: 'cover', width: document.body.clientWidth, height: document.body.clientHeight, margin: 0, padding: 0 }}>
        <Main />
      </View>
    </>
  );

};

export default App;
