"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
// Personal modules
const api_1 = __importDefault(require("./routes/api"));
const error_1 = __importDefault(require("./routes/error"));
const frontend_1 = __importDefault(require("./routes/frontend"));
const directories_1 = require("./utils/directories");
// Create app
const app = (0, express_1.default)();
const port = 3002;
// Upload middleware
const upload = (0, multer_1.default)();
// Set view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// Parse body
app.use(express_1.default.urlencoded({ extended: false }));
// Serve thumbnails and images folder - static
app.use(express_1.default.static(directories_1.thumbDir));
app.use(express_1.default.static(directories_1.imagesDir));
// Serve css folder
app.use(express_1.default.static(directories_1.publicDir));
// Routes
// Route ex.: /api/images?filename=fjord&width=200&height=200
app.use("/api", api_1.default);
// Frontend routs
app.use(upload.single('image'), frontend_1.default);
// Error routes
app.use(error_1.default);
// Listening
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});
// For testing purpose
exports.default = app;
