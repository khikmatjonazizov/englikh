import React, {useEffect} from "react";
import {LoadingOutlined} from '@ant-design/icons'

import './iVerbGame.css'

import {Play} from "@/features/iVerbGame/play";
import {useAppSelector} from "@/shared/model/hooks";
import {DisplayedIVerb} from "@/entities/iVerbGame/model/types.ts";
import {useStartGame} from "@/features/iVerbGame/startGame/model/hooks/useStartGame.ts";

const IVerbLoader: React.FC = () => {
    return (
        <div style={{height: '50px', display: 'flex', justifyContent: 'center'}}>
            <LoadingOutlined style={{fontSize: '30px'}}/>
        </div>
    )
}

const IVerbGameTable: React.FC<DisplayedIVerb> = ({v1, v2, v3}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>V1</th>
                <th>V2</th>
                <th>V3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{v1}</td>
                <td>{v2}</td>
                <td>{v3}</td>
            </tr>
            </tbody>
        </table>
    )
}

export const IVerbGame: React.FC = () => {
    const {current} = useAppSelector(state => state.i_verb_game)
    const {startGame} = useStartGame()

    useEffect(() => {
        startGame()
    }, []);


    return (
        <div>
            {
                current ? <IVerbGameTable {...current.displayed_i_verb} /> : <IVerbLoader/>
            }
            <Play/>
        </div>
    )
}
