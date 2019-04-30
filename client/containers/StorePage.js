import React from 'react';
import { connect } from 'react-redux';
import AddStampBox from '../components/AddStampBox';
import * as actions from '../actions/actions';
import {Redirect} from 'react-router-dom';

const mapStateToProps = store => ({
    store: store.store
})

const mapDispatchToProps = dispatch => ({
  addStamp: (storeId, phone) => dispatch(actions.addStampAsync(storeId, phone)),
  logout: () => dispatch(actions.logout())
})

class StorePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      if(!this.props.store.storeId) {
        return <Redirect to="/"></Redirect>
      } else
        return(
            <div id="storePage">
                <h1>Welcome to the Store Page! {" " + this.props.store.storeName +" User"}</h1>
                <AddStampBox store={this.props.store} addStamp={this.props.addStamp}/>
                <button onClick={this.props.logout}>Log Out</button>
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
