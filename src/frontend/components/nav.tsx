import * as React from 'react';

type NavProps = {
    Page: React.ReactType;
};

const Nav: React.FunctionComponent<NavProps> = ({ Page }) => (
    <>
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
            <div className="aug-nav-page">
                <Page />
            </div>
        </div>
    </>
);

export default Nav;
