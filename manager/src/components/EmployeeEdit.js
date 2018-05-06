import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from "./EmployeeForm";
import {Card, CardSection, Button} from "./common";
import {employeeUpdate, employeeSave} from '../actions';

class EmployeeEdit extends Component {
    /**
     * To populate pressed employee data from listItem here in this form, we have 2 approaches
     * 1. Create new action reducer
     * 2. Use following approach shown in componentWIllMount
     *    - this will take all existing employee properties and stuff in employeeUpdate reducer
     *    - this.props.employee comes as a prop from listItem
     *    - employeeUpdate is used here which is an existing action creator
     */
     componentWillMount () {
         _.each(this.props.employee, (value, prop)=> {
            this.props.employeeUpdate({prop, value});
         });
    }
    onButtonPress () {
         const {name, phone, shift} = this.props;//updated props carried from employeeForm via mapSateToProps

        /* A new action creator that saves our new data to firebase */
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});

    }
    render() {
        return(
            <Card>
            <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm; //Getting stored values from EmployeeFormReducer
    return {name, phone, shift};  // linking fetched values to our component above
};

export default connect(mapStateToProps, {employeeSave, employeeUpdate})(EmployeeEdit);