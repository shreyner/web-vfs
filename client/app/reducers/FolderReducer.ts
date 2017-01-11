/**
 * Created by Alexander on 27.12.2016.
 */

import {clone, findIndex, isUndefined} from "lodash";
import {Action, handleActions} from "redux-actions";

import {ADD_FOLDER, DELETE_ITEM} from "../constants/index";
import {FolderModel} from "../model/FolderModel";
import {TypeSelect} from "../model/Selected";

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
    [DELETE_ITEM]: (store: FolderModel[], action: Action<{id: number, typeItem: TypeSelect}>) => {
        if(action.payload.typeItem === TypeSelect.Folder){
            let newStore = clone(store);
            let indexFolder = findIndex(store, {id: action.payload.id});

            if(!isUndefined(store[indexFolder].parentFolder)){
                newStore.splice(indexFolder,1);
            }

            return newStore;
        } else {
            return store;
        }
    },
}, initialStoreFolder);
