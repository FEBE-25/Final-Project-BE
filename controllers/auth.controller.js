const jwt = require("jsonwebtoken");

      const verifyUser = (req,res,next) =>{
        const loginKEY = "anotherone"

        const token = req.header('authUser')
        if(!token) return res.status(400).json({
            status: res.statusCode,
            message: 'Access Denied !'
        })
        
        try {
          const verified = jwt.verify(token, loginKEY)        
          req.user = verified
          next() 
         
        } catch (error) {
          res.status(400).json({
            status: res.statusCode,
            message: 'Invalid Token !'
        })
        }
      }
      const verifyAdmin = (req,res,next) =>{
        const adminKEY = "yessir"

        const token = req.header('authAdmin')
        if(!token) return res.status(400).json({
            status: res.statusCode,
            message: 'Access Denied !'
        })
        
        try {
          const verified = jwt.verify(token, adminKEY)        
          req.user = verified
          next() 
         
        } catch (error) {
          res.status(400).json({
            status: res.statusCode,
            message: 'Invalid Token !'
        })
        }
      }

      module.exports.verifyUser = verifyUser
      module.exports.verifyAdmin = verifyAdmin

      

