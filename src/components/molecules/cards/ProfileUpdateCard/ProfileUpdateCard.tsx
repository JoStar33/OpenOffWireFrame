import MultiValidateForm from 'components/molecules/forms/MultiValidateForm/MultiValidateForm';
import { profileUpdateForm } from 'data/forms/profileUpdate';
import React from 'react';
import { View, Text } from 'react-native';
import { SubmitValue } from 'types/apps/form';
import { profileUpdateCardStyles } from './ProfileUpdateCard.style';

const ProfileUpdateCard = () => {
  return (
    <View style={profileUpdateCardStyles.container}>
      <Text style={profileUpdateCardStyles.cardTitle}>이벤트 참여 정보</Text>
      <MultiValidateForm 
        formModel={profileUpdateForm}
        actionSubmit={function (data: SubmitValue): void {
          console.log(data);
        } }
        buttonText={'프로필 수정 완료'} color={'white'}/>
    </View>
  );
};

export default ProfileUpdateCard;