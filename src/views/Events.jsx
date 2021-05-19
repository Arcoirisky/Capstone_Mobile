import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventContainer from '@/components/EventContainer.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';
import { useSelector } from 'react-redux';

export default function Events() {
  const navigation = useNavigation();
  const stores = useSelector((state) => state.profile.stores);

  const events = stores.map((idStore) => (
    <EventContainer navigation={navigation} idStore={idStore} key={idStore} />
  ));

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      {events}
    </ScreenContainer>
  );
}
