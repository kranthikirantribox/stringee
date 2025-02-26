import { WebPlugin } from '@capacitor/core';

import type { radiantxPlugin } from './definitions';

export class radiantxWeb extends WebPlugin implements radiantxPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async getpermission(): Promise<{ value: string }> {
    return { value: 'NA' };
  }
  async getConfig(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return { value: 'NA' };
  }
  async outgoingCall(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return { value: 'NA' };
  }
  async answerCall(): Promise<{ value: string }> {

    return { value: 'NA' };
  }
  async endCall(): Promise<{ value: string }> {
   
    return { value: 'NA' };
  }
}
