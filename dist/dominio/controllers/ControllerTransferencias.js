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
exports.CreateRegister = void 0;
const crypto_1 = __importDefault(require("crypto"));
//importamos los servicios .
const ServicesTransferencias_1 = require("../servicio/ServicesTransferencias");
const CreateRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79;
    const result = req.body;
    const transferenciaData = {
        transactionId: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.transaction) === null || _b === void 0 ? void 0 : _b.id,
        createdAt: (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.transaction) === null || _d === void 0 ? void 0 : _d.created_at,
        finalizedAt: (_f = (_e = result === null || result === void 0 ? void 0 : result.data) === null || _e === void 0 ? void 0 : _e.transaction) === null || _f === void 0 ? void 0 : _f.finalized_at,
        amountInCents: (_h = (_g = result === null || result === void 0 ? void 0 : result.data) === null || _g === void 0 ? void 0 : _g.transaction) === null || _h === void 0 ? void 0 : _h.amount_in_cents,
        reference: (_k = (_j = result === null || result === void 0 ? void 0 : result.data) === null || _j === void 0 ? void 0 : _j.transaction) === null || _k === void 0 ? void 0 : _k.reference,
        customerEmail: (_m = (_l = result === null || result === void 0 ? void 0 : result.data) === null || _l === void 0 ? void 0 : _l.transaction) === null || _m === void 0 ? void 0 : _m.customer_email,
        currency: (_p = (_o = result === null || result === void 0 ? void 0 : result.data) === null || _o === void 0 ? void 0 : _o.transaction) === null || _p === void 0 ? void 0 : _p.currency,
        paymentMethodType: (_s = (_r = (_q = result === null || result === void 0 ? void 0 : result.data) === null || _q === void 0 ? void 0 : _q.transaction) === null || _r === void 0 ? void 0 : _r.payment_method) === null || _s === void 0 ? void 0 : _s.type,
        bin: (_w = (_v = (_u = (_t = result === null || result === void 0 ? void 0 : result.data) === null || _t === void 0 ? void 0 : _t.transaction) === null || _u === void 0 ? void 0 : _u.payment_method) === null || _v === void 0 ? void 0 : _v.extra) === null || _w === void 0 ? void 0 : _w.bin,
        name: (_0 = (_z = (_y = (_x = result === null || result === void 0 ? void 0 : result.data) === null || _x === void 0 ? void 0 : _x.transaction) === null || _y === void 0 ? void 0 : _y.payment_method) === null || _z === void 0 ? void 0 : _z.extra) === null || _0 === void 0 ? void 0 : _0.name,
        brand: (_4 = (_3 = (_2 = (_1 = result === null || result === void 0 ? void 0 : result.data) === null || _1 === void 0 ? void 0 : _1.transaction) === null || _2 === void 0 ? void 0 : _2.payment_method) === null || _3 === void 0 ? void 0 : _3.extra) === null || _4 === void 0 ? void 0 : _4.brand,
        expYear: (_8 = (_7 = (_6 = (_5 = result === null || result === void 0 ? void 0 : result.data) === null || _5 === void 0 ? void 0 : _5.transaction) === null || _6 === void 0 ? void 0 : _6.payment_method) === null || _7 === void 0 ? void 0 : _7.extra) === null || _8 === void 0 ? void 0 : _8.exp_year,
        cardType: (_12 = (_11 = (_10 = (_9 = result === null || result === void 0 ? void 0 : result.data) === null || _9 === void 0 ? void 0 : _9.transaction) === null || _10 === void 0 ? void 0 : _10.payment_method) === null || _11 === void 0 ? void 0 : _11.extra) === null || _12 === void 0 ? void 0 : _12.card_type,
        expMonth: (_16 = (_15 = (_14 = (_13 = result === null || result === void 0 ? void 0 : result.data) === null || _13 === void 0 ? void 0 : _13.transaction) === null || _14 === void 0 ? void 0 : _14.payment_method) === null || _15 === void 0 ? void 0 : _15.extra) === null || _16 === void 0 ? void 0 : _16.exp_month,
        lastFour: (_20 = (_19 = (_18 = (_17 = result === null || result === void 0 ? void 0 : result.data) === null || _17 === void 0 ? void 0 : _17.transaction) === null || _18 === void 0 ? void 0 : _18.payment_method) === null || _19 === void 0 ? void 0 : _19.extra) === null || _20 === void 0 ? void 0 : _20.last_four,
        cardHolder: (_24 = (_23 = (_22 = (_21 = result === null || result === void 0 ? void 0 : result.data) === null || _21 === void 0 ? void 0 : _21.transaction) === null || _22 === void 0 ? void 0 : _22.payment_method) === null || _23 === void 0 ? void 0 : _23.extra) === null || _24 === void 0 ? void 0 : _24.card_holder,
        isThreeDS: (_28 = (_27 = (_26 = (_25 = result === null || result === void 0 ? void 0 : result.data) === null || _25 === void 0 ? void 0 : _25.transaction) === null || _26 === void 0 ? void 0 : _26.payment_method) === null || _27 === void 0 ? void 0 : _27.extra) === null || _28 === void 0 ? void 0 : _28.is_three_ds,
        uniqueCode: (_32 = (_31 = (_30 = (_29 = result === null || result === void 0 ? void 0 : result.data) === null || _29 === void 0 ? void 0 : _29.transaction) === null || _30 === void 0 ? void 0 : _30.payment_method) === null || _31 === void 0 ? void 0 : _31.extra) === null || _32 === void 0 ? void 0 : _32.unique_code,
        currentStep: ((_37 = (_36 = (_35 = (_34 = (_33 = result === null || result === void 0 ? void 0 : result.data) === null || _33 === void 0 ? void 0 : _33.transaction) === null || _34 === void 0 ? void 0 : _34.payment_method) === null || _35 === void 0 ? void 0 : _35.extra) === null || _36 === void 0 ? void 0 : _36.three_ds_auth) === null || _37 === void 0 ? void 0 : _37.current_step) || 'Unknown',
        currentStepStatus: ((_42 = (_41 = (_40 = (_39 = (_38 = result === null || result === void 0 ? void 0 : result.data) === null || _38 === void 0 ? void 0 : _38.transaction) === null || _39 === void 0 ? void 0 : _39.payment_method) === null || _40 === void 0 ? void 0 : _40.extra) === null || _41 === void 0 ? void 0 : _41.three_ds_auth) === null || _42 === void 0 ? void 0 : _42.current_step_status) || 'Unknown',
        externalIdentifier: (_46 = (_45 = (_44 = (_43 = result === null || result === void 0 ? void 0 : result.data) === null || _43 === void 0 ? void 0 : _43.transaction) === null || _44 === void 0 ? void 0 : _44.payment_method) === null || _45 === void 0 ? void 0 : _45.extra) === null || _46 === void 0 ? void 0 : _46.external_identifier,
        processorResponseCode: (_50 = (_49 = (_48 = (_47 = result === null || result === void 0 ? void 0 : result.data) === null || _47 === void 0 ? void 0 : _47.transaction) === null || _48 === void 0 ? void 0 : _48.payment_method) === null || _49 === void 0 ? void 0 : _49.extra) === null || _50 === void 0 ? void 0 : _50.processor_response_code,
        token: (_53 = (_52 = (_51 = result === null || result === void 0 ? void 0 : result.data) === null || _51 === void 0 ? void 0 : _51.transaction) === null || _52 === void 0 ? void 0 : _52.payment_method) === null || _53 === void 0 ? void 0 : _53.token,
        installments: (_56 = (_55 = (_54 = result === null || result === void 0 ? void 0 : result.data) === null || _54 === void 0 ? void 0 : _54.transaction) === null || _55 === void 0 ? void 0 : _55.payment_method) === null || _56 === void 0 ? void 0 : _56.installments,
        status: (_58 = (_57 = result === null || result === void 0 ? void 0 : result.data) === null || _57 === void 0 ? void 0 : _57.transaction) === null || _58 === void 0 ? void 0 : _58.status,
        statusMessage: (_60 = (_59 = result === null || result === void 0 ? void 0 : result.data) === null || _59 === void 0 ? void 0 : _59.transaction) === null || _60 === void 0 ? void 0 : _60.status_message,
        shippingAddress: (_62 = (_61 = result === null || result === void 0 ? void 0 : result.data) === null || _61 === void 0 ? void 0 : _61.transaction) === null || _62 === void 0 ? void 0 : _62.shipping_address,
        paymentSourceId: (_64 = (_63 = result === null || result === void 0 ? void 0 : result.data) === null || _63 === void 0 ? void 0 : _63.transaction) === null || _64 === void 0 ? void 0 : _64.payment_source_id,
        paymentLinkId: (_66 = (_65 = result === null || result === void 0 ? void 0 : result.data) === null || _65 === void 0 ? void 0 : _65.transaction) === null || _66 === void 0 ? void 0 : _66.payment_link_id,
        fullName: (_69 = (_68 = (_67 = result === null || result === void 0 ? void 0 : result.data) === null || _67 === void 0 ? void 0 : _67.transaction) === null || _68 === void 0 ? void 0 : _68.customer_data) === null || _69 === void 0 ? void 0 : _69.full_name,
        phoneNumber: (_72 = (_71 = (_70 = result === null || result === void 0 ? void 0 : result.data) === null || _70 === void 0 ? void 0 : _70.transaction) === null || _71 === void 0 ? void 0 : _71.customer_data) === null || _72 === void 0 ? void 0 : _72.phone_number,
        legalIdType: (_75 = (_74 = (_73 = result === null || result === void 0 ? void 0 : result.data) === null || _73 === void 0 ? void 0 : _73.transaction) === null || _74 === void 0 ? void 0 : _74.billing_data) === null || _75 === void 0 ? void 0 : _75.legal_id_type,
        legalId: (_78 = (_77 = (_76 = result === null || result === void 0 ? void 0 : result.data) === null || _76 === void 0 ? void 0 : _76.transaction) === null || _77 === void 0 ? void 0 : _77.billing_data) === null || _78 === void 0 ? void 0 : _78.legal_id,
        sentAt: result === null || result === void 0 ? void 0 : result.sent_at,
        timestamp: result === null || result === void 0 ? void 0 : result.timestamp,
        checksum: (_79 = result === null || result === void 0 ? void 0 : result.signature) === null || _79 === void 0 ? void 0 : _79.checksum,
        environment: result === null || result === void 0 ? void 0 : result.environment,
    };
    try {
        // Validación de transferencia
        //const validator = `${transferenciaData.transactionId}${transferenciaData.status}${transferenciaData.amountInCents}${transferenciaData.timestamp}${process.env.EVENT_INTEGRATIONII}`;
        const validator = `${transferenciaData.transactionId}${transferenciaData.status}${transferenciaData.amountInCents}${transferenciaData.timestamp}${process.env.EVENT_INTEGRATION}`;
        const hashHex = crypto_1.default.createHash('sha256').update(validator).digest('hex');
        console.log(hashHex, "has");
        const response = yield (0, ServicesTransferencias_1.CreateTransferServices)(transferenciaData);
        return res.json({ message: "Create successful!" });
        /* if(hashHex === hashHex){// Asegúrate de que la comparación sea correcta
         } else {
             return res.json({ success: false, message: "Checksum incorrect" });
         }*/
    }
    catch (error) {
        throw error;
    }
});
exports.CreateRegister = CreateRegister;
