import React from 'react';

export class Clicker extends React.Component {

    handleClick(e) {
        console.log(e);
    }

    render() {
        return (
            <a onClick={(e) => this.handleClick(e)}>Hello From the Clicker</a>
        );
    }
}
