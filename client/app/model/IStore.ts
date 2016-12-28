/**
 * Created by Alexander on 27.12.2016.
 */

import {FileModel} from "./FileModel";
import {FolderModel} from "./FolderModel";
import {ISelected} from "./Selected";

export interface IStore {
    folders: FolderModel[];
    files: FileModel[];
    selected: ISelected;
}
