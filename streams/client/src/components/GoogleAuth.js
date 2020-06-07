import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "925150150307-rteki8o90ujg92ojndjaqlobe00mbu2t.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        const userId = this.auth.currentUser.get().getId();
        if(isSignedIn) {
            this.props.signIn( userId );
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();
    
    renderAuthState() {
        if(this.props.isSignedIn == null) {
            return null;
        } else if( this.props.isSignedIn ) {
            return(
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return(
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }
    
    render() {
    return <div>{this.renderAuthState()}</div>
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth); 