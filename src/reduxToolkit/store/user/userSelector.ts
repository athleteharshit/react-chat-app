import {createSelector} from '@reduxjs/toolkit';
import { selectRoot } from '../selectRoot';

export namespace UserSelectors {
    export const app = createSelector(selectRoot, (state) => state.appUser);

    export const user = createSelector(app, (app) => app.user);
}