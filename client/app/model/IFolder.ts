/**
 * Created by Alexander on 27.12.2016.
 */

export interface IFolder {
    id?: number;
    name: string;
    folderChildren: number[];
    folderParent: number;
    files: number[];
}
