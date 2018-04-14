import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// applyMiddleware above is library used for redux-thunk
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        // argument {} is used for initial value if needed, applyMid.. is known as store enhancer , adding redux thunk functionality

        return (
            <Provider store={ store }>
                < Router />
            </Provider>
        );
    }
}
export default App;