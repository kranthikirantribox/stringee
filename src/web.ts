import { WebPlugin } from '@capacitor/core';

import type { radiantxPlugin } from './definitions';

export class radiantxWeb extends WebPlugin implements radiantxPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
