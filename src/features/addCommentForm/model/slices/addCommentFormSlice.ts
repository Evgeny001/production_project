import { addCommentFormSchema } from 'features/addCommentForm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: addCommentFormSchema = {
    error: '',
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action:PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: () => {},
});

export const { actions: addCommentFormAction } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
