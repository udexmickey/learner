import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async createCat(cat: Cat) {
    this.cats.push(cat);
  }

  async fetchAllCats(): Promise<Cat[]> {
    return this.cats;
  }
}
