document.addEventListener('DOMContentLoaded', function() {
    console.log("Scripts loaded");

    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(form);
        fetch('https://script.google.com/home/projects/1tc9djppqTsbaPci5u4tqF3Tbvkn_3MoVjkQkR9p64-ZeK5WTkTxQhPuu/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Form submission failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Form submission failed. Please try again later.');
        });
    });
});
