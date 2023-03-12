import { combineReducers } from 'redux';

import authReducer from './authReducer';
import campaignReducer from './campaignReducer'
import categoryReducer from './categoryReducer'
import subCategoryReducer from './subCategoryReducer'
import userReducer from './userReducer'
import merchantReducer from './merchantReducer'
import recentViewedReducer from './recentViewedReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({ 
    
    auth: authReducer,
    campaigns:campaignReducer,
    categoryReducer:categoryReducer,
    subCategoryReducer:subCategoryReducer,
    userReducer:userReducer,
    merchantReducer:merchantReducer,
    recentViewedReducer:recentViewedReducer,
    favoritesReducer:favoritesReducer
})

export default rootReducer;