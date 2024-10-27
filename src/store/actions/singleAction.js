// src/store/actions/productActions.js
export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

// src/store/actions/themeActions.js
export const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
});

export const setSortOption = (option) => ({
    type: 'SET_SORT_OPTION',
    payload: option,
});

// src/store/actions/cartActions.js
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
});