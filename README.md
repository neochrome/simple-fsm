[![Build Status](https://travis-ci.org/neochrome/simple-fsm.png?branch=master)](https://travis-ci.org/neochrome/simple-fsm)
[![endorse](https://api.coderwall.com/neochrome/endorsecount.png)](https://coderwall.com/neochrome)

# simple-fsm
Create simple finite state machines

## Nodejs

### Installation
```
$ npm install simple-fsm --save
```

### Usage
```javascript
var fsm = require('simple-fsm');
var machine = fsm.create({
	OFF:{ toggle: function(){ this.ON(); } },
	ON:{ toggle: function(){ this.OFF(); } }
}).OFF(); // set the initial state to OFF
```

## Browser

### Installation ([bower](https://bower.io))
```
$ bower install simple-fsm --save
```

### Usage
```html
<script src="bower_components/simple-fsm/src/simple-fsm.js"></script>
<script>
	var machine = fsm.create({
		OFF:{ toggle: function(){ this.ON(); } },
		ON:{ toggle: function(){ this.OFF(); } }
	}).OFF(); // set the initial state to OFF
</script>
```
