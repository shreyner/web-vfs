/**
 * Created by Alexander on 28.12.2016.
 */

import * as React from "react";
import {find} from "lodash";
import {FolderModel} from "../../model/FolderModel";
import {FileModel} from "../../model/FileModel";
import {ISelected} from "../../model/Selected";


export interface ITreeListViewProps {
    folders: FolderModel[];
    files: FileModel[];
    selected: ISelected;
}

export class TreeListView extends React.Component<ITreeListViewProps, any> {

    private renderFolderList(folder: FolderModel, folders: FolderModel[], files: FileModel[], selected: ISelected): JSX.Element {
        return (
            <li key={folder.id}>
                <span>{folder.name}</span>
                <ul>
                    {folder.childrenFilder.map((itemIdFolder, indexFodler) => {
                        let nextFolder = find(folders, {id: itemIdFolder});
                        return this.renderFolderList(nextFolder, folders, files, selected);
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
                {this.renderFolderList(this.props.folders[0], this.props.folders, this.props.files, this.props.selected)}
            </ul>
        );
    }
}
