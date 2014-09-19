"use strict";

var gulp = require("gulp");
var sass = require("feta/tasks/sass"); // NB: LESS works the same way
var browserify = require("feta/tasks/browserify");
var jscs = require("feta/tasks/jscs");
var jshint = require("feta/tasks/jshint");

var paths = {
	sassEntry: "styles/main.scss",
	sassAll: "styles/**/*.scss",
	css: "bundle.css",
	jsEntry: "scripts/main.js",
	jsAll: "scripts/**/*.js",
	js: "bundle.js",
	distro: "dist"
};

gulp.task("autocompile", ["styles"], function() {
	gulp.watch(paths.sassAll, ["styles"]);
	gulp.watch(paths.jsAll, ["lint"]);
	browserify.watchify(paths.jsEntry);
	// TODO: return value?
});

gulp.task("lint", ["jshint", "jscs"]);

gulp.task("styles", sass(paths.sassEntry, paths.css, paths.distro));

gulp.task("browserify", browserify(paths.jsEntry));

gulp.task("jscs", jscs(paths.jsAll));

gulp.task("jshint", jshint(paths.jsAll));
