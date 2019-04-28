import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = store => ({
    user: store.user
})

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="userPage">
                Welcome to the User Page! User
                {" " + this.props.user.userId}
            </div>

        )
    }
}


export default connect(mapStateToProps, null)(UserPage);
