/**
 * Created by Alexander on 28.12.2016.
 */
import * as React from "react";
import {find} from "lodash";
import {FolderModel} from "../../model/FolderModel";
import {FileModel} from "../../model/FileModel";
import {ISelected, TypeSelect} from "../../model/Selected";
import * as style from "./styles.less";
import * as classNames from "classnames/bind";

let styles = classNames.bind(style);

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

        let activeItem: boolean = selected.type === TypeSelect.Folder && selected.id === folder.id;

        let styleFolderLink: string = styles("link", {
            "active": activeItem
        });

        let styleFolderLinkIcon: string = styles({
            "iconFolderClose": folder.childrenFolder.length === 0 && !activeItem,
            "iconFolderCloseActive": folder.childrenFolder.length === 0 && activeItem,
            "iconFolderOpen": folder.childrenFolder.length !== 0 && !activeItem,
            "iconFolderOpenActive": folder.childrenFolder.length !== 0 && activeItem,
        });

        let styleFileLink = (itemFile: FileModel) => styles("link", {
            "active": selected.type === TypeSelect.File && selected.id === itemFile.id,
        });

        let styleFileLinkIcon = (itemFile: FileModel) => styles({
            "iconFile": !(selected.type === TypeSelect.File && selected.id === itemFile.id),
            "iconFileActive": selected.type === TypeSelect.File && selected.id === itemFile.id,
        });

        return (
            <li key={folder.id} className={style.item}>
                <a
                    className={styleFolderLink}
                    onClick={() => this.props.onSelect(folder.id, folder.id, TypeSelect.Folder)}>
                    <span className={styleFolderLinkIcon}/> <span>{folder.name}</span>
                </a>
                <ul className={style.treeList}>
                    { folder.childrenFolder.map((itemIdFolder) => {
                        let nextFolder = find(folders, {id: itemIdFolder});
                        return this.renderFolderList(nextFolder, folders, files, selected);
                    })}
                    { files.map((itemFile, indexFile) => {
                        if (itemFile.parentFolder === folder.id) {
                            return (
                                <li key={indexFile} className={style.link}>
                                    <a
                                        className={styleFileLink(itemFile)}
                                        onClick={() => this.props.onSelect(itemFile.id, folder.id, TypeSelect.File)}>
                                        <span className={styleFileLinkIcon(itemFile)}/><span>{itemFile.name}</span>
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
            <ul className={style.treeList}>
                {this.renderFolderList(this.props.folders[0], this.props.folders, this.props.files, this.props.selected)}
            </ul>
        );
    }
}
