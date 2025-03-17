function routerPath(url: string): void {
  window.location.hash = `${url}`;
}

export default routerPath;
