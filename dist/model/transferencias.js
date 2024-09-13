"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transferencia = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Transferencia = class Transferencia extends sequelize_typescript_1.Model {
};
exports.Transferencia = Transferencia;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING, // Cambié de INTEGER a STRING porque tu ID parece ser alfanumérico
        primaryKey: true,
        allowNull: true,
        field: 'transaction_id',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "transaction_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
        field: 'created_at',
    }),
    __metadata("design:type", Date)
], Transferencia.prototype, "created_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
        field: 'finalized_at',
    }),
    __metadata("design:type", Date)
], Transferencia.prototype, "finalized_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT, // Cambié de INTEGER a BIGINT para manejar grandes valores
        allowNull: true,
        field: 'amount_in_cents',
    }),
    __metadata("design:type", Number)
], Transferencia.prototype, "amount_in_cents", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'customer_email',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "customer_email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'currency',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "currency", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'payment_method_type',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "payment_method_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING, // Agrega más columnas según el JSON que recibes
        allowNull: true,
        field: 'bin',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "bin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'name',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'brand',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "brand", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'exp_year',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "exp_year", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'card_type',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "card_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'exp_month',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "exp_month", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'last_four',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "last_four", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'card_holder',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "card_holder", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        field: 'is_three_ds',
    }),
    __metadata("design:type", Boolean)
], Transferencia.prototype, "is_three_ds", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'unique_code',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "unique_code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'current_step',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "current_step", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'current_step_status',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "current_step_status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'external_identifier',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "external_identifier", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'processor_response_code',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "processor_response_code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'token',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "token", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
        field: 'installments',
    }),
    __metadata("design:type", Number)
], Transferencia.prototype, "installments", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'status',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'status_message',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "status_message", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'shipping_address',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "shipping_address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'payment_source_id',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "payment_source_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'payment_link_id',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "payment_link_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'full_name',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "full_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'phone_number',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "phone_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'legal_id_type',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "legal_id_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'legal_id',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "legal_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
        field: 'sent_at',
    }),
    __metadata("design:type", Date)
], Transferencia.prototype, "sent_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
        field: 'timestamp',
    }),
    __metadata("design:type", Number)
], Transferencia.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'checksum',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "checksum", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'environment',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "environment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: 'reference',
    }),
    __metadata("design:type", String)
], Transferencia.prototype, "reference", void 0);
exports.Transferencia = Transferencia = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'transferencias', timestamps: false })
], Transferencia);
