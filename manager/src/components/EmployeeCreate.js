import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
// connect is a 2 way function to connect react components to the Redux and Action creators

import { Card, CardSection, Input, Button} from "./common";
import { employeeUpdate, createEmployee } from '../actions';
// NOTE: employeeUpdate is name of action creator within EmployeeActions file

class EmployeeCreate extends Component {
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.createEmployee({name, phone, shift: shift||'Monday'});    //action creator send to redux
}
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Mubashir"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop:'name', value:text})}
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

                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>


            </Card>
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

// This function will pass the email & password property of state object from Redux
// into login component above
const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeForm;
    // employeeForm is key of EmployeeFormReducer defined in index file

    return { name, phone, shift };
};

export default connect( mapStateToProps, { employeeUpdate, createEmployee })(EmployeeCreate);