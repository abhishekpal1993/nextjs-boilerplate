import type { NextApiRequest, NextApiResponse } from "next";
import { sample } from "../../constants/sample.constant";
import { ISample } from "../../interfaces/sample.interface";

export const helloHanlder = (
  _req: NextApiRequest,
  res: NextApiResponse<ISample>
): void => {
    res.status(200).json({ name: sample.name })
};
