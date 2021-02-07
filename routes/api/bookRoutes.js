const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
  .get(bookController.findAll)
  
router.route("/:id")
.post(bookController.create)
  .get(bookController.findOne)
  .delete(bookController.remove);

module.exports = router;