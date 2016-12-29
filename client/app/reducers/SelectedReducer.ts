/**
 * Created by Alexander on 28.12.2016.
 */

import {Action, handleActions} from "redux-actions";
import {SELECT_ITEM} from "../constants/index";
import {ISelected, TypeSelect} from "../model/Selected";

const initialStoreSelected: ISelected = {id: 0, folderId: 0, type: TypeSelect.Folder};

export const selectedReducer = handleActions<ISelected>({
    [SELECT_ITEM]: (store: ISelected, action: Action<ISelected>) => {
        return action.payload;
    },
}, initialStoreSelected);

