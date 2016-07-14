var babel = require('rollup-plugin-babel');

module.exports = function(grunt) {
    grunt.initConfig({
        rollup: {
            pluginFunction: {
                options: {
                    // Plugin getter: Some plugins are stateful and this doesn't play nice with multiple bundles. For example the rollup-plugin-babel plugin keeps a track of used babel helpers, and passing the configured plugin only once will cause the helpers to leak from one bundle to another. To prevent that, pass a function that returns an array of plugins, like this:
                    plugins: function() {
                        return [
                            babel({
                                exclude: './node_modules/**'
                            })
                        ];
                    }
                },
                files: {
                    'dest/bundle.js': ['src/entry.js'],
                    'dest/bundle2.js': ['src/entry2.js']
                }
            },
            
        },
    });

    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    require('./node_modules/grunt-config-merge')(grunt);
    require('./grunt-default.js')(grunt);
};
