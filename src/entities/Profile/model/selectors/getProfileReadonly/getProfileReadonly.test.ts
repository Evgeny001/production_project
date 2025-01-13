import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError, getProfileReadonly } from 'entities/Profile';

describe('getProfileReadonly.test', () => {
    test('should return readOnly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readOnly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
