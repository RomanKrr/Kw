import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import path from "path"

import adminRoute from "./routes/admin.route.js"
import { connectDB } from "./lib/db.js";
import productRoute from "./routes/products.route.js"
import galleryRoute from "./routes/gallery.route.js"
import orderRoute from "./routes/order.route.js"
// import mailRoute from "./routes/mail.route.js"

// import nodemailer from "nodemailer"


dotenv.config();
const app = express();


// import formData from 'form-data';
// import Mailgun from 'mailgun.js';

// const DOMAIN = "sandbox641da2ff06a940d292e785727c314318.mailgun.org";
// const mailgun = new Mailgun(formData);

// Створення клієнта з правильним методом
// const mg = mailgun.client({
//     username: 'api',
//     key: '349a87ee335ed78f3124448a7514e7e6-1654a412-01283204',
//     domain: DOMAIN
// });

// mg.messages.create(DOMAIN, {
//     from: "Excited User <sanivnalida@gmail.com>",
//     to: ["sanivnalida@gmail.com"],
//     subject: "Hello",
//     text: "Testing some Mailgun awesomness!",
//     html: "<h1>Testing some Mailgun awesomness!</h1>"
// })
//     .then(msg => console.log(msg)) // logs response data
//     .catch(err => console.error(err)); // logs any error



// import sgMail from "@sendgrid/mail"
// sgMail.setApiKey(process.env.EMAIL_API);
// const sendOrderNotification = async (orderDetails) => {
//     const msg = {
//       to: "sanivnalida@gmail.com",
//       from: "sanivnalida@gmail.com",
//       subject: "Нове замовлення",
//       text: `Деталі замовлення:\n${JSON.stringify(orderDetails, null, 2)}`,
//     };

//     try {
//       await sgMail.send(msg);
//       console.log("Email відправлено!");
//     } catch (error) {
//       console.error("Помилка при відправці:", error.response.body);
//     }
//   };

//   sendOrderNotification({ name: "Марія", product: "Смартфон", price: "$500" });

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     secure: true,
//     port: 465,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// app.get("/api/send-mail", async (req, res) => {
//     try {
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER, // Можна змінити на отримувача
//             subject: "Автоматичний email",
//             text: "Цей email відправлений автоматично після заходу на сайт!",
//         };

//         const info = await transporter.sendMail(mailOptions);
//         console.log("Email sent:", info.response);
//         res.json({ success: true, message: "Email успішно надіслано!" });

//     } catch (error) {
//         console.error("Помилка надсилання:", error);
//         res.status(500).json({ success: false, message: "Помилка надсилання email" });
//     }
// });
app.use("/api/admin", adminRoute);
app.use("/api/products", productRoute);
app.use("/api/gallery", galleryRoute);
app.use("/api/order", orderRoute);
// app.use("/api/mail", mailRoute);


const PORT = process.env.PORT;
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    });
}

app.listen(PORT, () => {
    console.log("Hello back", PORT);
    connectDB();
})