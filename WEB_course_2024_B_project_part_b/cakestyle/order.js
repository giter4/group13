document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('orderForm');

    const emailInput = document.getElementById('email');

     const phoneInput = document.getElementById('phone');


      form.addEventListener('submit', function(event) {

            event.preventDefault();

           const email = emailInput.value;
            const phone = phoneInput.value;

           if (!Email_validate(email)) {

             alert('Please enter a valid email address.');
             return;
           }
         // מספר טלפון לא  תקין
         if (!Phone_validate(phone)) {

             alert('Please enter a valid phone number (Israeli format: 05XXXXXXXX).');
             return;
         }

         //  שולח לדף תשלום
        window.location.href = './payment.html';
    });

      function Email_validate(email) {
           // תבנית לבדיקת אימייל
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


        function Phone_validate(phone) {
           // תבנית לבדיקת טלפון
           return /^[0][5][0-9]{8}$/.test(phone);
       }

});
