import { InvoiceService } from './../invoice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    name = 'ng2-ckeditor';
    ckeConfig: any;
    mycontent: string;
    log: string = '';
    @ViewChild("myckeditor") ckeditor: any;

    constructor(
        private invoiceService:InvoiceService,
        private router:Router
    ) {
        this.mycontent = this.invoiceService.myTemplate;
    }

    ngOnInit() {
        this.ckeConfig = {
            allowedContent: true,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true,
            height:'400px',
            contentsCss  :['./setting.component.scss'],
            resize_dir :'both',
            div_wrapTable :true,
            font_style : {
                element:        'body',
                styles:         { 'font-family': 'Calibri' }
            },
            fullPage : true,
            removeButtons: 'Underline,Subscript,Superscript,Anchor,Save,NewPage,Source,Print,Templates,Paste,Find,PasteAsPlainText'
        };
    }

    onChange($event: any): void {
        console.log("onChange");
    }

    onPaste($event: any): void {
        console.log("onPaste");
    }

    saveTemplate(){
        this.invoiceService.myTemplate=this.mycontent;
        this.router.navigate(["/"])
    }
}
