import * as mongoose from 'mongoose';

export const NotificationSchema = new mongoose.Schema({
  products: [{ product: String, value: Number, code: String }],
  message: { type: String, requiered: true },
  cnpj: { type: String, required: true },
});

export interface Notification {
  // id: string;
  products: Product[];
  message: string;
  cnpj: string;
}

// @Schema()
// export class Notification {
//   @Prop()
//   id: number;

//   @Prop()
//   products: string;

//   @Prop()
//   message: string;
// }

class Product {
  product: string;

  value: number;

  code: string;
}

// export const NotificationSchema = SchemaFactory.createForClass(Notification);
