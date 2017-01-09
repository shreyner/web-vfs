/**
 * Created by Alexander on 28.12.2016.
 */
import * as React from "react";
import {find} from "lodash";
import {FolderModel} from "../../model/FolderModel";
import {FileModel} from "../../model/FileModel";
import {ISelected, TypeSelect} from "../../model/Selected";
import * as styles from "./styles.less";


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
                <a
                    className={(selected.type === TypeSelect.Folder && selected.id === folder.id) ? styles.active : null}
                    onClick={() => this.props.onSelect(folder.id, folder.id, TypeSelect.Folder)}>
                        <span>{folder.name}</span>
                </a>
                <ul className={styles.navbar}>
                    { folder.childrenFilder.map((itemIdFolder, indexFodler) => {
                        let nextFolder = find(folders, {id: itemIdFolder});
                        return this.renderFolderList(nextFolder, folders, files, selected);
                    })}
                    { files.map((itemFile, indexFile) => {
                        if (itemFile.parentFolder === folder.id) {
                            return (
                                <li key={indexFile}>
                                    <a
                                        className={(selected.type === TypeSelect.File && selected.id === itemFile.id) ? styles.active : null}
                                        onClick={() => this.props.onSelect(itemFile.id, folder.id, TypeSelect.File)}>
                                            <span>{itemFile.name}</span>
                                    </a>
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
            <ul className={styles.navbar}>
                {this.renderFolderList(this.props.folders[0], this.props.folders, this.props.files, this.props.selected)}
            </ul>
        );
    }
}
