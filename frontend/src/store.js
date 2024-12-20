// REDUX code that eventually was left unfinished and unused

import { configureStore } from '@reduxjs/toolkit';
import mortgageReducer from './mortgageSlice'; 

export const store = configureStore({
    reducer: {
        mortgage: mortgageReducer
    }
});