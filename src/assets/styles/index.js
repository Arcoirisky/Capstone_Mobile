import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Landing
  landingView: {
    flex: 1,
    backgroundColor: '#eaedf5',
  },
  kpiView: {
    marginHorizontal: 8,
    backgroundColor: '#eaedf5',
  },
  kpiTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 11,
  },
  kpiScroll: {
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  kpiCardsView: {
    flexDirection: 'row',
  },
  serviceView: {
    marginHorizontal: 18,
  },
  serviceTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
  },
  eventsTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 20,
  },
  // General Screen Container
  generalScreensContainer: {
    backgroundColor: '#eaedf5',
  },
  imagen: {
    width: 300,
    height: 100,
  },
  informationIcon: {
    alignSelf: 'flex-end',
  },
});

export default styles;