/פונקציה שמקבלת אלמנט ומתחילה את האנימציה/
  function startAnimation(element)  {
        element.classList.add('event_celebration_icon_animation');
}

/פונקציה שמקבלת אלמנט ומסיימת את האנימציה/
    function stopAnimation(element)  {
         element.classList.remove('event_celebration_icon_animation');
}

/ עוגות מומלצות שיופיעו בדף הבית/
const cakes = [
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
         cake_id : 8,
       name: 'Rustic Wedding Cake',
        description: 'A charming rustic wedding cake with a natural look.',
        base_price: 300.00,
        style_name: 'Rustic',
        event_name: 'wedding',
         allergy_info: 'Gluten',
        image_url: 'pic/rustic wedding cake.jpg',
        catalog_id: 1
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

