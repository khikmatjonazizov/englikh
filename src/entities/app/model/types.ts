import {PayloadAction} from "@reduxjs/toolkit";

type ErrorTypes = 'incorrect_search_query';

export type AppSliceStore = {
    errorType: ErrorTypes | null;
}

export type UpdateAppAction = PayloadAction<Partial<AppSliceStore>>
