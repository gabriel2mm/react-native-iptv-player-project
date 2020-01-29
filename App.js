import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { AppLoading } from 'expo'
import store from './src/store/index'
import { NativeRouter, Switch, Route } from 'react-router-native'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Login from './src/components/login/index'
import Vods from './src/components/vods/index'
import Hub from './src/components/hub/index'

export default function App() {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    async function fetchData() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setReady(true);
    }

    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <NativeRouter>
        {!ready ? (
          <AppLoading />
        ) : (
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path='/hub' component={Hub} />
              <Route exact path="/vods" component={Vods} />
            </Switch>
          )
        }
      </NativeRouter >
    </Provider >
  );
}
