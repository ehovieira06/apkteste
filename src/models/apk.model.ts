// src/models/example.model.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class ApkModel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

ApkModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'examples',
  }
);

export default ApkModel;
