/**
 * Created by Alexander on 27.12.2016.
 */
import * as React from "react";

export class MainContent extends React.Component<void, void>{
    render(){
        return (
            <div className="MainContent">
                <div className="content-head">
                    <div className="title">Пример</div>
                    <div className="description">3,5мб, 4 папки, 1 файл</div>
                </div>
            </div>
        )
    }
}