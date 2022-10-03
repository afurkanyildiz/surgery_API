
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
    doc.text(no,82,85);

    // const text= "deneme1 deneme2 deneme3 deneme4 deneme5 deneme6 deneme7 deneme8 deneme9 deneme 10 deneme11 deneme12 deneme13 deneme14 deneme15 denem16 deneme17 deneme18 deneme19 deneme20";
    // textlines = doc.setFontSize(14)
    // .splitTextToSize(text, 120);

    // let verticalOffset = 0.5;
    // doc.text(80,95, textlines)
    // verticalOffset += (textlines.length + 0.5) * 12 / 72;

    doc.setFontSize(17);
    doc.text("Adres:",45,95);
    var adress = document.getElementById("record_adress").value;
    textlines = doc.setFontSize(15).splitTextToSize(adress, 120);
    doc.text(80,95,textlines);



    doc.setFontSize(17);
    doc.text("Tanı:",45,110);
    var diagnosis = document.getElementById("record_diagnosis").value;
    textlines= doc.setFontSize(15).splitTextToSize(diagnosis,120);
    doc.text(textlines,80,110);


    doc.setFontSize(17);
    doc.text("Müdahale:",45,130);  
    var intervention = document.getElementById("record_intervention").value;
    textlines = doc.setFontSize(15).splitTextToSize(intervention,120);
    doc.text(textlines,83,130);

    doc.setFontSize(17);
    doc.text("İlaçlar:",45,155);
    var medications = document.getElementById("record_medications").value;
    textlines = doc.setFontSize(15).splitTextToSize(medications,120);
    doc.text(textlines,83,155);

    doc.setFontSize(17);
    doc.text("Sonuç:",45,185);
    var cocnlusion = document.getElementById("record_conclusion").value;
    textlines = doc.setFontSize(15).splitTextToSize(cocnlusion,120);
    doc.text(textlines,80,185);
    
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
    doc.text("Protokol Numarası:",45,65);
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
    doc.text("Tarih:",45,65);
    var record_date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(record_date,80,65);

    doc.setFontSize(17);
    doc.text("Teslim Alınan KM:",45,75);
    var deliveryKm = document.getElementById("delivery_km").value;
    doc.setFontSize(15);
    doc.text(deliveryKm,80,75);

    doc.setFontSize(17);
    doc.text("Servis Yapılacak KM:",45,85);
    var servicedKm = document.getElementById("to_be_serviced_km").value;
    doc.setFontSize(15);
    doc.text(servicedKm,80,85);

    doc.setFontSize(17);
    doc.text("Teslim Edenin Notları:",45,95);
    var notes = document.getElementById("notes").value;
    textlines = doc.setFontSize(15).splitTextToSize(notes,120);
    doc.text(textlines,85,95);

    doc.setFontSize(17);
    doc.text("Hasar Tespit Bildirimi:",45,115);
    var damageNotification = document.getElementById("damage_detection_notification").value;
    textlines = doc.setFontSize(15).splitTextToSize(damageNotification,120);
    doc.text(textlines,85,115);

    doc.setFontSize(17);
    doc.text("Teslim Edenin",15,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,155);

    doc.setFontSize(17);
    doc.text("Teslim Alanın",80,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",80,155);

    doc.setFontSize(17);
    doc.text("Birim Yöneticisinin",150,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",155,155);

    doc.output('pdfobjectnewwindow');
}

function ambulanceDailyPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Günlük Kontrol ve Devir Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("İstasyon Adı:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,80,55);

    doc.setFontSize(17);
    doc.text("KM:",45,65);
    var ambulanceKM = document.getElementById("ambulance_km").value;
    doc.setFontSize(15);
    doc.text(ambulanceKM,80,65);

    doc.setFontSize(17);
    doc.text("PLAKA:",45,75);
    var numberPlate = document.getElementById("number_plate").value;
    doc.setFontSize(15);
    doc.text(numberPlate,80,75);

    doc.setFontSize(17);
    doc.text("Tarih:",45,85);
    var controlDate = document.getElementById("ambulance_control_date").value;
    doc.setFontSize(15);
    doc.text(controlDate,80,85);

    doc.setFontSize(17);
    doc.text("Açıklama:",45,95);
    var dailyExplanation = document.getElementById("ambulance_daily_explanation").value;
    textline = doc.setFontSize(15).splitTextToSize(dailyExplanation,120);
    doc.text(textline,80,95);


    doc.setFontSize(17);
    doc.text("Teslim Edenin",15,155);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,165);

    doc.setFontSize(17);
    doc.text("Teslim Alanın",150,155);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",150,165);

    doc.output('pdfobjectnewwindow');
}

function ambulanceMaterialPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Vaka Formu",85,30);

    doc.setFontSize(17);
    doc.text("Araç Plakası:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,80,55).value;

    doc.setFontSize(17);
    doc.text("Acil Çanta Kilit No:",45,65);
    var emergencyLockNumber = document.getElementById("emergency_lock_number").value;
    doc.setFontSize(15);
    doc.text(emergencyLockNumber,80,65).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,75);
    var materialControlDate = document.getElementById("material_control_date").value;
    doc.setFontSize(15);
    doc.text(materialControlDate,80,75).value;

    doc.setFontSize(17);
    doc.text("Saat:",45,85);
    var materialControlTime = document.getElementById("material_control_time").value;
    doc.setFontSize(15);
    doc.text(materialControlTime,80,85).value;

    doc.setFontSize(17);
    doc.text("Notlar:",45,95);
    var materialNotes = document.getElementById("material_notes").value;
    textline = doc.setFontSize(15).splitTextToSize(materialNotes,120);
    doc.text(textline,80,95).value;
    
    doc.setFontSize(17);
    doc.text("Sorumlu Sağlık Personelinin",15,155);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",25,165);

    doc.output('pdfobjectnewwindow');
}

function callCenterPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Çağrı Merkezi Formu",85,30);

    doc.setFontSize(25);
    doc.text("Çağrıyı Yapan",45,45);

    doc.setFontSize(17);
    doc.text("Kurum Adı:",45,55);
    var institutionName = document.getElementById("institution_name").value;
    doc.setFontSize(15);
    doc.text(institutionName,80,55).value;

    doc.setFontSize(17);
    doc.text("Adı - Soyadı:",45,65);
    var callerUsername = document.getElementById("caller_username").value;
    doc.setFontSize(15);
    doc.text(callerUsername,80,65).value;

    doc.setFontSize(17);
    doc.text("Yakınlığı:",45,75);
    var proximity = document.getElementById("proximity").value;
    doc.setFontSize(15);
    doc.text(proximity,80,75).value;

    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,85);
    var callerTelNo = document.getElementById("caller_tel_no").value;
    doc.setFontSize(15);
    doc.text(callerTelNo,80,85).value;

    doc.setFontSize(25);
    doc.text("Hasta",45,105);

    doc.setFontSize(17);
    doc.text("Adı - Soyad:",45,115);
    var patientUsername = document.getElementById("patient_username").value;
    doc.setFontSize(15);
    doc.text(patientUsername,80,115).value;

    doc.setFontSize(17);
    doc.text("Yaş:",45,125);
    var patientAge = document.getElementById("patient_age").value;
    doc.setFontSize(15);
    doc.text(patientAge,80,125).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,135);
    var caseDate = document.getElementById("case_date").value;
    doc.setFontSize(15);
    doc.text(caseDate,80,135).value;
    
    doc.output('pdfobjectnewwindow');
}

function healmedyPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Healmedy Vaka Formu",85,30);

    doc.setFontSize(17);
    doc.text("Tarih:",45,55);
    var healmedyDate = document.getElementById("healmedy_date").value;
    doc.setFontSize(15);
    doc.text(healmedyDate,80,55).value;

    doc.setFontSize(17);
    doc.text("Saat:",45,65);
    var healmedyDate = document.getElementById("healmedy_time").value;
    doc.setFontSize(15);
    doc.text(healmedyDate,80,65).value;

    doc.setFontSize(17);
    doc.text("1.Hastanın Adı - Soyadı:",45,75);
    var patientUsername = document.getElementById("healmedy_patient_username").value;
    doc.setFontSize(15);
    doc.text(patientUsername,90,75).value;

    doc.setFontSize(17);
    doc.text("2.Hastanın Adı - Soyadı:",45,85);
    var patientUsername2 = document.getElementById("healmedy_patient_username1").value;
    doc.setFontSize(15);
    doc.text(patientUsername2,90,85).value;

    doc.setFontSize(17);
    doc.text("Ücret:",45,95);
    var fee = document.getElementById("healmedy_fee").value;
    doc.setFontSize(15);
    doc.text(fee,80,95).value;

    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,105);
    var tel = document.getElementById("healmedy_fee").value;
    doc.setFontSize(15);
    doc.text(tel,80,105).value;

    doc.setFontSize(17);
    doc.text("Araç Plaka:",45,115);
    var carInfo = document.getElementById("healmedy_car_info").value;
    doc.setFontSize(15);
    doc.text(carInfo,80,115).value;

    doc.setFontSize(17);
    doc.text("Adres:",45,125);
    var adress = document.getElementById("healmedy_adress").value;
    textline = doc.setFontSize(15).splitTextToSize(adress,120);
    doc.text(textline,80,125).value;

    doc.setFontSize(17);
    doc.text("Alındığı Yer:",45,155);
    var whereTaken = document.getElementById("healmedy_where_taken").value;
    textline = doc.setFontSize(15).splitTextToSize(whereTaken,120);
    doc.text(textline,80,155).value;

    doc.setFontSize(17);
    doc.text("Nakledildiği Yer:",45,185);
    var whereTransplanted = document.getElementById("healmedy_where_it_was_transplanted").value;
    textline = doc.setFontSize(15).splitTextToSize(whereTransplanted,120);
    doc.text(textline,80,185).value;


    doc.output('pdfobjectnewwindow');
}

function materialPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("1.Malzeme Adı:",45,55);
    var materialName = document.getElementById("material_name").value;
    doc.setFontSize(15);
    doc.text(materialName,80,55).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,65);
    var quantityRequest = document.getElementById("quantity_request").value;
    doc.setFontSize(15);
    doc.text(quantityRequest,80,65).value;

    doc.setFontSize(17);
    doc.text("2.Malzeme Adı:",45,75);
    var materialName1 = document.getElementById("material_name1").value;
    doc.setFontSize(15);
    doc.text(materialName1,80,75).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,85);
    var quantityRequest1 = document.getElementById("quantity_request1").value;
    doc.setFontSize(15);
    doc.text(quantityRequest1,80,85).value;

    // var materialName = document.getElementById("material_name").value;
    // var materialName1 = document.getElementById("material_name1").value;
    // var materialName2 = document.getElementById("material_name2").value;
    // var materialName3 = document.getElementById("material_name3").value;
    // var materialName4 = document.getElementById("material_name4").value;
    // var materialName5 = document.getElementById("material_name5").value;
    // var materialName6 = document.getElementById("material_name6").value;
    // var materialName7 = document.getElementById("material_name7").value;
    // var materialName8 = document.getElementById("material_name8").value;
    // var materialName9 = document.getElementById("material_name9").value;
    // var materialName10 = document.getElementById("material_name10").value;
    // var materialName11 = document.getElementById("material_name11").value;
    // var materialName12 = document.getElementById("material_name12").value;
    // var materialName13 = document.getElementById("material_name13").value;
    // var materialName14 = document.getElementById("material_name14").value;
    // var materialName15 = document.getElementById("material_name15").value;
    // var materialName16 = document.getElementById("material_name16").value;
    // var materialName17 = document.getElementById("material_name17").value;
    // var materialName18 = document.getElementById("material_name18").value;

    // var quantity_request = document.getElementById("quantity_request").value;
    // var quantity_request1 = document.getElementById("quantity_request1").value;
    // var quantity_request2 = document.getElementById("quantity_request2").value;
    // var quantity_request3 = document.getElementById("quantity_request3").value;
    // var quantity_request4 = document.getElementById("quantity_request4").value;
    // var quantity_request5 = document.getElementById("quantity_request5").value;
    // var quantity_request6 = document.getElementById("quantity_request6").value;
    // var quantity_request7 = document.getElementById("quantity_request7").value;
    // var quantity_request8 = document.getElementById("quantity_request8").value;
    // var quantity_request9= document.getElementById("quantity_request9").value;
    // var quantity_request10 = document.getElementById("quantity_request10").value;
    // var quantity_request11 = document.getElementById("quantity_request11").value;
    // var quantity_request12 = document.getElementById("quantity_request12").value;
    // var quantity_request13 = document.getElementById("quantity_request13").value;
    // var quantity_request14 = document.getElementById("quantity_request14").value;
    // var quantity_request15 = document.getElementById("quantity_request15").value;
    // var quantity_request16 = document.getElementById("quantity_request16").value;
    // var quantity_request17 = document.getElementById("quantity_request17").value;
    // var quantity_request18 = document.getElementById("quantity_request18").value;

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen Malzeme:",45,95);
    var totalMaterial = document.getElementById("total_requested_material").value;
    doc.setFontSize(15);
    doc.text(totalMaterial,80,95).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,105);
    var materialDate = document.getElementById("material_request_date").value;
    doc.setFontSize(15);
    doc.text(materialDate,80,105).value;



    doc.setFontSize(17);
    doc.text("İsteği Yapan Bölüm Yöneticisi",20,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",30,145);

    doc.output('pdfobjectnewwindow');
}

function gasRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Medikal Gaz İstek Formu",85,30);

    doc.setFontSize(17);
    doc.text("Kullanılacak Birim:",45,55);
    // var unit = document.getElementsByName("unit");
    var unit = document.querySelector('input[name="unit"]:checked').value;
    doc.setFontSize(15);
    doc.text(unit,80,55);

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,65);
    var medicalOxygen = document.getElementById("amount_of_medical_oxygen").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen,80,65).value;

    doc.setFontSize(17);
    doc.text("Demirbaş Kodu:",45,75);
    var fixtureCode = document.getElementById("fixture_code").value;
    doc.setFontSize(15);
    doc.text(fixtureCode,80,75).value;

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,85);
    var numberOfTubes = document.getElementById("number_of_tubes").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes,80,85).value;

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,95);
    var medicalOxygen1 = document.getElementById("amount_of_medical_oxygen1").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen1,80,95).value;

    doc.setFontSize(17);
    doc.text("Demirbas Kodu:",45,105);
    var fixtureCode1 = document.getElementById("fixture_code1").value;
    doc.setFontSize(15);
    doc.text(fixtureCode1,80,105).value;

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,115);
    var numberOfTubes1 = document.getElementById("number_of_tubes1").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes1,80,115).value;

    
    doc.setFontSize(17);
    doc.text("Teslim Edenin",15,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,145);

    
    doc.setFontSize(17);
    doc.text("Teslim Alanın",158,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",158,145);

    
    doc.setFontSize(17);
    doc.text("İsteği Yapanın",15,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,205);

    
    doc.setFontSize(17);
    doc.text("Onaylayanın",158,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",158,205);

    doc.output('pdfobjectnewwindow');

}

function medicationRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("1.İlaç Adı:",45,55);
    var drugName = document.getElementById("drug_name").value;
    doc.setFontSize(15);
    doc.text(drugName,80,55).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,65);
    var formofDrug = document.getElementById("form_of_drug").value;
    doc.setFontSize(15);
    doc.text(formofDrug,80,65).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,75);
    var quantityRequested = document.getElementById("quantity_requested").value;
    doc.setFontSize(15);
    doc.text(quantityRequested,80,75).value;

    doc.setFontSize(17);
    doc.text("2.İlaç Adı:",45,85);
    var drugName1 = document.getElementById("drug_name1").value;
    doc.setFontSize(15);
    doc.text(drugName1,80,85).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,95);
    var formofDrug1 = document.getElementById("form_of_drug1").value;
    doc.setFontSize(15);
    doc.text(formofDrug1,80,95).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,105);
    var quantityRequested1 = document.getElementById("quantity_requested1").value;
    doc.setFontSize(15);
    doc.text(quantityRequested1,80,105).value;

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen İlaç:",45,115);
    var totalRequestedDrug = document.getElementById("total_requested_drug").value;
    doc.setFontSize(15);
    doc.text(totalRequestedDrug,80,115).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,125);
    var medicationRequestedDate = document.getElementById("medication_request_date").value;
    doc.setFontSize(15);
    doc.text(medicationRequestedDate,80,125).value;



    doc.setFontSize(17);
    doc.text("İsteği Yapan Bölüm Yöneticisi",20,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",30,155);

    doc.output('pdfobjectnewwindow');
}

function updateregistrationFormPdf(){
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
    doc.text(no,82,85);

    // const text= "deneme1 deneme2 deneme3 deneme4 deneme5 deneme6 deneme7 deneme8 deneme9 deneme 10 deneme11 deneme12 deneme13 deneme14 deneme15 denem16 deneme17 deneme18 deneme19 deneme20";
    // textlines = doc.setFontSize(14)
    // .splitTextToSize(text, 120);

    // let verticalOffset = 0.5;
    // doc.text(80,95, textlines)
    // verticalOffset += (textlines.length + 0.5) * 12 / 72;

    doc.setFontSize(17);
    doc.text("Adres:",45,95);
    var adress = document.getElementById("record_adress").value;
    textlines = doc.setFontSize(15).splitTextToSize(adress, 120);
    doc.text(80,95,textlines);



    doc.setFontSize(17);
    doc.text("Tanı:",45,110);
    var diagnosis = document.getElementById("record_diagnosis").value;
    textlines= doc.setFontSize(15).splitTextToSize(diagnosis,120);
    doc.text(textlines,80,110);


    doc.setFontSize(17);
    doc.text("Müdahale:",45,130);  
    var intervention = document.getElementById("record_intervention").value;
    textlines = doc.setFontSize(15).splitTextToSize(intervention,120);
    doc.text(textlines,83,130);

    doc.setFontSize(17);
    doc.text("İlaçlar:",45,155);
    var medications = document.getElementById("record_medications").value;
    textlines = doc.setFontSize(15).splitTextToSize(medications,120);
    doc.text(textlines,83,155);

    doc.setFontSize(17);
    doc.text("Sonuç:",45,185);
    var cocnlusion = document.getElementById("record_conclusion").value;
    textlines = doc.setFontSize(15).splitTextToSize(cocnlusion,120);
    doc.text(textlines,80,185);
    
    doc.output('pdfobjectnewwindow');
}

function updateAmbulanceCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Vaka Formu",85,30);

    doc.setFontSize(17);
    doc.text("Tarih:",45,55);
    var caseDate = document.getElementById("date").value;
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
    doc.text(protocolNumber,90,115).value;

    doc.setFontSize(17);
    doc.text("Hasta Bilgilendirme Onayı",5,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,145);
    const getSig  = document.getElementById('get_sig').getElementsByTagName('canvas');
    const getSigCtx = getSig[0].toDataURL();
    console.log(getSigCtx);
    doc.addImage(getSigCtx,"PNG",5,150,40,40);
    
    doc.setFontSize(15);
    doc.text("Hastanın Hizmet Reddi",75,135);
    doc.setFontSize(15);
    doc.text("HASTANIN/YAKININ ADI SOYADI - İMZA",70,145);
    const hospitalSignature  = document.getElementById('hospital_signature').getElementsByTagName('canvas');
    const hospitalSignaturectx = hospitalSignature[0].toDataURL();
    console.log(hospitalSignaturectx);
    doc.addImage(hospitalSignaturectx,"PNG",75,150,40,40);


    doc.setFontSize(15);
    doc.text("HASTANENİN HASTA REDDİ",148,135);
    doc.setFontSize(15);
    doc.text("ADI SOYADI - İMZA",155,145);
    const patientsignature  = document.getElementById('patients_relative_signature').getElementsByTagName('canvas');
    const patientssignaturectx = patientsignature[0].toDataURL();
    console.log(patientssignaturectx);
    doc.addImage(patientssignaturectx,"PNG",148,150,30,30);


    doc.setFontSize(15);
    doc.text("HASTAYI TESLİM ALANIN",5,195);
    doc.setFontSize(15);
    doc.text("ADI SOYADI - İMZA",10,205);
    const doctorsignature  = document.getElementById('doctor_signature').getElementsByTagName('canvas');
    const doctorsignaturectx = doctorsignature[0].toDataURL();
    console.log(doctorsignaturectx);
    doc.addImage(doctorsignaturectx,"PNG",5,208,30,30);


    doc.setFontSize(15);
    doc.text("DOKTOR/PARAMEDİK",85,195);
    doc.setFontSize(15);
    doc.text("ADI SOYADI - İMZA",85,205);
    const deliverysignature  = document.getElementById('delivery_area_signature').getElementsByTagName('canvas');
    const deliverysignaturectx = deliverysignature[0].toDataURL();
    console.log(deliverysignaturectx);
    doc.addImage(deliverysignaturectx,"PNG",85,208,30,30);


    doc.setFontSize(15);
    doc.text("SAĞLIK PERSONELİ",158,195);
    doc.setFontSize(15);
    doc.text("ADI SOYADI - İMZA",158,205);
    const personalsignature  = document.getElementById('personal_signature').getElementsByTagName('canvas');
    const personalsignaturectx = personalsignature[0].toDataURL();
    console.log(personalsignaturectx);
    doc.addImage(personalsignaturectx,"PNG",158,208,30,30);


    doc.setFontSize(15);
    doc.text("SÜRÜCÜ/PİLOT",15,245);
    doc.setFontSize(15);
    doc.text("ADI SOYADI- İMZA",15,255);
    const pilotsignature  = document.getElementById('pilot_signature').getElementsByTagName('canvas');
    const pilotsignaturectx = pilotsignature[0].toDataURL();
    console.log(pilotsignaturectx);
    doc.addImage(pilotsignaturectx,"PNG",5,265,30,30);

    doc.setFontSize(15);
    doc.text("TRANSFER TALEP EDEN DOKTOR",75,245);
    doc.setFontSize(15);
    doc.text("ADI SOYADI - İMZA",80,255);

    const transfersignature  = document.getElementById('transfer_doctor_signature').getElementsByTagName('canvas');
    const transfersignaturectx = transfersignature[0].toDataURL();
    console.log(transfersignaturectx);
    doc.addImage(transfersignaturectx,"PNG",75,255,30,30);

    doc.output('pdfobjectnewwindow');

}

function updateAmbulanceDailyPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Günlük Kontrol ve Devir Teslim Formu",50,30);

    doc.setFontSize(17);
    doc.text("İstasyon Adı:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,80,55);

    doc.setFontSize(17);
    doc.text("KM:",45,65);
    var ambulanceKM = document.getElementById("ambulance_km").value;
    doc.setFontSize(15);
    doc.text(ambulanceKM,80,65);

    doc.setFontSize(17);
    doc.text("PLAKA:",45,75);
    var numberPlate = document.getElementById("number_plate").value;
    doc.setFontSize(15);
    doc.text(numberPlate,80,75);

    doc.setFontSize(17);
    doc.text("Tarih:",45,85);
    var controlDate = document.getElementById("ambulance_control_date").value;
    doc.setFontSize(15);
    doc.text(controlDate,80,85);

    doc.setFontSize(17);
    doc.text("Açıklama:",45,95);
    var dailyExplanation = document.getElementById("ambulance_daily_explanation").value;
    textline = doc.setFontSize(15).splitTextToSize(dailyExplanation,120);
    doc.text(textline,80,95);

    doc.setFontSize(17);
    doc.text("Teslim Edenin",15,155);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,165);
    const deliverySignature  = document.getElementById('delivery_by_signature').getElementsByTagName('canvas');
    const deliverySignaturectx = deliverySignature[0].toDataURL();
    console.log(deliverySignaturectx);
    doc.addImage(deliverySignaturectx,"PNG",5,175,40,40);

    doc.setFontSize(17);
    doc.text("Teslim Alanın",150,155);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",150,165);
    const receivingSignature  = document.getElementById('receiving_area_signature').getElementsByTagName('canvas');
    const receivingSignaturectx = receivingSignature[0].toDataURL();
    console.log(receivingSignaturectx);
    doc.addImage(receivingSignaturectx,"PNG",140,175,40,40);

    doc.output('pdfobjectnewwindow');
}

function updateAmbulanceHandoverPdf(){
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
    doc.text("Tarih:",45,65);
    var record_date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(record_date,80,65);

    doc.setFontSize(17);
    doc.text("Teslim Alınan KM:",45,75);
    var deliveryKm = document.getElementById("delivery_km").value;
    doc.setFontSize(15);
    doc.text(deliveryKm,80,75);

    doc.setFontSize(17);
    doc.text("Servis Yapılacak KM:",45,85);
    var servicedKm = document.getElementById("to_be_serviced_km").value;
    doc.setFontSize(15);
    doc.text(servicedKm,80,85);

    doc.setFontSize(17);
    doc.text("Teslim Edenin Notları:",45,95);
    var notes = document.getElementById("notes").value;
    textlines = doc.setFontSize(15).splitTextToSize(notes,120);
    doc.text(textlines,85,95);

    doc.setFontSize(17);
    doc.text("Hasar Tespit Bildirimi:",45,115);
    var damageNotification = document.getElementById("damage_detection_notification").value;
    textlines = doc.setFontSize(15).splitTextToSize(damageNotification,120);
    doc.text(textlines,85,115);

    doc.setFontSize(17);
    doc.text("Teslim Edenin",15,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,155);
    const submitterSignature  = document.getElementById('submitter_username_signature').getElementsByTagName('canvas');
    const submitterSignaturectx = submitterSignature[0].toDataURL();
    console.log(submitterSignaturectx);
    doc.addImage(submitterSignaturectx,"PNG",5,155,40,40);

    doc.setFontSize(17);
    doc.text("Teslim Alanın",80,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",80,155);
    const deliveryDomainSignature  = document.getElementById('delivery_domain_username_signature').getElementsByTagName('canvas');
    const deliveryDomainSignaturectx = deliveryDomainSignature[0].toDataURL();
    console.log(deliveryDomainSignaturectx);
    doc.addImage(deliveryDomainSignaturectx,"PNG",75,155,40,40);

    doc.setFontSize(17);
    doc.text("Birim Yöneticisinin",150,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",155,155);
    const departmentSignature  = document.getElementById('department_manager_signature').getElementsByTagName('canvas');
    const departmentSignaturectx = departmentSignature[0].toDataURL();
    console.log(departmentSignaturectx);
    doc.addImage(departmentSignaturectx,"PNG",145,155,40,40);

    doc.output('pdfobjectnewwindow');
    
}

function updateAmbulanceMaterialPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Ambulans Vaka Formu",85,30);

    doc.setFontSize(17);
    doc.text("Araç Plakası:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,80,55).value;

    doc.setFontSize(17);
    doc.text("Acil Çanta Kilit No:",45,65);
    var emergencyLockNumber = document.getElementById("emergency_lock_number").value;
    doc.setFontSize(15);
    doc.text(emergencyLockNumber,80,65).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,75);
    var materialControlDate = document.getElementById("material_control_date").value;
    doc.setFontSize(15);
    doc.text(materialControlDate,80,75).value;

    doc.setFontSize(17);
    doc.text("Saat:",45,85);
    var materialControlTime = document.getElementById("material_control_time").value;
    doc.setFontSize(15);
    doc.text(materialControlTime,80,85).value;

    doc.setFontSize(17);
    doc.text("Notlar:",45,95);
    var materialNotes = document.getElementById("material_notes").value;
    textline = doc.setFontSize(15).splitTextToSize(materialNotes,120);
    doc.text(textline,80,95).value;

    doc.setFontSize(17);
    doc.text("Sorumlu Sağlık Personelinin",15,155);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",25,165);
    const responsibleSignature  = document.getElementById('responsible_signature').getElementsByTagName('canvas');
    const responsibleSignaturectx = responsibleSignature[0].toDataURL();
    console.log(responsibleSignaturectx);
    doc.addImage(responsibleSignaturectx,"PNG",30,175,40,40);

    doc.output('pdfobjectnewwindow');
}

function updateCallCenterPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Çağrı Merkezi Formu",85,30);

    doc.setFontSize(25);
    doc.text("Çağrıyı Yapan",45,45);

    doc.setFontSize(17);
    doc.text("Kurum Adı:",45,55);
    var institutionName = document.getElementById("institution_name").value;
    doc.setFontSize(15);
    doc.text(institutionName,80,55).value;

    doc.setFontSize(17);
    doc.text("Adı - Soyadı:",45,65);
    var callerUsername = document.getElementById("caller_username").value;
    doc.setFontSize(15);
    doc.text(callerUsername,80,65).value;

    doc.setFontSize(17);
    doc.text("Yakınlığı:",45,75);
    var proximity = document.getElementById("proximity").value;
    doc.setFontSize(15);
    doc.text(proximity,80,75).value;

    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,85);
    var callerTelNo = document.getElementById("caller_tel_no").value;
    doc.setFontSize(15);
    doc.text(callerTelNo,80,85).value;

    doc.setFontSize(25);
    doc.text("Hasta",45,105);

    doc.setFontSize(17);
    doc.text("Adı - Soyad:",45,115);
    var patientUsername = document.getElementById("patient_username").value;
    doc.setFontSize(15);
    doc.text(patientUsername,80,115).value;

    doc.setFontSize(17);
    doc.text("Yaş:",45,125);
    var patientAge = document.getElementById("patient_age").value;
    doc.setFontSize(15);
    doc.text(patientAge,80,125).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,135);
    var caseDate = document.getElementById("case_date").value;
    doc.setFontSize(15);
    doc.text(caseDate,80,135).value;
    
    doc.output('pdfobjectnewwindow');
}

function updateHealmedyCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Healmedy Vaka Formu",85,30);

    doc.setFontSize(17);
    doc.text("Tarih:",45,55);
    var healmedyDate = document.getElementById("healmedy_date").value;
    doc.setFontSize(15);
    doc.text(healmedyDate,80,55).value;

    doc.setFontSize(17);
    doc.text("Saat:",45,65);
    var healmedyDate = document.getElementById("healmedy_time").value;
    doc.setFontSize(15);
    doc.text(healmedyDate,80,65).value;

    doc.setFontSize(17);
    doc.text("1.Hastanın Adı - Soyadı:",45,75);
    var patientUsername = document.getElementById("healmedy_patient_username").value;
    doc.setFontSize(15);
    doc.text(patientUsername,90,75).value;

    doc.setFontSize(17);
    doc.text("2.Hastanın Adı - Soyadı:",45,85);
    var patientUsername2 = document.getElementById("healmedy_patient_username1").value;
    doc.setFontSize(15);
    doc.text(patientUsername2,90,85).value;

    doc.setFontSize(17);
    doc.text("Ücret:",45,95);
    var fee = document.getElementById("healmedy_fee").value;
    doc.setFontSize(15);
    doc.text(fee,80,95).value;

    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,105);
    var tel = document.getElementById("healmedy_fee").value;
    doc.setFontSize(15);
    doc.text(tel,80,105).value;

    doc.setFontSize(17);
    doc.text("Araç Plaka:",45,115);
    var carInfo = document.getElementById("healmedy_car_info").value;
    doc.setFontSize(15);
    doc.text(carInfo,80,115).value;

    doc.setFontSize(17);
    doc.text("Adres:",45,125);
    var adress = document.getElementById("healmedy_adress").value;
    textline = doc.setFontSize(15).splitTextToSize(adress,120);
    doc.text(textline,80,125).value;

    doc.setFontSize(17);
    doc.text("Alındığı Yer:",45,155);
    var whereTaken = document.getElementById("healmedy_where_taken").value;
    textline = doc.setFontSize(15).splitTextToSize(whereTaken,120);
    doc.text(textline,80,155).value;

    doc.setFontSize(17);
    doc.text("Nakledildiği Yer:",45,185);
    var whereTransplanted = document.getElementById("healmedy_where_it_was_transplanted").value;
    textline = doc.setFontSize(15).splitTextToSize(whereTransplanted,120);
    doc.text(textline,80,185).value;


    doc.output('pdfobjectnewwindow');
}

function updateMaterialRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("1.Malzeme Adı:",45,55);
    var materialName = document.getElementById("material_name").value;
    doc.setFontSize(15);
    doc.text(materialName,105,55).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,65);
    var quantityRequest = document.getElementById("quantity_request").value;
    doc.setFontSize(15);
    doc.text(quantityRequest,105,65).value;

    doc.setFontSize(17);
    doc.text("2.Malzeme Adı:",45,75);
    var materialName1 = document.getElementById("material_name1").value;
    doc.setFontSize(15);
    doc.text(materialName1,105,75).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,85);
    var quantityRequest1 = document.getElementById("quantity_request1").value;
    doc.setFontSize(15);
    doc.text(quantityRequest1,105,85).value

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen Malzeme:",45,95);
    var totalMaterial = document.getElementById("total_requested_material").value;
    doc.setFontSize(15);
    doc.text(totalMaterial,105,95).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,105);
    var materialDate = document.getElementById("material_request_date").value;
    doc.setFontSize(15);
    doc.text(materialDate,105,105).value;

    doc.setFontSize(17);
    doc.text("Sorumlu Sağlık Personelinin",15,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",25,145);
    const requestManagerSignature  = document.getElementById('request_manager_signature').getElementsByTagName('canvas');
    const requestManagerSignaturectx = requestManagerSignature[0].toDataURL();
    console.log(requestManagerSignaturectx);
    doc.addImage(requestManagerSignaturectx,"PNG",25,150,40,40);

    doc.output('pdfobjectnewwindow');
}

function updateMedicalRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Medikal Gaz İstek Formu",85,30);

    doc.setFontSize(17);
    doc.text("Kullanılacak Birim:",45,55);
    // var unit = document.getElementsByName("unit");
    var unit = document.querySelector('input[name="unit"]:checked').value;
    doc.setFontSize(15);
    doc.text(unit,80,55);

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,65);
    var medicalOxygen = document.getElementById("amount_of_medical_oxygen").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen,105,65);

    doc.setFontSize(17);
    doc.text("Demirbaş Kodu:",45,75);
    var fixtureCode = document.getElementById("fixture_code").value;
    doc.setFontSize(15);
    doc.text(fixtureCode,105,75);

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,85);
    var numberOfTubes = document.getElementById("number_of_tubes").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes,105,85);

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,95);
    var medicalOxygen1 = document.getElementById("amount_of_medical_oxygen1").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen1,105,95);

    doc.setFontSize(17);
    doc.text("Demirbas Kodu:",45,105);
    var fixtureCode1 = document.getElementById("fixture_code1").value;
    doc.setFontSize(15);
    doc.text(fixtureCode1,105,105);

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,115);
    var numberOfTubes1 = document.getElementById("number_of_tubes1").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes1,105,115);

    doc.setFontSize(17);
    doc.text("Teslim Edenin",15,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,145);
    const submitterSignature  = document.getElementById('gas_request_submitter_signature').getElementsByTagName('canvas');
    const submitterSignaturectx = submitterSignature[0].toDataURL();
    console.log(submitterSignaturectx);
    doc.addImage(submitterSignaturectx,"PNG",20,145,40,40);
    
    doc.setFontSize(17);
    doc.text("Teslim Alanın",158,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",158,145);
    const receivingSignature  = document.getElementById('receiving_username_signature').getElementsByTagName('canvas');
    const receivingSignaturectx = receivingSignature[0].toDataURL();
    console.log(receivingSignaturectx);
    doc.addImage(receivingSignaturectx,"PNG",155,145,40,40);
    
    doc.setFontSize(17);
    doc.text("İsteği Yapanın",15,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,205);
    const requestersSignature  = document.getElementById('the_requesters_signature').getElementsByTagName('canvas');
    const requestersSignaturectx = requestersSignature[0].toDataURL();
    console.log(requestersSignaturectx);
    doc.addImage(requestersSignaturectx,"PNG",20,205,40,40);
    
    doc.setFontSize(17);
    doc.text("Onaylayanın",158,195);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",158,205);
    const approverSignature  = document.getElementById('approver_signature').getElementsByTagName('canvas');
    const approverSignaturectx = approverSignature[0].toDataURL();
    console.log(approverSignaturectx);
    doc.addImage(approverSignaturectx,"PNG",155,205,40,40);

    doc.output('pdfobjectnewwindow');
}

function updateMedicationRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("BigShouldersDisplay-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",70,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("1.İlaç Adı:",45,55);
    var drugName = document.getElementById("drug_name").value;
    doc.setFontSize(15);
    doc.text(drugName,105,55).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,65);
    var formofDrug = document.getElementById("form_of_drug").value;
    doc.setFontSize(15);
    doc.text(formofDrug,105,65).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,75);
    var quantityRequested = document.getElementById("quantity_requested").value;
    doc.setFontSize(15);
    doc.text(quantityRequested,105,75).value;

    doc.setFontSize(17);
    doc.text("2.İlaç Adı:",45,85);
    var drugName1 = document.getElementById("drug_name1").value;
    doc.setFontSize(15);
    doc.text(drugName1,105,85).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,95);
    var formofDrug1 = document.getElementById("form_of_drug1").value;
    doc.setFontSize(15);
    doc.text(formofDrug1,105,95).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,105);
    var quantityRequested1 = document.getElementById("quantity_requested1").value;
    doc.setFontSize(15);
    doc.text(quantityRequested1,105,105).value;

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen İlaç:",45,115);
    var totalRequestedDrug = document.getElementById("total_requested_drug").value;
    doc.setFontSize(15);
    doc.text(totalRequestedDrug,105,115).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,125);
    var medicationRequestedDate = document.getElementById("medication_request_date").value;
    doc.setFontSize(15);
    doc.text(medicationRequestedDate,105,125).value;

    doc.setFontSize(17);
    doc.text("İsteği Yapan Bölüm Yöneticisi",20,145);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",30,155);
    const requestManagerSignature  = document.getElementById('medication_request_manager_signature').getElementsByTagName('canvas');
    const requestManagerSignaturectx = requestManagerSignature[0].toDataURL();
    console.log(requestManagerSignaturectx);
    doc.addImage(requestManagerSignaturectx,"PNG",20,165,40,40);

    doc.output('pdfobjectnewwindow');
}

function updatePreCasePdf(){
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
    doc.text("ADI SOYADI-İMZA",20,100);
    const preCaseSignature  = document.getElementById('pre_case_signature').getElementsByTagName('canvas');
    const preCaseSignaturectx = preCaseSignature[0].toDataURL();
    console.log(preCaseSignaturectx);
    doc.addImage(preCaseSignaturectx,"PNG",15,105,40,40);

    doc.output('pdfobjectnewwindow');

}