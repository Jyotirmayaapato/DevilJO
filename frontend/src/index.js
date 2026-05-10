// Static site is served from /public/index.html.
// React entry is intentionally a no-op so it doesn't inject CSS that overrides static styles.
const rootEl = document.getElementById("root");
if (rootEl) {
  rootEl.style.display = "none";
}
