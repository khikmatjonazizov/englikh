import React, {useEffect, useState} from "react";
import {Drawer, Space} from "antd";
import {useSearchParams} from "react-router-dom";

import styles from "./iVerbGameSettings.module.css";

import {useMobile, useAppDispatch, useAppSelector} from "@/shared/model/hooks";

import {SaveFinalSettings} from "@/features/iVerbGameSettings/saveFinalSettings";
import {UpdatePageSettings} from "@/features/iVerbGameSettings/updatePageSettings";
import {UpdateControlSettings} from "@/features/iVerbGameSettings/updateControlSettings";
import {UPDATE_I_VERB_GAME, initialState} from "@/entities/iVerbGame/model/slice.ts";
import {IVerbGameStore} from "@/entities/iVerbGame/model/types.ts";

interface IVerbGameSettingsProps {
    open: boolean;
    onClose: () => void;
}

export const IVerbGameSettings: React.FC<IVerbGameSettingsProps> = (props) => {
    const {open, onClose} = props;
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const {settings} =
        useAppSelector(state => state.i_verb_game)

    const {isMobile} = useMobile()

    const [temporarySettings, setTemporarySettings] =
        useState<IVerbGameStore['settings']>(initialState.settings)

    const onChangeTemporaryPage = (page: IVerbGameStore['settings']["page"]) => {
        setTemporarySettings(prevState => ({...prevState, page}))
    }

    const onChangeTemporaryControl = (control: IVerbGameStore['settings']['control']) => {
        setTemporarySettings(prevState => ({...prevState, control}))
    }

    const onReset = () => {
        setTemporarySettings(initialState.settings)
        onClose()
    }

    const onCancel = () => {
        onClose()
        setTemporarySettings(settings)
    }

    useEffect(() => {
        const settings = {
            page: searchParams.get('page') ?? initialState.settings.page,
            control: searchParams.get('control') ?? initialState.settings.control
        }

        dispatch(UPDATE_I_VERB_GAME({settings}))
        setTemporarySettings(settings)
    }, [searchParams, dispatch])

    return (
        <Drawer
            open={open}
            placement={isMobile ? 'bottom' : 'right'}
            onClose={onCancel}
            title={<span className={styles.drawer_title}>Settings</span>}
            footer={
                <SaveFinalSettings
                    temporarySettings={temporarySettings}
                    onReset={onReset}
                    onClose={onClose}
                />
            }
        >
            <Space direction="vertical" style={{gap: '30px'}}>
                <UpdatePageSettings
                    temporaryPage={temporarySettings.page}
                    onChange={onChangeTemporaryPage}
                />
                <UpdateControlSettings
                    temporaryControl={temporarySettings.control}
                    onChange={onChangeTemporaryControl}
                />
            </Space>
        </Drawer>
    )
}
