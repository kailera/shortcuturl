"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const constants_1 = require("../config/constants");
class UrlController {
    shorten(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // verificar se url ja existe
            // criar hash para url
            // salvar a url no banco
            // retornar a url
            const { originUrl } = req.body;
            const hash = shortid_1.default.generate();
            const shortUrl = `${constants_1.config.API_URL}/${hash}`;
            res.json({ originUrl, hash, shortUrl });
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // pegar hash da url
            // encontrar a url original pelo hash
            // redirecninao para a original
            const { hash } = req.params;
            const url = {
                originUrl: "mongodb+srv://visa_server01:<password>@vcm01.qlrhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
                hash: "wvsCmVwyW",
                shortUrl: "http://localhost:5000/9UKGjEDHn",
            };
            res.redirect(url.originUrl);
        });
    }
}
exports.UrlController = UrlController;
