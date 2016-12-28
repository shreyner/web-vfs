/**
 * Created by Alexander on 27.12.2016.
 */

import {clone} from "lodash";
import {Action, handleActions} from "redux-actions";

import {ADD_FOLDER} from "../constants/index";
import {TreeFolderModel} from "../model/TreeFolder";

let idFolder = 1;

const initialStoreFolder: TreeFolderModel[] = [
    new TreeFolderModel({id: 0, name: "Root", childrenFilder: [], files: []}),
];

export const folderReducer = handleActions<TreeFolderModel[]>({
    [ADD_FOLDER]: (store: TreeFolderModel[], action: Action<TreeFolderModel>): TreeFolderModel[] => {
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
