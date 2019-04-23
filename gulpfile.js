const gulp = require('gulp');
const typescript = require('gulp-typescript');

const tsProject = typescript.createProject('tsconfig.json');

gulp.task('tsc', function(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.ts', gulp.series('tsc'))
});

gulp.task('build', gulp.series('tsc'));
gulp.task('default', gulp.series('build'));