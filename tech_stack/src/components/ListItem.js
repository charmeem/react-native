import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {

        console.log(this.props);
        const {library, expanded } = this.props;
        if (expanded) {
            return (
                <Text>
                    {library.description}
                </Text>
            );
        }

    }

    render() {
        //console.log(this.props);
        const { id, title } = this.props.library;
        /* library state is a prop received from LibraryList component */

        const { titleStyle } = styles;

        /* selectLibrary below is action creator that sends action to the reducer while onPress */
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
        );
    }
}

const styles = {
    titleStyle: {
        fontSize:18,
        paddingLeft:10
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

// selectedLibraryId is a property of object fetched from
//   SelectionReducer(see index.js) and send as a prop to ListItem above


export default connect(mapStateToProps, actions)(ListItem);

//export default connect(null, actions)(ListItem);
//null means instead of using mapStateToProp return null.

/* understanding connect arguments:
   actions does two things.
    1. It dispatches action creator from action/index file via Reducers to Redux Store
    2. It passes action object selectLibrary as a props to ListItem function above

       So the above ListItem function receives three props:
       - one 'library' from libraryReducer
       - second is 'selectedLibrary' ID from SelectionReducer and
       - third is 'selectLibrary' ,an  action from action creator
 */