module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },


    concat: {
      dist: {
        src: [
          'src/jquery.min.js',
          'src/**/*.js',
          'src/app.js'],
        dest: 'js/functions.js',
        options: {
          banner: '<%= banner %>',
          stripBanners: true
        },
      },
      css: {
        src: ['css/style.css', 'tmp/css/sprites.css'],
        dest: 'css/style.all.css'
      }
    },
    uglify: {
      static_mappings: {
        // Because these src-dest file mappings are manually specified, every
        // time a new file is added or removed, the Gruntfile has to be updated.
        files: [
          {src: '<%= concat.dist.dest %>', dest: 'js/functions.min.js'},
        ],
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: false,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        force: true,
        globals: {
          "$": true,
          "module": true,
          "Mustache": true,
          "game": true,
          "FB": true,
          "Spinner": true,
          "console": true,
          "mopar": true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: ['src/*.js','!src/jquery.min.js','!src/foundation.min.js']
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      js: {
        files: 'src/**',
        tasks: ['jshint:js', 'concat', 'uglify'],
        options: {
          livereload: true
        },
      },

      html: {
        files: ['**/*.html','**/*.php'],
        options: {
          livereload: true
        },
      },


      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['sass', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
};