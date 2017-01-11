/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {addFolder, addFile, deleteItem} from "../../actions/index";
import {IStore} from "../../model/IStore";
import {ISelected, TypeSelect} from "../../model/Selected";
import * as styles from "./styles.less";

import { WorkPanel } from "../../components/WorkPanel/WorkPanel";
import { EditFile } from "../../components/EditFile/EditFile";

export interface IMainContentDispatchToProps {
    addFolder?(name: string, parentFolder: number): void;
    addFile?(name: string, parentFolder: number): void;
    deleteItem?(id: number, typeItem: TypeSelect): void;
}
export interface IMainContentStoreToProps {
    selected?: ISelected;
}

export interface IMainContentProps extends IMainContentDispatchToProps, IMainContentStoreToProps {
}

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
    addFolder: bindActionCreators(addFolder, dispatch),
    addFile: bindActionCreators(addFile, dispatch),
    deleteItem: bindActionCreators(deleteItem, dispatch),
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
                this.props.addFolder(resultPromt, this.props.selected.folderId);
            }
        };

        const createFile = () => {
            let resultPromt = prompt("Name file:", "newFile.txt");
            if (resultPromt && resultPromt.trim().length > 0) {
                this.props.addFile(resultPromt, this.props.selected.folderId);
            }
        };

        const deleteItem = () => {
            this.props.deleteItem(this.props.selected.id, this.props.selected.type);
        };

        let content: React.ReactNode;
        if (this.props.selected.type === TypeSelect.Folder) {
            content = <WorkPanel
                onCreateFolder={createFolder.bind(this)}
                onCreateFile={createFile.bind(this)}
                onDeleteItem={deleteItem.bind(this)}
            />
        }

        if (this.props.selected.type === TypeSelect.File) {
            content = (
                <EditFile onDeleteItem={deleteItem.bind(this)} />
            )
        }

        return (
            <div className={styles.MainContent}>
                {content}
            </div>
        );
    }
}