import { renderComponent, expect} from '../test_helper'
import WeatherList from '../../src/components/comment_list';

describe('Comment List', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other new comment'] };
    component = renderComponent(CommentList, null, props);
  })

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other new comment');
  })
});