import * as React from 'react';

import Card from './card';
import withNav from './nav';

type TCard = {
    title: string;
    contents: string;
}

type HomeProps = {
    cards: TCard[];
}

class HomePage extends React.Component<HomeProps, {cards: TCard[]}> {
    constructor(props) {
        super(props);
        const initial = [];
        for (let i = 0; i < 10; i += 1) {
            initial.push({
                title: `Panel number ${i}`,
                contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate malesuada arcu, nec placerat ipsum maximus at',
            });
        }
        this.state = {
            cards: initial,
        };
    }

    getCards(): JSX.Element[] {
        const { cards } = this.state;
        return cards.map(({ title, contents }) => (
            <div className="cardholder" key={title}>
                <Card title={title} contents={contents} />
            </div>
        ));
    }

    static bundleSrc = 'home';

    render(): JSX.Element {
        return (
            <div className="flex home-root">
                { this.getCards() }
            </div>
        );
    }
}

HomePage.bundleSrc = 'home';

export default withNav<HomeProps>(HomePage);
