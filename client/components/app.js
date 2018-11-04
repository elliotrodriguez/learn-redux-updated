import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action-creators'
import Main from './main'

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}


// take state, then action creators, into connect via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default withRouter(App);