import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private notifications: Notification[] = [];
  constructor(
    @InjectModel('Notification')
    private readonly notificationModel: Model<Notification>,
  ) {}
  async create(createNotificationDto: Notification) {
    const notification = await new this.notificationModel(
      createNotificationDto,
    );
    this.notifications.push(notification);
    return await notification.save();
  }

  findAll() {
    return this.notificationModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} notification`;
  // }

  // update(id: number, updateNotificationDto: UpdateNotificationDto) {
  //   return `This action updates a #${id} notification`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} notification`;
  // }
}
