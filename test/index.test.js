import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AXIS_COUNT,
  AXES,
  CATEGORIES,
  scoreQuiz,
  encodeScores,
  decodeScores,
  matchIdeologies
} from '../dist/index.mjs';

test('twelve-axes-core exports valid axes and categories', () => {
  assert.equal(AXIS_COUNT, 12);
  assert.equal(AXES.length, 12);
  assert.equal(CATEGORIES.length, 4);
});

test('scoreQuiz calculates scores correctly', () => {
  const items = [
    { axis: 0, level: 1 },
    { axis: 0, level: 2 },
    { axis: 0, level: 5 }
  ];
  const answers = [2, 1, -2]; // level 1: +2, level 2: +1, level 5 (opposing): -2 * -1 = +2 => sum = +5. max = 2 * 3 = 6. 50 + 50*(5/6) = 92
  const scores = scoreQuiz(items, answers);
  assert.equal(scores.length, 12);
  assert.ok(scores[0] > 80);
  assert.equal(scores[1], 50); // unanswered defaults to 50
});

test('encodeScores and decodeScores roundtrip cleanly', () => {
  const original = [92, 50, 45, 78, 12, 100, 0, 65, 55, 30, 80, 50];
  const encoded = encodeScores(original);
  assert.equal(encoded.length, 24);
  const decoded = decodeScores(encoded);
  assert.deepEqual(decoded, original);
});

test('matchIdeologies ranks ideologies by distance', () => {
  // Socialist scores: econ=80, dipl=50, govt=60, scty=50
  const scores = new Array(12).fill(50);
  scores[5] = 80; // econ
  scores[4] = 60; // govt
  scores[2] = 50; // dipl
  scores[7] = 50; // scty
  const matches = matchIdeologies(scores);
  assert.ok(matches.length > 0);
  assert.equal(matches[0].ideology.slug, 'democratic-socialism');
  assert.equal(matches[0].match, 100);
});
