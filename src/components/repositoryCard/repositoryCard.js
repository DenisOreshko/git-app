import { Component } from 'react';
import './repositoryCard.css';

class RepositoryCard extends Component {    
    state = {
        showAllDescription: false
    }

    showAllDescriptionToggle = () => {  
        this.setState(({showAllDescription})=>({
            showAllDescription: !showAllDescription
        }))      
    }
    
    //hide or show more Description character limit
    transformDescription = (description, showAllDescription, limit) => {
        let descrShow = null;
        let atext = null;

        if(description !== null){
            if(showAllDescription){

                descrShow = description;
                if(description.length > limit){atext = '  hide';} 

            }else{

                if(description.length > limit){
                    descrShow = "" + description.slice(0, limit);
                    atext = ' ...more';
                }else{
                    descrShow = description;
                } 
                
            }
        }
        return {descrShow, atext} 
    }

    render(){
        const {name, html_url,description} = this.props;
        const {showAllDescription} = this.state;       
        const {descrShow, atext} = this.transformDescription(description, showAllDescription, 180);        

        return (
            <div className="repositories-card">
                    <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
                    <span className="repository-info">
                        {descrShow} <a href="#0" className='showMore' onClick={this.showAllDescriptionToggle}>{atext}</a>
                    </span>                    
            </div>
        )
    }
    
}

export default RepositoryCard;