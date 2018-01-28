import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a search bar', () => {
    expect(component.find('.search-bar')).to.exist;
  });

  it('shows a weather list', () => {
    expect(component.find('.weather-list')).to.exist;
  });

});
