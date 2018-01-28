import { renderComponent, expect } from '../test_helper'
import SearchBar from '../../src/containers/search_bar'

describe('SearchBar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar)
  })

  it('has the correct class', () =>{
    expect(component).to.have.class('search-bar');
  })

  describe('entering text', () => {
    beforeEach(() => {
      component.find('.form-control').simulate('change', 'new search')
    })

    it('shows the search', () => {
      expect(component.find('.form-control')).to.have.value('new search')
    })

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('.form-control')).to.have.value('')
    })
  })
})
