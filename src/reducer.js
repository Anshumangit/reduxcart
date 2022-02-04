import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";

export const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === INCREASE) {
        const tempcart = state.cart.map((cval) => {
            console.log(cval);
            if (cval.id === action.payload.id) {
                return {
                    ...cval,
                    amount: cval.amount + 1
                }
            }
            return cval
        })
        return {
            ...state,
            cart: tempcart
        }
    }

    if (action.type === DECREASE) {
        let dtempcart = []
        if (action.payload.amount === 1) {
            dtempcart = state.cart.filter((fval) => {
                return fval.id !== action.payload.id
            })
        }

        else {

            dtempcart = state.cart.map((cval) => {
                if (cval.id === action.payload.id) {
                    return {
                        ...cval,
                        amount: cval.amount - 1
                    }
                }
                return cval
            })
        }
        return {
            ...state,
            cart: dtempcart
        }
    }

    if (action.type === REMOVE) {
        console.log("you removed");
        const remain = state.cart.filter((fval) => {
            return fval.id !== action.payload.id;
        })
        return {
            ...state,
            cart: remain
        }
    }


    //below using mapStateToProps, bt not good practice
    // if (action.type === REMOVE) {
    //     const reitem = state.cart.filter((fval) => {
    //         return fval.id !== action.payload
    //     })
    //     return {
    //         ...state,
    //         cart: reitem
    //     }
    //     console.log("you removed");
    // }

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
