import { ADD_BLOG } from "./blogTypes";

const initialState = {
    blogs: []
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BLOG: return {
            ...state,
            blogs: [...state.blogs, action.payload]
        }
        default: return state
    }
}

export default blogReducer;