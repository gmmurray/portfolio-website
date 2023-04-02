import { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    return await handlePost(req, res);
  } else {
    res.status(405).json({ error: 'method not allowed' });
  }
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = process.env.MESSENGER_API_URL;
    const apiKey = process.env.MESSENGER_API_KEY;
    const formId = process.env.MESSENGER_API_FORM_ID;

    if (!url || !apiKey || !formId) {
      const error = 'Invalid messenger config';
      console.log(error);
      return res.status(500).json({ error });
    }

    const body = {
      formId,
      data: req.body,
    };

    await axios.post(url, body, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    res.status(200).send(undefined);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'error saving response' });
  }
};

export default handler;
