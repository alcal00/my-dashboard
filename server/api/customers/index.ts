import customers from '@/public/customers.json';


export default defineEventHandler(async (event) => {
    const method = event.node.req.method;

    if (method === 'GET') {
        return customers;
    }

    if (method === 'POST') {
        const body = await readBody(event);
        const newCustomer = { id: customers.length + 1, ...body };
        customers.push(newCustomer);
        return newCustomer;
      }

    return new Response('Method not allowed', { status: 405 });
})