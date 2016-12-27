/**
 * Created by Alexander on 27.12.2016.
 */

import {createAction} from "redux-actions";
import {ADD_FOLDER} from "../constants/index";
import {IFolder} from "../model/IFolder";

export const addFolder = createAction<IFolder, string, number>(
    ADD_FOLDER,
    (name: string, folderParent: number) => ({
        name: name,
        folderChildren: [],
        folderParent: folderParent,
        files: [],
    })
);
