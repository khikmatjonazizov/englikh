import {createSlice,} from "@reduxjs/toolkit";

import {IVerbGameStore, UpdateSettingsAction} from './types.ts'
import i_verbs from '@/shared/data/irregular_verbs.json'

export const initialState: IVerbGameStore = {
    settings: {
        page: '1',
        control: 'input'
    },
    progress: {
        correct_answers_count: 0,
        incorrect_answers_count: 0,
        is_game_over: false,
    },
    current: null,
    history: [],
    unused_i_verbs: i_verbs,
}

export const IVerbGameSlice = createSlice({
    name: 'i_verb_game',
    initialState,
    reducers: {
        UPDATE_I_VERB_GAME: (state, {payload}: UpdateSettingsAction) => {
            return {...state, ...payload}
        },
    }
})

export const {
    UPDATE_I_VERB_GAME,
} = IVerbGameSlice.actions
