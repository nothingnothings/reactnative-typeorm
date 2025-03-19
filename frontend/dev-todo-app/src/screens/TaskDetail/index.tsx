import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TaskDetail = () => {
  const route = useRoute();
  const { listId, taskId } = route.params;

  // Sample task data (replace with dynamic data)
  const task = {
    id: taskId,
    name: `Task ${taskId}`,
    description: `Description of task ${taskId}`,
    listId,
  };

  return (
    <View>
      <Text>Task ID: {task.id}</Text>
      <Text>List ID: {task.listId}</Text>
      <Text>Name: {task.name}</Text>
      <Text>Description: {task.description}</Text>
    </View>
  );
};

export default TaskDetail;
