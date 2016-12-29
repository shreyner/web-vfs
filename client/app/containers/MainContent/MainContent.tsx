/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {addFolder, addFile} from "../../actions/index";
import {IStore} from "../../model/IStore";
import {ISelected} from "../../model/Selected";

export interface IMainContentDispatchToProps {
    addFolder?(name: string, parentFolder: number): void;
    addFile?(name: string, parentFolder: number): void;
}
export interface IMainContentStoreToProps {
    selected?: ISelected;
}

export interface IMainContentProps extends IMainContentDispatchToProps, IMainContentStoreToProps {

}
export interface IMainContentStore {
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
        return (
            <div className="MainContent">
                <div className="content-head">
                    <div className="title">Пример</div>
                    <div className="description">3,5мб, 4 папки, 1 файл</div>
                    <button onClick={() => this.props.addFolder("folder1", this.props.selected.folderId)}>Add Folder</button>
                    <button onClick={() => this.props.addFile("secondFile.txt", this.props.selected.folderId)}>Add File</button>
                </div>
            </div>
        );
    }
}