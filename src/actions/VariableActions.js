/*
Author : Edson N Silva

actions to trigger events in VariableStore.js
through dispatcher (pubsub)
*/

import dispatcher from "../dispatcher";


export function setMobile(value){
  dispatcher.dispatch({
    type: "SCREEN-SIZE-CHANGE",
    value
  });

}

export function exampleAction(id){
  dispatcher.dispatch({
    type: "SOME-ACTION",
    id,
  });
}
