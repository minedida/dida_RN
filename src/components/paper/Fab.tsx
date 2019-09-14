import React from 'react'
import { FAB as PaperFAB, Theme, withTheme, FABGroupProps }
  from "react-native-paper";


interface IFABGroupProps extends FABGroupProps {
  theme: Theme
}

// 将FAB的主题色由原本paper自带的`accent`改为`primary`

const FabGroup = withTheme(
  (props: IFABGroupProps) =>
    <PaperFAB.Group {...props}
                    fabStyle={[props.fabStyle,
                      {backgroundColor: props.theme.colors.primary}]}/>
)

export {
  FabGroup
}
