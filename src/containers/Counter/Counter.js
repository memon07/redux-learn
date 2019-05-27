import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/action/index'

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddingCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractingCounter} />
                <hr/>
                <button onClick={() =>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(result => (
                        <li key={result.id} onClick={() =>this.props.onDeleteResult(result.id)}>{result.val}</li>
                    ))}
                </ul>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult:state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddingCounter: () => dispatch(actionCreators.add(5)),
        onSubtractingCounter: () => dispatch(actionCreators.sub(5)),
        onStoreResult: (res) => dispatch(actionCreators.storeResult(res)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);