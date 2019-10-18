import {call, put, takeLatest, all } from "redux-saga/effects";

// Worker Saga for Trump tweets
function* fetchTrumpTweet() {
  try{
  const json = yield fetch(
    'http://localhost:4000/trump'
  ).then(response => response.json());
  yield put({ type: "RECEIVE_TRUMP_DATA", data: json });
  } catch(e) {e.message}
}
//Worker Saga for Clinton Tweets
function* fetchClintonTweet() {
  try{
  const json = yield fetch(
    'http://localhost:4000/clinton'
  ).then(response => response.json());
  yield put({ type: "RECEIVE_CLINTON_DATA", data: json });
  } catch(e) {e.message}
}
//Watcher Saga for both
function* actionWatcher() {
  yield all ([takeLatest("REQUEST_TRUMP_DATA", fetchTrumpTweet),
              takeLatest("REQUEST_CLINTON_DATA", fetchClintonTweet)])
}



export default function* rootSaga() {
  yield all([actionWatcher()]);
}