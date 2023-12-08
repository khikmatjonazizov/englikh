import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {getRandomInt} from "@/shared/lib/getRandom.ts";
import {UPDATE_I_VERB_GAME} from "@/entities/iVerbGame/model/slice.ts";
import {IVerbGameStore} from "@/entities/iVerbGame/model/types.ts";

export const useStartGame = () => {
    const {unused_i_verbs} = useAppSelector(state => state.i_verb_game)
    const dispatch = useAppDispatch()

    const startGame = useCallback(() => {
        const randomIndex = getRandomInt(unused_i_verbs.length)

        const current: IVerbGameStore['current'] = {
            i_verb: unused_i_verbs[randomIndex],
            displayed_i_verb: unused_i_verbs[randomIndex],
        }

        const newUnusedIVerbs = structuredClone(unused_i_verbs)
        newUnusedIVerbs.splice(randomIndex, 1)

        dispatch(UPDATE_I_VERB_GAME({
            unused_i_verbs: newUnusedIVerbs,
            current,
        }))
    }, [])

    return {
        startGame,
    }
}
