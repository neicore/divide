import { Body, Controller, Delete, Patch } from '@nestjs/common';
import { GetCurrentUserId } from 'src/common/decorators';
import { EditUserDto } from './dto';
import { ReturnUser } from './types';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Patch('me')
  async edit(
    @GetCurrentUserId() userId: string,
    @Body() dto: EditUserDto,
  ): Promise<ReturnUser> {
    return await this.userService.edit(userId, dto);
  }

  @Delete('me')
  async delete(@GetCurrentUserId() userId: string): Promise<any> {
    return await this.userService.delete(userId);
  }
}
