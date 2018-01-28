import { renderComponent , expect } from '../test_helper';
import Chart from '../../src/components/chart';

describe('Chart', () => {

  let component;

  beforeEach(() => {
    const props = { weather: [24, 3] };
    component = renderComponent(Chart, null, props)
  })
})
