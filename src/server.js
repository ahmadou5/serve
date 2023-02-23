import express from'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import morgan from 'morgan'
//import mysql from 'mysql2'
import authRoute from './routes/auth.js'
import profileRoute from '././routes/profile.js'
import helpRoute from '././routes/help.js'
import pricingRoute from '././routes/pricing.js'
import faqRoute from '././routes/faq.js'
import userRoute from '././routes/userList.js'
import searchRoute from '././routes/search-bar.js'
import mailRoute from '././routes/email.js'
import chatRoute from './routes/chat.js'
import calenderRoute from './routes/calender.js'

dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use(bodyParser.urlencoded())
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))
app.use(morgan('common'))
app.use(express.json())



{/*const connection = mysql.createConnection({
   host: 'localhost',
   user: 'u343549415_ahmad',
   password: 'Lasadiya1',
   database: 'u343549415_ntc_mock'
});

connection.connect((err) => {
   if(err) {
      console.log(`error while connecting it response with Error ${err}`)
   } else {
      console.log(`connected to Mysql Server ${connection.threadId}`)
   }
})*/}


app.use('/api/auth',authRoute);
app.use('/api/profile', profileRoute)
app.use('/api/help', helpRoute)
app.use('/api/pricing', pricingRoute)
app.use('/api/faq', faqRoute)
app.use('/api/calender,',calenderRoute)
app.use('/api/user', userRoute)
app.use('/api/search', searchRoute)
app.use('/api/email', mailRoute)
app.use('/api/chat', chatRoute)

app.listen(3000, () => console.log(`Server is Listening to ${3000}`));
app.get('/', (req,res) => {
   res.send(users)
})
