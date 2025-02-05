export interface radiantxPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
