import * as React from 'react';

export default class Create extends React.Component {
    static createCard() {
        console.log('hello!');
    }

    render(): JSX.Element {
        return (
            <div className="btn-group dropup float">
                <button className="btn btn-secondary dropdown-toggle aug-btn-create" data-toggle="dropdown">
                    <i className="fa fa-plus" />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">Action</button>
                    <button className="dropdown-item" type="button">Another action</button>
                    <button className="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
        );
    }
}
