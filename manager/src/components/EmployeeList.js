import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Text, View, ListView } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {

    //employeesFetch action creator trigger from this lifecycle component
    componentWillMount(){

        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    /*
     * this.props.employees might take some time to be fetched
     * therefore following lifecycle function is used to house datasource
     * to make sure that new employees props are received from redux via
     * mapStateToProps method
     */
    componentWillReceiveProps(nextProps){

        this.createDataSource(nextProps);

    }

    /*
     * This function is used to take benifit of the use case when
     * employeelist is already loaded in this.props and user go to add new employee form
     * and come back , then we would prefer to use datasource from this.props
     * instead of nextProps
     */
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }
    render() {
        return (
          <View>
              <Text>Babloo Mufti</Text>
              <Text>Babloo Mufti</Text>
              <Text>Babloo Mufti</Text>
              <Text>Babloo Mufti</Text>
              <Text>Babloo is here</Text>
          </View>
        );
    }

}

const mapStateToProps = state => {
 /*
  * converting state.employees object to array as
  * dataSource needs array to work with
  * we installed lodash for this purpose
  * .map does the iteration of key value pair of state.employees object
  * and then put that in an array
  */

  const employees = _.map(state.employees, (val, uid)=>{
     return { ...val, uid};
  });
  return { employees };   // This employees is now converted into array
};

export default connect( mapStateToProps, { employeesFetch })(EmployeeList);