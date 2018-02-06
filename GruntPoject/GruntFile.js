// Gruntfile.js
module.exports = function(grunt) {
  // Configurar Grunt
  grunt.initConfig({
    // Leer el package.jsom
    pkg: grunt.file.readJSON('package.json')
  });

  // Cargar plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Definir tareas
  // Primera tarea: Validación de código
  jshint: {
    options: {
      reporter: require('jshint-stylish')
    },
    build: ['Gruntfile.js', 'src/**/*.js']
  }


};