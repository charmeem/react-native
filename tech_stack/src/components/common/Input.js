import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{ label }</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};
const styles = {
    containerStyle: {
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
      fontSize:18,
      paddingLeft:20,
      flex:1
    },
    inputStyle: {
        color: '#000',
        flex:2,
        fontSize:18
    }
};
export { Input };

