export const copyTextToClipboard = (elementRef: HTMLInputElement) => {
    elementRef.select();
    document.execCommand("copy", true)
  }