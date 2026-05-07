import { rm } from 'node:fs/promises';
import { join } from 'node:path';

const oversizedOriginals = [
  '20260404_210858.mp4',
  '20260404_225744.mp4',
  '20260405_000045.mp4',
  '20260412_013232.mp4',
  '20260425_223526.mp4',
];

await Promise.all(
  oversizedOriginals.map((file) =>
    rm(join('dist', 'Photos-3-001', file), { force: true })
  )
);
