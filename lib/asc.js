var Error = require(__dirname+"/error.js");

function Asc(value) {
  this.value = value; //TODO Remove when done debugging
}

Asc.prototype.toJSON = function() {
  throw new Error.ReqlRuntimeError('ASC may only be used as an argument to ORDER_BY', [])
}

Asc.prototype.toDatum = function(query) {
  //TODO check everywhere that an instance of ASC is not returned.
  throw new Error.ReqlRuntimeError('ASC may only be used as an argument to ORDER_BY', query.frames)
}

module.exports = Asc;