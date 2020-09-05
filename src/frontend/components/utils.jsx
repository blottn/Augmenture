import * as React from 'react';

export default function Inject({ name, model }) {
    const packaged = JSON.stringify(model);
    return (
        <script dangerouslySetInnerHTML={{ __html: `var ${name} = ${packaged}` }} />
    );
}
