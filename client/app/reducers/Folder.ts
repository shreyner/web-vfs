/**
 * Created by Alexander on 27.12.2016.
 */

import {clone} from "lodash";
import {Action, handleActions} from "redux-actions";

import {ADD_FOLDER} from "../constants/index";
import {IFolder} from "../model/IFolder";

export const folderReducer = handleActions<IFolder[]>({
    [ADD_FOLDER]: (store: IFolder[], action: Action<IFolder>): IFolder[] => {
        let newStore = clone(store);

        newStore.push(action.payload);
        return newStore;
    },
}, []);
