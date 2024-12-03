import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/download', (req, res) => {
  const filePath = join(__dirname, '../uploads/resume.pdf');
  res.download(filePath, 'vikas-pote-resume.pdf', (err) => {
    if (err) {
      res.status(500).json({ message: 'Error downloading resume', error: err });
    }
  });
});

export default router;