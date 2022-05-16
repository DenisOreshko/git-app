import { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubService from '../../services/GitHubService';
import ViewUserInfo from '../viewUserInfo/viewUserInfo';
import './userInfo.css';

class UserInfo extends Component { 
    
    state = {
        user:{},
        loading:false,
    }

    gitHubService = new GitHubService();

    componentDidMount(){
        this.onUserLoaded(this.props.userapp);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.userapp !== this.props.userapp) {
            console.log(this.props.userapp.avatar_url);
            this.onUserLoaded(this.props.userapp);
        }
      }
    
    followersTransform = (num) =>{
        let count = num/1000;
        let ostatok = num%1000 +'';  
        return num > 999 ? `${Math.trunc(count)}.${ostatok[0]}k` : num;
    }

    onUserLoaded = (user) => {
        user.followers = this.followersTransform(user.followers);
        this.setState({user, loading: false});        
    } 

    render(){
        const {user, loading} = this.state;
        const content = !(loading) ? <ViewUserInfo user={user}/> : null;
        return (
            <>
                {content}
            </>
        )
    }
}

UserInfo.propTypes = {
    userapp: PropTypes.object
}

export default UserInfo;