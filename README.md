# Omomo Clone Server

View the application live at [https://omomoteashoppeclone.netlify.app](https://omomoteashoppeclone.netlify.app).

View the client-side repository at [https://github.com/ricky-ho/Omomo-Clone](https://github.com/ricky-ho/Omomo-Clone).

## Description
This repository contains the server-side code for the [Omomo Tea Shoppe Clone](https://github.com/ricky-ho/Omomo-Clone) project. 
When a user enters the checkout process, a POST request is made to the server to recompute and verify the total cost of the user's cart and is sent back to the client. 
When a user attempts to submit their order after entering their payment information, the server will generate a [Stripe](https://stripe.com) PaymentIntent and return that PaymentIntent object to the client in order to process and confirm the payment on the client-side.

## Database Design Decision & Explanation
The diagram shown below demonstrates the structure of the product, product category, option category, and option models in MongoDB. The cart and cart item is created
and handled on the client-side because this project does not currently use any of the cart or order information after the checkout process. 

If in the future, I decide to implement user accounts with order history and implement session management via the server, I would migrate all of the business and model 
logic to be handled on the server-side. A majority of the business logic is currently managed on the client. This raises a major security concern for real-world production applications as it opens up a vector for ill-intentioned users to attack and potentially compromise sesnsitive data. 
However, as a personal project, I felt that this was not a major concern and used this opportunity to learn and implement state management via React's Context and Reducer hooks.

![database diagram](https://res.cloudinary.com/ricky-ho/image/upload/c_scale,w_800/v1635478835/Omomo/Omomo_Tea_Shoppe_Clone_NoSQL_ERD_k92h5b.jpg)

### Dependencies
- [mongoose](https://mongoosejs.com/)
- [stripe](https://www.npmjs.com/package/stripe)
