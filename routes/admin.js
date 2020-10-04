const express = require("express");
const admincont= require('../controller/admin')
const router = express.Router();

router.route('/register').get(admincont.getreg).post(admincont.postreg)
router.route('/login').get(admincont.getlogin).post(admincont.postlogin)
router.route('/logout').get(admincont.logout)
router.route('/edit/:id').get(admincont.getsiteid,admincont.getEdit)
router.route('/edit').post(admincont.postEdit)
router.route('/delete/:id').get(admincont.getsiteid,admincont.getdelete)
module.exports = router;
