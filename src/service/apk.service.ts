// src/services/example.service.ts

import ApkModel from "../models/apk.model";


export class ApkService {
  async createExample(exampleData: { name: string; description: string }) {
    return ApkModel.create(exampleData);
  }

  async getAllExamples() {
    return ApkModel.findAll();
  }

  async getExampleById(id: number) {
    return ApkModel.findByPk(id);
  }

  async updateExample(id: number, updatedExample: { name: string; description: string }) {
    await ApkModel.update(updatedExample, { where: { id } });
    return this.getExampleById(id);
  }

  async deleteExample(id: number) {
    await ApkModel.destroy({ where: { id } });
  }

  getServiceMessage() {
    return 'Hello from shared method!';
  }
}
