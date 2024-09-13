import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'productos', timestamps: false })
export class Producto extends Model<Producto> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string; // Cambiado de 'nombre' a 'title'

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  precio!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descripcion?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  categoria?: string; // Añadido 'categoria'

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imagen?: string; // Añadido 'imagen'
}
