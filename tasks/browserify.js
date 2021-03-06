"use strict";

var gulp = require("gulp");

// `entryPoint` is a JavaScript file
// `target` is the bundle's file path
// `extensions` is a list of file extensions to be supported
// `expose` creates an UMD-compatible export of the specified object
// NB: transforms (e.g. preprocessors) should be declared in `package.json`
// XXX: `extensions` should eventually be managed via `package.json` as well:
// https://github.com/substack/node-browserify/issues/809
module.exports = function(entryPoint, target, extensions, expose) {
	return function() { // gulp task
		bundle(entryPoint, target, {
			extensions: extensions,
			standalone: expose
		});
		// TODO: return value?
	};
};

// arguments are the same as above
// NB: not a gulp task
module.exports.watchify = function(entryPoint, target, extensions, expose) {
	var options = {
		extensions: extensions,
		standalone: expose,
		watch: true
	};
	bundle(entryPoint, target, options);
	// TODO: return value?
};

// TODO: blank bundle on error
function bundle(entryPoint, target, options) {
	options = options || {};
	options.extensions = options.extensions || [];
	var argv = [null, null];

	var module = "browserify/bin/cmd";
	if(options.watch) {
		module = "watchify/bin/cmd";
		argv.push("-v");
	}
	options.extensions.forEach(function(ext) {
		argv.push("--extension=" + ext);
	});
	if(options.standalone) {
		argv.push("--standalone=" + options.standalone);
	}

	argv.push("-o", target, entryPoint);
	process.argv = argv;
	require(module);
}
