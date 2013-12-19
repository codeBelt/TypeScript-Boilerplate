module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        // This will load in our package.json file so we can have access
        // to the project name and appVersion number.
        pkg: grunt.file.readJSON('package.json'),

        // Constants for the Gruntfile so we can easily change the path for
        // our environments.
        BASE_PATH: '../',
        DEVELOPMENT_PATH: '../src/',
        PRODUCTION_PATH: '../web/',

        // A code block that will be added to all our minified code files.
        // Gets the name and appVersion from the above loaded 'package.json' file.
        // Usage: <%= banner.join("\\n") %>
        banner: [
                 '/*',
                 '* Project: <%= pkg.name %>',
                 '* Version: <%= pkg.appVersion %> (<%= grunt.template.today("yyyy-mm-dd") %>)',
                 '* Development By: <%= pkg.developedBy %>',
                 '* Copyright(c): <%= grunt.template.today("yyyy") %>',
                 '*/'
        ],

        // YUIDoc plugin that will generate our JavaScript documentation.
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.appVersion %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: '<%= DEVELOPMENT_PATH %>' + 'assets/scripts/com/',
                    outdir: '<%= BASE_PATH %>docs',
                    themedir: '',
                    extension: '.ts',                                   // Default '.js' <comma-separated list of file extensions>
                    exclude: ''
                }
            }
        },

        // The different constants name that will be use to build our html files.
        // Example: <!-- @if NODE_ENV == 'DEVELOPMENT' -->
        env: {
            src: {
                NODE_ENV : 'DEVELOPMENT'
            },
            web : {
                NODE_ENV : 'PRODUCTION'
            }
        },

        // Allows us to pass in variables to files that have place holders so we
        // can similar files with different data.
        // Example: <!-- @echo appVersion --> or <!-- @echo filePath -->
        preprocess : {
            // Task to create the index.html file that will be used during development.
            // Passes the app version and creates the /index.html
            src : {
                src : '<%= DEVELOPMENT_PATH %>' + 'config.html',
                dest : '<%= DEVELOPMENT_PATH %>' + 'index.html',
                options : {
                    context : {
                        appVersion : '<%= pkg.appVersion %>',
                        filePath: ''
                    }
                }
            },
            // Task to create the index.html file that will be used in production.
            // Passes the app version and creates the /index.html
            web : {
                src : '<%= DEVELOPMENT_PATH %>' + 'config.html',
                dest : '<%= PRODUCTION_PATH %>' + 'index.html',
                options : {
                    context : {
                        appVersion : '<%= pkg.appVersion %>',
                        filePath: ''
                    }
                }
            }
        },

        manifest: {
            generate: {
                options: {
                    basePath: '<%= PRODUCTION_PATH %>',
                    exclude: [
                        'assets/media/images/moblie-icons/icon-144x144.png',
                        'assets/media/images/moblie-icons/icon-100x100.png',
                        'assets/media/images/moblie-icons/icon-29x29.png',
                        'assets/media/images/moblie-icons/icon-50x50.png',
                        'assets/media/images/moblie-icons/icon-58x58.png',
                        'assets/media/images/moblie-icons/icon-72x72.png'
                    ],
                    preferOnline: false,
                    verbose: true,
                    timestamp: true,
                    master: []
                },
                src: [
                    'assets/data/**/*.json',
                    'assets/media/images/**/*.jpg',
                    'assets/media/images/**/*.png',
                    'assets/scripts/**/*.js',
                    'assets/styles/**/*.css'
                ],
                dest: '<%= PRODUCTION_PATH %>' + 'manifest.appcache'
            }
        },

        // After the preprocess plugin creates our /index.html we remove all comments
        // and white space from the file so it will be minified.
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '<%= PRODUCTION_PATH %>index.html': '<%= PRODUCTION_PATH %>' + 'index.html'
                }
            }
        },

        clean: {
            dist: ['web']
        },

        // Copies certain files over from the src/ folder to the web/ so we don't
        // have to do it manually.
        copy: {
            web:  {
                files: [
                    // Copy favicon.ico file from src/ to web/.
                    { expand: true, cwd: '<%= DEVELOPMENT_PATH %>', src: 'favicon.ico', dest: '<%= PRODUCTION_PATH %>' },
                    // Copy the image folder from src/images/ to web/images/.
                    { expand: true, cwd: '<%= DEVELOPMENT_PATH %>', src: ['assets/media/images/**'], dest: '<%= PRODUCTION_PATH %>' },
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= DEVELOPMENT_PATH %>',
                        dest: '<%= PRODUCTION_PATH %>',
                        src: [
                            'index.html'
                        ],
                        filter: 'isFile'
                    }
                ]
            }
        },

        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner.join("\\n") %>',
                    linebreak: true
                },
                files: {
                    src: [
                        '<%= PRODUCTION_PATH %>' + 'assets/scripts/app.min.js',
                        '<%= PRODUCTION_PATH %>' + 'assets/styles/app.min.css'
                    ]
                }
            }
        },

        // The JSON to JavaScript plugin.
        json: {
            web: {
                options: {
                    namespace: 'JSON_DATA',
                    includePath: false,
                    processName: function(filename) {
                        return filename.toLowerCase();
                    }
                },
                src: ['<%= DEVELOPMENT_PATH %>' + 'assets/data/**/*.json'],
                dest:  '<%= DEVELOPMENT_PATH %>' + 'assets/scripts/_compiled/json.js'
            }
        },

        // http://handlebarsjs.com/
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST',
                    // Registers all files that start with '_' as a partial.
                    partialRegex: /^_/,
                    // Shortens the file path for the template.
                    processName: function(filename) {
                        return filename.slice(filename.indexOf("template"), filename.length);
                    },
                    // Shortens the file path for the template.
                    processPartialName: function(filePath) {
                        return filePath.slice(filePath.indexOf("template"), filePath.length);
                    }
                },
                files: {
                    '<%= DEVELOPMENT_PATH %>assets/scripts/_compiled/templates.tmpl.js': ['<%= DEVELOPMENT_PATH %>' + 'assets/templates/**/*.hbs']
                }
            }
        },

        typescript: {
            main: {
                src: ['<%= DEVELOPMENT_PATH %>' + 'assets/scripts/TestApp.ts'],
                dest: '<%= DEVELOPMENT_PATH %>' + 'assets/scripts/compiled/app.js',
                options: {
                    target: 'es3', //or es5
                    base_path: '',
                    sourcemap: false,
                    declaration: false,
                    nolib: false,
                    comments: false
                }
            }
        },

        useminPrepare: {
            html: ['<%= DEVELOPMENT_PATH %>' + 'index.html'],
            options: {
                dest: '<%= PRODUCTION_PATH %>'
            }
        },
        usemin: {
            html: ['<%= PRODUCTION_PATH %>' + 'index.html'],
            options: {
                dirs: ['<%= PRODUCTION_PATH %>']
            }
        },

        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            src: {
                options: {
                    port: 8001,
                    hostname: "0.0.0.0",
                    bases: ['<%= DEVELOPMENT_PATH %>'],
                    livereload: true
                }
            },
            web: {
                options: {
                    port: 8000,
                    hostname: "0.0.0.0",
                    bases: ['<%= PRODUCTION_PATH %>'],
                    livereload: true
                }
            }
        },

        // grunt-watch will monitor the projects files
        watch: {
            src: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= DEVELOPMENT_PATH %>' + 'assets/scripts/**/*.ts',
                    '<%= DEVELOPMENT_PATH %>' + 'config.html',
                    '<%= DEVELOPMENT_PATH %>' + 'assets/templates/**/*.hbs'
                ],
                tasks: ['src']
            },
            web: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= DEVELOPMENT_PATH %>' + 'assets/scripts/**/*.ts',
                    '<%= DEVELOPMENT_PATH %>' + 'config.html',
                    '<%= DEVELOPMENT_PATH %>' + 'assets/templates/**/*.hbs'
                ],
                tasks: ['web']
            },
            typescript: {
                files: [
                    '<%= DEVELOPMENT_PATH %>' + 'assets/scripts/**/*.ts'
                ],
                tasks: ['typescript']
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            src: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.src.options.port%>'
            },
            web: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.web.options.port%>'
            }
        }

    });

    // Grunt tasks.
    grunt.registerTask('default', ['env:web', 'preprocess', 'clean', 'copy',
        'useminPrepare',
        'concat', 'uglify', 'cssmin',
        'usemin', 'usebanner']);

    grunt.registerTask('src', ['env:src', 'preprocess:src', 'json', 'handlebars', 'typescript', 'handlebars', 'typescript']);
    grunt.registerTask('web', ['env:web', 'preprocess:web', 'cssmin', 'htmlmin', 'handlebars', 'typescript', 'uglify', 'copy:web', 'usebanner', 'manifest']);

    grunt.registerTask('server', ['src', 'express:src', 'open:src', 'watch:src']);
    grunt.registerTask('server:web', ['web', 'express:web', 'open:web', 'watch:web']);

};