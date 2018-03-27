import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {

    }
    render() {
        const { title, id } = this.props.library;
        const { titleStyle } = styles;
        /* Using View as more then one card section is used */
        return (
            <TouchableWithoutFeedback
                onPress ={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize:18,
        paddingLeft:10
    }
};
/* Created to compare selectedID with  stored id in the library*/
const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    };
}
export default connect(mapStateToProps, actions)(ListItem);
//export default connect(null, actions)(ListItem);

/* understanding connect arguments:
   null means instead mapStateToProp return null.
   actions does two things.
    1. It dispatches action creator from action/index file via Reducers to Redux Store
    2. It passes action objects as a props to ListItem function above
 */