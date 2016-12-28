/**
 * Created by Alexander on 27.12.2016.
 */

import {clone} from "lodash";
import {Action, handleActions} from "redux-actions";

import {ADD_FOLDER} from "../constants/index";
import {FolderModel} from "../model/FolderModel";

let idFolder = 1;

const initialStoreFolder: FolderModel[] = [
    new FolderModel({id: 0, name: "Root", childrenFilder: [], files: []}),
];

export const folderReducer = handleActions<FolderModel[]>({
    [ADD_FOLDER]: (store: FolderModel[], action: Action<FolderModel>): FolderModel[] => {
        let newStore = clone(store);
        let newFolder = action.payload;

        newFolder.id = idFolder++;

        store.forEach(itemFolder => {
            if (itemFolder.id === action.payload.parentFolder) {
                itemFolder.childrenFilder.push(newFolder.id);
            }
        });

        newStore.push(newFolder);
        return newStore;
    },
}, initialStoreFolder);
