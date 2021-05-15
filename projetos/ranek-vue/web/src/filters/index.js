const formatValue = (value) => {
  const formattedValue = Number(value);

  if (Number.isNaN(formattedValue)) {
    return 'Valor inválido';
  }

  return formattedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export default formatValue;
