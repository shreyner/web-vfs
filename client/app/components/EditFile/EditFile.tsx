/**
 * Created by shreyner on 11.01.2017.
 */
import * as React from "react";
import * as styles from "./style.less";

export interface IEditFileProps{
    onDeleteItem: Function;
}
export interface IEditFileState{}

export class EditFile extends React.Component<IEditFileProps, IEditFileState>{

    constructor(props: IEditFileProps, context: any) {
        super(props, context);
    }

    render(){
        return(
            <div>
                <h1>Select File</h1>
                <button onClick={() => this.props.onDeleteItem()}>Delete</button>
            </div>
        )
    }

}