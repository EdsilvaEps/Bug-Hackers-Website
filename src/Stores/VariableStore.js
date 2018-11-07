import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

/*
Author : Edson N Silva

Storage for local variables of the app
like Mobile screen awarenes. Listens to dispatcher (pubsub)
for change of variables and broadcasts the change globally
through EventEmmiter
*/


// some important variables of the system
class VariableStore extends EventEmitter{
  constructor(){
    super()
    this.variables = {
      isMobile: false
    }

  }

  setMobile(ismobile){
    this.variables.isMobile = ismobile;

    this.emit("screen-size-change");
  }

  isMobile(){
    return this.variables.isMobile;
  }

  getAll(){
    return this.variables;
  }

  // handle incoming dispatcher actions and acts
  // accordingly
  handleActions(action){
    //console.log("VariableStore received an action", action);

    switch (action.type) {
      case "SCREEN-SIZE-CHANGE":
        this.setMobile(action.value)
        break;


    }

  }

}

const variablestore = new VariableStore;
dispatcher.register(variablestore.handleActions.bind(variablestore));

// expose dispatcher globally for test with web console
window.dispatcher = dispatcher;
export default variablestore;
