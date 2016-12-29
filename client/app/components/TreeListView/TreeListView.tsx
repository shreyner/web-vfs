/**
 * Created by Alexander on 28.12.2016.
 */
import * as React from "react";
import {find} from "lodash";
import {FolderModel} from "../../model/FolderModel";
import {FileModel} from "../../model/FileModel";
import {ISelected, TypeSelect} from "../../model/Selected";


export interface ITreeListViewProps {
    folders: FolderModel[];
    files: FileModel[];
    selected: ISelected;
    onSelect(id: number, folderId: number, type: TypeSelect): void;
}

export class TreeListView extends React.Component<ITreeListViewProps, any> {

    private renderFolderList(folder: FolderModel,
                             folders: FolderModel[],
                             files: FileModel[],
                             selected: ISelected): JSX.Element {

        return (
            <li key={folder.id}>
                <span className={(selected.type === TypeSelect.Folder && selected.id === folder.id) ? "active" : null}
                      onClick={()=>this.props.onSelect(folder.id, folder.id, TypeSelect.Folder)}>{folder.name}</span>
                <ul>
                    {folder.childrenFilder.map((itemIdFolder, indexFodler) => {
                        let nextFolder = find(folders, {id: itemIdFolder});
                        return this.renderFolderList(nextFolder, folders, files, selected);
                    })}
                    {files.map((itemFile, indexFile) => {
                        if (itemFile.parentFolder === folder.id) {
                            return (
                                <li key={indexFile}>
                                    <span className={(selected.type === TypeSelect.File && selected.id === itemFile.id) ? "active" : null}
                                          onClick={()=>this.props.onSelect(itemFile.id, folder.id, TypeSelect.File)}>{itemFile.name}</span>
                                </li>
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
