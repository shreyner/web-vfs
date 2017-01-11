/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {
    addFolder, addFile, deleteItem, TAddFolder, TAddFile, TDeleteItem, saveChangeFile,
    TSaveChangeFile
} from "../../actions/index";
import {IStore} from "../../model/IStore";
import * as styles from "./styles.less";

import { WorkPanel } from "../../components/WorkPanel/WorkPanel";
import { EditFile } from "../../components/EditFile/EditFile";
import {FileModel} from "../../model/FileModel";
import {FolderModel} from "../../model/FolderModel";

export interface IMainContentDispatchToProps {
    addFolder?: TAddFolder;
    addFile?: TAddFile;
    deleteItem?: TDeleteItem;
    saveFileChange?: TSaveChangeFile;
}
export interface IMainContentStoreToProps {
    selected?: FileModel | FolderModel;
}

export interface IMainContentProps extends IMainContentDispatchToProps, IMainContentStoreToProps {
}

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
    addFolder: bindActionCreators(addFolder, dispatch),
    addFile: bindActionCreators(addFile, dispatch),
    deleteItem: bindActionCreators(deleteItem, dispatch),
    saveFileChange: bindActionCreators(saveChangeFile, dispatch),
});
const mapStoreToProps = (store: IStore) => ({
    selected: store.selected,
});

@connect<IMainContentStoreToProps, IMainContentDispatchToProps, any>(mapStoreToProps, mapDispatchToProps)
export class MainContent extends React.Component<IMainContentProps, any> {
    render() {
        const createFolder = () => {
            let resultPromt = prompt("Name folder:", "NewFolder");
            if (resultPromt && resultPromt.trim().length > 0) {
                this.props.addFolder(resultPromt, this.props.selected.id);
            }
        };

        const createFile = () => {
            let resultPromt = prompt("Name file:", "newFile.txt");
            if (resultPromt && resultPromt.trim().length > 0) {
                this.props.addFile(resultPromt, this.props.selected.id);
            }
        };

        const deleteItem = () => {
            this.props.deleteItem(this.props.selected);
        };

        let handleSaveFile = (name: string, body: string) => {
            if (this.props.selected instanceof FileModel){
                this.props.saveFileChange(this.props.selected, name, body);
            }
        };

        let content: React.ReactNode;
        if (this.props.selected instanceof FolderModel) {
            content = <WorkPanel
                onCreateFolder={createFolder.bind(this)}
                onCreateFile={createFile.bind(this)}
                onDeleteItem={deleteItem.bind(this)}
                selected={this.props.selected}
            />
        }

        if (this.props.selected instanceof FileModel) {
            content = (
                <EditFile
                    file={this.props.selected}
                    onDeleteItem={deleteItem.bind(this)}
                    onSaveFile={handleSaveFile.bind(this)}
                />
            )
        }

        return (
            <div className={styles.MainContent}>
                {content}
            </div>
        );
    }
}