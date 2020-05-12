import React from 'react'

/* The actions */
import { begin_api_test, api_run_test } from "../src/redux/actions/TestAction"

/* Things to combine redux stuffs into the class */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Test extends React.Component {
    componentDidMount(){
        const { dispatch } = this.props;

        dispatch( begin_api_test() )
        dispatch( api_run_test() )
    }

    render() {
        const { test } = this.props
        return (
            <div>
                {test.test_state}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.test
    }
}

function mapDispatchToProps(dispatch) {
    const map = bindActionCreators({}, dispatch);
    map.dispatch = dispatch;
    return map;
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)