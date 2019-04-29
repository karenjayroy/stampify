import React from 'react'
import { connect } from 'react-redux'
import AddCard from './../components/AddCard'


// need to create mapdispatch to props
const mapDispatchToProps = dispatch => ({
    addCard: (userName, storeName) => dispatch(actions.addCardAsync(userName, storeName))
})

const mapStateToProps = store => ({
    user: store.user,
    store: store.store
})

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(props) 

    render() {
        return(
            <div id="userPage">
                Welcome to the User Page! User
                {" " + this.props.user.userId}
                < AddCard addCard={this.props.addCard} />  
                {/* < StampCards /> need boolean to check if addcard button was clicked, or from user info when logged in. */}
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
