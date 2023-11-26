import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'types/routes/root';

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
