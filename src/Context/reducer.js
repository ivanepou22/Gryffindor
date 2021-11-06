export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    basket?.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
                //logic for removing item from the basket
                let newBasket = [...state.basket];
                 //find index of the item in the basket
                const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
                if (index >= 0) {
                    //remove item from the basket
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        `Cant remove product (id: ${action.id}) as its not in basket!`
                    );
                }
                return { ...state, basket: newBasket };
        default:
            return state
    }
}

export default reducer;