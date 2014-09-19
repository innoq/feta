/*jshint node: true */
"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var gutil = require("gulp-util");

// compiles LESS style sheets to CSS while adding vendor prefixes
// `entryPoint` is a LESS file
// `target` is the bundle's file name
// `destination` is the bundle's directory
module.exports = function(entryPoint, target, destination) {
	return function() { // gulp task
		return gulp.src(entryPoint).
			pipe(less()).
			on("error", function(err) { // TODO: blank bundle
				gutil.log("ERROR: LESS compilation failed", err.message);
			}).
			pipe(autoprefixer()). // TODO: target browsers
			pipe(rename(target)).
			pipe(gulp.dest(destination));
	};
};
