import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'transferencias', timestamps: false })
export class Transferencia extends Model<Transferencia> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: true,
    field: 'transaction_id',
  })
  transaction_id!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'created_at',
  })
  created_at!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'finalized_at',
  })
  finalized_at?: Date;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
    field: 'amount_in_cents',
  })
  amount_in_cents!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'customer_email',
  })
  customer_email?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'currency',
  })
  currency!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'payment_method_type',
  })
  payment_method_type!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'bin',
  })
  bin?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'name',
  })
  name?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'brand',
  })
  brand?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'exp_year',
  })
  exp_year?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'card_type',
  })
  card_type?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'exp_month',
  })
  exp_month?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'last_four',
  })
  last_four?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'card_holder',
  })
  card_holder?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: 'is_three_ds',
  })
  is_three_ds?: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'unique_code',
  })
  unique_code?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'current_step',
  })
  current_step?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'current_step_status',
  })
  current_step_status?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'external_identifier',
  })
  external_identifier?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'processor_response_code',
  })
  processor_response_code?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'token',
  })
  token?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'installments',
  })
  installments?: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'status',
  })
  status?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'status_message',
  })
  status_message?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'shipping_address',
  })
  shipping_address?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'payment_source_id',
  })
  payment_source_id?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'payment_link_id',
  })
  payment_link_id?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'full_name',
  })
  full_name?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'phone_number',
  })
  phone_number?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'legal_id_type',
  })
  legal_id_type?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'legal_id',
  })
  legal_id?: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'sent_at',
  })
  sent_at?: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'timestamp',
  })
  timestamp?: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'checksum',
  })
  checksum?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'environment',
  })
  environment?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'reference',
  })
  reference?: string;
}
