import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';
import tasks from './tasks.json';

const TaskListScreen = ({navigation:  string}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('Ver Tarea', { task: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TaskListScreen;
