'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        console.log(ctx.request.body)

        let { fullname: name, email, roomNo, checkIn, leaveDate } = ctx.request.body
        
        strapi.services.email.send(
            'alecgee73@gmail.com',
            email,
            'Room booked successfully',
            `Hello ${name}, Welcome to Mars hotel,you booked ${roomNo} from ${checkIn} to ${leaveDate} enjoy yourself`
        )
            .then((res) => console.log(res))
            .catch(err => console.log(err))

        ctx.send({
            guest : await strapi.query('guests').create(ctx.request.body)
        })


    }
};
