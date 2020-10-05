import React from 'react'
import * as RN from 'react-native'

type Props = {
  style?: RN.StyleProp<RN.ViewStyle>;
  color?: RN.ColorValue;
  size?: number;
  trackHeight: number;
}

const Thumb = ({ color = 'darcyan', trackHeight, size = 15, style }: Props) => {
  const thumbContainerStyle: RN.ViewStyle = {
    width: trackHeight,
    height: trackHeight,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  }

  /** We want to cover the end of the track */
  const thumbViewStyle = RN.StyleSheet.compose(
    {
      width: size,
      height: size,
      backgroundColor: color,
      zIndex: 1,
      borderRadius: size / 2,
      overflow: 'hidden',
      // This is for web
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      userSelect: 'none'
    },
    style
  )
    
  const thumbOuterViewStyle: RN.ViewStyle = {
      width: size + 4,
      height: size + 4,
      backgroundColor: color,
      zIndex: 1,
      borderRadius: (size + 4)/ 2,
      overflow: 'hidden'
    }
   
  return <RN.View pointerEvents="none" style={thumbContainerStyle}>
    <RN.View style={thumbOuterViewStyle}>
         <RN.View style={thumbViewStyle}/>     
    </RN.View>
    
  </RN.View>
}

export default Thumb
