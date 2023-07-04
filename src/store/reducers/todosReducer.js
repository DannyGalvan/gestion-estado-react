import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actions';

let initialState = [];

export const todosReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
        case DELETE_TODO:
            const newState = [...state];
            const idx = newState.findIndex(x => x.id === action.payload.id);  
            newState.splice(idx,1);          
            return newState;
    
        default:
            return state;
    }
}