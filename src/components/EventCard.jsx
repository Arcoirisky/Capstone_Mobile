import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Icon, WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function EventCard({ navigation, event }) {
  const eventIcon = <Icon name="alert" size="md" color="black" />;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Evento')}>
      <WhiteSpace size="md" />
      <Card style={styles.cardContainer}>
        <Card.Header
          title={`Evento ${event.id}`}
          thumbStyle={styles.thumbIcon}
          thumb={eventIcon}
        />
        <Card.Body>
          <View style={styles.cardContent}>
            {event.data.date !== undefined ? (
              <Text style={styles.cardText}>{`Fecha: ${event.data.date}`}</Text>
            ) : null}
            <Text style={styles.cardText}>
              {`Descripción: ${event.data.event}`}
            </Text>
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
}

EventCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  event: PropTypes.shape({
    data: PropTypes.shape({
      date: PropTypes.string,
      event: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
  }).isRequired,
};