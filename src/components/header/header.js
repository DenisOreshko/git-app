import React, { Component } from 'react';  
import iconGitHub from '../../resources/img/icon/icon_github.svg';
import searchIcon from '../../resources/img/icon/search.svg';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            searchText:''
        }
    }

    onUpdateSearch = (e) => {
       
        const search = (e.target.value).replace(/%/ig, '');//remove '%' character from search query

        this.setState({searchText: search});

        if(search === ''){
            this.props.onSearchUserApp(search); 
        }
    }

    onUpdateSearchEnter = (e) => {        
        if(e.key === 'Enter'){            
            e.preventDefault();

            const search = e.target.value;

            this.setState({searchText: search});

            this.props.onSearchUserApp(search);            
        }        
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    render(){
        return (
            <header className="header">
                <img src={iconGitHub} alt="icon_github"/>
                <form>
                    <img src={searchIcon} alt="icon"/>
                    <input  ref={this.inputRef}
                            type="text" 
                            placeholder="Enter GitHub username"
                            value={this.state.searchText}
                            onChange={this.onUpdateSearch}
                            onKeyDown={this.onUpdateSearchEnter}/>   
                </form>
            </header>
        )
    }
}
export default Header;