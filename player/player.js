// player.js

document.addEventListener('DOMContentLoaded', () => {
    const videoPlayerContainer = document.getElementById('videoPlayer');
    const videoElement = document.getElementById('videoElement'); // The actual <video> tag
    const closeButton = videoPlayerContainer.querySelector('.close-button');

    // This function will be called from api.js to play a video
    window.playSelfHostedVideo = function(videoUrl, triggerElement = null) {
        // Set the video source
        videoElement.src = videoUrl;

        // Display the player
        videoPlayerContainer.style.display = 'block';

        // Set up positioning similar to your previous iframe logic
        const rect = triggerElement?.getBoundingClientRect();
        const topOffset = window.scrollY + (rect?.top || 100);

        Object.assign(videoPlayerContainer.style, {
            top: `${topOffset}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute', // Keep as absolute for initial pop-up position
        });

        // Autoplay the video
        videoElement.play().catch(error => {
            console.error("Autoplay failed:", error);
            // Inform the user that they might need to manually play the video
            // This is common due to browser autoplay policies
            alert("Video requires user interaction to play. Please click the play button.");
        });

        // Scroll into view
        videoPlayerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // Event listener for the close button
    closeButton.addEventListener('click', () => {
        videoElement.pause(); // Pause the video
        videoElement.removeAttribute('src'); // Clear the source to stop loading
        videoElement.load(); // Reload the video element to reset it
        videoPlayerContainer.style.display = 'none'; // Hide the player
    });
});
