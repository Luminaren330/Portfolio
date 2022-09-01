AOS.init();


// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$(document).ready(function() {
  $('#button-contact').click(function(event) {
    var name = $('#contact-name').val();
    var email = $('#contact-email').val();
    var subject = $('#contact-subject').val();
    var message = $('#contact-message').val();
    var statusElm = $('#contact-status');
    statusElm.empty();

    if(!(email.length > 5 && email.includes('@') && email.includes('.'))) {
    statusElm.append('<div>email-no</div>');
    event.preventDefault();
    }
    
    if(subject.length <= 2) {    
      statusElm.append('<div>subject-no</div>');
      event.preventDefault();
    }
    if(name.length <=2) {
      statusElm.append('<div>name-no</div>');
      event.preventDefault();
    }
    if(message.length < 10) {
      statusElm.append('<div>message-no</div>');
      event.preventDefault();
    }
    
  });
});