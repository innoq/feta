/*jshint node: true */
"use strict";

var gulp = require("gulp");

// `entryPoint` is a JavaScript file
// `target` is the bundle's file path
module.exports = function(entryPoint, target) {
	return function() { // gulp task
		bundle(target, entryPoint);
		// TODO: return value?
	};
};

// arguments are the same as above
// NB: not a gulp task
module.exports.watchify = function(entryPoint, target) {
	bundle(target, entryPoint, true);
	// TODO: return value?
};

// TODO: blank bundle on error
function bundle(target, entryPoint, watch) {
	var argv = [null, null];

	var module = "browserify/bin/cmd";
	if(watch) {
		module = "watchify/bin/cmd";
		argv.push("-v");
	}

	argv.push("-o", target, entryPoint);
	process.argv = argv;
	require(module);
}
