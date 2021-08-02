import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';


const configureStore = (initialState, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer = 
      compose(applyMiddleware(...middlewares));
    const store = createStore(reducer, initialState, enhancer);
    return store;
  
  }
  
  export default configureStore