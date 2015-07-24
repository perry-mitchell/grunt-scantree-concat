module.exports = function(grunt) {

	"use strict";

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		
		scantreeConcat: {
			main: {
				baseDir: "source/",
				scanDir: "source/",
				output: "output.js",
				options: {}
			}
		}

	});

	grunt.loadTasks('tasks');

	grunt.registerTask("default", ["scantreeConcat"]);

};