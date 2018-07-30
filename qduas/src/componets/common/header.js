/* Import libraries for making component*/
import React from 'react';
import { Text, View } from 'react-native';

/* Make a component*/
const Header = (prop) => {
    const { textStyle, viewStole } = styles;

    return (
        <View style={viewStole}>
            <Text style={textStyle}>{ prop.headerText }</Text>
        </View>
    );
};

const styles = {
  viewStole: {
      // backgroundColor: '#e0ebeb',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      //paddingTop: 15,
      elevation:5
  },
  textStyle: {
    fontSize: 30,
      fontWeight:"bold",
      color:'white'
  }


};
// Make the component available to other part of the app
export { Header };