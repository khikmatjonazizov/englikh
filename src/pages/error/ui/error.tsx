import React from "react";
import {useAppSelector} from "@/shared/model/hooks";
import {IncorrectSearchQueriesResult} from "@/widgets/incorrectSearchQueriesResult";
import {UnknownResult} from "@/widgets/unknownResult";

export const Error: React.FC = () => {
    const { errorType } = useAppSelector(state => state.app)

    if(errorType === 'incorrect_search_query') {
        return (
            <IncorrectSearchQueriesResult />
        )
    }


    return (
        <UnknownResult />
    )
}
