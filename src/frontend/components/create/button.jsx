import * as React from 'react';

export default class CreateButton extends React.Component {
    let cb;

    constructor(props) {
        super(props);
        this.cb = props.cb;
    }

    render() {
        return (
            <div className="btn-group float">
                <button
                    className="btn btn-secondary aug-btn-create"
                    onClick={this.cb}
                    type="button"
                >
                    <i className="fa fa-plus" />
                </button>
            </div>
        );
    }
}
