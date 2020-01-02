import * as React from 'react';

export class CreateForm extends React.Component {
    render(): JSX.Element {
        return (
            <div className="create-form-container mx-4 my-4">
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
                    <div className="text-right">
                        <button className="btn btn-outline-primary create-confirm">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default class CreateButton extends React.Component<{ cb: (() => void) }, {}> {
    cb: () => void;
    constructor(props) {
        super(props);
        this.cb = props.cb;
    }

    render(): JSX.Element {
        return (
            <div className="btn-group float">
                <button className="btn btn-secondary aug-btn-create"
                    onClick={this.cb}>
                    <i className="fa fa-plus" />
                </button>
            </div>
        );
    }
}
