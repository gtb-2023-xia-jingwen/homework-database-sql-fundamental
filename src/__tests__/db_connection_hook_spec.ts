import {getConfiguration} from '../db-connection';

describe('for security check', () => {
  it ('should preventing from commit sensitive information', () => {
    const configuration = getConfiguration();
    expect(configuration.host).toEqual('127.0.0.1');
    expect(configuration.password).toEqual('test');
    expect(configuration.user).toEqual('root');
  });
});