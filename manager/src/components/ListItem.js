import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {CardSection } from "./common/CardSection";
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({employee:this.props.employee});
        // Changing Scene to EmployeeEdit form, see Router.js
        //'employee' passed as props from renderRow
    }

    render() {
        const {name} = this.props.employee;
        //console.log({name});
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.textStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    textStyle: {
        paddingLeft:15,
        fontSize:20
    }
};

export default ListItem;