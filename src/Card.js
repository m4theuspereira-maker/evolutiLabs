import React from 'react'; 
import './App.css'; 
import './App.js';
 
const Card = (props) =>{
    return(
    <div className="card">
        <img src={props.avatar} alt="avatar" style={{width: '100%'}}/>
      <div className="container">
             <h4><b>{props.name}</b></h4>
            <p>{props.title}</p>
            <input type="text" onChange={props.onChangeInput} value={props.name}></input>
            <p><button className="button" onClick={props.onChangeName}>Change Name</button></p>
            <div>{props.children}</div>
      </div>
    </div>
    );

}

export default Card; 