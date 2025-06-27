//Build Gulp Task
exports.build = series(scssTask, jsTask);