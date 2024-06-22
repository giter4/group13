



// מבצע אירוע כאשר הדף נטען לגמרי
document.addEventListener('DOMContentLoaded', function() {
    // מכיל מידע אישי של המשתמש והזמנות שלו
    const savedUser = {

        email: "example@example.com",
        password: "password",
        firstName: "John",
        lastName: "Doe",
         phone: "1234567890",
         orders: [
            {

                order_id: 1,
                DT: "2024-06-21", // תאריך ושעה של ההזמנה
                user_id: 1, // מזהה המשתמש (רצוי כמפתח זר)
                cake_id: 1, // מזהה העוגה (כמפתח זר)
                size: "Medium", // גודל העוגה
                inscription: "Happy Birthday", // כיתוב על העוגה
                coating_color: "Blue", // צבע הציפוי
                kosher: true, // האם העוגה כשרה
                allergy_info: "Contains nuts", // מידע אלרגני
                notes: "Handle with care", // הערות
                quantity: 1, // כמות
                extra_price: 10.50, // עלות נוספת
                 unit_price: 25.00, // מחיר יחידה
                 total_price: 35.50, // מחיר כולל
                 delivery_date: "2024-06-25", // תאריך משלוח
                  address: "123 Main St, Anytown, USA" // כתובת למשלוח

            },
            {

                order_id: 2,
                DT: "2024-06-22",
                user_id: 1,
                cake_id: 2,
                size: "Large",
                inscription: "Congratulations",
                coating_color: "Pink",
                kosher: false,
                allergy_info: "",
                notes: "",
                quantity: 2,
                extra_price: 0,
                unit_price: 30.00,
                 total_price: 60.00,
                 delivery_date: "2024-06-27",
                 address: "456 Elm St, Othertown, USA"
            }
        ]
    };

    // העוגות שהמשתמש הזמין
     const cakes = [
         {
             cake_id : 1,
             name: 'Pink Baby Shower Cake',
             description: 'A delightful pink cake for a baby shower.',
             base_price: 80.00,
             style_name: 'Pink',
             event_name: 'baby shower',
              allergy_info: 'none',
              image_url: 'pic/Pink Baby Shower Cake.jpg',
              catalog_id: 3

        },
        {
            cake_id : 2,
            name: 'Blue Baby Shower Cake',
            description: 'A sweet blue cake for a baby shower.',
            base_price: 85.00,
            style_name: 'Blue',
            event_name: 'baby shower',
             allergy_info: 'Dairy',
             image_url: 'pic/Blue Baby Shower Cake.jpg',
             catalog_id: 3

        }
    ];

    // בניית רשימת העוגות באזור האישי
    function buildCakeList() {
         const userprofile = document.querySelector('.cakes_container');

         cakes.forEach(cake => {

              const cakeElement = document.createElement('div');
              cakeElement.classList.add('cake_item');

            const cakeImage = document.createElement('img');

            cakeImage.src = cake.image_url;
            cakeImage.alt = cake.name;
             cakeImage.classList.add('cake_image');
             cakeElement.appendChild(cakeImage);

            const cakeName = document.createElement('h3');

            cakeName.textContent = cake.name;
             cakeName.classList.add('cake_name');
             cakeElement.appendChild(cakeName);

             const starRating = generateStarRating(cake.cake_id); // יצירת דירוג כוכבים
             cakeElement.appendChild(starRating);

              userprofile.appendChild(cakeElement);
        });
    }

    // פונקציה ליצירת דירוג כוכבים
    function generateStarRating(cakeId) {
         const starRating = document.createElement('div');
            starRating.classList.add('star_rating');

          for (let i = 1; i <= 5; i++) {

                const star = document.createElement('span');
                   star.textContent = '★';
                     star.dataset.rating = i;
                      star.classList.add('star');

              star.addEventListener('click', function() {

                  handleRatingClick(cakeId, i);
               });

               starRating.appendChild(star);
          }

          return starRating;
      }

    // טיפול בלחיצה על דירוג
    function handleRatingClick(cakeId, rating) {

        console.log(`User rated cake ${cakeId} with ${rating} stars`);
        // כאן אפשר לשמור את הדירוג במאגר הנתונים או לבצע פעולות נוספות
    }

    // טעינת רשימת העוגות בעת טעינת הדף
    buildCakeList();
});
