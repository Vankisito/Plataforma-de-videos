export const validarTitulo = (titulo) => {
    const length = titulo.length;
    return length > 1 && length < 50 ? true : false;
  };

export const validarLinkVideo = (linkVideo) => {
    const length = linkVideo.length;
    return length > 1  ? true : false;
  };
export const validarLinkImg = (linkImg) => {
    const length = linkImg.length;
    return length > 1 ? true : false;
  };

export const validarDescripcion = (descripcion) => {
    const length = descripcion.length;
    return length > 1  ? true : false;
};

export const validarCodigo = (codigo) => {
    const length = codigo.length;
    return length > 1  ? true : false;
  };