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



// קבועים לכניסה
 const formLogin = document.getElementById('loginForm');
  const profileLink = document.getElementById('profile-link');
  const profileText = document.getElementById('profile-text');

// משתנה שמציין אם המשתמש מחובר או לא
 let isLoggedIn = false;


// מאזין להגשת טופס ההתחברות
 formLogin.addEventListener('submit', function(event) {

     event.preventDefault();

    // קבלת הנתונים של אימייל וסיסמה משדות הקלט
     const enteredEmail = document.getElementById('email').value;
      const enteredPassword = document.getElementById('password').value;

    // בדיקה אם האימייל והסיסמה תואמים למשתמש המוגדר
    if (enteredEmail === savedUser.email && enteredPassword === savedUser.password) {
        // התחברות מוצלחת
        isLoggedIn = true;


        window.location.href = './homepage.html'; // מעבר לדף הבית

    }
    // אם שם משתמש או סיסמא לא נכונים:
    else {
         if(enteredEmail !== savedUser.email){
              alert('Invalid email, Please try again');
         }
         if((enteredEmail === savedUser.email) && (enteredPassword!== savedUser.password)){
               alert('Invalid password, Please try again');
         }

    }
});

