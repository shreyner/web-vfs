/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IStore} from "../../model/IStore";
import {TreeFolderModel} from "../../model/TreeFolder";
import {TreeListView} from "../../components/TreeListView/TreeListView";

export interface ILeftBarDispatchToProps {
}
export interface ILeftBarStoreToProps {
    folders?: TreeFolderModel[];
}

export interface ILeftBarProps extends ILeftBarStoreToProps, ILeftBarDispatchToProps {
}
export interface ILeftBarState {
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});
const mapStoreToProps = (store: IStore) => ({
    folders: store.folders,
});

@connect<ILeftBarStoreToProps, ILeftBarDispatchToProps, any>(mapStoreToProps, mapDispatchToProps)
export class LeftBar extends React.Component<ILeftBarProps, any> {
    render() {
        return (
            <div className="LeftBar">
                <TreeListView folders={this.props.folders} />
            </div>
        );
    }
}
