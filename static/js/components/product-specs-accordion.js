// Product Specs Accordion JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Handle "Ask question" link click
    const askQuestionLinks = document.querySelectorAll('.ask-question-link');
    
    askQuestionLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Expand the Q&A accordion if it's not already expanded
            const qaCollapse = document.getElementById('qa-collapse');
            const qaButton = document.querySelector('[data-bs-target="#qa-collapse"]');
            
            if (!qaCollapse.classList.contains('show')) {
                // Use Bootstrap's collapse API to expand
                const bsCollapse = new bootstrap.Collapse(qaCollapse, {
                    show: true
                });
            }
            
            // Show the question form after a brief delay to allow accordion to expand
            setTimeout(function() {
                toggleQuestionForm();
            }, 300);
        });
    });
    
    // Handle form submission
    const questionForm = document.querySelector('.ask-question-form form');
    if (questionForm) {
        questionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const questionText = document.getElementById('questionText').value;
            const questionName = document.getElementById('questionName').value;
            const questionEmail = document.getElementById('questionEmail').value;
            
            // Basic validation
            if (!questionText.trim() || !questionName.trim() || !questionEmail.trim()) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Here you would typically send the data to your server
            // For now, we'll just show a success message
            alert('Thank you for your question! We will respond soon.');
            
            // Reset form and hide it
            questionForm.reset();
            toggleQuestionForm();
        });
    }
});

// Function to toggle the question form visibility
function toggleQuestionForm() {
    const questionForm = document.querySelector('.ask-question-form');
    if (questionForm) {
        if (questionForm.style.display === 'none' || questionForm.style.display === '') {
            questionForm.style.display = 'block';
            // Scroll to the form
            questionForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Focus on the question textarea
            setTimeout(function() {
                const questionTextarea = document.getElementById('questionText');
                if (questionTextarea) {
                    questionTextarea.focus();
                }
            }, 100);
        } else {
            questionForm.style.display = 'none';
        }
    }
}