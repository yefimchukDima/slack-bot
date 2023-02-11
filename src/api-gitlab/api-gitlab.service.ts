import { Injectable } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';

@Injectable()
export class ApiGitlabService {

  getHello(): string {
    return 'Hello World!';
  }
}
