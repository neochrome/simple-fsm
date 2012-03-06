simple-fsm - Create simple finite state machines
===

Install with:

    npm install simple-fsm

### Usage

		var fsm = require('simple-state');
		var machine = fsm.create({
			OFF:{ toggle: function(){ this.ON(); } },
			ON:{ toggle: function(){ this.OFF(); }}
		}).OFF(); // set the initial state to OFF
