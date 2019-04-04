import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './models/task.model';

@Pipe({

})

export class CompletenessPipe implements PipeTransformation {
  
  transform(input: Task[], args) {
    return input;
  }
}
