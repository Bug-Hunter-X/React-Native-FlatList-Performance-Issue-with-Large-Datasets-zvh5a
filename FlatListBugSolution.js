```javascript
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ItemComponent = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text>{item.text}</Text>
  </View>
);

const FlatListBugSolution = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const windowSize = 20; // Number of items to render at once

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    // Simulate fetching data from an API
    await new Promise(resolve => setTimeout(resolve, 500));
    const newData = Array.from({ length: windowSize }, (_, i) => ({
      id: i + page * windowSize,
      text: `Item ${i + page * windowSize}`
    }));
    setData([...data, ...newData]);
    setLoading(false);
  };

  const handleEndReached = () => {
    setPage(page + 1);
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ItemComponent item={item} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <Text>Loading...</Text> : null}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListBugSolution;
```