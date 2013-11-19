module.exports = function( grunt ) {
	grunt.initConfig({
		jsonlint: {
			pkg: {
				src: ['package.json']
			},
			bower: {
				src: ['bower.json']
			},
			jshintrc: {
				src: ['.jshintrc', 'src/.jshintrc', 'specs/.jshintrc']
			},
		},
		jshint: {
			grunt: {
				src: 'Gruntfile.js',
				options: {
					jshintrc: '.jshintrc'
				}
			},
			src: {
				src: 'src/**/*.js',
				options: {
					jshintrc: 'src/.jshintrc'
				}
			},
			specs: {
				src: 'specs/**/*.js',
				options: {
					jshintrc: 'specs/.jshintrc'
				}
			}
		},
		watch: {
			files: ['Gruntfile.js', '*.json', 'src/**/*.js', 'specs/**/*.js'],
			tasks: 'default'
		},
		jasmine_node: {
			all: 'specs/**/*.spec.js',
			forceExit: true
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jasmine-node');

	grunt.registerTask('lint', ['jshint', 'jsonlint']);
	grunt.registerTask('default', ['lint', 'jasmine_node']);
};
