/*jslint node: true, white: true */
"use strict";

var gulp = require("gulp");
var jscs = require("./tasks/jscs");
var jshint = require("./tasks/jshint");

var paths = {
	jsAll: ["*.js", "tasks/**/*.js", "samples/**/*.js"]
};

gulp.task("autocompile", ["styles"], function() {
	gulp.watch(paths.jsAll, ["lint"]);
});

gulp.task("default", ["lint"]);

gulp.task("lint", ["jshint", "jscs"]);

gulp.task("jscs", jscs(paths.jsAll));

gulp.task("jshint", jshint(paths.jsAll));
