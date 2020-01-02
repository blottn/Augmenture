import * as React from 'react';

type CardProps = {
    title: string;
    content: string;
};

const Card: React.FunctionComponent<CardProps> = ({ title, content }) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
);

export default Card;
