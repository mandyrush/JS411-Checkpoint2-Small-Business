import { connect } from 'react-redux';
import Login from '../components/Login';
import { addUser } from '../redux/action';

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);