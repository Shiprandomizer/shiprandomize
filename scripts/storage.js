function updateConfigFromLocalStorage() {
  document.config = JSON.parse(localStorage.getItem("config"));
  if (!document.config ||
    !document.config.ships ||
    !document.config.version ||
    document.config.version != defaultConfig.version) {
    document.config = defaultConfig;
  }
}

function storeConfig(config) {
  localStorage.setItem("config", JSON.stringify(config));
}

function getConfig() {
  if (!document.config) {
    updateConfigFromLocalStorage();
  }
  return document.config;
}
