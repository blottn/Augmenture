import * as React from 'react';
import Inject from './utils.jsx';

function Header({ model, bundleSrc }) {
    return (
        <>
            {/* favicon */}
            <link
                rel="icon"
                type="image/png"
                href="/static/augmenture.png"
            />
            {/* css */}
            <link
                rel="stylesheet"
                href="/static/styles/index.css"
            />
            {/* icon library */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            {/* js */}
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />

            {/* react */}
            <script src="https://unpkg.com/react@16/umd/react.development.js" />
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />
            <script src={`/static/${bundleSrc}.js`} />
            <Inject name="data" model={model}/>
        </>
    );
}

export default Header;
