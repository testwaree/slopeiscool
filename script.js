document.addEventListener("DOMContentLoaded", () => {
  const favorites = new Set(); // Set to store favorite games
  const favoriteIcons = document.querySelectorAll(".favorite-icon");
  const loadingScreen = document.querySelector("#loading-screen");
  const playButtons = document.querySelectorAll(".game-actions button");
  
  // Show loading screen on game launch
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      loadingScreen.classList.add("visible");
      setTimeout(() => {
        loadingScreen.classList.remove("visible");
      }, 2000); // Simulates loading delay
    });
  });

  // Handle favorite icon toggle
  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const gameTitle = icon.closest(".game-card").querySelector("h3").textContent;

      if (favorites.has(gameTitle)) {
        favorites.delete(gameTitle);
        icon.classList.remove("favorited");
      } else {
        favorites.add(gameTitle);
        icon.classList.add("favorited");
      }

      console.log("Favorites:", Array.from(favorites));
    });
  });
});
