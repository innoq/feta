"use strict";

var gulp = require("gulp");
var jscs = require("gulp-jscs");

// checks JavaScript code style using node-jscs:
// https://www.npmjs.org/package/jscs
// `sources` is a glob referencing JavaScript files
// TODO: defaults? otherwise this is hardly worth the indirection
module.exports = function(sources) {
	return function() { // gulp task
		return gulp.src(sources).
			pipe(jscs());
	};
};
