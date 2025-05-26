 const chatFab = document.getElementById('chat-fab');
        const chatModalOverlay = document.getElementById('chat-modal-overlay');
        const chatIframe = document.getElementById('chat-iframe'); // Get reference to the iframe

        // IMPORTANT: Replace with the actual URL of your deployed Google Apps Script Web App
        const WEB_APP_URL = "https://youtube.com/shorts/UMmQD594sKs"; 

        // Set the iframe src once on load, to avoid reloading every time modal opens
        chatIframe.src = WEB_APP_URL; 

        chatFab.addEventListener('click', () => {
            chatModalOverlay.classList.toggle('active'); // Toggle visibility
            chatFab.classList.toggle('close-icon'); // Change button icon
            chatFab.classList.toggle('chat-icon'); // Change button icon
            if (chatModalOverlay.classList.contains('active')) {
                chatFab.title = "Close Chat";
            } else {
                chatFab.title = "Open Chat";
            }
        });

        // Close modal when clicking outside the chat content
        chatModalOverlay.addEventListener('click', (event) => {
            if (event.target === chatModalOverlay) { // Check if click was directly on the overlay
                chatModalOverlay.classList.remove('active');
                chatFab.classList.remove('close-icon');
                chatFab.classList.add('chat-icon');
                chatFab.title = "Open Chat";
            }
        });

        // Close modal when Escape key is pressed
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && chatModalOverlay.classList.contains('active')) {
                chatModalOverlay.classList.remove('active');
                chatFab.classList.remove('close-icon');
                chatFab.classList.add('chat-icon');
                chatFab.title = "Open Chat";
            }
        });
