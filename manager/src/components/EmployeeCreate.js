import React, { Component } from 'react';
import { connect } from 'react-redux';
// connect is a 2 way function to connect react components to the Redux and Action creators

import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button} from "./common";
import { employeeUpdate } from '../actions';
// NOTE: employeeUpdate is name of action creator within EmployeeActions file

class EmployeeCreate extends Component {

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

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>


            </Card>
        );
    }
}

// This function will pass the email & password property of state object from Redux
// into login component above
const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeForm;
    // employeeForm is key of EmployeeFormReducer defined in index file

    return { name, phone, shift };
};

export default connect( mapStateToProps, { employeeUpdate })(EmployeeCreate);