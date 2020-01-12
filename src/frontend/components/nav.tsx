import * as React from 'react';

export type NavProps = {
    user: string;
}


const withNav = <P extends {}>(Page):
    React.FunctionComponent<P & NavProps>
    & {bundleSrc: string} => {
    const nav = ({ user, ...rest }): JSX.Element => (
        <div className="flex flex-nowrap aug-nav-root">
            <div className="flex flex-column aug-nav text-center">
                <h2>
                    <span className="text-augmenture">
                        A
                    </span>
                </h2>
                <p>{ user }</p>
                <hr className="aug-hr" />
                <h5>Home</h5>
                <h5>Recents</h5>
                <h5>Starred</h5>
                <h5>Some other utility</h5>
            </div>
            <div className="fill aug-nav-page">
                <Page {...rest} />
            </div>
        </div>
    );
    nav.bundleSrc = Page.bundleSrc;
    return nav;
};


export default withNav;
