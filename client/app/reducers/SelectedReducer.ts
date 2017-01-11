/**
 * Created by Alexander on 28.12.2016.
 */

import {Action, handleActions} from "redux-actions";
import {SELECT_ITEM} from "../constants/index";
// import {ISelected, TypeSelect} from "../model/Selected";
import {FileModel} from "../model/FileModel";
import {FolderModel} from "../model/FolderModel";

// const initialStoreSelected: ISelected = {id: 0, folderId: 0, type: TypeSelect.Folder};

export const selectedReducer = handleActions<FileModel | FolderModel>({
    [SELECT_ITEM]: (store: FileModel | FolderModel, action: Action<FileModel | FolderModel>) => {
        return action.payload;
    },
}, new FolderModel());

