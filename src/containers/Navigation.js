import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { removeUser } from '../redux/action';

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: (user) => dispatch(removeUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);