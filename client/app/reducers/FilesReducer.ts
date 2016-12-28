/**
 * Created by Alexander on 28.12.2016.
 */

import {Action, handleActions} from "redux-actions";
import {clone} from "lodash";

import {ADD_FILE} from "../constants/index";
import {FileModel} from "../model/TreeFiles";

let idFile = 1;

const initialStoreFolder: FileModel[] = [
    new FileModel({
        id: 0,
        name: "test.txt",
        body: "hello world\nhello world",
        parentFolder: 0,
    })
];

export const filesReducer = handleActions<any>({
    [ADD_FILE]: (store: FileModel[], action: Action<FileModel>) => {
        let newStore = clone(store);
        let newFile = action.payload;

        newFile.id = idFile++;

        newStore.push(newFile);

        return newStore;
    },
}, initialStoreFolder);
