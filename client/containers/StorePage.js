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

// Main page for the Store
class StorePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      if(!this.props.store.storeId) { //For when store logs out. On state change, render Redirect.
        return <Redirect to="/"></Redirect>
      } else
        return(
            <div id="storePage">
                <h1>Welcome {" " + this.props.store.storeName}! </h1>
                <AddStampBox store={this.props.store} addStamp={this.props.addStamp}/>
                <button className="logout" onClick={this.props.logout}>Log Out</button>
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
