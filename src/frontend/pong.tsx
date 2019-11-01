import * as React from 'react';

export default class Pong extends React.Component<{}, {bouncing: boolean}> {
    constructor(props) {
        super(props);
        this.state = {
            bouncing: true,
        };
    }

    render(): JSX.Element {
        const { bouncing } = this.state;
        if (bouncing) {
            return (
                <div className="flex pong-holder">
                    <div className="pong-paddle-track">
                        <div className="pong-paddle" />
                    </div>
                    <div className="flex-balance pong-track">
                        <div className="pong-ball" />
                    </div>
                    <div className="pong-paddle-track">
                        <div className="pong-paddle-offset" />
                    </div>
                </div>
            );
        }
        return (<h1>oops</h1>);
    }
}
