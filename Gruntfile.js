/**
 * Gruntfile.js
 * This file contains code for Grunt tasks configurations
 * @version 1.0
 * @author    Piyush ranjan <piyush.ranjan.for143@gmail.com>
 * @licensor  Piyush ranjan (This code is confidencial. Can not be used in any application and can not be shared with anyone)
 * @site      Video Album Demo
 * @namespace Grunt
 *
 */
module.exports = function(grunt) {

/**
* Congiguration of grunt tasks 
* @memberof Grunt
* @method initConfig
* @namespace app.initConfig
*/
 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ["**/*.scss"
          ],
          dest: 'css',
          ext: '.css'
        }]
      }
  }, 
    jshint: {
        options: {
            reporter: require('jshint-html-reporter'),
            reporterOutput: 'log/js-violations.html',
            force:true           
        },
        myFiles: ['js/app.js']
    },
    watch: {
      css: {
        cwd: 'scss',
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    scsslint: {
        allFiles: [
          'scss/**/*.scss',
        ],
        options: {
          bundleExec: false,
          reporterOutput: 'log/scss-lint-report.xml',
          colorizeOutput: true
        }
  },
  jsdoc : {
      dist : {
          src: ['js/app.js'],
          options: {
              destination: 'docs/project-documentation'
          }
      }
  }

});

/**
* Load the grunt plugins used for compile, lint, build etc compilation etc.
* @memberof Grunt
* @method loadNpmTasks
* @namespace app.loadNpmTasks
*/
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-jsdoc');
  
  
  //Generate Project Documentation
  grunt.registerTask('generate-doc', ['jsdoc']);

  //Perform scss and js linting
  grunt.registerTask('lint', ['scsslint', 'jshint']);

  //For local development
  grunt.registerTask('local-dev', ['sass', 'watch']);
  
  // Default task(s).
  grunt.registerTask('default', ['local-dev']);
  
  //For local development
  grunt.registerTask('setup-video-lab', ['jsdoc', 'scsslint','jshint','sass']);

  
  

};

/*
* Step to install 
  1. npm install 
*/


/*
Command to run defualt task
$ grunt

Command to run Prod task
$ grunt setup-video-lab
*/