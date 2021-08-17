import express, { Request, Response } from 'express';

import getClient from './client/elasticsearch';

const app = express();

app.get('/', async (request: Request, response: Response) => {
    const client = getClient();

    const result = await client.index({
        index: 'elastic_test',
        type: 'type_elastic_test',
        body: {
            user: 'Denys',
            password: 'ronaldo',
            email: 'denys.ronaldo@ronaldo.com'
        }
    });

    return response.json(result);
});

app.listen(3333, () => console.log('Running'));
