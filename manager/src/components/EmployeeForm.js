import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from "./common";
import {EMPLOYEE_UPDATE} from "../actions/types";
import {employeeUpdate} from "../actions/EmployeeActions";

class EmployeeForm extends Component {
    render () {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Mubashir"
                        value={this.props.name} /* this value rendered from redux via mapToStateProps */
                        onChangeText={text => this.props.employeeUpdate({ prop:'name', value:text})}
                        /* employeeUpdate action creater called from here directly*/
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="0321 52602 82"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop:'phone', value:text})}
                    />
                </CardSection>

                <CardSection >
                    <Text style={styles.pickerStyle}> Shift </Text>

                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop:'shift', value:day})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles={
    pickerStyle:{
        fontSize:18,
        paddingLeft:20,
        paddingRight:45,
        paddingTop:10
    }
};

//Take states from employeeForm Reducer and pass it on to EmployeeForm component
const mapStateToProps = (state)=> {
    const { name, phone, shift} = state.employeeForm;
    return { name, phone, shift };
};
export default connect (mapStateToProps, {employeeUpdate})(EmployeeForm);