import {IVerbGameStore, IVerbType} from "../model/types.ts";
import i_verbs from "@/shared/data/irregular_verbs.json";

export const getIVerbsByPage = (page: IVerbGameStore['settings']['page']) => {
    let unused_i_verbs: IVerbType[] = [];

    switch (page) {
        case "1":
            unused_i_verbs = i_verbs.slice(0, 90);
            break;
        case "2":
            unused_i_verbs = i_verbs.slice(91);
            break;
        case "all":
            unused_i_verbs = i_verbs;
    }

    return unused_i_verbs;
}
