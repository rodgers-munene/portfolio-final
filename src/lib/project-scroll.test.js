import assert from 'node:assert/strict';
import test from 'node:test';
import { projectScrollProgress } from './project-scroll.js';

test('opens at the centre and closes before the top and at the bottom', () => {
  for (const height of [600, 844, 1080]) {
    assert.equal(projectScrollProgress(height * 0.5, height), 1);
    assert.equal(projectScrollProgress(height, height), 0);
    assert.equal(projectScrollProgress(height * 0.1, height), 0);
    assert.equal(projectScrollProgress(-100, height), 0);
    assert.equal(projectScrollProgress(height + 100, height), 0);
  }
});

test('gradually grows and shrinks with distance, including reverse scrolling', () => {
  const heights = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
  const samples = heights.map(center => projectScrollProgress(center, 1000));
  samples.slice(1, 6).forEach((value, index) => assert.ok(value > samples[index]));
  samples.slice(6).forEach((value, index) => assert.ok(value < samples[index + 5]));
  assert.ok(samples[2] > 0 && samples[2] < 1);
  assert.deepEqual(heights.toReversed().map(center => projectScrollProgress(center, 1000)), samples.toReversed());
});

test('stops when scrolling stops and stays bounded', () => {
  const halfway = projectScrollProgress(750, 1000);
  assert.equal(projectScrollProgress(750, 1000), halfway);
  assert.equal(projectScrollProgress(10, 0), 0);
  for (let center = -500; center <= 1500; center++) {
    const value = projectScrollProgress(center, 1000);
    assert.ok(value >= 0 && value <= 1);
  }
});
