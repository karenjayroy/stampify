import React from 'react';
import { connect } from 'react-redux';
import AddStampBox from '../components/AddStampBox';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
    store: store.store
})

const mapDispatchToProps = dispatch => ({
  addStamp: (storeId, phone) => dispatch(actions.addStampAsync(storeId, phone))
})

class StorePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="storePage">
                <h1>Welcome to the Store Page {" " + this.props.store.storeName +" User!"}</h1>
                <AddStampBox store={this.props.store} addStamp={this.props.addStamp}/>
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
