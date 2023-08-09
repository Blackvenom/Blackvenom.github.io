document.addEventListener('DOMContentLoaded', function() {

    /*
    =========================================================================
    Mutes the Background-Video accord to the scroll state of the video:
    =========================================================================
    100% video visible = 100% initial volume of video
    ...
    0% video visible = 0% initial volume of video
    =========================================================================
    */
    const video = document.getElementById('background-video');
    const initialVolume = 0.5;

    //Set initial volume
    video.volume = initialVolume;

    // Function to update volume based on intersection ratio
    function updateVolume(entries, observer) {
    entries.forEach(entry => {
        const visibilityRatio = entry.intersectionRatio;
        const newVolume = initialVolume * visibilityRatio;
        document.getElementById('debug_output').innerHTML = "Obsvr fired: newVolume: "+newVolume;
        
        video.volume = newVolume;
    });
    }

    // Create an intersection observer
    const options = {
    threshold: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1], // Observe at these visibility thresholds
    };

    const observer = new IntersectionObserver(updateVolume, options);

    // Observe the video element
    observer.observe(video);

    /*
    =========================================================================
    Handles the Mute-Button on the video bottom-right corner
    =========================================================================
    */
    const muteToggle = document.getElementById('mute-toggle');
    
    muteToggle.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteToggle.innerHTML = '';
            const volumeHighIcon = document.createElement('i');
            volumeHighIcon.classList.add('fas', 'fa-volume-high');
            muteToggle.appendChild(volumeHighIcon);
        } else {
            video.muted = true;
            muteToggle.innerHTML = '';
            const volumeXMarkIcon = document.createElement('i');
            volumeXMarkIcon.classList.add('fas', 'fa-volume-xmark');
            muteToggle.appendChild(volumeXMarkIcon);
        }
    });

});