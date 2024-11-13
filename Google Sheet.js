const scriptURL = 'Link'
const form = document.forms['contact-form']
const loadingOverlay = document.getElementById('loadingOverlay')
const successMessage = document.getElementById('successMessage')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Show loading overlay
    loadingOverlay.style.display = 'flex'
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        // Hide loading overlay
        loadingOverlay.style.display = 'none'
        
        if (response.ok) {
            // Show success message
            successMessage.style.display = 'block'
            
            // Clear the form
            form.reset()
            
            // Hide the form container to focus on success message
            document.querySelector('.form-container').style.display = 'none'
        } else {
            throw new Error('Form submission failed')
        }
    })
    .catch(error => {
        // Hide loading overlay
        loadingOverlay.style.display = 'none'
        
        // Show error message
        alert('An error occurred while submitting the form. Please try again.')
        console.error('Error!', error.message)
    })
})

// Add click handler for success message OK button
document.querySelector('.success-button').addEventListener('click', () => {
    window.location.href = 'home.html'
})

// Optional: Add click handler to close success message when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === successMessage) {
        window.location.href = 'home.html'
    }
})
