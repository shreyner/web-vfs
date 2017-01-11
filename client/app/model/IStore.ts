/**
 * Created by Alexander on 27.12.2016.
 */

import {FileModel} from "./FileModel";
import {FolderModel} from "./FolderModel";

export interface IStore {
    folders: FolderModel[];
    files: FileModel[];
    selected: FolderModel | FileModel;
}
