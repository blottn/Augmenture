import * as React from 'react';

class CardForm extends React.Component {
    render(): JSX.Element {
        return (
            <form className="create-form">
                <textarea
                    className="create-title"
                    rows={1}
                    placeholder="Title" />
                <hr className="aug-hr create-hr" />
                <textarea
                    className="create-content"
                    rows={15}
                    placeholder="Content" />
                <button className="btn btn-outline-primary create-confirm float-right">
                    Create
                </button>
            </form>
        );
    }
}

export default class Create extends React.Component {

    render(): JSX.Element {
        return (
            <div className="btn-group dropup float">
                <button className="btn btn-secondary dropdown-toggle aug-btn-create" data-toggle="dropdown" data-offset="0,8">
                    <i className="fa fa-plus" />
                </button>
                <div className="dropdown-menu create-container">
                    <CardForm />
                </div>
            </div>
        );
    }
}
