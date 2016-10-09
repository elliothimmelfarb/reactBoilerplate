import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';    // fires a worker function for every matching dispatched action.
import Actions, { ThingTypes } from '../Redux/ThingRedux';
import API from '../API';

function* worker() {
  const things = yield API.getAll();
  yield put(Actions.getAllThingsSuccess(things));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(ThingTypes.GET_ALL_THINGS, worker);
  }
}

export default watcher;
