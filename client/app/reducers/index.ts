/**
 * Created by Alexander on 27.12.2016.
 */

import {combineReducers} from "redux";
import {IStore} from "../model/IStore";
import {filesReducer} from "./FilesReducer";
import {folderReducer} from "./FolderReducer";

export default combineReducers<IStore>({
    files: filesReducer,
    folders: folderReducer,
});
