import * as React from 'react';

import CreateButton, { CreateForm } from './create';
import Card from './card';
import withNav from './nav';

type TCard = {
    title: string;
    content: string;
}

type HomeProps = {
    cards: TCard[];
}

class HomePage extends React.Component<HomeProps, {cards: TCard[]; cardVisible: boolean}> {
    constructor({ cards }) {
        super({ cards });
        this.state = {
            cards,
            cardVisible: false,
        };
    }

    getCards(): JSX.Element[] {
        const { cards } = this.state;
        return cards.map(({ title, content }) => (
            <div className="cardholder" key={title}>
                <Card title={title} content={content} />
            </div>
        ));
    }

    pressCreate(): void {
        this.setState(({ cards, cardVisible }) => ({
            cards,
            cardVisible: !cardVisible,
        }));
    }

    static bundleSrc = 'home';

    render(): JSX.Element {
        const form = (<CreateForm />);
        let formContainerClassName;
        const { cardVisible } = this.state;
        if (cardVisible) {
            formContainerClassName = 'flex-yield';
        } else {
            formContainerClassName = 'flex-yield d-none';
        }
        return (
            <>
                <div className="fill flex">
                    <div className="fill flex flex-reverse flex-wide scroll scroll-left home-root">
                        { this.getCards() }
                    </div>
                    <div className={formContainerClassName}>
                        { form }
                    </div>
                </div>
                <CreateButton cb={this.pressCreate} />
            </>
        );
    }
}

HomePage.bundleSrc = 'home';

export default withNav<HomeProps>(HomePage);
