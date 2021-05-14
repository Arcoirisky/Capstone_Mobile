import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ant-design/react-native';
import CardContainer from '@/components/CardContainer.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';

const contactIcon = <Icon name="team" size="md" color="black" />;

export default function Contacts() {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <CardContainer
        icon={contactIcon}
        title="Contact 1"
        tag="contact"
        navigation={navigation}
      />
      <CardContainer
        icon={contactIcon}
        title="Contact 2"
        tag="contact"
        navigation={navigation}
      />
    </ScreenContainer>
  );
}