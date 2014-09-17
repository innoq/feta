This repository contains a collection of common front-end tasks. Among other
things, this allows composition of a custom asset pipeline with a variety of CSS
and JavaScript preprocessors.

The idea is to pick and choose individual tasks, depending on the project - i.e.
there's no overarching framework here.

[gulp](http://gulpjs.com) is used because, while somewhat
[controversial](https://blog.jcoglan.com/2014/02/05/building-javascript-projects-with-make/),
the front-end community has largely settled on JavaScript-based build tools -
thus the ecosystem is evolving around those, rendering them almost inescapable.


Getting Started
---------------

* `npm install https://github.com/innoq/feta.git` (note that the
  [feta package on npm](https://www.npmjs.org/package/feta) is unrelated)
* use tasks as demonstrated in [`samples/gulpfile.js`](samples/gulpfile.js)
  (note that this might require `npm`-installing additional packages)


----

licensed under the Apache License, version 2.0
