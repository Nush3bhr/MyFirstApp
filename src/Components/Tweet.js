import React, {useState} from 'react'; 
import {Button, Grid} from '@material-ui/core';
import ExploreOffIcon from '@material-ui/icons/ExploreOff';
//import './Tweet.css';
import Mat from './Mat';


const Tweet= (props) =>{
    //console.log(props)
   
    const[isMessage,changeMessage] = useState('Please SMILE n LIKE');//how to format this text
    const[isWater,setWater] = useState(0);

    const newMessage = () =>{
        changeMessage(  "You are not a Great Professor");// how to format this message
    };
    const drankWater = () =>{
        setWater(isWater + 1);
    };

    return(
        <Grid container>  
        <Grid item xs={8}>
        <div>
            {/*<h3 className="texStyle">{props.name}</h3>
            <p className="boldstyle">{props.message}</p>
            <p>{isMessage}</p>
            <Button variant="contained" color="primary" onClick={newMessage} >LIKE</Button>
            <p className='fonstyle'>THIRSTY??</p>
            <Button variant="contained" color="primary" onClick={drankWater}>Drink n Click!!</Button> 
    <p className="fonstyle">{isWater} litres of water drank. </p>*/}
            <Mat/>
        </div>
        </Grid>
        {/*
        <Grid item xs={4}>
        <div className="app">
            <h3 className="texStyle">Hello</h3>
            <p className="boldstyle">right side</p>
            <p>{isMessage}</p>
            <Button variant="contained" color="primary" onClick={newMessage} >LIKE</Button>
            <p className='fonstyle'>THIRSTY??</p>
            <Button variant="contained" color="primary" onClick={drankWater}>Drink n Click!!</Button> 
            <p className="fonstyle">{isWater} litres of water drank. </p>
        </div>
        </Grid>

        <Grid item xs={4}>
        <div className="app">
            <h3 className="texStyle">Hello</h3>
            <p className="boldstyle">one more side</p>
            <p>{isMessage}</p>
            <Button  style={{margin: "5px"}} variant="contained" color="primary" onClick={newMessage} >LIKE</Button>
           <ExploreOffIcon/>
            <Button style={{margin: "5px"}} variant="contained" color="primary" onClick={drankWater}>Drink n Click!!</Button> 
            <p className="fonstyle">{isWater} litres of water drank. </p>
        </div>
        </Grid>*/}
        </Grid>
            
        
    );
}
export default Tweet;