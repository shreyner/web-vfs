/**
 * Created by Alexander on 26.12.2016.
 */

import * as React from "react";
import {render} from "react-dom";

import {Provider} from "react-redux";
import {createStore, Store} from "redux";

import {addFolder} from "./actions/index";
import {App} from "./components/App/App";
import {IStore} from "./model/IStore";
import {folderReducer} from "./reducers/Folder";

const store: Store<IStore> = createStore(
    folderReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addFolder("Folder1", 0));
store.dispatch(addFolder("Folder2", 0));
store.dispatch(addFolder("Folder3", 0));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root-app")
);
