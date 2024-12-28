document.getElementById('deployForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const repoUrl = document.getElementById('repoUrl').value;
    const statusMessage = document.getElementById('statusMessage');
    
    if (!repoUrl) {
        statusMessage.innerHTML = '<span style="color: red;">Please enter a valid GitHub repository URL.</span>';
        return;
    }

    statusMessage.innerHTML = 'Deploying your bot... Please wait.';

    // Simulate the deployment process (you can replace this with an actual backend API call)
    setTimeout(() => {
        statusMessage.innerHTML = `Bot deployed successfully! Your bot is now live. <a href="${repoUrl}" target="_blank">Visit your repository</a>`;
    }, 2000);
});
