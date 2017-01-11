/**
 * Created by Alexander on 27.12.2016.
 */
import {createAction} from "redux-actions";
import {ADD_FOLDER, ADD_FILE, SELECT_ITEM, DELETE_ITEM} from "../constants/index";
import {FolderModel} from "../model/FolderModel";
import {FileModel} from "../model/FileModel";
import {ISelected, TypeSelect} from "../model/Selected";

export const addFolder = createAction<FolderModel, string, number>(
    ADD_FOLDER,
    (name: string, folderParent: number) => (new FolderModel({
        name: name,
        parentFolder: folderParent,
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

export const selectItem = createAction<ISelected, number, number, TypeSelect>(
    SELECT_ITEM,
    (id: number, folderId: number, type: TypeSelect) => ({id: id, folderId: folderId, type: type}),
);

export const deleteItem = createAction<any, number, TypeSelect>(
    DELETE_ITEM,
    (id: number, type: TypeSelect) => ({id: id, typeItem: type}),
);