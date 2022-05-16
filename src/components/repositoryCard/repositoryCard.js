import { Component } from 'react';
import './repositoryCard.css';

class RepositoryCard extends Component {    
    state = {
        showDescription: false
    }

    showDescriptionToggle = () => {  
        this.setState(
            ({showDescription})=>(
                {showDescription: !showDescription}
            )
        )      
    }

    render(){
        const {name, html_url,description} = this.props;
        const {showDescription} = this.state;

        let descrShow = null;
        let atext = null;

        if(description !== null){
            if(showDescription){
                    descrShow = description;
                    if(description.length > 180){
                        atext = '  hide';
                    }                 
            }else{
                    if(description.length > 180){
                        descrShow = "" + description.slice(0, 180);
                        atext = ' ...more';
                    }else{
                        descrShow = description;
                    }
            }
        }

        return (
            <div className="repositories-card">
                    <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
                    <span className="repository-info">
                        {descrShow} <a href="#0" className='showMore' onClick={this.showDescriptionToggle}>{atext}</a>
                    </span>                    
            </div>
        )
    }
    
}

export default RepositoryCard;