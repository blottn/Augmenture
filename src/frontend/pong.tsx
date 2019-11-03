import * as React from 'react';

export default class Pong extends React.Component<{}, {pong: boolean}> {
    static Bar(): JSX.Element {
        return <div className="pong-change pong-sliding" />;
    }

    static Ball(): JSX.Element {
        return <div className="pong-change pong-ball" />;
    }

    constructor(props) {
        super(props);
        this.state = {
            pong: false,
        };
        setTimeout(this.pong.bind(this), 5000);
    }

    pong(): void {
        this.setState(() => ({ pong: true }));
    }

    render(): JSX.Element {
        const { pong } = this.state;

        // default classes
        let rootClass = 'flex ';
        let trackClass = 'flex-balance ';
        let leftPaddleClass = 'pong-paddle';
        let rightPaddleClass = 'pong-paddle-offset ';

        if (pong) {
            rootClass += 'pong-root-ball';
            trackClass += 'pong-track-hidden';
            leftPaddleClass = 'pong-paddle';
        } else {
            rootClass += 'pong-root-bar';
            trackClass += 'pong-track';
            leftPaddleClass = 'pong-paddle-hidden';
            rightPaddleClass = 'pong-paddle-offset-hidden';
        }

        return (
            <div className={rootClass}>
                <div className="pong-paddle-track">
                    <div className={leftPaddleClass} />
                </div>
                <div className={trackClass}>
                    {(pong ? <Pong.Ball /> : <Pong.Bar />)}
                </div>
                <div className="pong-paddle-track">
                    <div className={rightPaddleClass} />
                </div>
            </div>
        );
    }
}
