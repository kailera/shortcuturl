import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/constants";
import { URLModel } from "../database/model/Url";
export class UrlController {
  public async shorten(req: Request, res: Response): Promise<void> {
    // verificar se url ja existe
    // criar hash para url
    // salvar a url no banco
    // retornar a url

    const { originUrl } = req.body;
    const url = await URLModel.findOne({ originUrl });

    if (url) {
      res.json({ url });
      return;
    }

    const hash = shortId.generate();
    const shortUrl = `${config.API_URL}/${hash}`;
    const newURL = await URLModel.create({ hash, shortUrl, originUrl });

    res.json({ originUrl, hash, shortUrl });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    // pegar hash da url
    // encontrar a url original pelo hash
    // redirecninao para a original

    const { hash } = req.params;

    const url = await URLModel.findOne({ hash });

    if (url) {
      res.redirect(url.originUrl);
      return;
    }
    res.status(400).json({ error: "url not found" });
  }
}
