import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import movies from './reducers/reducer';
import RootReducer from './reducers/reducer';
// import Provider, { StoreContext } from './Context/Context';
import {Provider} from 'react-redux';




//curried or currying function
// const logger = function({dipatch,getState})  {
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }
// }
// const logger2 = ({dispatch,getState})=>(next)=>(action)=>{
//   console.log('ACTION_TYPE = ',action.type);
//       next(action);
// }
// const thunk = ({dispatch,getState}) => (next)=>(action)=>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const store = createStore(RootReducer, applyMiddleware(thunk));
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch = {store.dispatch}/>
//         );
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return <StoreContext.Consumer>
//           {(store)=> <ConnectedComponent store = {store}/>}
//         </StoreContext.Consumer>
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
  
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

