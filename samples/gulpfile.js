"use strict";

var gulp = require("gulp");
var sass = require("feta/tasks/sass"); // NB: LESS works the same way
var browserify = require("feta/tasks/browserify");
var jscs = require("feta/tasks/jscs");
var jshint = require("feta/tasks/jshint");
var path = require("path");

var paths = {
	sassEntry: "styles/main.scss",
	sassAll: "styles/**/*.scss",
	css: "bundle.css",
	jsEntry: "scripts/main.js",
	jsAll: "scripts/**/*.js",
	js: "bundle.js",
	distro: "dist"
};

var jsExport = "MyInterface";

// CoffeeScript support
// NB:
// * unused, for illustration purposes only
// * this requires an entry like `"browserify": { "transform": ["coffeeify"] }`
//   in `package.json`
paths.csEntry = "scripts/main.coffee";
var jsExtensions = [".coffee"];

gulp.task("autocompile", ["styles"], function() {
	gulp.watch(paths.sassAll, ["styles"]);
	gulp.watch(paths.jsAll, ["lint"]);
	browserify.watchify(paths.jsEntry, path.join(paths.distro, paths.js),
			jsExtensions, jsExport);
	// TODO: return value?
});

gulp.task("lint", ["jshint", "jscs"]);

gulp.task("styles", sass(paths.sassEntry, paths.css, paths.distro));

gulp.task("browserify", browserify(paths.jsEntry,
		path.join(paths.distro, paths.js), jsExtensions, jsExport));

gulp.task("jscs", jscs(paths.jsAll));

gulp.task("jshint", jshint(paths.jsAll));
