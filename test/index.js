import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import plugin from '../src';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('Name anonymous AMD modules', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  const options = getOptions(fixturesDir);

  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const actual = transformFileSync(actualPath, options).code;
      const expected = fs.readFileSync(
          path.join(fixtureDir, 'expected.js')
      ).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});

function getOptions(fixturesDir) {
  return {
    "plugins": [
      [
        "../../../src",
        { modules: false }
      ]
    ],
    "moduleIds": true,
    "sourceRoot": fixturesDir,
    "moduleRoot": "public"
  };
}