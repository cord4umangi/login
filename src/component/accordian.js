import React from 'react';
import {View, Text} from 'react-native';
import {AccordionList} from 'accordion-collapse-react-native';

const Accordion = () => {
  const list = [
    {
      id: 1,
      title: 'Getting Started',
      body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content',
    },
    {
      id: 2,
      title: 'Components',
      body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
    },
  ];

  const head = item => {
    return (
      <View bordered style={{alignItems: 'center'}}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const body = item => {
    return (
      <View style={{padding: 10}}>
        <Text style={{textAlign: 'center'}}>{item.body}</Text>
      </View>
    );
  };

  return (
    <AccordionList
      list={list}
      header={head}
      body={body}
      keyExtractor={item => `${item.id}`}
    />
  );
};

export default Accordion;
