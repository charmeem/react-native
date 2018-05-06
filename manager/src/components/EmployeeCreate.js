import React, { Component } from 'react';
import { connect } from 'react-redux';
// connect is a 2 way function to connect react components to the Redux and Action creators
import { Card, CardSection,Button} from "./common";
import { employeeUpdate, createEmployee } from '../actions';
// NOTE: employeeUpdate is name of action creator within EmployeeActions file
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.createEmployee({name, phone, shift: shift||'Monday'});    //action creator send to redux
}
    render(){
        //console.log(this.props.employee);
        return (
            <Card>

                <EmployeeForm
                    {...this.props}   /* passing on all props of this component to the EmployeeForm */
                />
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


// This function will pass the email & password property of state object from Redux
// into login component above
const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeForm;
    // employeeForm is key of EmployeeFormReducer defined in index file

    return { name, phone, shift };
};

export default connect( mapStateToProps, { employeeUpdate, createEmployee })(EmployeeCreate);