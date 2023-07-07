export class Massage {
  id?: number;
  content: string;
  source: 'user' | 'openAi';
  // datestamp
  // agent id
  constructor(content: string, source: 'user' | 'openAi') {
    this.content = content;
    this.source = source;
  }
}
