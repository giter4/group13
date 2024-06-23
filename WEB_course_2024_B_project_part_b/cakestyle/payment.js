

document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('payment_form');

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        // שם ערכים מהשדות לתוך המשתנים
        const creditCard = document.getElementById('creditCard').value;
        const vd = document.getElementById('vd').value;
          const cvv = document.getElementById('cvv').value;


           if (!validate_CreditCard(creditCard)) {
            alert('Please enter a valid credit card number.');
            return;
        }

            if (!validate_VD(vd)) {

             alert('Please enter a valid expiration date (MM/YY).');
             return;
        }

          if (!validate_CVV(cvv)) {
               alert('Please enter a valid CVV.');
              return;
        }

        // הודעת תשלום מוצלח
        alert('Order was successful.');

          // שולח לדף ההבית
          window.location.href = './homepage.html';


    });

      function validate_CreditCard(number) {
          // לבדוק האם מספר האשראי תקין
         return /^\d{16}$/.test(number);
    }

       function validate_VD(vd) {


        //תאריך תקין (MM/YY)
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(vd);
    }

        function validate_CVV(cvv) {

        //  CVV תקין
          return /^\d{3,4}$/.test(cvv);
      }
});
