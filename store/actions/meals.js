export const TOGGLE_FAV = 'TOGGLE_FAV';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFav = mealId => {
    return {type: TOGGLE_FAV, id: mealId}
}

export const changeFilters = appliedFilters => {
    return {type: SET_FILTERS, filters: appliedFilters}
}