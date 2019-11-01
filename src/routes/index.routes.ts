//especifica la ruta inicial del servidor
import {Router} from 'express'
const router = Router();

import {indexIceList} from  '../controllers/index.controllers'

router.route('/')
    .get(indexIceList);

export default router;