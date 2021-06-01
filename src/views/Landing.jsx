/* eslint-disable object-curly-newline */
import React from 'react';
import { StatusBar, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import EventCard from '@/components/EventCard.jsx';
import KpiCard from '@/components/KpiCard.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import styles from '@/assets/styles/index.jsx';
import { WhiteSpace } from '@ant-design/react-native';

export default function Landing() {
  const navigation = useNavigation();
  const allKpis = useSelector((state) => state.kpi.storeKpis);
  const last3Events = useSelector((state) => state.event.last3Events);

  // Might have to clean this a little bit
  const kpis1 = allKpis
    .slice(0, allKpis.length / 2)
    .map((kpi) => <KpiCard navigation={navigation} kpi={kpi} key={kpi.id} />);
  const kpis2 = allKpis
    .slice(allKpis.length / 2)
    .map((kpi) => <KpiCard navigation={navigation} kpi={kpi} key={kpi.id} />);

  const services1 = allKpis
    .slice(0, allKpis.length / 2)
    .map((service) => (
      <ServiceCard navigation={navigation} service={service} key={service.id} />
    ));
  const services2 = allKpis
    .slice(allKpis.length / 2)
    .map((service) => (
      <ServiceCard navigation={navigation} service={service} key={service.id} />
    ));

  // Need endpoint for last n events.
  const events = last3Events
    .slice(-4)
    .map((event) => (
      <EventCard key={event.id} navigation={navigation} event={event} />
    ));

  return (
    <View style={styles.landingView}>
      <StatusBar backgroundColor="#052D4C" />

      <WhiteSpace size="md" />

      <View style={styles.landingHorizontalView}>
        <Text style={styles.landingSubTitle}>KPI</Text>
        <ScrollView horizontal style={styles.landingScrollView}>
          <View adjustsFontSizeToFit>
            <View style={styles.landingScrollViewChild}>{kpis1}</View>
            <View style={styles.landingScrollViewChild}>{kpis2}</View>
          </View>
        </ScrollView>
      </View>

      <WhiteSpace size="sm" />
      <View style={styles.landingHorizontalView}>
        <Text style={styles.landingSubTitle}>Indicadores de servicio</Text>
        <ScrollView horizontal style={styles.landingScrollView}>
          <View adjustsFontSizeToFit>
            <View style={styles.landingScrollViewChild}>{services1}</View>
            <View style={styles.landingScrollViewChild}>{services2}</View>
          </View>
        </ScrollView>
      </View>

      <WhiteSpace size="sm" />
      <View style={styles.landingEvents}>
        <Text style={styles.landingEventsTitle}>Últimos eventos</Text>
        <ScrollView>{events}</ScrollView>
      </View>

      <WhiteSpace size="md" />
    </View>
  );
}
