const initialState = [];

//reducer
export default function cartReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART':
            payload.count = 1;
            let added = false;
            let cartItems = [...state];
            cartItems = cartItems.map((item) => {
                if (item.name === payload.name) {
                    added = true;
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            if (!added) return [...cartItems, payload];
            return cartItems;
        default:
            return state;
    }
}