import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { catDto } from './cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getallCats(): Promise<Cat[]> {
    return this.catsService.fetchAllCats();
  }

  @Post()
  async createCats(@Body() createCat: catDto) {
    return this.catsService.createCat(createCat);
  }

  @Get(':id')
  getaCat(@Param() id: object) {
    return id;
  }
}
