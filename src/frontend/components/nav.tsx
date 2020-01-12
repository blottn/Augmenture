import * as React from 'react';

const withNav = <M extends {}>(Page): React.FunctionComponent<M> & {bundleSrc: string} => {
    const nav = (model): JSX.Element => (
        <div className="flex flex-nowrap aug-nav-root">
            <div className="flex flex-column aug-nav text-center">
                <h2>
                    <span className="text-augmenture">
                        A
                    </span>
                </h2>
                <hr className="aug-hr" />
                <h5>Home</h5>
                <h5>Recents</h5>
                <h5>Starred</h5>
                <h5>Some other utility</h5>
            </div>
            <div className="fill aug-nav-page">
                <Page {...model} />
            </div>
        </div>
    );
    nav.bundleSrc = Page.bundleSrc;
    return nav;
};


export default withNav;
