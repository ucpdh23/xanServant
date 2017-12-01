import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'formatNewsDate'
})
export class FormatNewsDatePipe implements PipeTransform {
    transform(value: Date): string {
        if (!value) return "";

        var datePipe = new DatePipe("en-US");
        return datePipe.transform(value, "dd/MM/yy") || "";
    }
}
