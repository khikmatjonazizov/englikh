import {PayloadAction} from "@reduxjs/toolkit";

// commons
export type IVerbType = {
    v1: string[] | null;
    v2: string[] | null;
    v3: string[] | null;
}

export type DisplayedIVerb = {
    v1?: string[] | null;
    v2?: string[] | null;
    v3?: string[] | null;
}

export type UserAnswer = {
    v1?: string;
    v2?: string;
    v3?: string;
}


// action
export type UpdateSettingsAction = PayloadAction<Partial<IVerbGameStore>>


// store
export interface IVerbGameStore {
    settings: IVerbGameStoreSettings;
    progress: IVerbGameStoreProgress;
    current: IVerbGameStoreCurrent | null;
    history: IVerbGameStoreHistory[];
    unused_i_verbs: IVerbType[];
}

type IVerbGameStoreSettings = {
    page: string;
    control: string;
}

type IVerbGameStoreProgress = {
    correct_answers_count: number;
    incorrect_answers_count: number;
    is_game_over: boolean;
}

type IVerbGameStoreCurrent = {
    i_verb: IVerbType;
    displayed_i_verb: DisplayedIVerb;
}

type IVerbGameStoreHistory = {
    i_verb: IVerbType;
    displayed_i_verb: DisplayedIVerb;
    user_answer: UserAnswer;
    answered_time: Date;
    is_correct: boolean;
}
