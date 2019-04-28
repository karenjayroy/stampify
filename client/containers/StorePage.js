import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = store => ({
    store: store.store
})

class StorePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="storePage">
                Welcome to the Store Page! Store
                {" " + this.props.store.storeId}
            </div>

        )
    }
}


export default connect(mapStateToProps, null)(StorePage);
