import React from 'react'
import './List.css';
import Card from './Card'




class ListClass extends React.Component {
  render() {
    const cards = this.props.cards.map((card, i) => {
      return (<Card key={i} title={card.title} content={card.content}/>)
    });
    return (
        <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div class="List-cards">
          {cards}
          <button type="button" class="List-add-button">
              + Add Random Card
        </button>
        </div>
      </section> 
    )
  }
}

export default ListClass;