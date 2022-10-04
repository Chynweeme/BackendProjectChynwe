import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    return jwt.sign({id}, "dipo123",{
        expiresIn: '30d'
    })
}