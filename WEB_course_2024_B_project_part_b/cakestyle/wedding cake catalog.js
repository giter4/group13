/קטלוג עוגות חתונה/
const cakes = [
    {
         cake_id : 7,
        name: 'Elegant White Wedding Cake',
        description: 'A beautiful white wedding cake with intricate designs.',
        base_price: 250.00,
        style_name: 'Traditional',
        event_name: 'wedding',
        allergy_info: 'none',
        image_url: "pic/white cake.jpg",
        catalog_id: 1
    },
    {
         cake_id : 8,
        name: 'Rustic Wedding Cake',
        description: 'A charming rustic wedding cake with a natural look.',
        base_price: 300.00,
        style_name: 'Rustic',
        event_name: 'wedding',
         allergy_info: 'gluten',
        image_url: 'pic/rustic wedding cake.jpg',
        catalog_id: 1
    },
    {
         cake_id : 9,
        name: 'Floral Wedding Cake',
        description: 'A stunning wedding cake adorned with edible flowers.',
        base_price: 350.00,
        style_name: 'Floral',
        event_name: 'wedding',
         allergy_info: 'none',
        image_url: 'pic/Floral Wedding Cake.jpeg',
        catalog_id: 1
    }
];

///בודק שמסמך HTML נטען לפני שהפונקציה רצה/
document.addEventListener('DOMContentLoaded', () => {
    console.log('The Document loaded, going over cake catalog');



    // / עובר על אלמנט עם המחלקהcakes_container ושם אותו במשתנה cakesContainer  /
     const cakesContainer = document.querySelector('.cakes_container');
     /מדפיס לקונסול/
     console.log('cakesContainer:', cakesContainer);



   // /עבור כל עוגה נוצר אלמנטים המכילים את מאפייני העוגה: שם ,מחיר, דירוג,,תיאור , תמונה/
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

