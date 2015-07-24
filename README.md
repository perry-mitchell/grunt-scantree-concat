# grunt-scantree-concat
Concatenate JavaScript files from the output of scantree

## What

Please see [scantree](https://www.npmjs.com/package/scantree) for how the process works. From a project set up in that manner, _grunt-scantree-concat_ concatenates the files listed in the output from scantree into a single file.

## How

### Grunt

This plugin requires Grunt `~0.4.5`

If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as how to install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-scantree-concat --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-scantree-concat');
```

### Configuration

#### Defaults

```
scantreeConcat: {
	main: {
		baseDir: "source/",
		scanDir: "source/",
		output: "output.js",
		options: {
			recursive: true,
			header: false,
			footer: false
		}
	}
}
```

#### Properties

##### baseDir

The directory to base relative paths on (consult the [scantree options](https://www.npmjs.com/package/scantree#node-module) for `base_dir`).

##### scanDir

The directory to scan for source files.

##### output

The output file path.

##### options.recursive

Scan the directory recursively.

##### options.header

The path of a partial header file to place at the start of the concatenated output. Useful for wrapping the source files within a closure.

##### options.footer

The path of a partial footer file to place at the end of the concatenated output.

## Credits

This Grunt plugin is just a wrapper around the awesome library `scantree`, by [getify](https://github.com/getify). The source of this plugin and this plugin only is (C) Copyright 2015 to Perry Mitchell, and released under the MIT license.
 