const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()
    //service ID, template ID, and user ID from emailjs
    emailjs.sendForm('service_eqgh0ck', 'template_yn7uvhx', '#contact-form', 'fX4WX6IYzCE_MUi9K')

    .then(() => {
        // Show success message
        contactMessage.textContent = 'Message sent successfully!'
        contactForm.reset()
    }, (error) => {
        // Show error message
        contactMessage.textContent = 'Failed to send message. Please try again later.'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })


}
contactForm.addEventListener('submit', sendEmail)