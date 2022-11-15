import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "./Slices/authSlice";
import authMiddleware from './Middleware/authMiddleware';

// import EmployeeTaskReducer from "./Slices/taskSlice"

// import taskMiddleware from './Middleware/taskMiddleware';
// For combineLocalReducer 
const rootReducer = combineReducers({
    auth: AuthSlice,
    // employeeData: EmployeeTaskReducer
})



// For configureStore And Apply middleware 
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({immutableCheck: false, serializableCheck:false}).concat(authMiddleware()),
})

export default store;