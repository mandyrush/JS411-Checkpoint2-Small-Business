import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { removeBusiness } from '../redux/action';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);