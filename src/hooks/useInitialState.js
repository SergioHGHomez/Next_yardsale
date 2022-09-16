import { useState } from "react";

const initialState = {
    cart: [],
    email: 'user@mail.com',
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {

        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeToCart = payload => {

        setState({
            ...state,
            cart: state.cart.filter((item) => {
                return item.id !== payload.id
            })
        })
    }

    const saveEmail = userEmail => {

        setState({

            ...state,
            email: userEmail,

        }
        )
    }

    return{
        state,
        addToCart,
        removeToCart,
        saveEmail
    }
}

export default useInitialState;

