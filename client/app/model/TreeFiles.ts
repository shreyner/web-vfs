/**
 * Created by Alexander on 28.12.2016.
 */

import {assign} from "lodash";

export class TreeFileModel {

    public id: number;

    public name: string;

    public body: string;

    public parentFolder: number;

    constructor(source?: TreeFileModel) {
        if (source) {
            assign(this, source);
        }
    }
}
