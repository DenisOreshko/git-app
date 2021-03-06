import React, { Component } from 'react';  
import iconGitHub from '../../resources/img/icon/icon_github.svg';
import searchIcon from '../../resources/img/icon/search.svg';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            search:''
        }
    }

    onUpdateSearch = (e) => {     
        const reg = /%/ig;//remove '%' character from search query. Make erro 400 github api
        const searchQ = (e.target.value).replace(reg, '');
        this.setState(({search})=>({search:searchQ}));
    }

    onPressEnter = (e) => {        
        if(e.key === 'Enter'){            
            e.preventDefault();
            this.onUpdateSearch(e);            
            this.props.onSearchUserApp(this.state.search);            
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
                            value={this.state.search}
                            onChange={this.onUpdateSearch}
                            onKeyDown={this.onPressEnter}/>   
                </form>
            </header>
        )
    }
}
export default Header;