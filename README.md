[![Build Status](https://travis-ci.org/neochrome/simple-fsm.png?branch=master)](https://travis-ci.org/neochrome/simple-fsm)
[![endorse](https://api.coderwall.com/neochrome/endorsecount.png)](https://coderwall.com/neochrome)

# simple-fsm
Create simple finite state machines

### Installation
```
$ npm install simple-fsm
```

### Usage
```javascript
var fsm = require('simple-fsm');
var machine = fsm.create({
	OFF:{ toggle: function(){ this.ON(); } },
	ON:{ toggle: function(){ this.OFF(); } }
}).OFF(); // set the initial state to OFF
```
