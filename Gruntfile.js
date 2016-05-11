module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concatenate scripts - **Don't forget to add scripts array in order of dependencies
        concat: {
            options: {
                separator: ";\n",
                stripBanners: true,
                sourceMap: true,
            },
            our_scripts: {
                // First concatenate all our modular scripts and make them one source.js file
                src: ["js/source/**/!(init)*.js", "js/source/init.js"],
                dest: "js/build/scripts.js",
            },
            // Concatenate all the vendor scripts and since these are already minified, we'll just send them straight to a .min file
            vendor_scripts: {
                src: ["js/vendor/**/*.js"],
                dest: "js/plugins.min.js",
            },
        },

        // Minify the script file that concat spit out. 
        //**Don"t forget to add scripts array in order of dependencies
        uglify: {
            options: {
                preserveComments: "some",
                mangle: false,
                sourceMap: true,
                sourceMapIn: "js/build/scripts.js.map"
            },
            my_target: {
                files: {
                    "js/scripts.min.js": ["js/build/scripts.js"],
                }
            }
        },

        // compile Sass - with standard sourcemaps
        sass: {
            prod: {
                options: {
                    style: "compressed",
                    sourcemap: "file"
                },

                files: {
                    "css/style.css": "scss/style.scss"
                }
            },

            dev: {
                options: {
                    style: "expanded",
                    sourcemap: "file"
                },

                files: {
                    "css/style.css": "scss/style.scss"
                }
            }
        },

        /// Auto prefix our CSS 
        postcss: {
            options: {
                map: {
                    prev: false,
                    inline: false, // save all sourcemaps as separate files... 
                    annotation: "css/" // ...to the specified directory 
                },

                processors: [
                    // add vendor prefixes 
                    require("autoprefixer")({
                        browsers: [
                            "last 2 versions",
                            "> 3% in US",
                            "> 3% in CA",
                            "ie >= 10"
                        ]
                    }),
                    // combine our media queries
                    require("css-mqpacker")({
                        sort: true
                    })
                ]
            },
            dist: {
                src: "css/*.css"
            }
        },

        // watch these files and do these tasks when something changes
        watch: {
            scripts: {
                files: ["js/**/*.js"],
                tasks: ["concat:our_scripts", "uglify"]
            },
            css: {
                files: ["scss/**/*.scss"],
                tasks: ["sass:dev", "postcss"]
            },
            html: {
                files: ["**/*.html"],
                options: {
                    reload: true
                }
            },
            configFile: {
                files: [ "Gruntfile.js"],
                options: {
                    reload: true
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/style.css', 
                        '**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'localhost:8888/'
                }
            }
        },

        // Notify us only when there's a problem
        notify_hooks: {
            options: {
                enabled: true,
                success: false, // whether successful grunt executions should be notified automatically
                duration: 2.5, // the duration of notification in seconds, for `notify-send only
                title: "OH SNAP!! Looks like there's an issue:", 
                message: "Houston, we have a problem..."
            }
        }
    });

    // Grunt  plug-in list.
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks("grunt-contrib-concat"); 
    grunt.loadNpmTasks("grunt-contrib-sass"); 
    grunt.loadNpmTasks("grunt-contrib-uglify"); 
    grunt.loadNpmTasks("grunt-contrib-watch"); 
    grunt.loadNpmTasks("grunt-notify");
    grunt.loadNpmTasks("grunt-postcss"); 

    //'grunt' for development tasks.
    grunt.registerTask("default", ["concat:our_scripts", "uglify", "sass:dev", "postcss", "notify_hooks", 'browserSync', "watch"]);

    //'grunt build' for production tasks.
    grunt.registerTask("build", ["concat", "uglify","sass:prod", "postcss"]);

};