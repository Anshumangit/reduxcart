import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";

export const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === INCREASE) {
        console.log("you increased");
    }

    if (action.type === DECREASE) {
        console.log("you decreased");
    }

    if (action.type === REMOVE) {
        const reitem = state.cart.filter((fval) => {
            return fval.id !== action.payload
        })
        return {
            ...state,
            cart: reitem
        }
        console.log("you removed");
    }

    return state;

    // switch (action.type) {
    //     case CLEAR_CART:
    //         return {
    //             ...state,
    //             cart: []
    //         }
    //     default:
    //         return state
    // }

}
