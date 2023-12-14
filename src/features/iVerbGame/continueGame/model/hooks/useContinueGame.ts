import {useAppSelector} from "@/shared/model/hooks";


export const useContinueGame = () => {
    const {
        settings: {missing_forms_count}
    } = useAppSelector(state => state.i_verb_game)


    const continueGame = () => {

    }

    return {
        continueGame,
    }
}
