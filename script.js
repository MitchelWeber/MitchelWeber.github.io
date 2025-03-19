document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded');

    // Fetch GitHub Repositories
    async function fetchGitHubRepos() {
        const username = "your-github-username"; // Replace with your GitHub username
        const repoList = document.getElementById("repo-list");

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await response.json();

            // Sort by most recent update
            repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

            // Limit to 5 repositories
            const maxRepos = 5;
            repos.slice(0, maxRepos).forEach(repo => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ⭐ ${repo.stargazers_count}`;
                repoList.appendChild(li);
            });
        } catch (error) {
            console.error("Error fetching repos:", error);
            repoList.innerHTML = `<p>Unable to load repositories.</p>`;
        }
    }

    fetchGitHubRepos();
});
