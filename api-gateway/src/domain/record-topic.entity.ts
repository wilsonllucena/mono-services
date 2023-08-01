export class RecordMetadataEntity {
  private topicName: string;
  private partition: number;
  private errorCode: number;
  private baseOffset: string;
  private logAppendTime: string;
  private logStartOffset: string;

  constructor(
    topicName: string,
    partition: number,
    errorCode: number,
    baseOffset: string,
    logAppendTime: string,
    logStartOffset: string,
  ) {
    this.topicName = topicName;
    this.partition = partition;
    this.errorCode = errorCode;
    this.baseOffset = baseOffset;
    this.logAppendTime = logAppendTime;
    this.logStartOffset = logStartOffset;
  }
}
