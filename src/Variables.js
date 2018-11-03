import { EventEmitter } from "events";

// some important variables of the system
class Variables extends EventEmitter{
  constructor(){
    super()
    this.variables = {
      isMobile: false
    }

  }

  isMobile(){
    return this.variables.isMobile;
  }

  getAll(){
    return this.variables;
  }
}

const variables = new Variables;

export default variables;
