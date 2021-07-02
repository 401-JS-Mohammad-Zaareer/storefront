// state container
const initialState = {
    products: [
        {
            category: 'FOOD',
            name: 'Tomato',
            description: 'delicious and natural 100%',
            price: 0.15,
            count: 3261,
            img: '/assets/tomato.jpg'
        },
        {
            category: 'FOOD',
            name: 'Botato',
            description: 'delicious and natural 100%',
            price: 0.20,
            count: 1335,
            img: '/assets/botato.jpg'
        },
        {
            category: 'ELECTRONICS',
            name: 'Drone',
            description: 'smart drone with HD camera and 14.8V for the battery',
            price: 100,
            count: 25,
            img: '/assets/drone.jpg'
        },
        {
            category: 'ELECTRONICS',
            name: 'Mood Ring',
            description: 'indicate how you are feeling',
            price: 55,
            count: 10,
            img: '/assets/mood-ring.jpg'
        },
    ]
}

//reducer
export default function productsReducer(state=initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case 'SELECT':
            const products = initialState.products.filter((product) => {
                return product.category === payload;
            });
            return {products};
        case 'ADD_TO_CART':
            const productsAfterAdding = state.products.map((product) =>{
                if(product.name === payload.name) {
                   product = {...product, count: product.count - 1};
                   return product;
                }
                return product;
            });
            return {products: productsAfterAdding};
        default: 
            return {products: []};
    }
}

// actions
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}