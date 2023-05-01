export const validarTitulo = (titulo) => {
    const length = titulo.length;
    return length > 4 && length < 50 ? true : false;
  };

export const validarGeneral = (value) => {
    const length = value.length;
    return length > 4  ? true : false;
}