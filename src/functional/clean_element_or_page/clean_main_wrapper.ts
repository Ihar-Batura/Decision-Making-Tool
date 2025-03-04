function cleanMainWrapper(): void {
  const body: HTMLElement = document.body;
  const mainWrapper: Element = body.children[2].children[0];
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
}

export default cleanMainWrapper;
