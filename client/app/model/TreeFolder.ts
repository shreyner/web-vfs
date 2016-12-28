/**
 * Created by Alexander on 28.12.2016.
 */

import {assign} from "lodash";

export class TreeFolderModel {

    public id?: number;

    public name: string;

    public childrenFilder: number[];

    public parentFolder?: number;

    public files: number[];

    constructor(source?: TreeFolderModel) {
        if (source) {
            assign(this, source);
        }
    }
}
