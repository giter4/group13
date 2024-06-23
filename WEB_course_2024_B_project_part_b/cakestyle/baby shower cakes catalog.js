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
    },
    {
        cake_id : 3,
        name: 'Animal Themed Baby Shower Cake',
        description: 'A cute animal-themed cake for a baby shower.',
        base_price: 90.00,
        style_name: 'Animal',
        event_name: 'baby shower',
        allergy_info: 'none',
        image_url: 'pic/Animal Themed Baby Shower Cake.jpg',
        catalog_id: 3
    }
];


//בודק שמסמך HTML נטען לפני שהפונקציה רצה
document.addEventListener('DOMContentLoaded', () => {
    console.log('The Document loaded, going over cake catalog');



   //  / עובר על אלמנט עם המחלקהcakes_container ושם אותו במשתנה cakesContainer  /
     const cakesContainer = document.querySelector('.cakes_container');
     /מדפיס לקונסול/
     console.log('cakesContainer:', cakesContainer);



 //   /עבור כל עוגה נוצר אלמנטים המכילים את מאפייני העוגה: שם ,מחיר, דירוג,,תיאור , תמונה/
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




