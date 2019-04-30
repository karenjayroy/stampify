import React from 'react'
import { connect } from 'react-redux'
import AddCard from './../components/AddCard'
import StampCard from './../components/StampCard'
import * as actions from '../actions/actions'
import {Redirect} from 'react-router-dom'

//adds a card dispatch to actions
const mapDispatchToProps = dispatch => ({
    addCard: (userName, storeName) => dispatch(actions.addCardAsync(userName, storeName)),
    logout: () => dispatch(actions.logout())
})

//user and store keys pass down data to the child props
const mapStateToProps = store => ({
    user: store.user,
    store: store.store
})


//stateful component
class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        //maps throught the loyalty cards array and returns a stamp card with a stamp count and store name

        const stampCards = this.props.user.loyaltyCards.map((el, index) => {
            return <StampCard key={index} stampCount={el.stamp_count} storeName={el.store_name} />
        })

        if(!this.props.user.userId) {
          return <Redirect to="/"></Redirect>
        } else
        return(
            <div id="userPage">

                <h1> Welcome Loyal Customer {" " + this.props.user.userName}! </h1>
                < AddCard addCard={this.props.addCard} user={this.props.user} />  
                <div id="stampCards">
                    {stampCards}
                </div>
                <button className="logout" onClick={this.props.logout}>Log Out</button>
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
