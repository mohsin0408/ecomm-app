
import { createStore } from 'redux';

const initialState = {
    products: {
        items: [],
    },
    theme: {
        darkMode: false,
    },
    cart: [],
    sortOption: "normal",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: {
                    ...state.products,
                    items: action.payload,
                },
            };
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: {
                    ...state.theme,
                    darkMode: !state.theme.darkMode,
                },
            };
        case 'SET_SORT_OPTION': 
            return {
                ...state,
                sortOption: action.payload,
            };

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;    
    }
};

const store = createStore(rootReducer);

export default store;

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
});

export const setSortOption = (option) => ({
    type: 'SET_SORT_OPTION',
    payload: option,
});

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
});
