import * as React from 'react';

type CardProps = {
    title: string;
    contents: string;
};

const Card: React.FunctionComponent<CardProps> = ({ title, contents }) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{contents}</p>
        </div>
    </div>
);

export default Card;
