/**
 * Created by Alexander on 27.12.2016.
 */

import {combineReducers} from "redux";
import {IStore} from "../model/IStore";
import {filesReducer} from "./FilesReducer";
import {folderReducer} from "./FolderReducer";
import {selectedReducer} from "./SelectedReducer";

export default combineReducers<IStore>({
    files: filesReducer,
    folders: folderReducer,
    selected: selectedReducer,
});
