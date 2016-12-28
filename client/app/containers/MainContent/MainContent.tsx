/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {addFolder} from "../../actions/index";
import {IStore} from "../../model/IStore";

export interface IMainContentDispatchToProps {
    addFolder?(name: string, parentFolder: number): void;
}
export interface IMainContentStoreToProps {
}

export interface IMainContentProps extends IMainContentDispatchToProps, IMainContentStoreToProps {

}
export interface IMainContentStore {
}

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
    addFolder: bindActionCreators(addFolder, dispatch),
});
const mapStoreToProps = (store: IStore) => ({});

@connect<IMainContentStoreToProps, IMainContentDispatchToProps, any>(mapStoreToProps, mapDispatchToProps)
export class MainContent extends React.Component<IMainContentProps, any> {
    render() {
        return (
            <div className="MainContent">
                <div className="content-head">
                    <div className="title">Пример</div>
                    <div className="description">3,5мб, 4 папки, 1 файл</div>
                    <button onClick={() => this.props.addFolder("folder1",1)}>Add Folder</button>
                    <button>Add File</button>
                </div>
            </div>
        );
    }
}