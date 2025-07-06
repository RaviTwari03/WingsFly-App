import * as React from 'react';
import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  ViewStyle, 
  TextStyle,
  ScrollViewProps
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatePicker, TaskItem, BottomDrawer } from '@components';

interface Task {
  id: string;
  title: string;
  time: string;
  tags: string[];
  completed: boolean;
  icon: string;
}

interface Styles {
  container: ViewStyle;
  scrollView: ViewStyle;
  header: ViewStyle;
  appName: TextStyle;
  headerIcons: ViewStyle;
  icon: ViewStyle;
  quoteContainer: ViewStyle;
  quoteTitle: TextStyle;
  quoteText: TextStyle;
  progressContainer: ViewStyle;
  progressBar: ViewStyle;
  progressFill: ViewStyle;
  progressText: TextStyle;
  tasksContainer: ViewStyle;
  addButton: ViewStyle;
}

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Schedule a meeting with Harshit Sir',
      time: '09:00 AM',
      tags: ['Task', 'Important'],
      completed: false,
      icon: 'briefcase-outline',
    },
    {
      id: '2',
      title: 'Complete the project',
      time: '12/31',
      tags: ['Habit', 'Must'],
      completed: true,
      icon: 'checkmark-done-outline',
    },
  ];

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.appName}>WingsFly</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="search" size={24} style={styles.icon} />
            <Ionicons name="calendar" size={24} style={styles.icon} />
            <Ionicons name="information-circle-outline" size={24} style={styles.icon} />
          </View>
        </View>

        <DatePicker selectedDate={selectedDate} onDateSelect={setSelectedDate} />

        <View style={styles.quoteContainer}>
          <Text style={styles.quoteTitle}>Today's Quote</Text>
          <Text style={styles.quoteText}>"You must do the things, you think you cannot do."</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '65%' }]} />
            </View>
            <Text style={styles.progressText}>65%</Text>
          </View>
        </View>

        <View style={styles.tasksContainer}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={toggleDrawer}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      <BottomDrawer isVisible={isDrawerVisible} onClose={toggleDrawer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  } as TextStyle,
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
    color: '#333',
  } as ViewStyle,
  quoteContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  } as ViewStyle,
  quoteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  } as TextStyle,
  quoteText: {
    fontSize: 14,
    color: '#888',
    lineHeight: 22,
    fontStyle: 'italic',
  } as TextStyle,
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  } as ViewStyle,
  progressBar: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginTop: 10,
    overflow: 'hidden',
  } as ViewStyle,
  progressFill: {
    height: '100%',
    width: '70%',
    backgroundColor: '#6c5ce7',
    borderRadius: 5,
  } as ViewStyle,
  progressText: {
    textAlign: 'right',
    color: '#666',
    fontSize: 12,
  } as TextStyle,
  tasksContainer: {
    marginBottom: 80,
  } as ViewStyle,
  addButton: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: '#6c5ce7',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6c5ce7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  } as ViewStyle,
});

export default HomeScreen;
