import { registerPlugin } from '@capacitor/core';

import type { radiantxPlugin } from './definitions';

const radiantx = registerPlugin<radiantxPlugin>('radiantx', {
  web: () => import('./web').then((m) => new m.radiantxWeb()),
});

export * from './definitions';
export { radiantx };
