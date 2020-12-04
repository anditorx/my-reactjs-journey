const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title").isLength({ min: 4 }).withMessage("Title tidak sesuai"),
    body("body").isLength({ min: 4 }).withMessage("Body tidak sesuai"),
  ],
  blogController.createBlogPost
);
router.get('/posts', blogController.getAllBlogPost);
router.get('/post/:postId', blogController.getBlogPostById);

module.exports = router;
