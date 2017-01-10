/**
 * Created by Alexander on 28.12.2016.
 */

import {assign} from "lodash";

export class FolderModel {

    public id?: number;

    public name: string;

    public childrenFolder: number[];

    public parentFolder?: number;

    public files: number[];

    constructor(source?: FolderModel) {
        if (source) {
            assign(this, source);
        }
    }
}
