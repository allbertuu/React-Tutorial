import React from "react";
import '../App.css'; 

/*const Welcome = props => {
    return <h1>Olá, {props.name}!</h1>;
}*/

class Welcome extends React.Component {
    render() {
        return (
            <div className="card">
                <h1>Olá, {this.props.name}!</h1>
            </div>
        );
    }
}

export default Welcome