import { getProfileForm } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
    test('should return ProfileForm', () => {
        const data = {
            username: 'admin',
            age: 30,
            country: Country.Russia,
            lastname: 'Petrov',
            first: 'Ivan',
            currency: Currency.RUB,

        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
