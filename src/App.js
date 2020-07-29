import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from'./Card';
import faker from 'faker'


function App() {
  
    const [name, setName] = useState('Alan Smith')
    const buttonsMarkup = (
      <div>
        <button className="button button2">YES</button>
        <button className="button button3">NO</button>
      </div>
    )

    const changeNameHandler = name => setName(name)
    

    const changeInputHandler = event =>setName(event.target.value)
    return (
      <div className="App">
        <button className="button" onClick={() => changeNameHandler('John Doe')}>Change Name</button>
        <Card
          avatar='https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg'
          name={name}
          title='International Creative Administrator'
          onChangeName={() => changeNameHandler('Michael Chan')}
          onChangeInput={changeInputHandler}
        >{buttonsMarkup}
        </Card>
  
  
  
      </div>
    );
  }

export default App;
