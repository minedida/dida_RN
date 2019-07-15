import React from 'react'
import { FAB as PaperFAB, Theme, withTheme, FABGroupProps }
  from "react-native-paper";


interface IFABGroupProps extends FABGroupProps {
  theme: Theme
}

const FabGroup = withTheme(
  (props: IFABGroupProps) =>
    <PaperFAB.Group {...props}
                    fabStyle={[props.fabStyle, {backgroundColor: props.theme.colors.primary}]}/>
)

export {
  FabGroup
}
