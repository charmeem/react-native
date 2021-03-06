import React from 'react';
import { View } from 'react-native';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { Header } from "./componets/common/header";
import reducers from './reducers';
import PrayersList from './componets/PrayersList'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
                <Header headerText="Our Lord"/>
                <PrayersList/>
            </View>

        </Provider>

    );
};

export default App;