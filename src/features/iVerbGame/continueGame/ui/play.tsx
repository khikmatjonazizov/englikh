import React, {useMemo} from "react";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {useContinueGame} from "../model/hooks/useContinueGame.ts";
import {Input, Space} from "antd";
import {RESET_I_VERB_GAME} from "@/entities/iVerbGame/model/slice.ts";
import {Loader} from "@/shared/ui/Loader";

export const Play: React.FC = () => {
    const {
        settings: {control, missing_forms_count},
        current,
    } = useAppSelector(state => state.i_verb_game)
    const dispatch = useAppDispatch()
    const { continueGame } = useContinueGame()

    const inputs = useMemo(() => {
        if(current === null) return []

        const inputs: {placeholder: string}[] = [];
        if(current.displayed_i_verb.v1) {
            inputs.push({
                placeholder: 'V1',
            })
        }
        if(current.displayed_i_verb.v2) {
            inputs.push({
                placeholder: 'V2',
            })
        }
        if(current.displayed_i_verb.v3) {
            inputs.push({
                placeholder: 'V3',
            })
        }

        return inputs;
    }, [missing_forms_count, current])

    if(current === null) return <Loader />

    return (
        <Space direction="vertical">
            {
                inputs.map(({placeholder}) => <Input onSubmit={() => console.log('submit')} placeholder={placeholder} />)
            }
        </Space>
    )
}
