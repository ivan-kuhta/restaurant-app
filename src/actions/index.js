const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCard = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
}

const deleteFromCard = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    };
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
    deleteFromCard
};