// scripts9.js

document.addEventListener('DOMContentLoaded', () => {
    const participateBtn = document.getElementById('participateBtn');
    const leaderboardList = document.getElementById('leaderboardList');

    participateBtn.addEventListener('click', () => {
        alert('Thank you for joining the challenge! Please submit your recycling data through the form.');
    });

    // Example leaderboard data (you can fetch this from a server or database)
    const leaderboardData = [
        { name: 'Alice', bottles: 150 },
        { name: 'Bob', bottles: 120 },
        { name: 'Carol', bottles: 100 },
    ];

    // Update the leaderboard
    leaderboardData.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.bottles} bottles recycled`;
        leaderboardList.appendChild(li);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    const submissionForm = document.getElementById('submissionForm');

    submissionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const bottles = document.getElementById('bottles').value;

        // Here you would handle the submission, e.g., send data to a server
        alert(`Thank you, ${name}! You have submitted ${bottles} bottles.`);

        // Clear the form
        submissionForm.reset();
    });
});
