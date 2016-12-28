/**
 * Created by Alexander on 27.12.2016.
 */

import {TreeFileModel} from "./TreeFiles";
import {TreeFolderModel} from "./TreeFolder";

export interface IStore {
    folders: TreeFolderModel[];
    files: TreeFileModel[];
}
