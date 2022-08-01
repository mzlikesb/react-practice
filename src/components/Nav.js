import React, {Component} from 'react';
import Loading from './Loading';

class Nav extends Component{
    render(){
        if(this.props.isLoading){
            return(<Loading />);
        }
        var list =[];
        for (let i = 0; i < this.props.list.length; i++) {
            const item = this.props.list[i];
            list.push(
                <li key={item.id}>
                    <a href={item.id} data-id={item.id} onClick={
                        function(e){
                            e.preventDefault();
                            this.props.onClick(e.target.dataset.id);
                        }.bind(this)
                    }>{item.title}</a>
                    
                </li>
            );   
        }
        
        return (
         <ul>
            {list}
         </ul>
        );
    }
}

export default Nav;