"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var gutil = require("gulp-util");

// compiles Sass style sheets to CSS while adding vendor prefixes
// `entryPoint` is a Sass file
// `target` is the bundle's file name
// `destination` is the bundle's directory
// `options` is passed through to gulp-sass
module.exports = function(entryPoint, target, destination, options) {
	options = options || {};
	return function() { // gulp task
		var settings = {
			errLogToConsole: true,
			onError: function(err) { // TODO: blank bundle
				gutil.log("ERROR: Sass compilation failed", err.message);
			}
		};
		for(var prop in options) {
			settings[prop] = options[prop];
		}
		return gulp.src(entryPoint).
			pipe(sass(settings)).
			pipe(autoprefixer()). // TODO: target browsers
			pipe(rename(target)).
			pipe(gulp.dest(destination));
	};
};
