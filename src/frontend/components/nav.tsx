import * as React from 'react';

type NavProps = {
    Page: React.ReactType;
};

const Nav: React.FunctionComponent<NavProps> = ({ Page }) => (
    <>
        <div className="flex flex-nowrap aug-nav-root">
            <div className="aug-nav">
                <h1>Hello</h1>
            </div>
            <div className="aug-nav-page">
                <Page />
            </div>
        </div>
    </>
);

export default Nav;
