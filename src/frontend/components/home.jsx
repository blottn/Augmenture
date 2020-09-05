import * as React from 'react';

import * as CardModel from '../../models/card';

import CreateButton from './create/button';
import CreateForm from './create/form';

import Card from './card';
import withNav, { NavProps } from './nav';
import withBase from './base';

class Home extends React.Component {
    let showForm;

    let addCard;

    constructor(props) {
        super(props);

        this.showForm = this.pressCreate.bind(this);
        this.addCard = this.createCard.bind(this);
        const { cards } = props;
        this.state = {
            cards,
            cardVisible: false,
        };
    }

    getHomeContent() {
        const { cards } = this.state;
        if (cards.length === 0) {
            return (
                [
                    <div key="content" className="home-placeholder">
                        <h5>
                            You haven&apos;t created any cards yet,
                            click the plus in the bottom right to get started!
                        </h5>
                    </div>,
                ]
            );
        }
        return cards.map(({ title, content }) => (
            <div className="cardholder" key={title}>
                <Card title={title} content={content} />
            </div>
        ));
    }

    pressCreate() {
        this.setState(({ cards, cardVisible }) => ({
            cards,
            cardVisible: !cardVisible,
        }));
    }

    static bundleSrc = 'home';

    createCard(card){
        this.setState(({ cards, ...rest }) => {
            let newCards = cards;
            if (!newCards) {
                newCards = [];
            }
            newCards.push(card);
            return { cards: newCards, ...rest };
        });
    }

    render() {
        const form = (<CreateForm handler={this.addCard} />);
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
                <CreateButton cb={this.showForm} />
            </>
        );
    }
}

Home.bundleSrc = 'home';

export const HomePage = withNav(Home);

export default withBase(HomePage);
