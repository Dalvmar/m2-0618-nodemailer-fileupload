const express = require('express');
const { sendMail } = require('../mailing/sendMail');
const router  = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/mail', upload.single('foto'), (req, res, next) => {
  console.log('Mandando mail...')
  const {destino, mensaje} = req.body;
  console.log(req.body)
  console.log(req.file)  
  sendMail(destino,{mensaje}).then( () => {
    res.redirect('/')
  }) 
});


module.exports = router;
