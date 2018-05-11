/* This is Modal- a pop-up window */

import React from 'react';
import {Text, View, Modal} from 'react-native';
import { CardSection} from "./CardSection";
import { Button} from "./Button";
//we are not importing from ./common directory to avoid cyclic reloading.

const Confirm = ({children, visible, onAccept, onDecline})=> {
    const {containerStyle, cardStyle, textStyle} = styles;
    return (
      <Modal
          animationType="slide"
          transparent
          visible={visible}
          onRequestClose={()=>{}}
      >
          <View style={containerStyle}>
          <CardSection style={cardStyle}>
              <Text style={textStyle}>
                  {children}
              </Text>
          </CardSection>

          <CardSection>
              <Button onPress={onAccept}>
                  Yes
              </Button>

              <Button onPress={onDecline}>
                  No
              </Button>
          </CardSection>
          </View>
      </Modal>
    );
};
const styles={
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        flex:1,
        position:'relative',
        justifyContent:'center'
    },
    textStyle:{
        flex:1,
        textAlign:'center',
        fontSize:18,
        lineHeight:40
    },
    cardStyle:{
        justifyContent:'center'
    }

};

export { Confirm };