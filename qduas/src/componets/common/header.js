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
      backgroundColor: '#e0ebeb',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation:5
  },
  textStyle: {
    fontSize: 20
  }


};
// Make the component available to other part of the app
export { Header };