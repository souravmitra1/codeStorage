export class CodeSnippetModel {
    constructor() { 
        this.AttachmentDetails = new Array<FileAttachmentInfo>();
    }
    public CodeSnippetId : number;
    public Title : string;
    public Tags: Array<string>;
    public SnippetDetails : string;
    public HasAttachment : boolean;
    public AttachmentDetails : Array<FileAttachmentInfo>
}
export class FileAttachmentInfo {
    public FileSequence : number;
    public FileName : string;
    public FileType : string;
    public FileSize : number;
    public FileURL : string;
}