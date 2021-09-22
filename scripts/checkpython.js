var exec = require('child_process').exec;
exec('python -c "import platform; print(platform.python_version())"',
function(err, stdout, stderr) {
  console.dir(stdout.toString());
});
