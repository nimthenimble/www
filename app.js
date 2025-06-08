document.addEventListener('DOMContentLoaded', function() {
    // Redirect to GitHub CV on click
    document.getElementById('download-cv')?.addEventListener('click', function() {
        window.location.href = 'https://github.com/nimthenimble/www/blob/main/downloads/CV.pdf';
    });

    // Download Recommendation Letter Amjad
    document.getElementById('amjad-letter')?.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'downloads/letters/Amjad.pdf';
        link.download = 'Hugo Urias Recommendation Letter - Amjad Masad.pdf';
        link.click();
    });

    // Download Recommendation Letter Antoine
    document.getElementById('antoine-letter')?.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'downloads/letters/Antoine.pdf';
        link.download = 'Hugo Urias Recommendation Letter - Antoine Buteau.pdf';
        link.click();
    });

    // Download Recommendation Letter Ian
    document.getElementById('ian-letter')?.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'downloads/letters/Ian.pdf';
        link.download = 'Hugo Urias Recommendation Letter - Ian Simpson.pdf';
        link.click();
    });
});
