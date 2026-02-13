document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.getElementById('editBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    editBtn.addEventListener('click', function() {
        alert('Edit functionality would allow users to modify their profile information.');
        console.log('Edit button clicked');
    });
    
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'User Profile',
                text: 'Check out this profile!',
                url: window.location.href
            }).then(() => {
                console.log('Profile shared successfully');
            }).catch((error) => {
                console.log('Error sharing:', error);
                fallbackShare();
            });
        } else {
            fallbackShare();
        }
    });
    
    function fallbackShare() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Profile link copied to clipboard!');
        }).catch(() => {
            alert('Share this profile: ' + url);
        });
    }
});
