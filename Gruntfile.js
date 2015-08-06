// Generated on 2014-10-07 using generator-angular 0.9.8
'use strict';

// # Globbing
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: 'pages',
        dist: 'release'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            'dist2',
                            '<%= yeoman.dist %>/{,*/}*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html']
            }
        },

        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            js: '<%= yeoman.dist %>/scripts/{scripts,templates}.*.js',
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images'],
                patterns: {
                    js: [
                        [/(images\/.*?\.(?:gif|jpeg|jpg|png|webp))/gm, 'Update the JS to reference our revved images']
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.dist %>',
                        src: ['*.html', 'views/{,*/}*.html'],
                        dest: '<%= yeoman.dist %>'
                    }
                ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'index.html',
                            'images/{,*/}*.{webp}',
                            'fonts/*.{eot,svg,ttf,woff,woff2}'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/styles',
                        dest: '<%= yeoman.dist %>/styles',
                        src: '{,*/}*.css'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/fonts',
                        src: '*',
                        dest: '<%= yeoman.dist %>/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/datatables/media/images',
                        src: '*',
                        dest: '<%= yeoman.dist %>/images'
                    }
                ]
            }
        }
    });

    grunt.registerTask('build', 'Build', function (target) {
        var defaultTask = [
            'clean',
            'wiredep',
            'useminPrepare',
            'concat',
            'copy:dist',
            'cssmin',
            'uglify',
            'usemin'
        ];

        grunt.task.run(defaultTask);
    });

    grunt.registerTask('default', [
        'build'
    ]);
};
