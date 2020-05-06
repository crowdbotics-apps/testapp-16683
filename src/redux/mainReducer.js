import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard139252Reducer from '../features/Dashboard139252/redux/reducers'
import SignIn239237Reducer from '../features/SignIn239237/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard139252: Dashboard139252Reducer,
SignIn239237: SignIn239237Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});