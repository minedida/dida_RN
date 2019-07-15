import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { WebView } from 'react-native-webview';
import { NavigationBar } from "../../components";

const isAndroid = Platform.OS === 'android'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

type Props = {
  title: ''
  url?: any
  html?: any
}

// 使用webview ： http://bastengao.com/blog/2017/08/webview-with-local-html-in-react-native.html
// community-webview : https://github.com/react-native-community/react-native-webview

// 行内webview：https://codeburst.io/untangling-react-native-webview-b9c3cd3a30d8

class Webview extends React.Component<Props> {
  static defaultProps = {
    title: 'webview',
    url: 'https://www.baidu.com'
  }

  render() {

    const { title, html, url } = this.props
    /*const source = url ? {uri: url}
      : isAndroid ? html.and : html.ios*/
    const source = html
      ? isAndroid ? html.and : html.ios
      : { uri: url }

    return <View style={styles.container}>
      <NavigationBar title={title}/>
      <WebView
        style={{ backgroundColor: '#fff' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        source={source}
        startInLoadingState/>
    </View>
  }
}

export default Webview
