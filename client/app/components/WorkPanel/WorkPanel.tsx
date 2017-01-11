/**
 * Created by shreyner on 11.01.2017.
 */
import * as React from "react";
import * as styles from "./style.less";

export interface IWorkPanelProps{
    onCreateFile: Function;
    onCreateFolder: Function;
    onDeleteItem: Function;
}
export interface IWorkPanelState{}

export class WorkPanel extends React.Component<IWorkPanelProps, IWorkPanelState>{

    constructor(props: IWorkPanelProps, context: any) {
        super(props, context);
    }

    render(){
        return(
            <div className="content-head">
                <div className="title">Пример</div>
                <div className="description">3,5мб, 4 папки, 1 файл</div>
                <button onClick={() => this.props.onCreateFolder()}>Add Folder</button>
                <button onClick={() => this.props.onCreateFile()}>Add File</button>
                <button onClick={() => this.props.onDeleteItem()}>Delete</button>
            </div>
        )
    }

}