const isDev = !!location.port;

function genPath(pageName) {
  return (isDev ? `/${pageName}.html` : `/${pageName}.html`);
}

export {
  genPath
};