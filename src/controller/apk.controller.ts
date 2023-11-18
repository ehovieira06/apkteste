// src/controllers/example.controller.ts
import { Request, Response } from 'express';
import { ApkService } from '../service/apk.service';


const apkService = new ApkService();

export class ApkController {
  async createExample(body: string, res: any) {
    try {
      const createdExample = await apkService.createExample(body);
      res.status(201).json(createdExample);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getAllExamples(req: string, res: any) {
    try {
      const examples = await apkService.getAllExamples();
      res.status(200).json(examples);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getExampleById(req: string, res: any) {
    const { id } = req.params;
    try {
      const example = await apkService.getExampleById(Number(id));
      if (!example) {
        res.status(404).json({ error: 'Example not found' });
        return;
      }
      res.status(200).json(example);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async updateExample(req: string, res: any) {
    const { id } = req.params;
    try {
      const updatedExample = await apkService.updateExample(Number(id), req.body);
      if (!updatedExample) {
        res.status(404).json({ error: 'Example not found' });
        return;
      }
      res.status(200).json(updatedExample);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async deleteExample(req: string, res: any) {
    const { id } = req.params;
    try {
      await apkService.deleteExample(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  }
