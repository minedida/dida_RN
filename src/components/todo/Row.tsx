import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Space, Checkbox } from "../";
import { d } from "../../helper/utils/ScreenUtil";
import { material } from "react-native-typography";
import { TodoModel } from "../../model";

export const ITEM_HEIGHT = d(66)

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    paddingHorizontal: d(10)
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,

    elevation: 4,
  }
})

type RowProps = {
  item: TodoModel
  active: boolean
  index: number
  disabled: boolean
  onItemCheck: (id: number) => void
}

// SortableList-row
export class Row extends React.Component<RowProps> {

  shouldComponentUpdate(nextProps: Readonly<RowProps>): boolean {
    console.log(`Row-render-shouldComponentUpdate`)

    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      return true
    }
    if (this.props.item.checked !== nextProps.item.checked) {
      return true;
    }
    return false
  }

  render() {
    console.log(`Row-render`)

    // todo 去除Checkbox的padding
    const { item, active } = this.props
    const checkboxStatus = item.checked ? 'checked' : 'unchecked'
    const shadowStyle = active ? styles.shadow : {};
    return (
      <View style={[styles.container, shadowStyle]}>
        <Space height={d(6)}/>
        <View style={styles.topView}>
          <Checkbox status={checkboxStatus}
                    onPress={() => this.props.onItemCheck(item.id)}
          />
          <Text numberOfLines={1} style={material.body1}>{item.title}</Text>
        </View>
        <Text numberOfLines={1} style={[material.body1, { paddingLeft: d(34), includeFontPadding: false }]}>6月29日</Text>
      </View>
    )
  }
}

export default Row

/**
 这里的row有两种高度
 当正文显示一行时，高度 d(50)
 当正文显示两行时，高度 d(66)
 **/
