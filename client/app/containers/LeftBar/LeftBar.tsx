/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {selectItem, TSelectItem} from "../../actions/index";
import {IStore} from "../../model/IStore";
import {FolderModel} from "../../model/FolderModel";
import {TreeListView} from "../../components/TreeListView/TreeListView";
import {FileModel} from "../../model/FileModel";
// import {ISelected, TypeSelect} from "../../model/Selected";

import * as styles from "./styles.less";

export interface ILeftBarDispatchToProps {
    selectAction?: TSelectItem;
}
export interface ILeftBarStoreToProps {
    folders?: FolderModel[];
    files?: FileModel[];
    selected?: FolderModel | FileModel;
}

export interface ILeftBarProps extends ILeftBarStoreToProps, ILeftBarDispatchToProps {
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    selectAction: bindActionCreators(selectItem, dispatch),
});
const mapStoreToProps = (store: IStore) => ({
    files: store.files,
    folders: store.folders,
    selected: store.selected,
});

@connect<ILeftBarStoreToProps, ILeftBarDispatchToProps, any>(mapStoreToProps, mapDispatchToProps)
export class LeftBar extends React.Component<ILeftBarProps, any> {
    render() {
        return (
            <div className={styles.LeftBar}>
                <TreeListView
                    folders={this.props.folders}
                    files={this.props.files}
                    selected={this.props.selected}
                    onSelect={this.props.selectAction}
                />
            </div>
        );
    }
}
