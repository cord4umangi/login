import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
const Multiselect = () => {
  // https://github.com/hoaphantn7604/react-native-element-dropdown
  const [selected, setSelected] = useState([]);

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  return (
    <MultiSelect
      style={styles.dropdown}
      itemTextStyle={styles.itemTextStyle}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={selected}
      onChange={item => {
        setSelected(item);
      }}
      selectedStyle={styles.selectedStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {padding: 16},
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    color: '#000000',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000000',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000000',
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
    color: '#000000',
  },
  itemTextStyle: {
    color: '#000000',
  },
});

export default Multiselect;
