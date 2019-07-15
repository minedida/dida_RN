import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import NativeSwipeable from 'react-native-gesture-handler/Swipeable';
import JSSwipeable from 'react-native-swipeable';
import { RectButton } from "react-native-gesture-handler";
import _ from 'lodash'
import stores from '../../store'

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
});

// @ts-ignore
class AppleStyleSwipeableRow extends React.Component {
  _swipeableRow: any
  renderLeftActions = (_progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      this.close();
      alert(text);
    };
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };
  renderRightActions = progress => (
    <View style={{ width: 192, flexDirection: 'row' }}>
      {this.renderRightAction('More', '#C8C7CD', 192, progress)}
      {this.renderRightAction('Flag', '#ffab00', 128, progress)}
      {this.renderRightAction('More', '#dd2c00', 64, progress)}
    </View>
  );
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const { children } = this.props;
    // 当条目为active时，禁用swipeable手势
    const gestureProps = { enabled: !stores.todo.todoItemSortableEnable } as any
    return (
      <NativeSwipeable
        {...gestureProps}
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </NativeSwipeable>
    );
  }
}

// @ts-ignore
class JSSwipeableRow extends React.Component {
  onOpen() {

  }

  onClose() {

  }

  renderLeft() {
    return (
      <View style={[styles.leftSwipeItem, { backgroundColor: 'lightskyblue' }]}>
        <Text>Pull action</Text>
      </View>
    )
  }

  render() {
    const right = [
      <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'lightseagreen' }]}>
        <Text>1</Text>
      </TouchableOpacity>,
      <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'orchid' }]}>
        <Text>2</Text>
      </TouchableOpacity>
    ]
    return (
      <JSSwipeable
        leftContent={this.renderLeft()}
        rightButtons={right}
        onRightButtonsOpenRelease={this.onOpen}
        onRightButtonsCloseRelease={this.onClose}
      >
        {this.props.children}
      </JSSwipeable>
    );
  }
}

// export default (props) => {
//   return <Row {...props} />;
// }
/*export default function (props: any) {
  return <Row {...props}/>
}*/



export default (props) =>
  <AppleStyleSwipeableRow>
    {props.children}
  </AppleStyleSwipeableRow>

