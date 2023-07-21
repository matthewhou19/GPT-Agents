export class Message {
  chatId?: number;
  content: string;
  messageSource: 'USER' | 'AI';
  // datestamp
  // agent id
  constructor(content: string, source: 'USER' | 'AI') {
    this.content = content;
    this.messageSource = source;
  }
}
