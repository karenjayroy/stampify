import React from 'react'
import { connect } from 'react-redux'
import AddCard from './../components/AddCard'
import StampCard from './../components/StampCard'
import * as actions from '../actions/actions'
import {Redirect} from 'react-router-dom'

// need to create mapdispatch to props
const mapDispatchToProps = dispatch => ({
    addCard: (userName, storeName) => dispatch(actions.addCardAsync(userName, storeName)),
    logout: () => dispatch(actions.logout())
})

const mapStateToProps = store => ({
    user: store.user,
    store: store.store
})

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const stampCards = this.props.user.loyaltyCards.map((el, index) => {
            console.log('this is each element', el);
            return <StampCard key={index} stampCount={el.stamp_count} storeName={el.store_name} />
        })

        if(!this.props.user.userId) {
          return <Redirect to="/"></Redirect>
        } else
        return(
            <div id="userPage">
<<<<<<< HEAD
                <h1> Welcome Loyal Customer {" " + this.props.user.userName}! </h1>
                < AddCard addCard={this.props.addCard} user={this.props.user} />  
=======
                <h1> Welcome to the User Page {" " + this.props.user.userName}! </h1>
                < AddCard addCard={this.props.addCard} user={this.props.user} />
>>>>>>> 507b7e870c20cdad29c8305b603604c9fd352d48
                <div id="stampCards">
                    {stampCards}
                </div>
                <button onClick={this.props.logout}>Log Out</button>
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
