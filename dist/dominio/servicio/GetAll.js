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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAll = void 0;
const GetAll_1 = require("../querys/GetAll");
const GetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let message = '', datos = '';
    try {
        const data = yield (0, GetAll_1.getAll)();
        if (!data) {
            return res.status(200).send("No data!");
        }
        else {
            message = 'Success Response', datos = data;
        }
        return res.status(200).send({ employees: data });
    }
    catch (err) {
        console.log("err = ", err);
        return res.status(500).send(err);
    }
});
exports.GetAll = GetAll;
