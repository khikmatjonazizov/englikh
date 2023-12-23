import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {getRandomInt} from "@/shared/lib/getRandom.ts";
import {UPDATE_I_VERB_GAME} from "@/entities/iVerbGame/model/slice.ts";
import {DisplayedIVerb, IVerbGameStore} from "@/entities/iVerbGame/model/types.ts";

export const useStartGame = () => {
    const {
        settings: { missing_forms_count },
        unused_i_verbs
    } = useAppSelector(state => state.i_verb_game)
    const dispatch = useAppDispatch()

    const startGameWhenMissingFormsCountEqualOne = (iVerbRandomIndex: number) => {
        const randomIVerbEntries = Object.entries(unused_i_verbs[iVerbRandomIndex])
        const iVerbFormsRandomIndex = getRandomInt(randomIVerbEntries.length)
        const displayedIVerb: DisplayedIVerb = {}

        randomIVerbEntries.forEach(([key, value], idx) => {
            if(idx !== iVerbFormsRandomIndex) {
                displayedIVerb[key as keyof DisplayedIVerb] = value;
            }
        })

        const current: IVerbGameStore['current'] = {
            i_verb: unused_i_verbs[iVerbRandomIndex],
            displayed_i_verb: displayedIVerb,
        }

        const newUnusedIVerbs = structuredClone(unused_i_verbs)
        newUnusedIVerbs.splice(iVerbRandomIndex, 1)

        dispatch(UPDATE_I_VERB_GAME({
            unused_i_verbs: newUnusedIVerbs,
            current,
        }))
    }

    const startGameWhenMissingFormsCountEqualTwo = (iVerbRandomIndex: number) => {
        const randomIVerbEntries = Object.entries(unused_i_verbs[iVerbRandomIndex])
        const iVerbFormsRandomIndex = getRandomInt(randomIVerbEntries.length)
        const displayedIVerb: DisplayedIVerb = {}

        randomIVerbEntries.forEach(([key, value], idx) => {
            if(idx === iVerbFormsRandomIndex) {
                displayedIVerb[key as keyof DisplayedIVerb] = value;
            }
        })

        const current: IVerbGameStore['current'] = {
            i_verb: unused_i_verbs[iVerbRandomIndex],
            displayed_i_verb: displayedIVerb,
        }

        const newUnusedIVerbs = structuredClone(unused_i_verbs)
        newUnusedIVerbs.splice(iVerbRandomIndex, 1)

        dispatch(UPDATE_I_VERB_GAME({
            unused_i_verbs: newUnusedIVerbs,
            current,
        }))
    }

    const startGame = useCallback(() => {
        const iVerbRandomIndex = getRandomInt(unused_i_verbs.length)

        if(missing_forms_count === 1) {
            startGameWhenMissingFormsCountEqualOne(iVerbRandomIndex)
        } else if(missing_forms_count === 2) {
            const randomIVerbEntries = Object.entries(Object.entries(unused_i_verbs[iVerbRandomIndex]))

            if(randomIVerbEntries.length > 2) {
                startGameWhenMissingFormsCountEqualTwo(iVerbRandomIndex);
                return;
            }

            startGameWhenMissingFormsCountEqualOne(iVerbRandomIndex)
        }
    }, [missing_forms_count])

    return {
        startGame,
    }
}
