import multer from 'multer';
import path from 'path';
import { request } from 'express';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            // Colocando um timestamp no nome do arquivo
            // Isso evita que upload de arquivos com o mesmo nome sobrescrevam existentes
            const fileName = `${Date.now()}-${file.originalname}`;
            // Callback
            cb(null, fileName);
        }
    })
};