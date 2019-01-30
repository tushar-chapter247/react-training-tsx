import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function logger({ getState }: any) {
  return (next: (arg0: any) => void) => (action: any) => {
    console.log('[REDUX] WILL DISPATCH: ', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('[REDUX] STATE AFTER DISPATCH: ', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  }
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));

export default store;
