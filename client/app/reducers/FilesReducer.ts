/**
 * Created by Alexander on 28.12.2016.
 */
import {Action, handleActions} from "redux-actions";
import {clone} from "lodash";
import {ADD_FILE, DELETE_ITEM, SAVE_FILE} from "../constants/index";
import {FileModel} from "../model/FileModel";
import {FolderModel} from "../model/FolderModel";

let idFile = 1;

const initialStoreFolder: FileModel[] = [
    new FileModel({
        id: 0,
        name: "test.txt",
        body: "hello world\nhello world",
        parentFolder: 0,
    })
];

export const filesReducer = handleActions<FileModel[]>({
    [ADD_FILE]: (store: FileModel[], action: Action<FileModel>) => {
        let newStore = clone(store);
        let newFile = action.payload;

        newFile.id = idFile++;

        newStore.push(newFile);

        return newStore;
    },
    [DELETE_ITEM]: (store: FileModel[], action: Action<FileModel | FolderModel>) => {
        if (action.payload instanceof FileModel) {
            let newStore = clone(store);
            newStore.splice(store.indexOf(action.payload), 1);
            return newStore;
        } else {
            return store;
        }
    },
    [SAVE_FILE]: (store: FileModel[], action: Action<{fileItem: FileModel, name: string, body: string}>) => {
        let newStore = clone(store);
        let indexFile = store.indexOf(action.payload.fileItem);

        newStore[indexFile].name = action.payload.name;
        newStore[indexFile].body = action.payload.body;

        return newStore;
    }
}, initialStoreFolder);
