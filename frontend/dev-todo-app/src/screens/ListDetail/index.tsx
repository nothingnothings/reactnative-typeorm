import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const ListDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { listId } = route.params;

  // Sample tasks for the specific list (replace with dynamic data)
  const tasks = [
    { id: '1', name: 'Task 1', listId },
    { id: '2', name: 'Task 2', listId },
    { id: '3', name: 'Task 3', listId },
  ];

  return (
    <View>
      <Text>List ID: {listId}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('task', { listId, taskId: item.id })
            }
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListDetail;
