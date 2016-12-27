/**
 * Created by Alexander on 27.12.2016.
 */

import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {addFolder} from "../../actions/index";
import {LeftBar} from "../../containers/LeftBar/LeftBar";
import {IStore} from "../../model/IStore";
import {MainContent} from "../MainContent/MainContent";

export interface IAppDispatchProps {
    addFolder?(name: string): void;
}

export interface IAppStoreProps {}

const mapStateToProps = (store: IStore) => ({});
const mapDispatchProps = (dispatch: Dispatch<any>) => {
    return {
        addFolder: bindActionCreators(addFolder, dispatch),
    };
};

export interface IAppProps extends IAppDispatchProps {

}

@connect<IAppStoreProps, IAppDispatchProps, any>(mapStateToProps, mapDispatchProps)
export class App extends React.Component<IAppProps, any> {
    render() {
        return (
            <div className="App">
                <LeftBar />
                <MainContent />
                <button onClick={() => this.props.addFolder("folder1")}>add</button>
                <ul>
                    {}
                </ul>
            </div>
        );
    }
};
