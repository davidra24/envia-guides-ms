import { formatMoney, totalGuide } from '../../utilities';

describe('calculate utility file', () => {
  it('formatMoney function', () => {
    const formatted = formatMoney(1000).length;
    expect(formatted).toEqual(10);
  });

  it('totalGuide function', () => {
    const total = totalGuide(0, 0, 0, 0, 0, 0, 0).length;
    expect(total).toEqual(10);
  });
});
