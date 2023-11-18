// src/controllers/example.controller.ts
import { Request, Response } from 'express';
import { ApkService } from '../service/apk.service';


const apkService = new ApkService();

export class ApkController {
  async createExample(Request: string, Response: any) {
    try {
      const createdExample = await apkService.createExample(body);
      Response.status(201).json(createdExample);
    } catch (error) {
      Response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getAllExamples(Request: string, Response: any) {
    try {
      const examples = await apkService.getAllExamples();
      Response.status(200).json(examples);
    } catch (error) {
      Response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getExampleById(Request: string, Response: any) {
    const { id } = Request.params;
    try {
      const example = await apkService.getExampleById(Number(id));
      if (!example) {
        Response.status(404).json({ error: 'Example not found' });
        return;
      }
      Response.status(200).json(example);
    } catch (error) {
      Response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async updateExample(Request: string, Response: any) {
    const { id } = Request.params;
    try {
      const updatedExample = await apkService.updateExample(Number(id), Request.body);
      if (!updatedExample) {
        Response.status(404).json({ error: 'Example not found' });
        return;
      }
      Response.status(200).json(updatedExample);
    } catch (error) {
      Response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async deleteExample(Request: string, Response: any) {
    const { id } = Request.params;
    try {
      await apkService.deleteExample(Number(id));
      Response.status(204).send();
    } catch (error) {
      Response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  }
