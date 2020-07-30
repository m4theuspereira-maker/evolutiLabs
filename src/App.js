import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from'./Card';
import faker from 'faker'


function App() {
  
    const [name, setName] = useState('Alan Smith');
    const [cards, setCards] = useState([
      {
        name: 'Jackie Brown',
        title: 'Airline agent', 
        avatar: faker.image.avatar()
      },
      {
        name: 'Ton Clancy',
        title: 'Writer', 
        avatar: faker.image.avatar()
      },
      {
        name:'Roberto Machado',
        title: 'Investigador Particular', 
        avatar: faker.image.avatar()
      }
    ])

    const [showCard, setShowCard] = useState(true); 

    const toggleShowCard = () => setShowCard(!showCard);

    const deleteCardHandler =(cardIndex)=>{
      const cards_copy =[...cards]
      cards_copy.splice(cardIndex, 1)
      console.log('cards_copy', cards_copy); 
      console.log('cards', cards)
      setCards(cards_copy)

    }    
       
       const cardsMarkup = showCard &&( 
          cards.map((card, index)=> <Card
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          onDelete={()=>deleteCardHandler(index)}
        />)
       )

    return (
      <div className="App">
          <button className="button button-red" onClick={toggleShowCard}>toggleShowCard</button>
          {cardsMarkup}
      </div>
    );
  }

export default App;
