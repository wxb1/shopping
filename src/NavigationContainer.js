import { connect } from "react-redux";
import Navigation from './Navigation';

const mapStateToProps = (state) => {
    return {
        cart: state.inventory.cart,
    };

}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const NavigationContainer = connect(mapStateToProps,mapDispatchToProps)(
    Navigation
);

export default NavigationContainer;