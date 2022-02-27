import React from "react";


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