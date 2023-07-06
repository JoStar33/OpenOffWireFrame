import SocialLoginButton from 'components/atoms/buttons/SocialLoginButton/SocialLoginButton';
import { View } from 'react-native';
import { socialLoginButtonGroupStyles } from './SocialLoginButtonGroup.style';

const SocialLoginButtonGroup = () => {
  return (
    <View style={socialLoginButtonGroupStyles.container}>
      <SocialLoginButton label={'kakao'} color={'#FDE500'} handlePress={() => {}}/>
      <SocialLoginButton label={'naver'} color={'#1EC800'} handlePress={() => {}}/>
      <SocialLoginButton label={'apple'} color={'#FFF'} handlePress={() => {}}/>
      <SocialLoginButton label={'google'} color={'#FFF'} handlePress={() => {}}/>
    </View>
  );
};

export default SocialLoginButtonGroup;