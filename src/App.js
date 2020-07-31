import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from'./Card';
import faker from 'faker'; 
import styled, {ThemeProvider,css} from 'styled-components'; 
import Button from './element/Button'; 

const theme ={
  primary: '4caf50',
  mango: 'yellow'
}



function App() {
  
    const [name, setName] = useState('Alan Smith');
    const [cards, setCards] = useState([
      {
        id:'1',
        name: 'Jackie Brown',
        title: 'Airline agent', 
        avatar: faker.image.avatar()
      },
      {
        id: '2',
        name: 'Ton Clancy',
        title: 'Writer', 
        avatar: faker.image.avatar()
      },
      {
        id:'3',
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

    const changeNameHandler = (event, id) => {
      //1. which card
      const cardIndex = cards.findIndex(card => card.id == id)
      //2. make a copy of the cards
      const cards_copy = [...cards]
      //3. change the name of the specific card
      cards_copy[cardIndex].name = event.target.value
      //4. set the cards with the latest version of card copy
      setCards(cards_copy)
    }
    
    const classes = ['button'];
    if (cards.length < 3) classes.push('pink')
    if (cards.length < 2) classes.push('red text');
       const cardsMarkup = showCard &&( 
          cards.map((card, index)=> <Card
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          key={card.id}
          onDelete={()=>deleteCardHandler(index)}
          onChangeName ={(event) => changeNameHandler(event, card.id)}
        />)
       )

    return (
      <ThemeProvider theme={theme}>
      <div className="App">
          <Button  color="mango" length={cards.length}>Toggle</Button>
          <button className={classes.join(' ')} onClick={toggleShowCard}>toggleShowCard</button>
        
          {cardsMarkup}
      </div>
      </ThemeProvider>
    );
  }

export default App;
