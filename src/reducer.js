import { INCREASE, DECREASE, CLEAR_CART } from "./actions";

export const reducer = (state, action) => {
    // if (action.type === CLEAR_CART) {
    //     return {
    //         ...state,
    //         cart: []
    //     }
    // }

    // return state;

    switch (action.type) {
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }

}
