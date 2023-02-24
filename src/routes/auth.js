import express from 'express'
import jwt from 'jsonwebtoken'

const secret = 'qwertyuiop111';


const users = [
    {
        id: 1,
        role: 'admin',
        password: 'admin',
        fullName: 'John Doe',
        username: 'johndoe',
        email: 'admin@vuexy.com'
    },
    {
        id: 2,
        role: 'client',
        password: 'client',
        fullName: 'Jane Doe',
        username: 'janedoe',
        email: 'client@vuexy.com'
    },
    {
        id: 4,
        role: 'State Coordinator',
        password: 'snow22',
        fullName: 'Jane snow',
        username: 'Ahmadou',
        email: 'ahmadou@calkia.com'
    }
]

const router = express.Router();

router.use(express.json())




router.post('/login',(req , res) => {
  const { email , password } = req.body;
  console.log(email , password)
  
  
  const user = users.find(u => u.email === email && u.password === password)
  if (user) {
    console.log('already a user')

    const accessToken = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' })

    const resp = {
      accessToken,
      userData: { ...user, password: undefined }
    }
    console.log(resp.accessToken)

    res.send(resp)
  } else {
    const err = console.log('User Not Found You Need to Register !!!')
    return [400, err]
  }

})


router.get('/me', (req, res) => {
  const token = req.headers.authorization

  

  jwt.verify(token, secret, (err, decode ) => {
    if(err) {
      if ('refreshToken' === 'logout' ) {
        res.status(401).send('invalide User')
      } else {
        const oldTokenDecoded = jwt.decode(token, {complete: true})

        const { id: userId } = oldTokenDecoded.payload

        const user = users.find(u => u.id === userId)

        const accessToken = jwt.sign({ id: userId}, secret , { expiresIn: '2hr'} )

        window.localStorage.setItem('accessToken', accessToken)
        const obj = {userData : {...user, password: undefined }}

        res.status(200).send(obj)
      }
    }
  })


  
})



router.post('/auth/register', (req , res) => {
    
    res.send(201)
    const  { email, password, username } = req.body;
    console.log(email, password , username)    
    const isEmailTaking = users.find(user => user.email === email);
    const isUsernameTaking = users.find(user => user.username === username)

    const error = {
        email : isEmailTaking ? 'This User is already registered' : null ,
        username : isUsernameTaking ? 'The Username You are tryin is already Taken' : null
    }
    console.log(error)
    if (!error.username && !error.email) {
        console.log('an wuce gun')
        const { length } = users
        let lastIndex = 0
        if (length) {
          lastIndex = users[length - 1].id
        }
  
        const userData = {
          id: lastIndex + 1,
          email,
          password,
          username,
          avatar: null,
          fullName: '',
          role: ''
        }
        users.push(userData)
        const accessToken = jwt.sign({ id: userData.id }, secret)
        const user = { ...userData }
        delete user.password
        const response = { accessToken }
        console.log(response , user , )
  
        return [200, response]
      }
      return [200, { error }]
      
  })

router.get('/', (req,res) => {
    console.log(req.params);
    res.send(users)
})



export default router;