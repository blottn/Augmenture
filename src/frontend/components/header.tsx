import * as React from 'react';

type HeaderProps = {
    bundleSrc: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({ bundleSrc }) => (
    <>
        {/* favicon */}
        <link
            rel="icon"
            type="image/png"
            href="http://localhost:3000/static/augmenture.png"
        />
        {/* css */}
        {/* bootstrap */}
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
            rel="stylesheet"
            href="http://localhost:3000/static/styles/index.css"
        />
        {/* js */}
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js" />

        {/* react */}
        <script src="https://unpkg.com/react@16/umd/react.development.js" />
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />
        <script src={`http://localhost:3000/static/${bundleSrc}`} />
    </>
);

export default Header;
