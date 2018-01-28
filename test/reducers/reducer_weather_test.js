import { expect } from '../test_helper';
import weatherReducer from '../../src/reducers/reducer_weather';
import { FETCH_WEATHER } from '../../src/actions/index';

describe('Weather Reducer', () => {
  it('handles action with unkown type', () => {
    expect(weatherReducer(undefined, {})).to.be.instanceOf(Array);
  })

  it('FETCH_WEATHER', () => {
    const action = { type: FETCH_WEATHER, payload: { data: 1} };
    expect(weatherReducer([], action)).to.eql([1]);
  })
})
