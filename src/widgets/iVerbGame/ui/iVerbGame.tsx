import React, {useEffect, useState} from "react";
import {Space} from "antd";

import './iVerbGame.css'

import {Play} from "@/features/iVerbGame/continueGame";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {DisplayedIVerb} from "@/entities/iVerbGame/model/types.ts";
import {useStartGame} from "@/features/iVerbGame/startGame/model/hooks/useStartGame.ts";
import {Loader} from "@/shared/ui/Loader";
import {RESET_I_VERB_GAME} from "@/entities/iVerbGame/model/slice.ts";

const IVerbGameTable: React.FC<DisplayedIVerb> = ({v1, v2, v3}) => {
    return (
        <table>
            <thead>
            <tr>
                {
                    v1 !== null && <th>V1</th>
                }
                {
                    v2 !== null && <th>V2</th>
                }
                {
                    v3 !== null && <th>V3</th>
                }
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{v1 ? v1.join(' / ') : ''}</td>
                <td>{v2 ? v2.join(' / ') : ''}</td>
                <td>{v3 ? v3.join(' / ') : ''}</td>
            </tr>
            </tbody>
        </table>
    )
}

export const IVerbGame: React.FC = () => {
    const {
        current,
        settings
    } = useAppSelector(state => state.i_verb_game)
    const dispatch = useAppDispatch()
    const {startGame} = useStartGame()
    const [isGameStarted, setIsGameStarted] = useState(false)

    useEffect(() => {
        if (settings.isRealTimeSettings && !isGameStarted) {
            console.log('initial start game')
            startGame()
            setIsGameStarted(true);
        } else if (isGameStarted) {
            console.log('restart game')
            dispatch(RESET_I_VERB_GAME())
            startGame()
        }
    }, [settings]);

    if (current === null) return <Loader/>


    return (
        <Space direction="vertical" style={{alignItems: 'center', width: '100%', gap: '30px'}}>
            <IVerbGameTable {...current.displayed_i_verb} />
            <Play/>
        </Space>
    )
}
