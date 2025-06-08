import { Request, Response, Router } from 'express';
import redis from './redis';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    // await redis.set('a-test', 'a-test');

    res.status(200).json({
        message: 'Welcome to the API!',
    })
});

router.get('/:var', async (req: Request, res: Response) => {
    const ca = await redis.get(req.params.var);

    res.status(200).json({
        message: ca,
    })
})

export default router;
