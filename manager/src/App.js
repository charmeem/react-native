import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyAv3HEyLcujZC2sVTZG-P0VaD0szaPFXGY",
            authDomain: "manager-541c6.firebaseapp.com",
            databaseURL: "https://manager-541c6.firebaseio.com",
            projectId: "manager-541c6",
            storageBucket: "manager-541c6.appspot.com",
            messagingSenderId: "473090049387"
        };
        firebase.initializeApp(config);

    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                < LoginForm/>
            </Provider>
        );
    }
}
export default App;