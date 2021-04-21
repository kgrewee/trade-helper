import * as FileSaver from 'file-saver';

export class FileUtility {
    public static save(filename: string, data: string){
        var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, filename);
    }
}