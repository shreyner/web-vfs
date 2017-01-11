/**
 * Created by Alexander on 27.12.2016.
 */
import {createAction} from "redux-actions";
import {ADD_FOLDER, ADD_FILE, SELECT_ITEM, DELETE_ITEM} from "../constants/index";
import {FolderModel} from "../model/FolderModel";
import {FileModel} from "../model/FileModel";


export type TAddFolder = (name: string, folderParent: number) => void;
export type TAddFile = (name: string, parendFolder: number) => void;
export type TSelectItem = (item: FileModel | FolderModel) => void;
export type TDeleteItem = (item: FileModel | FolderModel) => void;

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

export const selectItem = createAction<FileModel | FolderModel, FileModel | FolderModel>(
    SELECT_ITEM,
    (item: FileModel | FolderModel) => (item),
);

export const deleteItem = createAction<FileModel | FolderModel, FileModel | FolderModel >(
    DELETE_ITEM,
    (item: FileModel | FolderModel) => (item),
);