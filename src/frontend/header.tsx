import React from 'react';

export class Header extends React.Component {

    render() {
        return (
            <>
            {/* css */}
            {/* bootstrap */}
                <link rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                    href="http://localhost:3000/static/styles/index.css" />
            {/* js */}
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

            {/* react */}
                <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
                <script src="http://localhost:3000/static/bundle.js"></script>
            </>
        );
    }

}
