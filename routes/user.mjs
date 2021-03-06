import express from 'express'
import jwt from 'jsonwebtoken'
import randtoken from 'rand-token'
import config from 'config'

const router = express.Router()
const jwtSecret = config.jwt.secret
const jwtExpiresHour = config.jwt.expiresHour

// TODO: 独立した場所に定義する
const refreshToken = "refresh token"

router.post('/signup', (req, res) => {
  const user = 'user data'
  const jwtOption = {
    expiresIn: jwtExpiresHour,
  }
  jwt.sign(user, jwtSecret, jwtOption, (err, token) => {
    if(err) {
      return res.status(401).send(err)
    }

    res.status(200).send({
      jwt: token,
      refreshToken: refreshToken,
    })

  }).catch((err) => {
    return err
  })

})

export default router
