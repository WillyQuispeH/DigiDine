import { Request, Response } from "express";

import createLogger from "../utils/logger";
import config from "../utils/config";
import OpenAI from "openai";

const openai = new OpenAI();

const petitionOpenia = async (req: Request, res: Response) => {
  try {
    const response = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "give a random example of programming language",
        // prompt: prompt,
        max_tokens: 20,
      }),
    });

    const data = await response.json();
    console.log(data);

    res.status(200).json({ data });
  } catch (e) {
    createLogger.error({
      controller: "statusIcert",
      error: (e as Error).message,
    });
    res.status(200).json({ success: true, data: "statusEcert", error: null });
  }
};

export { petitionOpenia };
