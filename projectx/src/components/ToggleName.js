import React , {Component} from "react";
import Hello1 from "./Hello1";

export default class ToggleName extends Component{

    constructor(props) {
        super(props);
        this.state = {
            displayName: true
        }
    }

    toggleName = () => {
        this.setState(prevState => {
            return { displayName: ! prevState.displayName }
        })
    };

    render() {
        return <div>
            <button onClick={this.toggleName}>{this.state.displayName.toString()}</button>
           {
                this.state.displayName === true ?
                   
                <Hello1 lastname="imane"/>:
                undefined
            }


        </div>
    }


}