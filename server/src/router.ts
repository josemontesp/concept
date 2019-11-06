import express from 'express';

import { bookController } from './controllers/book.controller';

export const router = express.Router();

bookController.useRoute(router.route('/book'));

router.use('/hello', (req, res) => res.send('Hi there!'));
