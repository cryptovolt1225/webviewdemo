import * as React from 'react';
import {
  View,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="lightblue" barStyle="dark-content" />
      {/*<View style={styles.appBar} />*/}
      {/*<View style={styles.content} />*/}
      <WebView
        source={{uri: 'https://wallet-connect-demo.netlify.app/'}}
        startInLoadingState={true}
        renderLoading={() => <View style={{flex:1,justifyContent:'flex-start',backgroundColor:'white'}}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>}
      />
    </View>
  );
};

export default App;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
