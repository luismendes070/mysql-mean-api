const gulp = require('gulp');
const conventionalRecommendedBump = require('conventional-recommended-bump');
const conventionalGithubReleaser = require('conventional-github-releaser');
const execa = require('execa');
const fs = require('fs');
const { promisify } = require('util');
const dotenv = require('dotenv');

// load environment variables
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

// Conventional Changelog preset
const preset = 'angular';
// print output of commands into the terminal
const stdio = 'inherit';

async function bumpVersion() {
  // get recommended version bump based on commits
  const { releaseType } = await promisify(conventionalRecommendedBump)({ preset });
  // bump version without committing and tagging
  await execa('npm', ['version', releaseType, '--no-git-tag-version'], {
    stdio,
  });
}

async function changelog() {
  await execa(
    'npx',
    [
      'conventional-changelog',
      '--preset',
      preset,
      '--infile',
      'CHANGELOG.md',
      '--same-file',
    ],
    { stdio }
  );
}

async function commitTagPush() {
  // even though we could get away with "require" in this case, we're taking the safe route
  // because "require" caches the value, so if we happen to use "require" again somewhere else
  // we wouldn't get the current value, but the value of the last time we called "require"
  const { version } = JSON.parse(await promisify(fs.readFile)('package.json'));
  const commitMsg = `chore: release ${version}`;
  await execa('git', ['add', '.'], { stdio });
  await execa('git', ['commit', '--message', commitMsg], { stdio });
  await execa('git', ['tag', `v${version}`], { stdio });
  await execa('git', ['push', '--follow-tags'], { stdio });
}

function githubRelease(done) {
  conventionalGithubReleaser(
    { type: 'oauth', token: process.env.GH_TOKEN },
    { preset },
    done
  );
}

exports.release = gulp.series(
  bumpVersion,
  changelog,
  commitTagPush,
  githubRelease
);

//peerDependencies

//webpack docs
gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('serve:before', ['default']);

gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack({
      // Any configuration options...
    }))
    .pipe(gulp.dest('dist/'));
});

//gulp docs
function defaultTask(cb) {
  // place code for your default task here
  
  


  cb();
}



exports.default = defaultTask