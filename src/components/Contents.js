import React, {Component} from 'react';
import Loading from './Loading';

class Contents extends Component{
    render(){
      if(this.props.isLoading){
        return(<Loading />);
      }

      return (
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </div>
      );
    }
}

export default Contents;