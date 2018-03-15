const isDev = !!location.port;

function genPath(pageName) {
  return (isDev ? `/src/pages/${pageName}.html` : `/apps/market/spatest/${pageName}.html`) + '?wh_weex=true';
}

export {
  genPath
};