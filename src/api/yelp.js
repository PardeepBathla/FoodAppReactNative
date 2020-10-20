import axios from 'axios'

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer khDrGK0_cM2OvOdRdiNDy2JewA3YnnCL79iP0HfjiYhanPZgmqB1WrzuSXKglfOOwS9X_xFA0P9YgXgGgr8S-cexWW9983Q2hhp_dja17ZUAVziKfCt_BZqsJXWOX3Yx'
    }
})