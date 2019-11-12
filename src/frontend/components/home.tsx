import * as React from 'react';

import Card from './card';
import Nav from './nav';

type TCard = {
    title: string;
    contents: string;
}

type HomeProps = {
    cards: TCard[];
}

class HomePage extends React.Component<{}, HomeProps> {
    constructor(props) {
        super(props);
        const initial = [];
        for (let i = 0; i < 10; i += 1) {
            initial.push({
                title: `Panel number ${i}`,
                contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate malesuada arcu, nec placerat ipsum maximus at',
            });
        }
        console.log(initial);
        this.state = {
            cards: initial,
        };
    }

    getCards(): JSX.Element[] {
        const { cards } = this.state;
        return cards.map(({ title, contents }) => (
            <Card title={title} contents={contents} />
        ));
    }

    render(): JSX.Element {
        return (
            <div className="flex home-root">
                { this.getCards() }
            </div>
        );
    }
}

export default (): JSX.Element => (
    <Nav Page={HomePage} />
);
