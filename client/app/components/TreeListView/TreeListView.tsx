/**
 * Created by Alexander on 28.12.2016.
 */

import * as React from "react";
import {find} from "lodash";
import {TreeFolderModel} from "../../model/TreeFolder";
import {FileModel} from "../../model/TreeFiles";


export interface ITreeListViewProps {
    folders: TreeFolderModel[];
    files: FileModel[];
}

export class TreeListView extends React.Component<ITreeListViewProps, any> {

    private renderFolderList(folder: TreeFolderModel, folders: TreeFolderModel[], files: FileModel[]): JSX.Element {
        return (
            <li key={folder.id}>
                <span>{folder.name}</span>
                <ul>
                    {folder.childrenFilder.map((itemIdFolder, indexFodler) => {
                        let nextFolder = find(folders, {id: itemIdFolder});
                        return this.renderFolderList(nextFolder, folders, files);
                    })}
                    {files.map((itemFile, indexFile) => {
                        if (itemFile.parentFolder === folder.id) {
                            return (
                                <li key={indexFile}>{itemFile.name}</li>
                            );
                        }
                        return null;
                    })}
                </ul>
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.renderFolderList(this.props.folders[0], this.props.folders, this.props.files)}
            </ul>
        );
    }
}
