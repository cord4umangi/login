import React from 'react';
import {View, Text} from 'react-native';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
const CollapseExpand = () => {
  // https://www.npmjs.com/package/accordion-collapse-react-native
  return (
    <>
      <View>
        <Collapse>
          <CollapseHeader>
            <Text>Home</Text>
          </CollapseHeader>
          <CollapseBody>
            {/* <ListItem> */}
            <Text>Aaron Bennet</Text>
            {/* </ListItem> */}
            {/* <ListItem> */}
            <Text>Claire Barclay</Text>
            {/* </ListItem> */}
            {/* <ListItem last> */}
            <Text>Kelso Brittany</Text>
            {/* </ListItem> */}
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <Text>Contact</Text>
          </CollapseHeader>
          <CollapseBody>
            {/* <ListItem> */}
            <Text>Aaron Bennet</Text>
            {/* </ListItem> */}
            {/* <ListItem> */}
            <Text>Claire Barclay</Text>
            {/* </ListItem> */}
            {/* <ListItem last> */}
            <Text>Kelso Brittany</Text>
            {/* </ListItem> */}
          </CollapseBody>
        </Collapse>
      </View>
    </>
  );
};

export default CollapseExpand;
