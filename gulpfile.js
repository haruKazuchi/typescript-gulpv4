const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const browserSync  = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const CONF = {
	SASS : {
		SOURCE : 'src/css/**/*.scss',
		OUTPUT : './public/assets/css',
	},
	JS : {
		SOURCE : 'src/js/**/*.js',
		OUTPUT : './public/assets/js',
	},
	TS : {
		SOURCE : 'src/ts/**/*.ts',
		OUTPUT : './public/assets/js',
	},
	BROWSERSYNC : {
		DOCUMENT_ROOT : './public',
		INDEX : 'index.html',
		GHOSTMODE : {
			clicks : false,
			forms  : false,
			scroll : false,
		}
	}
};

function css() {
  return src(CONF.SASS.SOURCE)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(dest(CONF.SASS.OUTPUT))
}

function js() {
  return src(CONF.JS.SOURCE, { sourcemaps: true })
    .pipe(concat('lib.min.js'))
		.pipe(uglify())
    .pipe(dest(CONF.JS.OUTPUT, { sourcemaps: true }))
}

function typescript() {
	return webpackStream(webpackConfig, webpack)
		.pipe(dest(CONF.TS.OUTPUT, { sourcemaps: true }))
}



const browserSyncOption = {
  port: 5000,
  server : {
    baseDir : CONF.BROWSERSYNC.DOCUMENT_ROOT,
    index : CONF.BROWSERSYNC.INDEX,
  },
  ghostMode : CONF.BROWSERSYNC.GHOSTMODE,
  reloadOnRestart: true,
};

function browsersync(done) {
  browserSync.init(browserSyncOption);
  done();
}

function watchFiles(done) {
  const browserReload = () => {
    browserSync.reload();
    done();
  };
  watch(CONF.BROWSERSYNC.DOCUMENT_ROOT + '/**/*.html').on('change', series(browserReload));
  watch(CONF.SASS.SOURCE).on('change', series(css, browserReload));
  watch(CONF.JS.SOURCE).on('change', series(js, browserReload));
	watch(CONF.TS.SOURCE).on('change', series(typescript, browserReload));
}


exports.js = js;
exports.css = css;
exports.typescript = typescript;
exports.default = series(parallel( typescript, css, js), series(browsersync, watchFiles));