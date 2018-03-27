import React, { Component } from 'react';
import { ListView } from 'react-native';
// ListView is a tool to avoid memory conjestion by creaing component for the items
// only visible on the screen. Rather then creating components for all the items.

import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
        //this.props.libraries is hooked from mapStateToProps function below
    }

    // Renders single library
    renderRow(library) {
        console.log(library);
        return (
            <ListItem library={library} />
        );
    }

    render() {
        console.log(this.props);
 //console.log(this.dataSource);
        return (
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps =  state => {
    return {libraries: state.libraries}; // libraries key is returned as a prop in LibraryListClass
};

export default connect(mapStateToProps)(LibraryList);