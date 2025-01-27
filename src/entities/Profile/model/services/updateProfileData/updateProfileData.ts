import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<ValidateProfileError[]>>(
        'profile/updateProfileData',
        async (articleId, thunkAPI) => {
            const { extra, rejectWithValue, getState } = thunkAPI;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(`/profile/${articleId}`, formData);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
