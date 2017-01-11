/**
 * Created by Alexander on 28.12.2016.
 */
import * as React from "react";
import {FolderModel} from "../../model/FolderModel";
import {FileModel} from "../../model/FileModel";
import * as style from "./styles.less";
import * as classNames from "classnames/bind";
import {TSelectItem} from "../../actions/index";

let styles = classNames.bind(style);

export interface ITreeListViewProps {
    folders: FolderModel[];
    files: FileModel[];
    selected: FileModel | FolderModel;
    onSelect: TSelectItem;
}

export class TreeListView extends React.Component<ITreeListViewProps, any> {

    private renderFolderList(folder: FolderModel,
                             folders: FolderModel[],
                             files: FileModel[],
                             selected: FileModel | FolderModel,
                             order: number,
    ): JSX.Element {

        let paddingLeftOnOrder = order * 30;

        let childrenFolder: FolderModel[] = folders.filter((folderItem) => folder.id === folderItem.parentFolder);
        let childrenFile: FileModel[] = files.filter((fileItem) => fileItem.parentFolder === folder.id);

        let activeItem: boolean = selected instanceof FolderModel && selected.id === folder.id;

        let styleFolderLink: string = styles("link", {
            "active": activeItem
        });

        let styleFolderLinkIcon: string = styles({
            "iconFolderClose": (childrenFolder.length === 0 && childrenFile.length === 0) && !activeItem,
            "iconFolderCloseActive": (childrenFolder.length === 0 && childrenFile.length === 0) && activeItem,
            "iconFolderOpen": (childrenFolder.length !== 0 || childrenFile.length !== 0) && !activeItem,
            "iconFolderOpenActive": (childrenFolder.length !== 0 || childrenFile.length !== 0) && activeItem,
        });

        let styleFileLink = (itemFile: FileModel) => styles("link", {
            "active": selected instanceof FileModel && selected.id === itemFile.id,
        });

        let styleFileLinkIcon = (itemFile: FileModel) => styles({
            "iconFile": !(selected instanceof FileModel && selected.id === itemFile.id),
            "iconFileActive": selected instanceof FileModel && selected.id === itemFile.id,
        });

        return (
            <li key={folder.id} className={style.item}>
                <a
                    className={styleFolderLink}
                    onClick={() => this.props.onSelect(folder)}
                    style={{paddingLeft: paddingLeftOnOrder}}
                >
                    <span className={styleFolderLinkIcon}/> <span>{folder.name}</span>
                </a>

                <ul className={style.treeList}>
                    { childrenFolder.map((itemIdFolder) => {
                        return this.renderFolderList(itemIdFolder, folders, files, selected, order + 1);
                    })}
                    { childrenFile.map((itemFile, indexFile) => (
                                <li key={indexFile} className={style.item}>
                                    <a
                                        className={styleFileLink(itemFile)}
                                        onClick={() => this.props.onSelect(itemFile)}
                                        style={{paddingLeft: paddingLeftOnOrder + 30}}
                                    >
                                        <span className={styleFileLinkIcon(itemFile)}/><span>{itemFile.name}</span>
                                    </a>
                                </li>
                    ))}
                </ul>
            </li>
        );
    }

    render() {
        return (
            <ul className={style.treeList}>
                {
                    this.renderFolderList(
                        this.props.folders[0],
                        this.props.folders,
                        this.props.files,
                        this.props.selected,
                        1
                    )
                }
            </ul>
        );
    }
}
