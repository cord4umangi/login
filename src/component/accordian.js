import React from 'react';
import {View} from 'react-native';
import {AccordionList} from 'accordion-collapse-react-native';
import TextComp from './textComp';
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
      <>
        <View style={{alignItems: 'center'}}>
          {/* <TextComp>{item.title}</TextComp> */}
          <TextComp
            varient={'bodyMedium'}
            customTextColor="#fa3b59"
            textTitle={item.title}
          />
        </View>
      </>
    );
  };

  const body = item => {
    return (
      <>
        <View style={{padding: 10}}>
          {/* <TextComp style={{textAlign: 'center'}}>{item.body}</TextComp> */}
          <TextComp varient={'bodyMedium'} textTitle={item.body} />
        </View>
      </>
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
