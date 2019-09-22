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

class Webview extends React.Component<Props> {
  static defaultProps = {
    title: 'webview',
    url: 'https://www.baidu.com'
  }

  render() {

    const { title, html, url } = this.props
    const source = html
      ? isAndroid ? html.and : html.ios
      : { uri: url } as any

    return (
      <View style={styles.container}>
        <NavigationBar title={title}/>
        <WebView
          androidHardwareAccelerationDisabled
          style={{ backgroundColor: '#fff' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState
          source={source}
        />
      </View>
    )
  }
}

export default Webview
