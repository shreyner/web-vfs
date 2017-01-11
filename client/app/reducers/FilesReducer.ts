/**
 * Created by Alexander on 28.12.2016.
 */

import {Action, handleActions} from "redux-actions";
import {clone, findIndex} from "lodash";

import {ADD_FILE, DELETE_ITEM} from "../constants/index";
import {FileModel} from "../model/FileModel";
import {TypeSelect} from "../model/Selected";

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
    [DELETE_ITEM]: (store: FileModel[], action: Action<{id: number, typeItem: TypeSelect}>) => {
      if(action.payload.typeItem === TypeSelect.File){
          let newStore = clone(store);
          newStore.splice(findIndex(store, {id: action.payload.id}),1);
          return newStore;
      } else {
          return store;
      }
    },
}, initialStoreFolder);
