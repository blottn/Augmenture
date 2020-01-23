import * as React from 'react';

import * as CardModel from '../../models/card';

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

    pressCreate(): void {
        this.setState(({ cards, cardVisible }) => ({
            cards,
            cardVisible: !cardVisible,
        }));
    }

    getHomeContent(): JSX.Element[] {
        const { cards } = this.state;
        if (cards.length == 0) {
            return (
                [
                    <div key="content" className="home-placeholder">
                        <h5>
                            You haven't created any cards yet, click the plus in the bottom right to get started!
                        </h5>
                    </div>
                ]
            );
        }
        return cards.map(({ title, content }) => (
            <div className="cardholder" key={title}>
                <Card title={title} content={content} />
            </div>
        ));
    }

    static bundleSrc = 'home';

    createCard(card: CardModel.Card): void {
        this.setState(({cards, ...rest}) => {
            cards.push(card);
            return {cards, ...rest};
        });
    }

    render(): JSX.Element {
        const form = (<CreateForm handler={this.createCard.bind(this)}/>);
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
                        { this.getHomeContent() }
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
