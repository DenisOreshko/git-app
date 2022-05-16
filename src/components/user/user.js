import { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubService from '../../services/GitHubService';
import ViewUser from '../viewUser/viewUser';
import './user.css';

class User extends Component { 
    
    state = {
        user:{},
        loading:false,
    }

    gitHubService = new GitHubService();

    componentDidMount(){
        this.onUserLoaded(this.props.user);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user) {
            console.log(this.props.user.avatar_url);
            this.onUserLoaded(this.props.user);
        }
      }
    
    followersTransform = (num) =>{
        let thousands = num/1000;
        let hundreds = num%1000 +'';  
        return num > 999 ? `${Math.trunc(thousands)}.${hundreds[0]}k` : num;
    }

    onUserLoaded = (user) => {
        user.followers = this.followersTransform(user.followers);
        this.setState({user, loading: false});        
    } 

    render(){
        const {user, loading} = this.state;
        const content = !(loading) ? <ViewUser user={user}/> : null;
        return (
            <>
                {content}
            </>
        )
    }
}

User.propTypes = {
    user: PropTypes.object
}

export default User;