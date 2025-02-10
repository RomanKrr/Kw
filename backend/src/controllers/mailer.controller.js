// import nodemailer from 'nodemailer';

// // Створення транспортеру для Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // true для порту 465, false для інших
//   auth: {
//     user: process.env.EMAIL_USER, // Твоя пошта
//     pass: process.env.EMAIL_PASS, // твій пароль
//   },
// });

// // Функція для відправки email
// export const sendMail = async (req, res) => {
//   const cart = req.body; // отримуємо кошик з тіла запиту

//   let emailText = "Your cart contains the following items:\n\n";
//   let htmlContent = "<h1>Your cart</h1><ul>";

//   cart.forEach(item => {
//     emailText += `Product Name: ${item.name}\nPrice: $${item.price}\nQuantity: ${item.quantity}\n\n`;
//     htmlContent += `<li><strong>Product Name:</strong> ${item.name}<br><strong>Price:</strong> $${item.price}<br><strong>Quantity:</strong> ${item.quantity}</li>`;
//   });

//   htmlContent += "</ul>";

//   const mailOptions = {
//     from: process.env.EMAIL_USER, // Відправник
//     to: "sanivnalida@gmail.com", // Отримувач
//     subject: "Order from your cart",
//     text: emailText,
//     html: htmlContent,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions); // Використовуємо await
//     console.log("Message sent: %s", info.messageId);
//     res.status(200).send({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send({ error: "Failed to send email" });
//   }
// };















// import nodemailer from 'nodemailer';
// import dotenv from "dotenv"

// dotenv.config();

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });



// const mailOptions ={
//     from: {
//         name: "Web",
//         address: process.env.EMAIL_USER
//     },
//      // sender address
//     to: ["sanivnalida@gmail.com"], // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body  })
// };

// const sendMail = async (transporter, mailOptions)=> {
//     try {
//         await transporter.sendMail(mailOptions)
//         console.log("Email has been send");

//     } catch (error) {
//         console.error(error)
//     }
// }

// sendMail(transporter, mailOptions)










// import nodeMailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const transporter = nodeMailer.createTransport({
//     service: "gmail", // для Gmail
//     host: "smtp.gmail.com", // для Gmail
//     port: 587, // порт для Gmail
//     secure: false, // false для 587
//     requireTLS: true,
//     auth: {
//         user: process.env.EMAIL_USER, // email
//         pass: process.env.EMAIL_PASS, // пароль
//     },
// });

// let mailOptions = {
//     from: process.env.EMAIL_USER, // використовуйте змінну середовища
//     to: ["sanivnalida@gmail.com"],
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
