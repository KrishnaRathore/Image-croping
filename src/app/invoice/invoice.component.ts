import { InvoiceService } from './../invoice.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

declare var jQuery;
@Component({
	selector: 'app-invoice',
	templateUrl: './invoice.component.html',
	styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

	constructor(
		private invoiceService: InvoiceService,
		private sanitizer: DomSanitizer,
		private _ngZone: NgZone
	) { }

	user = [{
		name: 'Krishna'
	}, {
		name: 'User'
	}]

	companies = [{
		company_name: 'Astegic lnfosoft',
		company_address: '3rd and 4th Floor, Plot No. H-248, A & B, Mansarovar Industrial Area,Jaipur, Rajasthan',
		company_email: 'test@gmail.com',
		company_pancard: 'BHHD12365478954'
	}, {
		company_name: 'Microsoft',
		company_address: '302, 304, 312, 3rd Floor, Orbit Mall, A.B. Road, Indore, Madhya Pradesh 452010',
		company_email: 'test123@gmail.com',
		company_pancard: 'BH12365478954'
	}]

	ngOnInit(): void {
	}

	print(company) {
		let data = this.invoiceService.myTemplate;
		var $html = jQuery('<div />', { html: data });

		$html.find('#company_name').html(company.company_name);

		$html.find('#company_address').html(company.company_email);

		if ($html.find('#company_email_div').length) {
			$html.find('#company_email_text').html(company.company_email);
		}
		if ($html.find('#company_pancard_div').length) {
			$html.find('#company_pancard_text').html(company.company_pancard);
		}


		let strdata = $html.prop('outerHTML')

		console.log($html);
		this.printDiv(strdata);
	}

	printDiv(data) {
		let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
		mywindow.document.write(data);
		mywindow.document.close(); // necessary for IE >= 10
		mywindow.focus(); // necessary for IE >= 10*/

		mywindow.print();
		mywindow.close();

		return true;
	}

	mail() {
		let data = this.invoiceService.mytpl;

		var iframe=document.createElement('iframe');
		jQuery('body').append(jQuery(iframe));

		/* let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
		mywindow.document.write(data);
		mywindow.document.close();
		mywindow.focus(); */



		setTimeout(() => {
			var iframedoc=iframe.contentDocument||iframe.contentWindow.document;
    		jQuery('body',jQuery(iframedoc)).html(data);

			html2canvas(iframedoc.body, {
				scale: 2,
				useCORS: true,
				allowTaint: true,
			}).then(canvas => {
				iframe.parentNode.removeChild(iframe);
				jQuery('body',jQuery(document)).remove(iframe);
				// Few necessary setting options  
				//first solution
				/* let imgWidth = 208;   
				let pageHeight = 295;    
				let imgHeight = canvas.height * imgWidth / canvas.width;  
				let heightLeft = imgHeight;  
		  
				const contentDataURL = canvas.toDataURL('image/png')  
				let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
				let position = 0;  
				pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
				pdf.save('MYPdf.pdf'); // Generated PDF    */

				//second solution

				/* let HTML_Width = canvas.width;
				let HTML_Height = canvas.height;
				let top_left_margin = 15;
				let PDF_Width = HTML_Width + (top_left_margin * 2);
				let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
				let canvas_image_width = HTML_Width;
				let canvas_image_height = HTML_Height;
				let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
				canvas.getContext('2d');
				let imgData = canvas.toDataURL("image/png", 1.0);
				let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
				for (let i = 1; i <= totalPDFPages; i++) {
					pdf.addPage([PDF_Width, PDF_Height], 'p');
					pdf.addImage(imgData, 'PNG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
				}
				//let base64=pdf.output('datauri');
				//console.log(base64);
				pdf.save("HTML-Document.pdf"); */

				//3rd solution

				let imgWidth = 210;
				let pageHeight = 295;
				let imgHeight = canvas.height * imgWidth / canvas.width;
				let heightLeft = imgHeight;

				let doc = new jsPDF('p', 'mm');
				let position = 0;
				let imgData = canvas.toDataURL("image/png", 1.0);

				doc.addImage(imgData, 'PNG', 10, 10, imgWidth-17, imgHeight);
				heightLeft -= pageHeight;

				while (heightLeft >= 0) {
					position = heightLeft - imgHeight+8;
					doc.addPage();
					doc.addImage(imgData, 'PNG', 10, position, imgWidth-17, imgHeight);
					heightLeft -= pageHeight;
				}
				//let base64=doc.output('datauri');
				doc.save( 'file.pdf');
			});
		}, 50)
	}

	mailhtml2pdf() {
		/* let data = this.invoiceService.mytpl;
		let html = jQuery(jQuery.parseHTML(data))
		var $html = jQuery('<div />', { html: data });
		const invoice = $html[0];
		var opt = {
			margin: 1,
			filename: 'myfile.pdf',
			image: { type: 'png', quality: 1 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
		html2pdf().from(invoice).set(opt).save(); */
	}

}


// npm i jspdf

// npm i html2canvas