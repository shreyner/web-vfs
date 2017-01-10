/**
 * Created by Alexander on 27.12.2016.
 */

import {clone} from "lodash";
import {Action, handleActions} from "redux-actions";

import {ADD_FOLDER} from "../constants/index";
import {FolderModel} from "../model/FolderModel";

let idFolder = 1;

const initialStoreFolder: FolderModel[] = [
    new FolderModel({id: 0, name: "Root"}),
];

export const folderReducer = handleActions<FolderModel[]>({
    [ADD_FOLDER]: (store: FolderModel[], action: Action<FolderModel>): FolderModel[] => {
        let newStore = clone(store);
        let newFolder = action.payload;

        newFolder.id = idFolder++;
        newStore.push(newFolder);
        return newStore;
    },
}, initialStoreFolder);
