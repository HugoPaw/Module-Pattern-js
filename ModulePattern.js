// cartModule.js
const CartModule = (function () {
  // private Daten
  let items = [];

  // private Funktion
  function log(message) {
    console.log("[CartModule]", message);
  }

  // öffentliche API
  return {
    addItem: function (item) {
      items.push(item);
      log(`Added ${item}`);
    },
    getItems: function () {
      return [...items]; // Kopie zurückgeben
    },
    clear: function () {
      items = [];
      log("Cart cleared");
    }
  };
})();
