import * as React from 'react';

import CreateButton from './create/button';
import CreateForm from './create/form';

import Card from './card';
import withNav, { NavProps } from './nav';
import withBase from './base';

type TCard = {
    title: string;
    content: string;
}

export type HomeProps = {
    cards: TCard[];
}

class Home extends React.Component<HomeProps, {cards: TCard[]; cardVisible: boolean}> {
    create: () => void;

    constructor(props) {
        super(props);

        this.create = this.pressCreate.bind(this);

        const { cards } = props;
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
                <CreateButton cb={this.create} />
            </>
        );
    }
}

Home.bundleSrc = 'home';

export const HomePage = withNav<HomeProps>(Home);

export default withBase<NavProps & HomeProps>(HomePage);
