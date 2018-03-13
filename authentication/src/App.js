import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common'
// redirecting to ./component/common/index.js file to import header.js and Button.js file
import LoginForm from './components/LoginForm';



class App extends Component {
    state = {loggedIn: false};

    componentDidMount () {
        firebase.initializeApp({
            apiKey: "AIzaSyA8pbAenG39Sl_uH_1Vjw762JLIroLmL1g",
            authDomain: "authentication-49c83.firebaseapp.com",
            databaseURL: "https://authentication-49c83.firebaseio.com",
            projectId: "authentication-49c83",
            storageBucket: "authentication-49c83.appspot.com",
            messagingSenderId: "397317898455"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {
        if(this.state.loggedIn) {
                return (<Button>
                    Logged Out
                </Button>
                );
            }

            return <LoginForm />;
    }

    render () {
        return (
            <View>
                <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;