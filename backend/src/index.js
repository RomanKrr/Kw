import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import path from "path"

import adminRoute from "./routes/admin.route.js"
import { connectDB } from "./lib/db.js";
import productRoute from "./routes/products.route.js"
import galleryRoute from "./routes/gallery.route.js"
// import mailRoute from "./routes/mail.route.js"


dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


app.use("/api/admin", adminRoute);
app.use("/api/products", productRoute);
app.use("/api/gallery", galleryRoute);
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