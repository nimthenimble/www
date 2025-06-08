document.addEventListener('DOMContentLoaded', function() {
    // Download CV
    document.getElementById('download-cv')?.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'downloads/CV.pdf';
        link.download = 'downloads/CV.pdf';
        link.click();
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
})
