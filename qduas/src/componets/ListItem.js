/** This component is used for rendering the list through the order by prayersList
 *  as well as implements touch event and action/action creator related to
 *  the selected prayer. another reducer 'selectReducer' is used here.
 *  NOTE: in this app we donot need action creator or action for rendering the list
 *        but only reducer storing hard code json file
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager,
    Platform

} from 'react-native';

import {CardSection} from './common';
//import * as actions from '../actions';
import { selectPrayer} from "../actions/prayers";
/* Action creator */

class ListItem extends Component {



    componentWillUpdate(){

        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
            LayoutAnimation.linear();
        }
    }

    renderDescription() {
        const { library, expand } = this.props;
        if ( expand ) {
            return (
                <CardSection style={styles.cardSectionNew}>
                    <Text style={styles.description}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        // let colors= [ '#3598DC', '#1bbc9b', '#fe7877','#4a525f', '#acb8b8', '#FDB53F','#ad8255','#ee9748','#b8a773','#999999','#667ea0','#b95754','#e66b64'];
        // let colors= [ '#7ffef3','#57bec7', '#86ff93', '#fffc95', '#fe5335', '#c1333f', '#cec6bb', '#ebe3d6', '#3c3c3c'];
        // let colors= [ '#e95c2f', '#edca54','#48b07b','#5b5147','#77f683'];
        // let colors= [ '#b9cad1', '#cfcdd0','#d2cdc7','#dfd2a5','#db9068','#c76a62'];
        // let colors= ['#FDB53F','#fffc95','#b9cad1','#48b07b', '#cec6bb','#db9068','#c1333f', '#dfd2a5','#3c3c3c','#fe7877','#ebe3d6','#4a525f' ,'#77f683','#acb8b8', '#667ea0','#b95754'];
        let colors=['#a5c0ff','#ff963f','#04363d','#ffc6bf','#ffc68f','#100900','#c6d1d2','#6f06cf','#fff3f0','#01cfff','#fffcc6','#eee700','#ff5a44','#bfffd0','#eb720d','#145599', "#0de1ff", '#ffd882', '#82ffb8', '#d189ff']

        const {title, id, description} = this.props.library;

        /* pointing to mapDispatchToProps */

        nowSelectPrayer = () => {
            this.props.onSelectPrayer(id);
        };



        return(
            <TouchableWithoutFeedback
              onPress = { nowSelectPrayer}
            >
                <View style={{ backgroundColor: colors[this.props.index % colors.length],borderRadius:21 }}>

                    <CardSection >
                        <Text style={styles.itemContainer}>
                            {title}
                        </Text>
                    </CardSection>

                    {this.renderDescription()}

                </View>
            </TouchableWithoutFeedback>
            );
    }
}

const styles=StyleSheet.create({
    itemContainer:{
        color:"black",
        textShadow:'none',
        fontSize:29,
        padding:15
    },
    description:{
        flex:1,
        fontSize:33,
        padding:10,
        // color:"white",
        backgroundColor:'white'
    },

});

/* dispatch action creator selectPrayer*/
const mapDispatchToProps = dispatch => {
    return {
        onSelectPrayer : id => dispatch(selectPrayer(id))
    };
};

/* Receive state from Redux store */
const mapStateToProps = (state, ownProps) => {
    const expand = ownProps.library.id === state.selectedPrayerId;
    return { expand };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);