import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const OrderingSelection = ({ selectedOrdering, onOrderingChange }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedOrdering}
        onValueChange={onOrderingChange}
        style={styles.picker}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 0
  },
  picker: {
    flex: 1,
  },
});

export default OrderingSelection;
