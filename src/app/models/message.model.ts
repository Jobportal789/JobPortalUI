import {Deserializable} from './deserializable.model';

export class Message implements Deserializable{

  public message_id:Number;
  public from_id: string;
  public to_id: string;
  public time: string;
  public text: string;
  public status: string;


  deserialize(input: any): this {
      return Object.assign(this, input);
    }
 }
