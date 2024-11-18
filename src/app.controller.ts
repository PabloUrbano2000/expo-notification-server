import { Body, Controller, Post } from '@nestjs/common';
import { PushNotificationsService } from './push-notifications/push-notifications.service';

@Controller()
export class AppController {
  constructor(
    private readonly pushNotificationService: PushNotificationsService,
  ) {}

  // @Get()
  // getHello() {
  //   return this.appService.getHello();
  // }

  @Post('/send-notification')
  sendNotification(@Body() body: { to: string[] }) {
    // const toTokens = [];
    return this.pushNotificationService.sendNotification(body.to);
  }
}
