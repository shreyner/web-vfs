/**
 * Created by Alexander on 27.12.2016.
 */

import {combineReducers} from "redux";
import {IStore} from "../model/IStore";
import {folderReducer} from "./Folder";

export default combineReducers<IStore>({
    folder: folderReducer,
});
