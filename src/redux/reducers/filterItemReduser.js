import { FILTER_ITEM } from "../actions/actionTypes";

const initialState = {
    filteredItems: [],
    text: '',
}

export default function fiterItemReduser (state = initialState, action) {
    switch (action.type) {
        case FILTER_ITEM:
            const {items, value} = action.payload;
            const valueRegister = value.toLowerCase();
          
            return state = {filteredItems:[...items.filter((el) => el.name.toLowerCase().includes(valueRegister))] , text: value};
        default:
            return state; 
    }
}