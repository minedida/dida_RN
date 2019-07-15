import AndroidButtonContainer from './ButtonContainer.android'
import IOSButtonContainer from './ButtonContainer.ios'
import { Platform } from 'react-native';

export default Platform.OS === 'ios' ? IOSButtonContainer : AndroidButtonContainer
