import { createStore, combineReducers } from "redux";
import playerReducer from "./players/playerReducer";
import gameReducer from "./game/gameReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  player: playerReducer,
  game: gameReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, devToolsEnhancer());
let persistor = persistStore(store);
let unsubscribe=store.subscribe(()=>{});

export { store, persistor,unsubscribe };
