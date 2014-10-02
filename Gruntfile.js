module.exports = function(grunt) {

	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    concat: {
			options: {
				separator: '\n',
				stripBanners: true
			},
			js: {
		      	src: [
					'src/js/board.js',
					'src/js/controllers/bodyController.js',
					'src/js/controllers/mainController.js',
					'src/js/controllers/headerController.js',
					'src/js/controllers/modalDialogControllers.js',
					'src/js/filters.js',
					'src/js/directives.js',
					'src/js/app.js'
				],
				dest: 'build/js/<%= pkg.name %>.js'
		    },
		    js_lib: {
		      	src: [
		      		"lib/js/jquery.min.js",
					"lib/js/widgets.min.js",
		      		"lib/js/angular.min.js",
		      		"lib/js/ui-bootstrap-tpls.min.js",
		      		"lib/js/gestures.min.js",
					"lib/js/angular-socialshare.min.js",
		      	],
		      	dest: 'build/js/<%= pkg.name %>.lib.min.js',
		    },
		    css: {
		    	src: [
		    		'lib/css/bootstrap.css',
		    		'src/css/style.css'
		    	],
		    	dest: 'build/css/<%= pkg.name %>.css'
		    }
		},
		cssmin: {
			add_banner: {
				files: {
					'build/css/<%= pkg.name %>.min.css': [
						'lib/css/angular-socialshare.min.css',
						'build/css/<%= pkg.name %>.css'
					]
				}
			}
		},
		jshint: {
			files: ['gruntfile.js', 'src/js/*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		qunit: {
			all: {
				options: {
					urls: [
						'http://localhost:8888/test/js/test.html',
						'http://localhost:8888/test/js/testBoard.html'
					]
				}
		    }
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.registerTask('default', ['jshint','qunit','concat','cssmin']);
};