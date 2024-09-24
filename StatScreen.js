import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './Src/Components/CustomButton';
import { CustomTextInput } from './Src/Components/CustomTextInput';

const screenWidth = Dimensions.get('window').width;

const StatScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    labels: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0], // Start with empty data
        color: (opacity = 1) => `rgba(88, 94, 255, ${opacity})`,
      },
      {
        data: [0, 0, 0, 0, 0], // Start with empty data
        color: (opacity = 1) => `rgba(247, 162, 97, ${opacity})`,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = {
          labels: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan'],
          datasets: [
            {
              data: prevData.datasets[0].data.map(val => Math.min(val + Math.random() * 10, 100)),
              color: (opacity = 1) => `rgba(88, 94, 255, ${opacity})`,
            },
            {
              data: prevData.datasets[1].data.map(val => Math.min(val + Math.random() * 10, 100)),
              color: (opacity = 1) => `rgba(247, 162, 97, ${opacity})`,
            },
          ],
        };
        return newData;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.inner}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Heart Rate</Text>
          </View>
          <View style={styles.chartContainer}>
            <LineChart
              data={data}
              width={screenWidth - 32}
              height={220}
              yAxisLabel=""
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={styles.chart}
            />
            <View style={styles.chartLegend}>
              <View style={styles.chartLegendItem}>
                <View
                  style={[
                    styles.chartLegendCircle,
                    { backgroundColor: 'rgba(88, 94, 255, 1)' },
                  ]}
                />
                <Text style={styles.chartLegendText}>Weeks</Text>
              </View>
              <View style={styles.chartLegendItem}>
                <View
                  style={[
                    styles.chartLegendCircle,
                    { backgroundColor: 'rgba(247, 162, 97, 1)' },
                  ]}
                />
                <Text style={styles.chartLegendText}>Years</Text>
              </View>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <View style={styles.statTitleContainer}>
                <Text style={styles.statTitle}>Steps</Text>
                <Entypo name="pencil" size={16} color="#c6c6c6" />
              </View>
              <View style={styles.statValueContainer}>
                <View style={styles.statCircle}>
                  <Text style={styles.statCircleText}>65%</Text>
                </View>
                <Text style={styles.statValue}>3215 Steps</Text>
              </View>
            </View>
            <View style={styles.stat}>
              <View style={styles.statTitleContainer}>
                <Text style={styles.statTitle}>Water</Text>
                <FontAwesome name="tint" size={16} color="#c6c6c6" />
              </View>
              <View style={styles.statValueContainer}>
                <View style={styles.statWater}>
                  <View style={styles.statWaterBar} />
                </View>
                <Text style={styles.statValue}>6 Cups</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <CustomTextInput
              mainStyle={{ backgroundColor: 'white', width: '100%', padding: 12, borderRadius: 10 }}
              viewStyle={{ padding: 12 }}
              setPlaceholder="StatScreen TextInput"
              setMaxlength={6}
              setPlaceholderTextColor="grey"
              setTextColor="black"
              setAutoComplete="off"
            />
            <CustomButton
              mainStyle={{ marginTop: 12 }}
              onPress={() => navigation.navigate('Dashboard')}
              ButtonTitle="Show More"
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  inner: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 80, // Ensure there's enough space for footer
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartContainer: {
    paddingHorizontal: 1,
    marginTop: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  chartLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartLegendCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  chartLegendText: {
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  stat: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 16,
    borderRadius: 16,
    elevation: 2,
  },
  statTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statValueContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  statCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statCircleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  statValue: {
    fontSize: 12,
    marginTop: 8,
  },
  statWater: {
    width: 50,
    height: 100,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8,
  },
  statWaterBar: {
    width: '80%',
    height: '50%',
    backgroundColor: '#48a9ff',
    borderRadius: 4,
  },
  footer: {
    paddingHorizontal: 1,
    paddingVertical: 10,
  },
});

export default StatScreen;
