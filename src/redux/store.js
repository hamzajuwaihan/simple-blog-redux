import { createStore } from "redux";
import blogReducer from "./blogs/blogReducer";



const store = createStore(blogReducer);

export default store;