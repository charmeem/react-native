/** This component is used for rendering the list through the order by prayersList
 *  as well as implements touch event and action/action creator related to
 *  the selected prayer. another reducer 'selectReducer' is used here.
 *  NOTE: in this app we donot need action creator or action for rendering the list
 *        but only reducer storing hard code json file
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Text, StyleSheet, View} from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {

    render() {
        let colors= [ '#3598DC', '#1bbc9b', '#fe7877','#4a525f', '#acb8b8', '#FDB53F','#ad8255','#ee9748','#b8a773','#999999','#667ea0','#b95754','#e66b64'];
console.log(this.props);
        return(
        <View style={{ backgroundColor: colors[this.props.index % colors.length] }}>
            <CardSection >
                <Text style={styles.itemContainer}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        </View>
        );
    }
}
const styles=StyleSheet.create({
    itemContainer:{
        color:"white",
        fontSize:29,
        paddingLeft:15
    }
});

export default connect()(ListItem);