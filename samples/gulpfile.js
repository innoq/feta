/*jslint node: true, white: true */
"use strict";

var gulp = require("gulp");
var sass = require("feta/tasks/sass"); // NB: LESS works the same way

var paths = {
	sassEntry: "styles/main.scss",
	sassAll: "styles/**/*.scss",
	css: "bundle.css",
	distro: "dist"
};

gulp.task("autocompile", ["styles"], function() {
	gulp.watch(paths.sassAll, ["styles"]);
});

gulp.task("styles", sass(paths.sassEntry, paths.css, paths.distro));
