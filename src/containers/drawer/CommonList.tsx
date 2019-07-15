import React from 'react'
import { View } from 'react-native'
import {List} from 'react-native-paper'

type Props = any

class CommonList extends React.PureComponent<Props> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <List.Item
          title="收集箱"
          left={props => <List.Icon {...props} icon="inbox" />}
        />
      </View>
    )
  }
}

export default CommonList
