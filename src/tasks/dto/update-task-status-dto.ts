import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
