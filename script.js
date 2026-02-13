document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.getElementById('editBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    editBtn.addEventListener('click', function() {
        console.log('Edit button clicked - Edit functionality would allow users to modify their profile information.');
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
            console.log('Profile link copied to clipboard:', url);
        }).catch(() => {
            console.log('Share this profile:', url);
        });
    }
});
