// Modules
import express from "express";
import multer from "multer";
// Personal modules
import apiRoutes from "./routes/api";
import errorRoutes from "./routes/error";
import frontendRoutes from "./routes/frontend";
import { imagesDir, publicDir, thumbDir } from "./utils/directories";

// Create app
const app = express();
const port = 3002;

// Upload middleware
const upload = multer();

// Set view engine
app.set("view engine", "ejs");
app.set("views", "src/views");
// Parse body
app.use(express.urlencoded({ extended: false }));
// Serve thumbnails and images folder - static
app.use(express.static(thumbDir));
app.use(express.static(imagesDir));
// Serve css folder
app.use(express.static(publicDir));

// Routes
// Route ex.: /api/images?filename=fjord&width=200&height=200
app.use("/api", apiRoutes);
// Frontend routs
app.use(upload.single("image"), frontendRoutes);
// Error routes
app.use(errorRoutes);

// Listening
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

// For testing purpose
export default app;
