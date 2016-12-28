/**
 * Created by Alexander on 27.12.2016.
 */

import {createAction} from "redux-actions";
import {ADD_FOLDER} from "../constants/index";
import {TreeFolderModel} from "../model/TreeFolder";

export const addFolder = createAction<TreeFolderModel, string, number>(
    ADD_FOLDER,
    (name: string, folderParent: number) => (new TreeFolderModel({
        name: name,
        childrenFilder: [],
        parentFolder: folderParent,
        files: [],
    })),
);
