import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileData } from 'entities/Profile';

describe('getProfileData.test', () => {
    test('should return profileData', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
