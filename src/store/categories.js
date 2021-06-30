// state container
const initialState = {
    categories: [
        {
            normalizedName: 'FOOD',
            displayName: 'FOOD',
            description: 'Different Types of Food Waiting For You Out There'
        },
        {
            normalizedName: 'ELECTRONICS',
            displayName: 'ELECTRONICS',
            description: 'Pick Your Favorite Device At The Lowest Cost'
        }
    ],
    activeCategory: {
        normalizedName: '',
        displayName: '',
        description: ''
    }
}

// reducer
export default function categoriesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SELECT':
            const selectedCategory = initialState.categories.filter((category) => {
                return category.normalizedName === payload
            });
            return { ...state, activeCategory: selectedCategory[0]};
        default:
            return state;
    }
}

// action
export const select = (categoryName) => {
    return {
        type: 'SELECT',
        payload: categoryName
    }
}