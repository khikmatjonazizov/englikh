import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {getRandomInt} from "@/shared/lib/getRandom.ts";
import {
    IVerbType,
    UserAnswer,
    IVerbGameStoreCurrent,
    DisplayedIVerb,
    IVerbGameStore
} from "@/entities/iVerbGame/model/types.ts";
import {UPDATE_APP} from "@/entities/app/model/slice.ts";
import {useNavigate} from "react-router-dom";

type ExtraContinueGameProps = {
    userAnswer: UserAnswer;
    iVerbRandomIndex: number;
    current: IVerbGameStoreCurrent;
}

export const useContinueGame = () => {
    const {
        settings: {missing_forms_count},
        current,
        unused_i_verbs,
    } = useAppSelector(state => state.i_verb_game)
    const dispatch = useAppDispatch()
    const nav = useNavigate()

    const continueGameWhenMissingFormsCountEqualOne = (props: ExtraContinueGameProps) => {
        const {userAnswer, iVerbRandomIndex, current} = props;
        const userAnswerEntries = Object.entries(userAnswer);

        let isIncorrect = false;


        for (const [key, value] of userAnswerEntries) {
            const userAnswer = value.trim()
            const currentIVerbForm = current.i_verb[key as keyof IVerbType]

            const isCorrectForm = currentIVerbForm.includes(value) ||
                currentIVerbForm.join(' ') === userAnswer ||
                currentIVerbForm.join('/') === userAnswer

            if (!isCorrectForm) {
                isIncorrect = true;
                break;
            }
        }

        console.log(isIncorrect)
    }

    const continueGameWhenMissingFormsCountEqualTwo = (props: ExtraContinueGameProps) => {
        const {userAnswer, iVerbRandomIndex, current} = props;

        const userAnswerEntries = Object.entries(userAnswer);
    }

    const continueGame = (userAnswer: UserAnswer) => {
        if (current === null) {
            dispatch(UPDATE_APP({errorType: 'internal_application_error'}))
            nav('/error')
            return;
        }


        const iVerbRandomIndex = getRandomInt(unused_i_verbs.length)

        if (missing_forms_count === 1) {
            continueGameWhenMissingFormsCountEqualOne({userAnswer, iVerbRandomIndex, current});
        } else if (missing_forms_count === 2) {
            continueGameWhenMissingFormsCountEqualTwo({userAnswer, iVerbRandomIndex, current})
        }
    }

    return {
        continueGame,
    }
}
