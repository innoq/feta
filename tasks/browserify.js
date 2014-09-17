/*jslint node: true, vars: true, white: true */
"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");

// `entryPoint` is a JavaScript file
module.exports = function(entryPoint) {
	return function() { // gulp task
		var bundler = browserify(entryPoint);
		return bundle(bundler);
	};
};

// `entryPoint` is a JavaScript file
// NB: not a gulp task
exports.watchify = function(entryPoint) {
	var bundler = watchify(entryPoint);
	var rebundle = function() {
		bundle(bundler);
	};
	bundler.on("update", rebundle);
	return rebundle();
};

function bundle(bundler) {
	return bundler.bundle().
		on("end", function() {
			gutil.log("compiled JavaScript via Browserify");
		}).
		on("error", function(err) { // TODO: blank bundle
			gutil.log("ERROR: Browserify failed", err);
		}).
		pipe(source("bundle.js")).
		pipe(gulp.dest("./dist"));
}
