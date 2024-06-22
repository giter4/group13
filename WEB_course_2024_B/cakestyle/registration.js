
// פונקציה מבוצעת כשהדף נטען

 document.addEventListener('DOMContentLoaded', function() {

    // מזהה טופס הרשמה באמצעות ID
    const form_registration = document.getElementById('registration_Form');

    // מאזין אירועים עבור שליחת טופס
    form_registration.addEventListener('submit', function(event) {

        event.preventDefault();

        // שומר את הערכים מהשדות במשתנים
        const email = document.getElementById('email').value;

        const password = document.getElementById('password').value;

         const firstName = document.getElementById('first_name').value;

          const lastName = document.getElementById('last_name').value;

          const phone = document.getElementById('phone').value;

     //הודעות שגיאה אם מוזנים ערכים לא נכונים
           if (! Email_validate(email)) {

            alert('Please enter a valid email address.');
            return;
           }

         if (password.length < 6) {

            alert('Password must be at least 6 characters long.');
            return;

           }

        if (firstName.trim() === '' || lastName.trim() === '') {

            alert('Please enter your first and last name.');

            return;
        }

          if (!Phone_validate(phone)) {

              alert('Please enter a valid phone number (10 digits only).');

              return;
          }

        // הודעה שהמשתמש הצליח להירשם
        alert('You have successfully registered. Please log in.');

        // שולח לדף התחברות

          window.location.href = './login.html';
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


