import * as React from 'react';

export default function Inject<M>({ name, model }):
    React.FunctionComponentElement<{name: string; model: M}> {
    const packaged = JSON.stringify(model);
    return (
        <script dangerouslySetInnerHTML={{ __html: `let ${name} = ${packaged}` }} />
    );
}
