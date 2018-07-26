import React from 'react';
import { View } from 'react-native';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { Header } from "./componets/common/header";
import reducers from './reducers';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="O Allah, our Lord"/>
            </View>

        </Provider>

    );
};

export default App;