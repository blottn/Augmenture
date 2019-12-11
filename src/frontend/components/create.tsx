import * as React from 'react';

export default class Create extends React.Component {
    static createCard() {
        console.log('hello!');
    }

    render(): JSX.Element {
        return (
            <button className="btn btn-secondary float aug-btn-create"><i className="fa fa-plus" /></button>
        );
    }
}
