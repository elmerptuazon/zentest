import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document,
    SchemaTypes,
    Types
  } from 'mongoose';
  
  export type NoteDocument = Note & Document;
  
  @Schema()
  export class Note {
    @Prop()
    Title: string;
  
    @Prop()
    Content: string;

    @Prop()
    User: string;
  }
  
  export const NoteSchema = SchemaFactory.createForClass(Note);