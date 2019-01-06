import React from 'react';
import { Button,StyleSheet, View } from 'react-native';
import {Constants} from 'expo';
import ContactsList from '../ContactsList';

export default class ContactListScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle:'Contacts List',
        headerRight: <Button title="Add" color='#a41034' onPress={()=>{
            navigation.navigate('AddContact')
        }}/>
    });

    state={
        showContacts:true,
    }
    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    handleSelectContact = contact => {
        this.props.navigation.push('ContactDetails', contact)
    }
    render() {

        return (
            <View style={styles.container}>

                {this.state.showContacts && (
                    <ContactsList
                        contacts={this.props.screenProps.contacts}
                        onSelectContact={this.handleSelectContact}
                    />
                )}
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});