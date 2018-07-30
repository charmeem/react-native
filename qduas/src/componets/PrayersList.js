import React, { Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

class PrayersList extends Component {

    renderItem({item, index}) {
        return <ListItem
                library={item}
                index={index}
               />;
    }

    render() {
        console.log(this.props);
        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.prayers}
                renderItem={this.renderItem}

                // Another way of implementation
                // renderItem={({ item })=> {
                //     // console.log(item);
                //     return <ListItem library={item}/>
                // }}

            />

        );
    }
}
const styles=StyleSheet.create({
   listContainer:{
       // flex:1,
       // padding:26,
       //backgroundColor:"#ebebeb"
       //margin:2
   }
});
// Fetching state object from Redux stoe
const mapStateToProps = state => {
    // console.log(state);
    return { prayers: state.prayers };
}

export default connect(mapStateToProps)(PrayersList);