const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default installation prompt
  event.preventDefault();
  // Store the event to trigger the installation later
  deferredPrompt = event;
  // Show the Install button
  butInstall.style.display = 'block';
});

// Add a click event handler for the Install button
butInstall.addEventListener('click', async () => {
  // Check if the installation prompt is available
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user's response
    const choiceResult = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;

    // Log the user's choice
    console.log('User choice:', choiceResult.outcome);
  }
});

// Listen for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  // Hide the Install button after the app is installed
  butInstall.style.display = 'none';
});
