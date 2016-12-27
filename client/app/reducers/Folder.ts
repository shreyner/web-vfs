/**
 * Created by Alexander on 27.12.2016.
 */

import {clone} from "lodash";
import {Action, handleActions} from "redux-actions";

import {ADD_FOLDER} from "../constants/index";
import {IFolder} from "../model/IFolder";

let idFolder = 1;

const initialStoreFolder: IFolder[] = [
    {
        id: 0,
        name: "Root",
        folderParent: 0,
        folderChildren: [],
        files: [],
    },
];

export const folderReducer = handleActions<IFolder[]>({
    [ADD_FOLDER]: (store: IFolder[], action: Action<IFolder>): IFolder[] => {
        let newStore = clone(store);
        let newFolder = action.payload;
        newFolder.id = idFolder++;

        newStore.push(newFolder);
        return newStore;
    },
}, initialStoreFolder);
