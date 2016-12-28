/**
 * Created by Alexander on 27.12.2016.
 */

import {FileModel} from "./TreeFiles";
import {TreeFolderModel} from "./TreeFolder";

export interface IStore {
    folders: TreeFolderModel[];
    files: FileModel[];
}
