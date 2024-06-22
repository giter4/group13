const cakes = [
    {
         cake_id : 4,
        name: 'Fun Birthday Cake',
        description: 'A fun and colorful birthday cake for celebrations.',
        base_price: 50.00,
        style_name: 'Fun',
        event_name: 'birthday',
         allergy_info: 'none',
        image_url: 'pic/Fun Birthday Cake.jpg',
        catalog_id: 2
    },
    {
         cake_id : 5,
        name: 'Classic Chocolate Birthday Cake',
        description: 'A classic chocolate cake for birthdays.',
        base_price: 60.00,
        style_name: 'Classic',
        event_name: 'birthday',
         allergy_info: 'Gluten',
        image_url: 'pic/Classic Chocolate Birthday Cake.jpg',
        catalog_id: 2
    },
    {
         cake_id : 6,
        name: 'Unicorn Birthday Cake',
        description: 'A magical unicorn-themed birthday cake.',
        base_price: 70.00,
        style_name: 'Unicorn',
        event_name: 'birthday',
         allergy_info: 'none',
        image_url: 'pic/Unicorn Birthday Cake.jpg',
        catalog_id: 2
    }
];



/בודק שמסמך HTML נטען לפני שהפונקציה רצה/
document.addEventListener('DOMContentLoaded', () => {
    console.log('The Document loaded, going over cake catalog');



     / עובר על אלמנט עם המחלקהcakes_container ושם אותו במשתנה cakesContainer  /
     const cakesContainer = document.querySelector('.cakes_container');
     /מדפיס לקונסול/
     console.log('cakesContainer:', cakesContainer);



    /עבור כל עוגה נוצר אלמנטים המכילים את מאפייני העוגה: שם ,מחיר, דירוג,,תיאור , תמונה/
    cakes.forEach(cake => {

         console.log('Processing the cake:', cake.name);

        const cakeItem = document.createElement('div');
        cakeItem.className = 'cake_item';

        const cakeImage = document.createElement('img');
        cakeImage.src = cake.image_url;
        cakeImage.alt = cake.name;

        const cakeDetails = document.createElement('div');
        cakeDetails.className = 'cake_details';

        const cakeName = document.createElement('h3');
        cakeName.textContent = cake.name;

         const cakePrice = document.createElement('p');
        cakePrice.textContent = `Cake price: $${cake.base_price.toFixed(2)}`;

        const cakeDescription = document.createElement('p');
        cakeDescription.textContent = cake.description;

        const cakeRating = document.createElement('p');
        cakeRating.textContent = `Rating: 5 stars`;

           cakeDetails.appendChild(cakeName);
            cakeDetails.appendChild(cakePrice);
           cakeDetails.appendChild(cakeRating);
           cakeDetails.appendChild(cakeDescription);

            cakeItem.appendChild(cakeImage);
            cakeItem.appendChild(cakeDetails);

            const cakeInfo = {

              cake_id: cake.cake_id,
               name: cake.name,
              image_url: cake.image_url,
              base_price: cake.base_price.toFixed(2)
        };

        // לחיצה על פריט עוגה תעביר את המידע לדף עיצוב עוגה
        cakeItem.addEventListener('click', () => {
            // בניית כתובת ה-URL עם הפרמטרים הנדרשים
            const queryString = new URLSearchParams(cakeInfo).toString();
            window.location.href = `./design cake.html?${queryString}`;
        });

        cakesContainer.appendChild(cakeItem);
         console.log(' The cake Added to container:', cake.name);

    });
    console.log('All the cakes are processed and added to the container');
});

