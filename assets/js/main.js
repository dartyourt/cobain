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

/*scrollup*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*scroll sections active link*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


document.addEventListener("DOMContentLoaded", function() {
    const logoElement = document.querySelector(".nav__logo");
    const text = "Dayys";
    let speed = 270; // kecepatan ketik dalam ms
    let pause = 2000; // jeda sebelum menghapus
    
    // Hapus border dan buat container untuk text dan kursor
    logoElement.style.borderRight = "none";
    logoElement.innerHTML = '<span class="logo-text"></span><span class="cursor">|</span>';
    
    const textElement = logoElement.querySelector('.logo-text');
    const cursorElement = logoElement.querySelector('.cursor');
    
    // Style untuk kursor
    cursorElement.style.color = "var(--accent-color)";
    cursorElement.style.fontWeight = "bold";
    
    function typeWriter(text, i, forward) {
      if (forward) {
        // Mengetik ke depan
        if (i < text.length) {
          textElement.textContent += text.charAt(i);
          i++;
          setTimeout(function() {
            typeWriter(text, i, forward);
          }, speed);
        } else {
          // Selesai mengetik, jeda sebentar
          setTimeout(function() {
            typeWriter(text, text.length, false);
          }, pause);
        }
      } else {
        // Menghapus tulisan
        if (i >= 0) {
          textElement.textContent = text.substring(0, i);
          i--;
          setTimeout(function() {
            typeWriter(text, i, false);
          }, speed - 50); // Menghapus lebih cepat
        } else {
          // Selesai menghapus, jeda sebentar
          setTimeout(function() {
            typeWriter(text, 0, true);
          }, pause / 2);
        }
      }
    }
    
    // Mulai efek ketik
    setTimeout(function() {
      typeWriter(text, 0, true);
    }, 1000);
    
    // Tambahkan animasi cursor berkedip
    setInterval(function() {
      if (cursorElement.style.opacity === "0") {
        cursorElement.style.opacity = "1";
      } else {
        cursorElement.style.opacity = "0";
      }
    }, 500);
});