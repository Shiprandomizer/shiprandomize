function updateConfigFromLocalStorage() {
  try {
    document.config = JSON.parse(localStorage.getItem("config"));
  } catch {
    console.log("Failed to read config")
  }
  if (
    document == undefined ||
    document.config == undefined ||
    document.config.configVisible == undefined ||
    document.config.descriptionVisible == undefined ||
    document.config.sound == undefined ||
    document.config.sort == undefined ||
    document.config.ships == undefined ||
    document.config.version != defaultConfig.version) {
    console.log("Load default config")
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
