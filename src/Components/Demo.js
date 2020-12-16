import { Button } from '@material-ui/core';
import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import './Demo.css';




class Demo extends Component{
    constructor(props){

        super(props)

            this.state={
                salary:0    

        }

    }

    increaseSal = () => {
        this.setState({
            salary: this.state.salary + 100
        })

    }
    
  
    render(){
        return <div className="div_style">
             <h1> Hello {this.props.name}  age is {this.props.age}</h1>
            <p> welcome welcome</p>
            <Button variant="contained" color="secodary" onClick={this.increaseSal} > get your bonus </Button>
            <p>sal is {this.state.salary} </p>
            <h2>{this.props.name}</h2>
            </div>
    }
}
export default Demo;