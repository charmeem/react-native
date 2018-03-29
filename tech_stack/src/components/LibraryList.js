import React, { Component } from 'react';
import { ListView } from 'react-native';

/* ListView is a tool to avoid memory congestion by creating component for the items
   only visible on the screen. Rather then creating components for all the items.
*/

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
    // this library points to ListView libraries
    renderRow(library) {
        return (
            <ListItem library={library} />
        );
    }

    render() {
        return (
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
        );
    }
}
// state.libraries rendered from libraryReducer
// and is returned as a prop to libraryList Class above
const mapStateToProps =  state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);