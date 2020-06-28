function collectBonus() {
  const btnBonus = document.querySelector(".tw-interactive.tw-button--success");
  if (btnBonus) {
    const { activeElement } = document;
    btnBonus.click();
    activeElement.focus();
  }
}

new MutationObserver(collectBonus).observe(document.body, {
  childList: true,
  subtree: true,
});
