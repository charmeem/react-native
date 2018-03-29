import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';   // react-redux library binds redux with react
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';   // importing common components from old Projects
import LibraryList from './components/LibraryList';  // component that fetches data from radux

const App = () => {
    return (

        /* Provider glues redux with react-native
         Provider as per rules cannot have Multiple childs
         Thats why we are enclosing all coming components under single View Tag. */

        <Provider store={createStore(reducers)}>
            < View style={{ flex:1 }}>
                <Header headerText= " Mufti Tech Stack " />
                <LibraryList/>
            </View>
        </Provider>
     );
};

export default App;
