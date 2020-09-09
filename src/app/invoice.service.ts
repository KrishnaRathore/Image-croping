import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class InvoiceService {

	constructor() { }

  public myTemplate=`
  <html>

  <head>
    <title>Saniiro</title>
    <style>
      @media print {
        .hidden-print {
          display: none !important;
        }
      }
  
      .clearfix:after {
        content: "";
        display: table;
        clear: both
      }
  
      a {
        color: #0087c3;
        text-decoration: none
      }
  
      .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-direction: row
      }
  
      .col {
        -ms-flex-preferred-size: 0;
        -ms-flex-positive: 1;
        padding-left: 10px;
        max-width: 100%
      }
  
      .row1 {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 1px;
        margin-left: 0
      }
  
      .col1 {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
      }
  
      header {
        padding: 10px 0
      }
  
      .header1 {
        padding: 1px 0;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333
      }
  
      #logo {
        float: left;
        margin-top: 8px
      }
  
      #logo img {
        height: 70px
      }
  
      #company {
        float: right;
        text-align: right
      }
  
      #client {
        padding-left: 6px;
        float: left
      }
  
      #client .to {
        color: #333
      }
  
   
  
      #invoice {
        float: right;
        text-align: right
      }
  
      #invoice h1 {
        color: #0087c3;
        font-size: 2.2em;
        line-height: 1em;
        font-weight: 400;
        margin: 0 0 10px 0
      }
  
      #invoice .date {
        font-size: 1.1em;
        color: #000
      }
  
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 5px
      }
  
      table td,
      table th {
        padding: 1px;
        vertical-align: top;
        text-align: center;
        font-size: 12px;
        word-break: break-word
      }
  
      table th {
        white-space: nowrap;
        font-weight: 700
      }
  
      table td {
        text-align: left
      }
  
      table td h3 {
        color: #000;
        font-size: 1.2em;
        font-weight: 600;
        margin: 0 0 .2em 0
      }
  
      table .no {
        color: #000
      }
  
      table .desc {
        text-align: left
      }
  
      table .total {
        color: #000;
        text-align: right
      }
  
      table td.qty,
      table td.total,
      table td.unit {
        font-size: 1.2em
      }
  
      table tfoot td {
        background: #fff;
        border-bottom: none;
        font-weight: 600;
        text-align: right;
        white-space: nowrap;
        margin-top: 100px
      }
  
      table tfoot tr:first-child td {
        border-top: none
      }
  
      table tfoot tr:last-child td {
        border-top: 1px solid #333
      }
  
      .table1 tbody tr td,
      .table1 thead tr th {
        border: 1px solid #333;
        word-break: break-all
      }
  
      #thanks {
        font-size: 2em;
        margin-bottom: 50px
      }
  
      #notices {
        padding-left: 6px;
        border-left: 6px solid #0087c3
      }
  
      #notices .notice {
        font-size: 1.2em
      }
  
      footer {
        color: #000;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 60px;
        border-top: 1px solid #aaa;
        padding: 8px 0;
        text-align: center
      }
  
      .name-footer {
        text-align: left;
        margin: 0;
        font-size: 12px;
        padding-left: 10px
      }
  
      .tbl_footer tr td {
        text-align: right
      }
  
      .tbl_footer tr td.total {
        text-align: right;
        font-weight: 700;
        width: 120px
      }
  
      .total_word {
        padding: 4px;
        border-top: 1px solid #333
      }
  
      .terms_section {
        color: #000;
        /*width: 100%; position: absolute;bottom: 115px; border-top: 1px solid #aaa;*/
        padding: 0;
      }
  
      .tbl_fix_height {
        min-height: 270px;
        border-bottom: 1px solid #333;
      }
    </style>
  </head>
  
  <div style="position: relative;
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
  color: #000;
  background: #fff;
  font-family: Calibri;
  font-size: 12px">
    <!---->
    <div style="position:absolute;top:290;bottom:0;left:0;right:0;text-align: center;" class="ng-star-inserted">
      <p style=" color:#97919126;;
        font-size:100px;
        transform:rotate(325deg);
        -webkit-transform:rotate(325deg);">UNPAID</p>
    </div>
    <div style="display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 1px;
    margin-left: 0">
      <div id="logo" style="-ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;float: left;
      margin-top: 8px;"><img style="width:70px;height:70px;"
          src="https://revugain.sgp1.cdn.digitaloceanspaces.com/Saniiro/98/249/249/Images/Organization/34ef5477-9851-4465-89e0-57a2014cb9c4.jpeg">
      </div>
      <div id="company" style="-ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;float: right;
      text-align: right;">
        <h2 style="font-size: 1.6em;
        font-weight: 600;
        margin: 0;
        text-transform: uppercase;" id="company_name"> Springman Apparel Private Limited</h2>
        <div id="company_address"> Arihant Aura, Bwing , First Floor, Turbhe , Thane , Maharashtra , India (400703) </div>
        <div id="company_email_div"><label>Email : </label><span id="company_email_text">business@outlawsfashion.in </span></div>
        <div><label>ContactNo : </label>
          <span class="ng-star-inserted"> +91-8080749977 </span>
        </div>
        <div id="company_pancard_div"><label>PAN NO. : </label><span id="company_pancard_text">ABDCS3779H</span></div>
        
        <div class="ng-star-inserted"><label>GSTIN : </label>27ABDCS3779H1ZX</div>
        <!---->
        <div><a> </a></div>
      </div>
    </div>
    <div class=" header1" style="background: #333; color: #fff;">
      <h4
        style="text-align:center; margin:0;padding:0; letter-spacing:3px; text-transform: uppercase;font-size: 16px; font-weight: 700;">
        Tax-Invoice</h4>
    </div>
    <main>
      <div class="clearfix" id="details">
        <div class="row1">
          <div class="col1">
            <table>
              <tbody>
                <!---->
                <tr>
                  <td style="width:25%; ">Invoice No. </td>
                  <td><strong>: SAPL/11/S</strong></td>
                </tr>
                <tr>
                  <td style="width:25%;">Invoice Date</td>
                  <td><strong>: 08-08-2020</strong></td>
                </tr>
                <!---->
              </tbody>
            </table>
          </div>
          <div class="col1">
            <table>
              <tbody>
                <tr>
                  <td style="width:25%;">E-way Bill No</td>
                  <td><strong>: </strong></td>
                </tr>
                <tr>
                  <td>Reverse Charge</td>
                  <td><strong>: No</strong></td>
                </tr>
                <!---->
                <!---->
                <tr class="ng-star-inserted">
                  <td style="width:25%;">Driver Name </td>
                  <td><strong>: </strong></td>
                </tr>
                <tr class="ng-star-inserted">
                  <td style="width:25%;">Transportation </td>
                  <td><strong>: </strong></td>
                </tr>
                <tr class="ng-star-inserted">
                  <td style="width:25%;">Vehicle No </td>
                  <td><strong>: </strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="clearfix" id="details">
        <div class="row1">
          <div class="col1">
            <div class="header1" style="background: #333; color: #fff;">
              <h4 style="text-align:center; margin:0;padding:0;">Bill To</h4>
            </div>
            <table>
              <tbody>
                <tr>
                  <td style="width:25%;">Name </td>
                  <!---->
                  <td colspan="3" style="width:75%;" class="ng-star-inserted"><strong>: Sushma
                      Garments</strong></td>
                  <!---->
                </tr>
                <tr>
                  <td style="width:25%;">Address </td>
                  <td colspan="3" style="width:75%;"><strong>: 15A, jawaharlal Neheru Road, Sreeram arcade
                      , Sukhia street , Kolkata ,Sukhia Street ,Kolkata ,West Bengal ,India </strong>
                  </td>
                </tr>
                <tr>
                  <td style="width:25%;">Phone </td>
                  <td colspan="3" style="width:75%;"><strong>: +91-7003657376 </strong></td>
                </tr>
                <tr>
                  <td style="width:25%;">GSTIN</td>
                  <td style="width:35%;"><strong>: 19ACVPJ9544P1ZC</strong></td>
                  <td style="width:15%;">PAN</td>
                  <td style="width:25%;"><strong>: ACVPJ9544P</strong></td>
                </tr>
                <tr>
                  <td style="width:25%;">Place of Supply</td>
                  <td style="width:35%;"><strong>: West Bengal </strong></td>
                  <td style="width:15%;">State Code </td>
                  <td style="width:25%;"><strong>: 19</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col1">
            <div class="header1" style="background: #333; color: #fff;">
              <h4 style="text-align:center; margin:0;padding:0;">Ship To</h4>
            </div>
            <table>
              <tbody>
                <tr>
                  <td style="width:25%;">Name </td>
                  <!---->
                  <!---->
                  <!---->
                  <td colspan="3" class="ng-star-inserted"><strong>: Sushma Garments</strong></td>
                </tr>
                <tr>
                  <td style="width:25%;">Address </td>
                  <td colspan="3"><strong>: 15A, jawaharlal Neheru Road, Sreeram arcade , Sukhia street ,
                      Kolkata, Sukhia Street, Kolkata, West Bengal, India(700013) </strong></td>
                </tr>
                <tr>
                  <td style="width:25%;">Phone </td>
                  <!---->
                  <!---->
                </tr>
                <tr>
                  <td style="width:25%;">Place of Supply </td>
                  <td style="width:55%;"><strong>: West Bengal</strong></td>
                  <td style="width:15%;">State Code </td>
                  <td><strong>: 19</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="invoice"></div>
      </div>
      <div style="min-height: 290px;">
        <div class="tbl_fix_height">
          <table border="0" cellpadding="0" cellspacing="0" class="table1">
            <thead>
              <tr>
                <th>S.No.</th>
                <!---->
                <th class="desc" style="width:30%;">Item Name</th>
                <!---->
                <!---->
                <th class="desc ng-star-inserted">Item Description</th>
                <th class="desc" style="width:12%;">HSN/SAC</th>
                <!---->
                <!---->
                <!---->
                <th style="text-align:right">Qty</th>
                <th class="desc">UOM</th>
                <!---->
                <!---->
                <th style="text-align:right">Rate</th>
                <th class="total">Amount</th>
              </tr>
            </thead>
            <tbody>
              <!---->
              
              
              <tr class="ng-star-inserted">
                <td>45</td>
                <!---->
                <td>Round Neck Grey Malanch<br> </td>
                <!---->
                <!---->
                <!---->
                <td class="ng-star-inserted">
                  <!----><span class="ng-star-inserted"> Grey Malanch, </span><span
                    class="ng-star-inserted"> XL </span></td>
                <td>6203</td>
                <!---->
                <!---->
                <!---->
                <td style="text-align:right">7</td>
                <td>PCS</td>
                <!---->
                <td style="text-align:right">380.00</td>
                <td style="text-align:right">2660.00</td>
              </tr>

              <tr class="ng-star-inserted">
                <td>45</td>
                <!---->
                <td>--<br> </td>
                <!---->
                <!---->
                <!---->
                <td class="ng-star-inserted">
                  <!----><span class="ng-star-inserted"> Grey Malanch, </span><span
                    class="ng-star-inserted"> XL </span></td>
                <td>6203</td>
                <!---->
                <!---->
                <!---->
                <td style="text-align:right">7</td>
                <td>PCS</td>
                <!---->
                <td style="text-align:right">380.00</td>
                <td style="text-align:right">2660.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="clearfix">
          <!---->
          <div class="row1 ng-star-inserted">
            <div class="col1">
              <table class="table1">
                <tbody>
                  <tr>
                    <td></td>
                    <!---->
                    <td style="width:30%;">Total </td>
                    <!---->
                    <!---->
                    <!---->
                    <td class="ng-star-inserted"></td>
                    <td style="width:12%;"></td>
                    <!---->
                    <!---->
                    <!---->
                    <td style="text-align:right"> 519
                      <!---->
                    </td>
                    <td></td>
                    <!---->
                    <td style="text-align:right"></td>
                    <td style="text-align:right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row1">
            <div class="col1 bank_detail">
              <table>
                <tbody>
                  <tr>
                    <td style="width:40%;">Account Holder Name</td>
                    <td><strong>: Springman Apparel Private Limited</strong></td>
                  </tr>
                  <tr>
                    <td style="width:25%;">Bank Name</td>
                    <td><strong>: ICICI</strong></td>
                  </tr>
                  <tr>
                    <td style="width:25%;">Bank A/c No</td>
                    <td><strong>: 777705180407</strong></td>
                  </tr>
                  <tr>
                    <td style="width:25%;">IFSC Code</td>
                    <td><strong>: ICIC00003404</strong></td>
                  </tr>
                  <tr>
                    <td style="width:25%;">Branch</td>
                    <td><strong>: Palava</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col1">
              <table class="tbl_footer">
                <tbody>
                  <tr>
                    <td>Sub Total Amount :</td>
                    <td><strong>229220.00 </strong></td>
                  </tr>
                  <!---->
                  <!---->
                  <!---->
                  <!---->
                  <!---->
                  <!---->
                  <!---->
                  <tr>
                    <td>Total Tax :</td>
                    <td><strong>11461.00 </strong></td>
                  </tr>
                  <tr>
                    <td>Round Off :</td>
                    <td><strong> 0.00</strong></td>
                  </tr>
                  <tr>
                    <td>Bill Amount :</td>
                    <td><strong>₹ 240681.00 </strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row1 total_word">
            <div class="" style="width: 20%;">Total Amount In Words :</div>
            <div class="" style="text-align:left; width: 80%;"><strong> Two Lakh Fourty Thousand Six Hundred And
                Eighty-One Only </strong></div>
          </div>
          <!---->
          <!---->
        </div>
      </div>
      <!---->
      <!---->
      <div class="table_summery invoice border-top border-bottom ng-star-inserted">
        <div style="clear:both"></div>
        <h4 style=" padding-left:358px"> GST TAX SUMMARY</h4>
        <table border="0" cellpadding="0" cellspacing="0" class="table1">
          <thead>
            <tr>
              <th style="width:10%; text-align: left;">HSN</th>
              <th style="width:12%; text-align: right;">Taxable Amt</th>
              <th style="width:8%; text-align: right;">Rate</th>
              <!---->
              <th style="text-align:right;" class="ng-star-inserted">IGST</th>
              <th style="text-align:right;">Total</th>
            </tr>
          </thead>
          <tbody id="main-con">
            <!---->
            <tr class="ng-star-inserted">
              <td>6203</td>
              <td style="text-align:right;">229220.00</td>
              <td style="text-align:right;">5%</td>
              <!---->
              <!---->
              <td style="text-align:right;" class="ng-star-inserted"> 11461-(5)% </td>
              <td style="text-align:right;">240681.00</td>
            </tr>
          </tbody>
        </table>
        <div style="clear:both"></div>
      </div>
    </main>
    <div class="terms_section">
      <div class="row">
        <div style="font-size: 16px;"><strong> Terms &amp; Conditions :- </strong></div>
      </div>
      <ul style="margin:0;">
        <!---->
        <li class="ng-star-inserted">50% advance &amp; 50% on 45 days</li>
        <li class="ng-star-inserted">18% Interest if failed to pay in 45 days</li>
        <li class="ng-star-inserted">Any dispute to be raised in 4 days of receiving Goods</li>
        <li class="ng-star-inserted">Any dispute is under Mumbai Juridiction</li>
        <li class="ng-star-inserted">Bank - ICICI , A/C no - 777705180407, IFSC - ICIC0003404</li>
      </ul>
    </div>
    <div>
      <div class="row1">
        <div class="col1">
          <div class="row"></div>
        </div>
        <div class="col1" style="text-align: right; ">
          <h3 class="name-footer" style="text-align: right; font-size: 16px">For : Springman Apparel Private
            Limited</h3>
          Authorised Signatory
        </div>
      </div>
    </div>
  </div>
  
  </html>
  `



























  public mytpl= `
  
  <html>
  <head>
      <title>Saniiro</title>
      <style>
          @media print {.hidden-print {display: none !important;}}.clearfix:after{content:"";display:table;clear:both}a{color:#0087c3;text-decoration:none}body{position:relative;width:21cm;height:29.7cm;margin:0 auto;color:#000;background:#fff;font-family:Calibri;font-size:12px}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-direction:row}.col{-ms-flex-preferred-size:0;-ms-flex-positive:1;padding-left:10px;max-width:100%}.row1{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-direction:row;flex-wrap:wrap;margin-right:1px;margin-left:0}.col1{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}header{padding:10px 0}.header1{padding:1px 0;border-top:1px solid #333;border-bottom:1px solid #333}#logo{float:left;margin-top:8px}#logo img{height:70px}#company{float:right;text-align:right}#client{padding-left:6px;float:left}#client .to{color:#333}h2.name{font-size:1.6em;font-weight:600;margin:0;text-transform:uppercase}#invoice{float:right;text-align:right}#invoice h1{color:#0087c3;font-size:2.2em;line-height:1em;font-weight:400;margin:0 0 10px 0}#invoice .date{font-size:1.1em;color:#000}table{width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:5px}table td,table th{padding:1px;vertical-align:top;text-align:center;font-size:12px;word-break:break-word}table th{white-space:nowrap;font-weight:700}table td{text-align:left}table td h3{color:#000;font-size:1.2em;font-weight:600;margin:0 0 .2em 0}table .no{color:#000}table .desc{text-align:left}table .total{color:#000;text-align:right}table td.qty,table td.total,table td.unit{font-size:1.2em}table tfoot td{background:#fff;border-bottom:none;font-weight:600;text-align:right;white-space:nowrap;margin-top:100px}table tfoot tr:first-child td{border-top:none}table tfoot tr:last-child td{border-top:1px solid #333}.table1 tbody tr td,.table1 thead tr th{border:1px solid #333;word-break:break-all}#thanks{font-size:2em;margin-bottom:50px}#notices{padding-left:6px;border-left:6px solid #0087c3}#notices .notice{font-size:1.2em}footer{color:#000;width:100%;height:30px;position:absolute;bottom:60px;border-top:1px solid #aaa;padding:8px 0;text-align:center}.name-footer{text-align:left;margin:0;font-size:12px;padding-left:10px}.tbl_footer tr td{text-align:right}.tbl_footer tr td.total{text-align:right;font-weight:700;width:120px}.total_word{padding:4px;border-top:1px solid #333}.terms_section { color: #000;/*width: 100%; position: absolute;bottom: 115px; border-top: 1px solid #aaa;*/padding:0;}.tbl_fix_height { min-height: 270px;border-bottom:1px solid #333;}
      </style>
  </head>
  <body>
      <!---->
      <div style="position:absolute;top:290;bottom:0;left:0;right:0;text-align: center;" class="ng-star-inserted">
          <p style=" color:#97919126;;
              font-size:100px;
              transform:rotate(325deg);
              -webkit-transform:rotate(325deg);">UNPAID</p>
      </div>
      <header class="clearfix">
          <div id="logo"><img src="https://revugain.sgp1.cdn.digitaloceanspaces.com/Saniiro/98/249/249/Images/Organization/34ef5477-9851-4465-89e0-57a2014cb9c4.jpeg"></div>
          <div id="company">
              <h2 class="name"> Springman Apparel Private Limited</h2>
              <div> Arihant Aura, Bwing , First Floor </div>
              <div> , Turbhe , Thane , Maharashtra , India (400703) </div>
              <!---->
              <div class="ng-star-inserted"><label>Email : </label>business@outlawsfashion.in </div>
              <!---->
              <div class="ng-star-inserted">
                  <label>ContactNo : </label><!----><span class="ng-star-inserted"> +91-8080749977 </span>
              </div>
              <!---->
              <div class="ng-star-inserted"><label>PAN NO. : </label>ABDCS3779H</div>
              <!---->
              <div class="ng-star-inserted"><label>GSTIN : </label>27ABDCS3779H1ZX</div>
              <!---->
              <div><a> </a></div>
          </div>
      </header>
      <div class=" header1" style="background: #333; color: #fff;">
          <h4 style="text-align:center; margin:0;padding:0; letter-spacing:3px; text-transform: uppercase;font-size: 16px; font-weight: 700;"> Tax-Invoice</h4>
      </div>
      <main>
          <div class="clearfix" id="details">
              <div class="row1">
                  <div class="col1">
                      <table>
                          <tbody>
                              <!---->
                              <tr>
                                  <td style="width:25%; ">Invoice No. </td>
                                  <td><strong>: SAPL/11/S</strong></td>
                              </tr>
                              <tr>
                                  <td style="width:25%;">Invoice Date</td>
                                  <td><strong>: 08-08-2020</strong></td>
                              </tr>
                              <!---->
                          </tbody>
                      </table>
                  </div>
                  <div class="col1">
                      <table>
                          <tbody>
                              <tr>
                                  <td style="width:25%;">E-way Bill No</td>
                                  <td><strong>: </strong></td>
                              </tr>
                              <tr>
                                  <td>Reverse Charge</td>
                                  <td><strong>: No</strong></td>
                              </tr>
                              <!----><!---->
                              <tr class="ng-star-inserted">
                                  <td style="width:25%;">Driver Name </td>
                                  <td><strong>: </strong></td>
                              </tr>
                              <tr class="ng-star-inserted">
                                  <td style="width:25%;">Transportation </td>
                                  <td><strong>: </strong></td>
                              </tr>
                              <tr class="ng-star-inserted">
                                  <td style="width:25%;">Vehicle No </td>
                                  <td><strong>: </strong></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <div class="clearfix" id="details">
              <div class="row1">
                  <div class="col1">
                      <div class=" header1" style="background: #333; color: #fff;">
                          <h4 style="text-align:center; margin:0;padding:0;">Bill To</h4>
                      </div>
                      <table>
                          <tbody>
                              <tr>
                                  <td style="width:25%;">Name </td>
                                  <!---->
                                  <td colspan="3" style="width:75%;" class="ng-star-inserted"><strong>: Sushma Garments</strong></td>
                                  <!---->
                              </tr>
                              <tr>
                                  <td style="width:25%;">Address </td>
                                  <td colspan="3" style="width:75%;"><strong>:  15A, jawaharlal Neheru Road, Sreeram arcade , Sukhia street , Kolkata ,Sukhia Street ,Kolkata ,West Bengal ,India  </strong></td>
                              </tr>
                              <tr>
                                  <td style="width:25%;">Phone </td>
                                  <td colspan="3" style="width:75%;"><strong>: +91-7003657376 </strong></td>
                              </tr>
                              <tr>
                                  <td style="width:25%;">GSTIN</td>
                                  <td style="width:35%;"><strong>: 19ACVPJ9544P1ZC</strong></td>
                                  <td style="width:15%;">PAN</td>
                                  <td style="width:25%;"><strong>: ACVPJ9544P</strong></td>
                              </tr>
                              <tr>
                                  <td style="width:25%;">Place of Supply</td>
                                  <td style="width:35%;"><strong>: West Bengal </strong></td>
                                  <td style="width:15%;">State Code </td>
                                  <td style="width:25%;"><strong>: 19</strong></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="col1">
                      <div class=" header1" style="background: #333; color: #fff;">
                          <h4 style="text-align:center; margin:0;padding:0;">Ship To</h4>
                      </div>
                      <table>
                          <tbody>
                              <tr>
                                  <td style="width:25%;">Name </td>
                                  <!----><!----><!---->
                                  <td colspan="3" class="ng-star-inserted"><strong>: Sushma Garments</strong></td>
                              </tr>
                              <tr>
                                  <td style="width:25%;">Address </td>
                                  <td colspan="3"><strong>: 15A, jawaharlal Neheru Road, Sreeram arcade , Sukhia street , Kolkata, Sukhia Street, Kolkata, West Bengal, India(700013) </strong></td>
                              </tr>
                              <tr>
                                  <td style="width:25%;">Phone </td>
                                  <!----><!---->
                              </tr>
                              <tr>
                                  <td style="width:25%;">Place of Supply </td>
                                  <td style="width:55%;"><strong>: West Bengal</strong></td>
                                  <td style="width:15%;">State Code </td>
                                  <td><strong>: 19</strong></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div id="invoice"></div>
          </div>
          <div style="min-height: 290px;">
              <div class="tbl_fix_height">
                  <table border="0" cellpadding="0" cellspacing="0" class="table1">
                      <thead>
                          <tr>
                              <th>S.No.</th>
                              <!---->
                              <th class="desc" style="width:30%;">Item Name</th>
                              <!----><!---->
                              <th class="desc ng-star-inserted">Item Description</th>
                              <th class="desc" style="width:12%;">HSN/SAC</th>
                              <!----><!----><!---->
                              <th style="text-align:right">Qty</th>
                              <th class="desc">UOM</th>
                              <!----><!---->
                              <th style="text-align:right">Rate</th>
                              <th class="total">Amount</th>
                          </tr>
                      </thead>
                      <tbody>
                          <!---->
                          <tr class="ng-star-inserted">
                              <td>1</td>
                              <!---->
                              <td>Polo Plain Royal Blue<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Royal Blue,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">3993.33</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>2</td>
                              <!---->
                              <td>Polo Plain Royal Blue<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Royal Blue,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>3</td>
                              <!---->
                              <td>Polo Plain Royal Blue<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Royal Blue,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>4</td>
                              <!---->
                              <td>Polo Plain Royal Blue<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Royal Blue,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>5</td>
                              <!---->
                              <td>Polo Plain Royal Blue<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Royal Blue,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">3993.33</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>6</td>
                              <!---->
                              <td>Round Neck Sun Flower<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Sun Flower,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>7</td>
                              <!---->
                              <td>Round Neck Sun Flower<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Sun Flower,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5320.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>8</td>
                              <!---->
                              <td>Round Neck Sun Flower<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Sun Flower,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5320.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>9</td>
                              <!---->
                              <td>Round Neck Sun Flower<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Sun Flower,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5320.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>10</td>
                              <!---->
                              <td>Round Neck Sun Flower<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Sun Flower,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>11</td>
                              <!---->
                              <td>Polo Plain Mulberry<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Mulberry,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">3993.33</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>12</td>
                              <!---->
                              <td>Polo Plain Mulberry<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Mulberry,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>13</td>
                              <!---->
                              <td>Polo Plain Mulberry<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Mulberry,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>14</td>
                              <!---->
                              <td>Polo Plain Mulberry<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Mulberry,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>15</td>
                              <!---->
                              <td>Polo Plain Mulberry<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Mulberry,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">3993.33</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>16</td>
                              <!---->
                              <td>Polo Plain Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">3993.33</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>17</td>
                              <!---->
                              <td>Polo Plain Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>18</td>
                              <!---->
                              <td>Polo Plain Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>19</td>
                              <!---->
                              <td>Polo Plain Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">14</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">7986.67</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>20</td>
                              <!---->
                              <td>Polo Plain Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">570.48</td>
                              <td style="text-align:right">3993.33</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>21</td>
                              <!---->
                              <td>Round Neck Aqua<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Aqua,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>22</td>
                              <!---->
                              <td>Round Neck Aqua<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!---->
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>23</td>
                              <!---->
                              <td>Round Neck Aqua<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Aqua,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>24</td>
                              <!---->
                              <td>Round Neck Aqua<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Aqua,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>25</td>
                              <!---->
                              <td>Round Neck Aqua<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Aqua,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>26</td>
                              <!---->
                              <td>Round Neck White<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Aqua,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>27</td>
                              <!---->
                              <td>Round Neck White<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> White,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>28</td>
                              <!---->
                              <td>Round Neck White<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> White,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>29</td>
                              <!---->
                              <td>Round Neck White<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> White,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>30</td>
                              <!---->
                              <td>Round Neck White<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> White,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>31</td>
                              <!---->
                              <td>Round Neck Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> White,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>32</td>
                              <!---->
                              <td>Round Neck Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>33</td>
                              <!---->
                              <td>Round Neck Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>34</td>
                              <!---->
                              <td>Round Neck Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>35</td>
                              <!---->
                              <td>Round Neck Black<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>36</td>
                              <!---->
                              <td>Round Neck Red<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Black,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>37</td>
                              <!---->
                              <td>Round Neck Red<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Red,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>38</td>
                              <!---->
                              <td>Round Neck Red<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Red,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>39</td>
                              <!---->
                              <td>Round Neck Red<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Red,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>40</td>
                              <!---->
                              <td>Round Neck Red<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Red,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>41</td>
                              <!---->
                              <td>Round Neck Grey Malanch<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Red,  </span><span class="ng-star-inserted"> XXL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>42</td>
                              <!---->
                              <td>Round Neck Grey Malanch<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Grey Malanch,  </span><span class="ng-star-inserted"> S </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>43</td>
                              <!---->
                              <td>Round Neck Grey Malanch<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Grey Malanch,  </span><span class="ng-star-inserted"> M </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>44</td>
                              <!---->
                              <td>Round Neck Grey Malanch<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Grey Malanch,  </span><span class="ng-star-inserted"> L </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">15</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">5700.00</td>
                          </tr>
                          <tr class="ng-star-inserted">
                              <td>45</td>
                              <!---->
                              <td>Round Neck Grey Malanch<br>  </td>
                              <!----><!----><!---->
                              <td class="ng-star-inserted">
                                  <!----><span class="ng-star-inserted"> Grey Malanch,  </span><span class="ng-star-inserted"> XL </span>
                              </td>
                              <td>6203</td>
                              <!----><!----><!---->
                              <td style="text-align:right">7</td>
                              <td>PCS</td>
                              <!---->
                              <td style="text-align:right">380.00</td>
                              <td style="text-align:right">2660.00</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="clearfix">
                  <!---->
                  <div class="row1 ng-star-inserted">
                      <div class="col1">
                          <table class="table1">
                              <tbody>
                                  <tr>
                                      <td></td>
                                      <!---->
                                      <td style="width:30%;">Total </td>
                                      <!----><!----><!---->
                                      <td class="ng-star-inserted"></td>
                                      <td style="width:12%;"></td>
                                      <!----><!----><!---->
                                      <td style="text-align:right">
                                          519 <!---->
                                      </td>
                                      <td></td>
                                      <!---->
                                      <td style="text-align:right"></td>
                                      <td style="text-align:right"></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="row1">
                      <div class="col1 bank_detail">
                          <table>
                              <tbody>
                                  <tr>
                                      <td style="width:40%;">Account Holder Name</td>
                                      <td><strong>: Springman Apparel Private Limited</strong></td>
                                  </tr>
                                  <tr>
                                      <td style="width:25%;">Bank Name</td>
                                      <td><strong>: ICICI</strong></td>
                                  </tr>
                                  <tr>
                                      <td style="width:25%;">Bank A/c No</td>
                                      <td><strong>: 777705180407</strong></td>
                                  </tr>
                                  <tr>
                                      <td style="width:25%;">IFSC Code</td>
                                      <td><strong>: ICIC00003404</strong></td>
                                  </tr>
                                  <tr>
                                      <td style="width:25%;">Branch</td>
                                      <td><strong>: Palava</strong></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div class="col1">
                          <table class="tbl_footer">
                              <tbody>
                                  <tr>
                                      <td>Sub Total Amount :</td>
                                      <td><strong>229220.00 </strong></td>
                                  </tr>
                                  <!----><!----><!----><!----><!----><!----><!---->
                                  <tr>
                                      <td>Total Tax :</td>
                                      <td><strong>11461.00 </strong></td>
                                  </tr>
                                  <tr>
                                      <td>Round Off :</td>
                                      <td><strong> 0.00</strong></td>
                                  </tr>
                                  <tr>
                                      <td>Bill Amount :</td>
                                      <td><strong>₹ 240681.00 </strong></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="row1 total_word">
                      <div class="" style="width: 20%;">Total Amount In Words :</div>
                      <div class="" style="text-align:left; width: 80%;"><strong> Two Lakh Fourty Thousand Six Hundred And Eighty-One   Only </strong></div>
                  </div>
                  <!----><!---->
              </div>
          </div>
          <!----><!---->
          <div class="table_summery invoice border-top border-bottom ng-star-inserted">
              <div style="clear:both"></div>
              <h4 style=" padding-left:358px"> GST TAX SUMMARY</h4>
              <table border="0" cellpadding="0" cellspacing="0" class="table1">
                  <thead>
                      <tr>
                          <th style="width:10%; text-align: left;">HSN</th>
                          <th style="width:12%; text-align: right;">Taxable Amt</th>
                          <th style="width:8%; text-align: right;">Rate</th>
                          <!---->
                          <th style="text-align:right;" class="ng-star-inserted">IGST</th>
                          <th style="text-align:right;">Total</th>
                      </tr>
                  </thead>
                  <tbody id="main-con">
                      <!---->
                      <tr class="ng-star-inserted">
                          <td>6203</td>
                          <td style="text-align:right;">229220.00</td>
                          <td style="text-align:right;">5%</td>
                          <!----><!---->
                          <td style="text-align:right;" class="ng-star-inserted"> 11461-(5)% </td>
                          <td style="text-align:right;">240681.00</td>
                      </tr>
                  </tbody>
              </table>
              <div style="clear:both"></div>
          </div>
      </main>
      <div class="terms_section">
          <div class="row">
              <div style="font-size: 16px;"><strong> Terms &amp; Conditions :- </strong></div>
          </div>
          <ul style="margin:0;">
              <!---->
              <li class="ng-star-inserted">50% advance &amp; 50% on 45 days</li>
              <li class="ng-star-inserted">18% Interest if failed to pay in 45 days</li>
              <li class="ng-star-inserted">Any dispute to be raised in 4 days of receiving Goods</li>
              <li class="ng-star-inserted">Any dispute is under Mumbai Juridiction</li>
              <li class="ng-star-inserted">Bank - ICICI , A/C no - 777705180407, IFSC - ICIC0003404</li>
          </ul>
      </div>
      <div>
          <div class="row1">
              <div class="col1">
                  <div class="row"></div>
              </div>
              <div class="col1" style="text-align: right; ">
                  <h3 class="name-footer" style="text-align: right; font-size: 16px">For : Springman Apparel Private Limited</h3>
                  <!----><span class="ng-star-inserted"></span><br><br> Authorised Signatory 
              </div>
          </div>
      </div>
  </body>
</html>
  `


  public sampleTpl=`
  <div>
  <h1>Hello</h1>
  </div>
  `
}
