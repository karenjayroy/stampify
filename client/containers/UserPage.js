import React from 'react'
import { connect } from 'react-redux'
import AddCard from './../components/AddCard'
import StampCard from './../components/StampCard'
import * as actions from '../actions/actions' 

// need to create mapdispatch to props
const mapDispatchToProps = dispatch => ({
    addCard: (userName, storeName, ) => dispatch(actions.addCardAsync(userName, storeName))
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
        // console.log('this is ittt.', this.props.user.loyaltyCards);
        const stampCards = this.props.user.loyaltyCards.map((el, index) => {
            console.log('this is each element', el);
            return <StampCard key={index} stampCount={el.stamp_count} storeName={el.store_name} />
        })
        return(
            <div id="userPage">
                Welcome to the User Page! User
                {" " + this.props.user.userId}
                < AddCard addCard={this.props.addCard} user={this.props.user} />  
                {stampCards}
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
