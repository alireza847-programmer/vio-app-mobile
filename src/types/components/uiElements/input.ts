import {TextInputProps} from 'react-native';

export interface InputProps {
  marginTopRatio?: number;
}

export interface VInputProps extends InputProps, TextInputProps {}
