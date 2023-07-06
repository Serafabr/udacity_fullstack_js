# Image Resizer

Image resizer is an API for resizing images and creating thumbnails. You could use it to store all images used on your website.

## Scripts

First, install all dependencies.

```bash
npm install
```

After that, you can run the project on developer mode.

```bash
npm start
```

In order to run the project in production mode, you need to build it and run dist/index.js. 

```bash
npm build && node dist/index.js
```

To test the project, and guarantee that everything is working:

```bash
npm run test
```

If you change the project, and need to format and lint it, you should execute:

```bash
npm run format
```

## Endpoints: API and frontend

GET /api/images?filename=X&width=Y&height=Z  - Resize an image X, with a new width Y and a new height Z. Get the resized image back.

GET / - List with all images (full scale).

GET /resize/ABC.jpg - Interface to resize the image ABC.jpg, with a new width and a new height.

GET /upload - Interface to upload new images to the project.

POST /upload - Add a new image to the project. New images are saved on the /images folder.

## Logs

Every access to the endpoint GET API/IMAGES will be registered on a log inside the folder /logs

## License

[MIT](https://choosealicense.com/licenses/mit/)