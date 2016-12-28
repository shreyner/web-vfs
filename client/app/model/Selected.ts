/**
 * Created by Alexander on 28.12.2016.
 */

export interface ISelected {
    id: number;
    type: TypeSelect;
}

export enum TypeSelect {
    File,
    Folder
}