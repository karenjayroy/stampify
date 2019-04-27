import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = store => ({
    userId: store.userId
})

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="userPage">
                {this.props.userId}
            </div>

        )
    }
}


export default connect(mapStateToProps, null)(UserPage);