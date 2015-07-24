module.exports = function (grunt) {

	"use strict";

	var scantree = require("scantree"),
		concat = require('concat-files');

	grunt.registerMultiTask("scantreeConcat", "Concatenate files by dependency notation", function () {
		var done = this.async();

		var options = this.options({
			recursive: true,
			header: false,
			footer: false
		});

		var fileList = JSON.parse(scantree.scan({
			dirs: this.data.scanDir,
			base_dir: this.data.baseDir,
			recursive: options.recursive,
			groups: false,
			full_paths: true,
			output: "json"
		}));

		if (options.header) {
			fileList = [options.header].concat(fileList);
		}
		if (options.footer) {
			fileList = fileList.concat([options.footer]);
		}

		grunt.log.write("Concatenating " + fileList.length + " files...");
		concat(fileList, this.data.output, function() {
			grunt.log.ok();
			(done)();
		});
	});


};