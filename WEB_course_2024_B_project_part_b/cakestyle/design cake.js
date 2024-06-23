document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
           const cakeId = parseInt(urlParams.get('cake_id'));

       const cakes = [
        {
            cake_id: 1,
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
            cake_id: 2,
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
            cake_id: 3,
            name: 'Animal Themed Baby Shower Cake',
            description: 'A cute animal-themed cake for a baby shower.',
            base_price: 90.00,
            style_name: 'Animal',
            event_name: 'baby shower',
             allergy_info: 'none',
             image_url: 'pic/Animal Themed Baby Shower Cake.jpg',
             catalog_id: 3
        },
        {
            cake_id: 4,
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
            cake_id: 5,
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
            cake_id: 6,
            name: 'Unicorn Birthday Cake',
            description: 'A magical unicorn-themed birthday cake.',
            base_price: 70.00,
            style_name: 'Unicorn',
            event_name: 'birthday',
             allergy_info: 'none',
             image_url: 'pic/Unicorn Birthday Cake.jpg',
             catalog_id: 2
        },
        {
            cake_id: 7,
            name: 'Elegant White Wedding Cake',
            description: 'A beautiful white wedding cake with intricate designs.',
            base_price: 250.00,
            style_name: 'Traditional',
            event_name: 'wedding',
             allergy_info: 'none',
             image_url: 'pic/white cake.jpg',
             catalog_id: 1
        },
        {
            cake_id: 8,
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
            cake_id: 9,
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

    //    מוצא את העוגה שנלחצה לפי הID
    const selectedCake = cakes.find(cake => cake.cake_id === cakeId);

    if (selectedCake) {
        document.getElementById('cake_name').textContent = selectedCake.name;
        document.getElementById('cake_image').src = selectedCake.image_url;

        const quantityInput = document.getElementById('quantity');
        const totalPriceInput = document.getElementById('total_price');

        const updateTotalPrice = () => {
            const quantity = quantityInput.value;
            const totalPrice = selectedCake.base_price * quantity;
            totalPriceInput.textContent = `$${totalPrice.toFixed(2)}`;
        };

           quantityInput.addEventListener('input', updateTotalPrice);

        updateTotalPrice(); // מחשב סכום כולל


        document.getElementById('order_button').addEventListener('click', () => {
            //   מונע מהדף לבצע את הפעולה הדיפולטיבית שלו
            event.preventDefault();
               // שליחה לעמוד הזמנה
               window.location.href = './order.html';
           });


    }



});


