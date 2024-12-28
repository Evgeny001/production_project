import { DeepPartial } from '@reduxjs/toolkit';
import { LoginScheme } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginScheme> = { username: '123' };
        expect(loginReducer(
        state as LoginScheme,
        loginActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginScheme> = { password: '123' };
        expect(loginReducer(
        state as LoginScheme,
        loginActions.setPassword('4321'),
        )).toEqual({ password: '4321' });
    });
});
