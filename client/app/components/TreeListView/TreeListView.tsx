/**
 * Created by Alexander on 28.12.2016.
 */

import * as React from "react";
import {find} from "lodash";
import {TreeFolderModel} from "../../model/TreeFolder";
import {TreeFileModel} from "../../model/TreeFiles";


export interface ITreeListViewProps {
    folders: TreeFolderModel[];
    files?: TreeFileModel[];
}

export class TreeListView extends React.Component<ITreeListViewProps, any> {

    private renderList(folder: TreeFolderModel, folders: TreeFolderModel[]): JSX.Element {
        return (
            <li key={folder.id}>
                <span>{folder.name}</span>
                <ul>
                    {folder.childrenFilder.map((itemIdFolder, indexFodler) => {
                        let nextFolder = find(folders, {id: itemIdFolder});
                        return this.renderList(nextFolder, folders);
                    })}
                </ul>
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.renderList(this.props.folders[0], this.props.folders)}
            </ul>
        );
    }
}
