function registrationFormPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    // var img = new Image();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    // img.src="/root/hasta_kayit/surgery_API-main/templates/static/images/filyos-logo.jpeg";
    // doc.addImage(img.src,"JPEG",40,15,60,60);

    doc.setFontSize(20);
    doc.text("Kayıt Ekleme Formu",85,30);

    doc.setFontSize(17);
    doc.text("İsim Soyisim:",45,55);
    var username = document.getElementById("record_username").value;
    doc.setFontSize(15);
    doc.text(username,80,55);


    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,65);
    var tel = document.getElementById("record_tel").value;
    doc.setFontSize(15);
    doc.text(tel,80,65);


    doc.setFontSize(17);
    doc.text("Kayıt Tarihi",45,75);
    var date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(date,80,75);


    doc.setFontSize(17);
    doc.text("Tc Kimlik Numarası:",45,85);
    var no = document.getElementById("record_tc_no").value;
    doc.setFontSize(15);
    doc.text(no,80,85);


    doc.setFontSize(17);
    doc.text("Adres:",45,95);
    var adress = document.getElementById("record_adress").value;
    doc.setFontSize(15);
    doc.text(adress,80,95);


    doc.setFontSize(17);
    doc.text("Tanı:",45,105);
    var diagnosis = document.getElementById("record_diagnosis").value;
    doc.setFontSize(15);
    doc.text(diagnosis,80,105);


    doc.setFontSize(17);
    doc.text("Müdahale ve İlaçlar:",45,115);
    var intervention = document.getElementById("record_intervention").value;
    doc.setFontSize(15);
    doc.text(intervention,80,115);


    doc.setFontSize(17);
    doc.text("Sonuç:",45,125);
    var cocnlusion = document.getElementById("record_conclusion").value;
    doc.setFontSize(15);
    doc.text(cocnlusion,80,125);
    
    doc.output('pdfobjectnewwindow');
}

function ambulanceCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Vaka Formu",85,30);

    doc.setFontSize(17);
    doc.text("Tarih:",45,55);
    var caseDate = document.getElementById("Casedate").value;
    doc.setFontSize(15);
    doc.text(caseDate,80,55).value;

    doc.setFontSize(17);
    doc.text("SAS Protokol:",45,65);
    var sasProtokol = document.getElementById("sas_protokol").value;
    doc.setFontSize(15);
    doc.text(sasProtokol,80,65).value;

    doc.setFontSize(17);
    doc.text("İsim Soyisim:",45,75);
    var username = document.getElementById("username").value;
    doc.setFontSize(15);
    doc.text(username,80,75).value;

    doc.setFontSize(17);
    doc.text("T.C Kimlik Numarası:",45,85);
    var identificationNumber = document.getElementById("identification_number").value;
    doc.setFontSize(15);
    doc.text(identificationNumber,85,85).value;

    doc.setFontSize(17);
    doc.text("Cinsiyet:",45,95);
    var gender = document.getElementById("gender").value;
    doc.setFontSize(15);
    doc.text(gender,80,95).value;

    doc.setFontSize(17);
    doc.text("Ücret:",45,105);
    var money = document.getElementById("money").value;
    doc.setFontSize(15);
    doc.text(money,80,105).value;

    doc.setFontSize(17);
    doc.text("112 PROTOKOL NUMARASI:",45,115);
    var protocolNumber = document.getElementById("protocol_number").value;
    doc.setFontSize(15);
    doc.text(protocolNumber,80,115).value;

    //Signature

   

    doc.setFontSize(17);
    doc.text("Hasta Bilgilendirme Onayı",5,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,145);


    doc.setFontSize(17);
    doc.text("Hastanın Hizmet Reddi",75,135);
    doc.setFontSize(17);
    doc.text("HASTANIN/YAKININ ADI SOYADI - İMZA",70,145);


    doc.setFontSize(17);
    doc.text("HASTANENİN HASTA REDDİ",148,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI - İMZA",155,145);


    doc.setFontSize(17);
    doc.text("HASTAYI TESLİM ALANIN",5,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI - İMZA",10,205);


    doc.setFontSize(17);
    doc.text("DOKTOR/PARAMEDİK",85,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI - İMZA",85,205);


    doc.setFontSize(17);
    doc.text("SAĞLIK PERSONELİ",158,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI - İMZA",158,205);


    doc.setFontSize(17);
    doc.text("SÜRÜCÜ/PİLOT",15,245);
    doc.setFontSize(17);
    doc.text("ADI SOYADI- İMZA",15,255);

    doc.setFontSize(17);
    doc.text("TRANSFER TALEP EDEN DOKTOR",75,245);
    doc.setFontSize(17);
    doc.text("ADI SOYADI - İMZA",80,255);

    

    doc.output('pdfobjectnewwindow');
}

function preCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Vaka Öncesi Kontrol Formu",75,30);

    doc.setFontSize(17);
    doc.text("Tarih:",45,55);
    var preCaseDate = document.getElementById("pre_case_date").value;
    doc.setFontSize(15);
    doc.text(preCaseDate,80,55);

    doc.setFontSize(17);
    doc.text("Saat:",45,65);
    var preCaseTime = document.getElementById("pre_case_time").value;
    doc.setFontSize(15);
    doc.text(preCaseTime,80,65);

    doc.setFontSize(17);
    doc.text("ADI - SOYADI:",45,75);
    var username = document.getElementById("pre_case_username").value;
    doc.setFontSize(15);
    doc.text(username,80,75);

    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,100);

    doc.output('pdfobjectnewwindow');
}

function ambulanceHandoverPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Devir Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("Araç Plakası:",45,55);
    var numberPlate = document.getElementById("ambulance_number_plate").value;
    doc.setFontSize(15);
    doc.text(numberPlate,80,55);

    doc.setFontSize(17);
    doc.text("Tarih:",45,55);
    var record_date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(record_date,80,55);

    doc.setFontSize(17);
    doc.text("Teslim Alınan KM:",45,55);
    var deliveryKm = document.getElementById("delivery_km").value;
    doc.setFontSize(15);
    doc.text(deliveryKm,80,55);

    doc.setFontSize(17);
    doc.text("Servis Yapılacak KM:",45,55);
    var servicedKm = document.getElementById("to_be_serviced_km").value;
    doc.setFontSize(15);
    doc.text(servicedKm,80,55);

    doc.setFontSize(17);
    doc.text("Hasta Bilgilendirme Onayı",5,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,145);

    doc.setFontSize(17);
    doc.text("Hasta Bilgilendirme Onayı",75,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",70,145);

    doc.setFontSize(17);
    doc.text("Hasta Bilgilendirme Onayı",148,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",155,145);

    doc.output('pdfobjectnewwindow');
}
