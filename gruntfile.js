module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.initConfig({
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
        } //files
      } //my_target
    }, //uglify
    copy: {
      files: {
            expand : true,
            dest   : 'public/js',
            cwd    : 'js',
            src    : [
              '**/*.js'
            ]
      }
    },
    compass: {
      dev: {
        options: {
          config: 'compass_config.rb'
        } //options
      }

    }, //compass
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['js/*.js'],
        //tasks: ['clean','uglify'],
        tasks: ['copy']
      }, //script
      sass: {
        files: ['sass/*.scss', 'sass/components/*.scss'],
        tasks: ['compass:dev']
      },
      html: {
        files: ['*.html']
      }
    }, //watch
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
  }
  }) //initConfig
  grunt.registerTask('default', ['express:dev', 'watch']);
} //exports