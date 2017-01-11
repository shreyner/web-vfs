/**
 * Created by shreyner on 11.01.2017.
 */
import * as React from "react";
import * as styles from "./style.less";
import {FileModel} from "../../model/FileModel";

export interface IEditFileProps{
    onDeleteItem: Function;
    file: FileModel;
    onSaveFile: (name: string, body: string) => void;
}
export interface IEditFileState{
    fileContent: string;
}

export class EditFile extends React.Component<IEditFileProps, IEditFileState>{

    constructor(props: IEditFileProps, context: any) {
        super(props, context);

        this.state = {
            fileContent: props.file.body
        }
    }

    handleChange(event: any): void {
        let value: string = event.target.value;
        this.setState(preState => {
            preState.fileContent = value;
            return preState;
        })
    }

    componentWillReceiveProps(nextProps: IEditFileProps): void {
        let newFileContent: string = nextProps.file.body;
        this.setState(prevState => {
            prevState.fileContent = newFileContent;
            return prevState;
        })
    }


    render(){
        return(
            <div>
                <h1>{this.props.file.name}</h1>
                <p>{this.state.fileContent.length} kb</p>
                <button onClick={() => this.props.onDeleteItem()}>Delete</button>
                <button onClick={() => this.props.onSaveFile(this.props.file.name, this.state.fileContent)}>Save</button>
                <div className="Edit">
                    <textarea
                        style={{border: "none", "resize": "none"}}
                        value={this.state.fileContent}
                        onChange={(event) => this.handleChange(event)}
                    ></textarea>
                </div>
            </div>
        )
    }

}