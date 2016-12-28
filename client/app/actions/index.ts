/**
 * Created by Alexander on 27.12.2016.
 */

import {createAction} from "redux-actions";
import {ADD_FOLDER, ADD_FILE} from "../constants/index";
import {TreeFolderModel} from "../model/TreeFolder";
import {FileModel} from "../model/TreeFiles";

export const addFolder = createAction<TreeFolderModel, string, number>(
    ADD_FOLDER,
    (name: string, folderParent: number) => (new TreeFolderModel({
        name: name,
        childrenFilder: [],
        parentFolder: folderParent,
        files: [],
    })),
);

export const addFile = createAction<FileModel, string, number>(
    ADD_FILE,
    (name: string, parendFolder: number) => (new FileModel({
        name: name,
        body: "",
        parentFolder: parendFolder
    })),
);
