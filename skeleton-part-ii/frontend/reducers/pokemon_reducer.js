import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return action.pokemon;
  case RECEIVE_ONE_POKEMON:
    // debugger
    //action.pokemon = {key: id, value: {pokemon{}}}
    
    // let id = Object.keys(action.payload.pokemon);
    // return nextState[id] = Object.values(action.payload.pokemon)[0];
    return nextState[action.payload.pokemon.id] = action.payload.pokemon;
  default:
    return state;
  }
}
  
export default pokemonReducer;
