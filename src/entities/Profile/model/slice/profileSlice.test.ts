import {
    profileActions,
    profileReducer,
    ProfileSchema, updateProfileData,
    ValidateProfileError,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readOnly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readOnly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readOnly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });
    test('test update Profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '1234' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '123456789' }),
        )).toEqual({
            form: { username: '123456789' },
        });
    });

    test('test update Profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update Profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        const articleId = 'test-article-id'; // Передаём строку, как ожидается
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '', articleId),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readOnly: true,
            form: data,
            data,
        });
    });
});
