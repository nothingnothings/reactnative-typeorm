import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Lists = () => {
  const navigation = useNavigation();

  // Sample data for lists (replace with dynamic data)
  //   const lists = [
  //     { id: '1', name: 'List 1' },
  //     { id: '2', name: 'List 2' },
  //     { id: '3', name: 'List 3' },
  //   ];

  // axios request:

  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists();
  }, []);

  const getLists = async () => {
    let response;

    
    try {
      response = await axios.get('/lists');
    } catch (error) {
      console.error('Error fetching lists:', error);
    }

    if (response) {
      setLists(response.data);
    }
  };

  return (
    <View>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('list', { listId: item.id })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Lists;
