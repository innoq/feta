/*jshint node: true */
"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");

// JavaScript linting using JSHint: http://www.jshint.com/docs/
// `sources` is a glob referencing JavaScript files
module.exports = function(sources) {
	return function() { // gulp task
		return gulp.src(sources).
			pipe(jshint()).
			pipe(jshint.reporter("jshint-stylish")).
			pipe(jshint.reporter("fail"));
	};
};
