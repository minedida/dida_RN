import React from 'react'
import { View } from 'react-native'
import { SettingListGroup, SettingListItem, SettingIcon, Toast } from "../../components";

type Props = any

const configs: Array<Array<any>> = [
  [
    {
      id: 'label',
      title: '标签',
      description: '自动',
      leftIcon: <SettingIcon type={'MaterialCommunityIcons'} name={'tag-multiple'}/>
    }
  ],
  [
    {
      id: 'add_label',
      title: '添加标签',
      leftIcon: <SettingIcon type={'MaterialIcons'} name={'add'}/>
    }
  ]
]

class Label extends React.PureComponent<Props> {
  onSettingListItemPress(type) {
    Toast.show(type)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {configs.map(
          (g, i) =>
            <SettingListGroup key={i} last={i === configs.length - 1}>
              {
                g.map(v =>
                  <SettingListItem key={v.id} onPress={this.onSettingListItemPress} {...v}/>)
              }
            </SettingListGroup>
        )}
      </View>
    )
  }
}

export default Label
