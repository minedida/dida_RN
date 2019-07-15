import React from 'react'

export function withRef(WrappedComponent: any) {
   class WithRefComponent extends React.Component<any> {
    render() {
      const {forwardedRef, ...rest} = this.props
      return <WrappedComponent {...rest} ref={forwardedRef}/>
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithRefComponent {...props} forwardedRef={ref} />
  })
}
