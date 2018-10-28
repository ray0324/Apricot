
'use strict';

const gulp = require('gulp');
const del = require('del');
const connect = require('gulp-connect');
const open = require('gulp-open');

const paths = {
  libraries: {
    scripts: [
      'node_modules/framework7/js/framework7.js'
    ],
    styles: [
      'node_modules/framework7/css/framework7.css'
    ],
    fonts: [
      'node_modules/framework7-icons/fonts/*',
      'node_modules/material-design-icons/iconfont/*.{eot,ttf,woff,woff2}'
    ]
  },
  source: {
    root: 'src',
    templates: 'src/**/*.html',
    scripts: 'src/**/*.js',
    styles: 'src/**/*.css',
    fonts: 'src/fonts/**/*',
    images: 'src/img/**/*'
  },
  dist: {
    root: 'www',
    libraries: 'www/lib',
    fonts: 'www/fonts',
    images: 'www/img'
  }
};

gulp.task('clean', function (cb) {
  del([paths.dist.root, 'build', 'cache', 'node_modules', '.publish'], cb);
});

gulp.task('libraries', function () {
  return gulp.src(paths.libraries.scripts.concat(paths.libraries.styles))
    .pipe(gulp.dest(paths.dist.libraries));
});

gulp.task('templates', function () {
  gulp.src(paths.source.templates)
    .pipe(gulp.dest(paths.dist.root));
  gulp.src('package.json').pipe(gulp.dest(paths.dist.root));
});

gulp.task('scripts', function () {
  return gulp.src(paths.source.scripts)
    .pipe(gulp.dest(paths.dist.root));
});

gulp.task('styles', function () {
  return gulp.src(paths.source.styles)
    .pipe(gulp.dest(paths.dist.root));
});

gulp.task('fonts', function () {
  return gulp.src(paths.libraries.fonts)
    .pipe(gulp.dest(paths.dist.fonts));
});

gulp.task('images', function () {
  gulp.src(paths.source.root + '/apple-touch-icon.png').pipe(gulp.dest(paths.dist.root));
  return gulp.src(paths.source.images)
    .pipe(gulp.dest(paths.dist.images));
});

gulp.task('dist', ['libraries', 'templates', 'scripts', 'styles', 'fonts', 'images']);

gulp.task('watch', function () {
  gulp.watch(paths.libraries.scripts.concat(paths.libraries.styles), ['libraries']);
  gulp.watch(paths.source.templates, ['templates']);
  gulp.watch(paths.source.scripts, ['scripts']);
  gulp.watch(paths.source.styles, ['styles']);
  gulp.watch(paths.source.images, ['images']);
});

gulp.task('server', ['dist'], function () {
  return connect.server({
    root: [paths.dist.root],
    livereload: true,
    host: '0.0.0.0',
    // middleware: function (connect, opt) {
    //   return [
    //     proxy('/api', {
    //       target: 'https://apps.gogoins.com',
    //       changeOrigin: true
    //     })
    //   ]
    // }
  });
});

gulp.task('open', function () {
  return gulp.src(paths.dist.root + '/index.html').pipe(open({
    uri: 'http://localhost:8080'
  }));
});

gulp.task('default', ['watch', 'server', 'open']);

