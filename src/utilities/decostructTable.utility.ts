import { v4 } from 'uuid';

export const deconstructToTablePaquete = (data, remitente) => {
  const tableToFill = [];
  let total = 0;
  data.forEach((info) => {
    tableToFill.push([
      v4(),
      remitente,
      info.nombre_destinatario,
      info.direccion_destinatario,
      info.destino_guia,
      info.telefono_destinatario,
      info.peso_guia,
      info.valor_servicio
    ]);
    total += info.valor_servicio;
  });
  tableToFill.push(['', '', '', '', '', '', 'Total', total.toString()]);
  return tableToFill;
};
