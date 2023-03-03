const express = require('express')
const request = require('supertest')
const app = require('./index')


describe('payout api', () => {
    const PORT = 8000;
    const app = express()

    app.listen(PORT, () => console.log(`server is running on ${PORT}`));

    it('check payout API',async () => {
        const response = await request(app)
        .post('/payouts')
        .send({
            "expenses": [
                { "name": "Adriana", "amount": 5.75 },
                { "name": "Adriana", "amount": 5.75 },
                { "name": "Bao", "amount": 12 }
            ]
        })

        expect(response.statusCode).toEqual(200)
    });
    
});

// const request = require('supertest')
// const app = require('./index') // Your Express app

// describe('Test the root path', () => {
//   test('It should respond with 200', () => {
//     return request(app).post('/payouts').send({
//         "expenses": [
//             { "name": "Adriana", "amount": 5.75 },
//             { "name": "Adriana", "amount": 5.75 },
//             { "name": "Bao", "amount": 12 }
//         ]
//     }).then(response => {
//       expect(response.statusCode).toBe(200)
//     })
//   })
// })
