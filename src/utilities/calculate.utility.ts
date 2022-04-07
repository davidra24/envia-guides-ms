export const BASE_VALUE = 6000;

export const formatMoney = (value: number): string =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(
    value
  );

export const totalGuide = (
  weight_in_guide: number,
  volume_in_guide: number,
  weight_payment_guide: number,
  declared_value_guide: number,
  service_value_guide: number,
  freight_guide: number,
  other_cost_guide: number
) => {
  let total = BASE_VALUE;
  total += weight_in_guide * 10;
  total += volume_in_guide * 10;
  total += weight_payment_guide * 10;
  total += (declared_value_guide * 20) / 100;
  total += service_value_guide;
  total += freight_guide;
  total += other_cost_guide;
  return formatMoney(total);
};
