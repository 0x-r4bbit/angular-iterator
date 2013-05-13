# angular-iterator [![Build Status](https://travis-ci.org/PascalPrecht/angular-iterator.png?branch=master)](https://travis-ci.org/PascalPrecht/angular-iterator) [![Build Status](https://travis-ci.org/PascalPrecht/angular-iterator.png?branch=canary)](https://travis-ci.org/PascalPrecht/angular-iterator) [![Dependency Status](https://gemnasium.com/PascalPrecht/angular-iterator.png)](https://gemnasium.com/PascalPrecht/angular-iterator)

> An AngularJS Iterator Pattern implementation

## Quick Start

```js
var app = angular.module('myApp', ['pascalprecht.iterator']);

app.controller('Ctrl', function ($scope, $iterator) {

  var iterator = $iterator([2, 3, 4]);

  iterator.current(); // returns 2
  iterator.next(); // returns 3

  iterator.current(); // returns 3
  iterator.hasNext(); // returns true

  iterator.rewind();
  iterator.current(); //returns 2;
});
```

[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://wtfpl.net)
