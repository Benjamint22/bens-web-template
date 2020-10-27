import { getMessage } from './message';

it('getMessage() returns "Hello, World!"', () => {
    expect(getMessage()).toEqual('Hello, World!');
});
