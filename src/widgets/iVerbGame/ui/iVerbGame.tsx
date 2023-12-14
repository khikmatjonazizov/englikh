import React, {useEffect} from "react";
import {LoadingOutlined} from '@ant-design/icons'

import './iVerbGame.css'

import {Play} from "@/features/iVerbGame/continueGame";
import {useAppSelector} from "@/shared/model/hooks";
import {DisplayedIVerb} from "@/entities/iVerbGame/model/types.ts";
import {useStartGame} from "@/features/iVerbGame/startGame/model/hooks/useStartGame.ts";
import {Loader} from "@/shared/ui/Loader";
import {Space} from "antd";

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
    const {current} = useAppSelector(state => state.i_verb_game)
    const {startGame} = useStartGame()

    useEffect(() => {
        startGame()
    }, []);

    if (current === null) return <Loader />


    return (
        <Space direction="vertical" style={{alignItems: 'center', width: '100%', gap: '30px'}}>
            <IVerbGameTable {...current.displayed_i_verb} />
            <Play/>
        </Space>
    )
}
