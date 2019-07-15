import React from 'react'
import { Button, Paragraph, Dialog as PaperDialog, Portal } from 'react-native-paper';
import { ScrollView } from "react-native";

class Dialog extends React.Component<any, any> {
  state = {
    visible: this.props.visible,
  }

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return  <Portal>
      <PaperDialog
        visible={this.props.visible}
        onDismiss={this._hideDialog}>
        <PaperDialog.Title>Alert</PaperDialog.Title>
        <PaperDialog.ScrollArea >
          <ScrollView contentContainerStyle={{ paddingHorizontal: 24, maxHeight: 200 }}>
            <Paragraph>This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
              This is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialogThis is simple dialog
            </Paragraph>
          </ScrollView>
        </PaperDialog.ScrollArea>
        <PaperDialog.Actions>
          <Button onPress={this._hideDialog}>Done</Button>
        </PaperDialog.Actions>
      </PaperDialog>
    </Portal>
  }
}

export default Dialog
