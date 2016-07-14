# grunt-rollup-babel
Step-by-step guide how to setup rollup and babel with grunt.

Step1:

### 1: Create a directory name like : 
mkdir myProject

and insdie myProject directory create 
src and dest direcotry.

```
myProject
  -src
    -entry.js
    -entry2.js
  -dest
```

### 2: Create package.js file with code:
```
{
  "name": "grunt-rollup-babel",
  "description": "Grunt plugin for rollup - next-generation ES6 module bundler with babel ",
  "devDependencies": {
    "grunt": "^1.0.1",
    "grunt-config-merge": "^1.2.0",
    "grunt-rollup": "^0.7.1",
    "rollup-plugin-babel": "^2.6.1"
  },
  "license": "MIT"
}


```


### 3: Create Gruntfile.js file with this code
```
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
                    'dest/bundle2.js': ['src/entry2.js'],
                    'dest/bundle3.js': ['src/entry2.js'],
                }
            },
            
        },
    });

    grunt.file.expand('./../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    require('./../node_modules/grunt-config-merge')(grunt);
    require('../grunt/global/grunt-default.js')(grunt);
};

```

### 4: Create grunt-default.js file with this code
```
module.exports = function(grunt) {
    grunt.mergeConfig({
        
    });
    grunt.registerTask('default', [ 'rollup']);
};
```



### 5: run command 
```
npm install
```

### 6: Build the project
run grunt or grunt-rollup


