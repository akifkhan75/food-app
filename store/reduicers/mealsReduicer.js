import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAV } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favMeals: []
}

export const mealsReduicer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const existingIndex = state.favMeals.findIndex(meal => meal.id === action.id);
            if(existingIndex >= 0) {
                const updatedFav = [...state.favMeals];
                updatedFav.splice(existingIndex,1);
                return {...state, favMeals: updatedFav};
            } else {
                const meal = state.meals.find(meal => meal.id === action.id);
                console.log(action.id)
                return {...state, favMeals: state.favMeals.concat(meal)}
            }
        case SET_FILTERS:
            const currentList = [...state.meals];
            const filteredList = currentList.filter(item => {
                if(!item.isGlutenFree && action.filters.isGlutenFree) {
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: filteredList}
        default:
            return state;
    }
}