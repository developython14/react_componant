import React  ,{Component} from 'react';
import { Outlet, Link } from "react-router-dom";


class Free extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(),item:['mustapha' , 'ahmed' , 'youssef' , 'rayen']};
        this.updateusername = this.updateusername.bind(this);
    };

        componentDidMount() {
            this.timerID = setInterval(
              () => this.tick(),
              1000
            );
          }
          tick() {
            this.setState({
              date: new Date()
            });
          }
          componentWillUnmount() {
            clearInterval(this.timerID);
          }

          updateusername(){
            this.setState({
                item:['mustapha hamed']
            })
          }

    render() {
        var mu = this.state.item.map(e=>{
            return  <li key={e.toString()}>{e}</li>
        })
      return (
        <div>
            <ul>
            {mu}
            </ul>
        <p>{this.props.name}</p>
        <button onClick={this.updateusername}> salam alikom cv hbb</button>
                <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <Link to="/aboutus">about us</Link>
        </form>
        </div>
      
      );
    }
  }



  class FREEONE extends Component {
    constructor(props){
        super(props);
    };
    render(){
      return <div>
         <Link to="/">Home</Link>
         <h1>hi mustpha</h1>
      </div> 
      
    }
  }

export {Free,FREEONE};