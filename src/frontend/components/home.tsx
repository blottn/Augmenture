import * as React from 'react';

import CreateButton, {CreateForm} from './create';
import Card from './card';
import withNav from './nav';

type TCard = {
    title: string;
    contents: string;
}

type HomeProps = {
    cards: TCard[];
}

class HomePage extends React.Component<HomeProps, {cards: TCard[], cardVisible: boolean}> {
    constructor(props) {
        super(props);
        const initial = [];
        for (let i = 0; i < 40; i += 1) {
            initial.push({
                title: `Panel number ${i}`,
                contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate malesuada arcu, nec placerat ipsum maximus at',
            });
        }
        this.state = {
            cards: initial,
            cardVisible: false,
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
    
    pressCreate() {
        this.setState(({cards, cardVisible}) => {
            return {
                cards,
                cardVisible: !cardVisible,
            };
        });
    }

    static bundleSrc = 'home';

    render(): JSX.Element {
        const form = (<CreateForm />);
        let formContainerClassName;
        if (this.state.cardVisible) {
            console.log('visible');
            formContainerClassName = "flex-yield";
        } else {
            console.log('gone');
            formContainerClassName = "flex-yield d-none";
        }
        return (
            <>
                <div className="fill flex">
                    <div className="fill flex flex-wide scroll scroll-left home-root">
                        { this.getCards() }
                    </div>
                    <div className={formContainerClassName}>
                        <div className="create-form-container">
                        { form }
                        </div>
                    </div>
                </div>
                <CreateButton cb={this.pressCreate.bind(this)}/>
            </>
        );
    }
}

HomePage.bundleSrc = 'home';

export default withNav<HomeProps>(HomePage);
