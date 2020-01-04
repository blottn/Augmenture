import * as React from 'react';
import * as $ from 'jquery';

const FORM_TITLE_KEY = 'title';
const FORM_CONTENT_KEY = 'content';

export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        const s = {};
        s[FORM_TITLE_KEY] = '';
        s[FORM_CONTENT_KEY] = '';

        this.state = s;
    }

    handleChange(evt): void {
        const update = {};
        update[evt.target.id] = evt.target.value;
        this.setState(update);
    }

    handleSubmit(evt): void {
        $.ajax('http://localhost:3000/api/card/create', {
            method: 'POST',
            data: this.state,
        });
        evt.preventDefault();
    }

    render(): JSX.Element {
        return (
            <div className="create-form-container mx-4 my-4">
                <form
                    className="create-form"
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <textarea
                        id={FORM_TITLE_KEY}
                        className="create-title"
                        rows={1}
                        placeholder="Title"
                        onChange={this.handleChange.bind(this)}
                    />
                    <hr className="aug-hr create-hr" />
                    <textarea
                        id={FORM_CONTENT_KEY}
                        className="create-content"
                        rows={15}
                        placeholder="Content"
                        onChange={this.handleChange.bind(this)}
                    />
                    <div className="text-right">
                        <button className="btn btn-outline-primary create-confirm" type="submit">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
