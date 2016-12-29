/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {addFolder, addFile} from "../../actions/index";
import {IStore} from "../../model/IStore";
import {ISelected} from "../../model/Selected";

import * as styles from "./styles.less";

export interface IMainContentDispatchToProps {
    addFolder?(name: string, parentFolder: number): void;
    addFile?(name: string, parentFolder: number): void;
}
export interface IMainContentStoreToProps {
    selected?: ISelected;
}

export interface IMainContentProps extends IMainContentDispatchToProps, IMainContentStoreToProps {
}

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
    addFolder: bindActionCreators(addFolder, dispatch),
    addFile: bindActionCreators(addFile, dispatch)
});
const mapStoreToProps = (store: IStore) => ({
    selected: store.selected,
});

@connect<IMainContentStoreToProps, IMainContentDispatchToProps, any>(mapStoreToProps, mapDispatchToProps)
export class MainContent extends React.Component<IMainContentProps, any> {
    render() {
        const createFolder = () => {

            let resultPromt = prompt("Name folder:", "NewFolder");
            if(resultPromt.trim().length > 0){
                this.props.addFolder(resultPromt, this.props.selected.folderId);
            }
        };

        const createFile = () => {
            let resultPromt = prompt("Name file:", "newFile.txt");
            if(resultPromt.trim().length > 0){
                this.props.addFile(resultPromt, this.props.selected.folderId);
            }
        };

        return (
            <div className={styles.MainContent}>
                <div className="content-head">
                    <div className="title">Пример</div>
                    <div className="description">3,5мб, 4 папки, 1 файл</div>
                    <button onClick={createFolder.bind(this)}>Add Folder</button>
                    <button onClick={createFile.bind(this)}>Add File</button>
                    <button>Delete</button>
                </div>
            </div>
        );
    }
}