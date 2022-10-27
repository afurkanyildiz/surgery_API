
function registrationFormPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    // var img = new Image();
    doc.setFont("OpenSans-Medium");

    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",65,15);

    // img.src="/root/hasta_kayit/surgery_API-main/templates/static/images/filyos-logo.jpeg";
    // doc.addImage(img.src,"JPEG",40,15,60,60);

    doc.setFontSize(20);
    doc.text("Kayıt Ekleme Formu",82,30);

    doc.setFontSize(17);
    doc.text("İsim Soyisim:",45,55);
    var username = document.getElementById("record_username").value;
    doc.setFontSize(15);
    doc.text(username,85,55);


    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,65);
    var tel = document.getElementById("record_tel").value;
    doc.setFontSize(15);
    doc.text(tel,100,65);


    doc.setFontSize(17);
    doc.text("Kayıt Tarihi:",45,75);
    var date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(date,80,75);


    doc.setFontSize(17);
    doc.text("Tc Kimlik Numarası:",45,85);
    var no = document.getElementById("record_tc_no").value;
    doc.setFontSize(15);
    doc.text(no,105,85);

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
    doc.text(75,95,textlines);



    doc.setFontSize(17);
    doc.text("Tanı:",45,110);
    var diagnosis = document.getElementById("record_diagnosis").value;
    textlines= doc.setFontSize(15).splitTextToSize(diagnosis,120);
    doc.text(textlines,75,110);


    doc.setFontSize(17);
    doc.text("Müdahale:",45,130);  
    var intervention = document.getElementById("record_intervention").value;
    textlines = doc.setFontSize(15).splitTextToSize(intervention,120);
    doc.text(textlines,80,130);

    doc.setFontSize(17);
    doc.text("İlaçlar:",45,155);
    var medications = document.getElementById("record_medications").value;
    textlines = doc.setFontSize(15).splitTextToSize(medications,120);
    doc.text(textlines,80,155);

    doc.setFontSize(17);
    doc.text("Sonuç:",45,185);
    var cocnlusion = document.getElementById("record_conclusion").value;
    textlines = doc.setFontSize(15).splitTextToSize(cocnlusion,120);
    doc.text(textlines,75,185);
    
    doc.output('pdfobjectnewwindow');
}
// function resizeBase64Img(base64,width,height){
//     var canvas = document.createElement("canvas");
//     canvas.width = width;
//     canvas.height = height;
//     var context = canvas.getContext("2d");
//     var deferred = $.Deferred();
//     $("<img/>").attr("src", base64).load(function(){
//         context.scale(width/this.width, height/this.height);
//         context.drawImage(this,0,0);
//         deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));
//     });
//     return deferred.promise();
// }

function signature(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF(true);
    // var {CheckBox} = jsPDF.AcroForm;
    doc.setFont("OpenSans-Medium");

    const responsibleSignature  = document.getElementById('pilot_signature').getElementsByTagName('canvas');
    const responsibleSignaturectx = responsibleSignature[0].toDataURL();
    console.log(responsibleSignaturectx);
    doc.addImage(responsibleSignaturectx,"PNG",14,26,40,40);

    doc.output('pdfobjectnewwindow');
}
function ambulanceCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF(true);
    // var {CheckBox} = jsPDF.AcroForm;
    doc.setFont("OpenSans-Medium");
    
    //doc.setFont("SourceSansPro-Regular");
    // doc.setFont("Roboto-Light");


    // doc.setFontSize(12);
    // doc.text("FİLYOS SAĞLIK MERKEZİ",90,10);

    doc.setFontSize(12);
    doc.text("AMBULANS VAKA FORMU",90,5);
    doc.setFontSize(9);
    doc.text("(DOLDURULDUĞUNDA HASTAYA ÖZELDİR)",87,9);

    
    // var logo = document.getElementById("logo");
    // // var imgData = 'data:image/png;base64,'+Base64.encode(logo);
    // // console.log(imgData);
    // doc.addImage(logo, 'PNG', 10, 2, 20, 10);
    // const responsibleSignature  = document.getElementById('pilot_signature').getElementsByTagName('canvas');
    // const responsibleSignaturectx = responsibleSignature[0].toDataURL();
    // console.log(responsibleSignaturectx);
    // doc.addImage(responsibleSignaturectx,"PNG",10,2,40,40);


    doc.setFontSize(9);
    doc.text("Tarih:   ....../..../....",171,6);
    var casedate = document.getElementById("casedate").value;
    doc.setFontSize(9);
    doc.text(casedate,180,4).value

    doc.setFontSize(9);

    var atn_no = document.getElementById("atn_no").value;
    doc.setFontSize(9);
    doc.text(atn_no,180,10).value

    doc.rect(5,12,200,283)

// ================================================   
    doc.setLineWidth(0.1);
    doc.line(45, 12, 45, 28);

    doc.setLineWidth(0.1);
    doc.line(115, 12, 115, 28);

    doc.setLineWidth(0.1);
    doc.line(155, 12, 155, 28);

    doc.line(5,16,205,16)
    doc.line(5,20,205,20)
    doc.line(5,24,205,24)
    doc.line(5,28,205,28)

    doc.setFontSize(9);
    doc.text("Adı Soyadı:",6,15);
    var username = document.getElementById("username").value;
    doc.setFontSize(9);
    doc.text(username,46,15).value;

    doc.setFontSize(9);
    doc.text("T.C Kimlik No:",6,19);
    var username = document.getElementById("identification_number").value;
    doc.setFontSize(9);
    doc.text(username,46,19).value;

    doc.setFontSize(9);
    doc.text("Cinsiyeti:",6,23);
    var username = document.getElementById("gender").value;
    doc.setFontSize(9);
    doc.text(username,46,23).value;

    doc.setFontSize(9);
    doc.text("Yaşı:",6,27);
    var username = document.getElementById("age").value;
    doc.setFontSize(9);
    doc.text(username,46,27).value;

    doc.setFontSize(9);
    doc.text("Vaka Çağrı Saati:",116,15);
    var username = document.getElementById("case_call_clock").value;
    doc.setFontSize(9);
    doc.text(username,156,15).value;

    doc.setFontSize(9);
    doc.text("Vakaya Varış Saati:",116,19);
    var username = document.getElementById("case_arrival_time").value;
    doc.setFontSize(9);
    doc.text(username,156,19).value;

    doc.setFontSize(9);
    doc.text("Vakadan Ayrılış Saati:",116,23); 
    var username = document.getElementById("time_of_leave_from_case").value;
    doc.setFontSize(9);
    doc.text(username,156,23).value;

    doc.setFontSize(9);
    doc.text("Hastahaneye Varış Saati:",116,27);
    var username = document.getElementById("hospital_arrival_time").value;
    doc.setFontSize(9);
    doc.text(username,156,27).value;


// ================================================
    doc.line(5,42,205,42)

    doc.setFontSize(9);
    doc.text("Adresi:",6,33);
    var username = document.getElementById("adress").value;
    doc.setFontSize(9);
    doc.text(username,20,33).value;
    
    doc.setFontSize(9);
    doc.text("Telefonu:",6,40);
    var username = document.getElementById("tel_number").value;
    doc.setFontSize(9);
    doc.text(username,20,40).value;
// ================================================
    doc.setLineWidth(0.1);
    doc.line(80, 42, 80, 46);

    doc.setLineWidth(0.1);
    doc.line(150, 42, 150, 46);

    doc.setLineWidth(0.1);
    doc.line(140, 46, 140, 50);

    doc.line(5,46,205,46)
    doc.line(5,50,205,50)
    doc.line(5,54,205,54)

    doc.setFontSize(9);
    doc.text("Hastanın Alındığı Yer:",6,45);
    var username = document.getElementById("place_from_the_patient").value;
    doc.setFontSize(9);
    doc.text(username,40,45).value;

    doc.setFontSize(8);
    doc.text("Hastanın Nakledildiği 1.Yer:",82,45);
    var username = document.getElementById("1_place_the_patient_is_transported").value;
    doc.setFontSize(9);
    doc.text(username,120,45).value;

    doc.setFontSize(8);
    doc.text("Hastanın Nakledildiği 2.Yer:",151,45);
    var username = document.getElementById("2_place_the_patient_is_transported").value;
    doc.setFontSize(9);
    doc.text(username,188,45).value;

    doc.setFontSize(9);
    doc.text("Hastanın Şikayeti:",6,49);
    var username = document.getElementById("patients_complaint").value;
    doc.setFontSize(9);
    doc.text(username,35,49).value;

    doc.setFontSize(9);
    doc.text("Ön Tanı:",141,49);
    var username = document.getElementById("prediction").value;
    doc.setFontSize(9);
    doc.text(username,155,49).value;

    doc.setFontSize(9);
    doc.text("Kronik Hastalıklar:",6,53);
    var username = document.getElementById("chronic_diseases").value;
    doc.setFontSize(9);
    doc.text(username,35,53).value;
// ================================================
    doc.setLineWidth(0.1);
    doc.line(135, 54, 135, 74);

    doc.line(5,74,205,74)

    doc.setFontSize(9);
    doc.text("Açıklama",6,57);
    doc.text("Hastaya Yapılan Uygulama :",6,64);
    doc.text("Kullanılan İlaçlar",6,69);
    var explanation_application = document.getElementById("explanation_application").value;
    textlines = doc.setFontSize(9).splitTextToSize(explanation_application,90);
    doc.text(textlines,48,57).value;
    
    doc.setFontSize(8);
    doc.text("İzolasyon Durumu:",136,66);

    doc.setFontSize(8);
    doc.text("Solunum İzolasyonu",163,60);
    var checkBox = new jspdf.AcroFormCheckBox();
    var checkBoxTxt = document.getElementById("txt").value;
    var splitTxt = checkBoxTxt.split(",");
    let hasText = false;
    for (let i = 0; i < splitTxt.length; i++){

        if(splitTxt[i] == 'solunum_izolasyonu') {
            console.log("Girdi");
            hasText = true;
            break;
        }
    }
    checkBox.appearanceState = hasText ? 'On' : 'Off';
    checkBox.readOnly = false;
    checkBox.fieldName = "Solunum İzolasyonu";
    checkBox.Rect = [191, 58, 2, 2];
    checkBox.value = 'solunum_izolasyonu';
    doc.addField(checkBox);
    
    doc.setFontSize(8);
    doc.text("Damlacık İzolasyonu",163,66);
    var checkBox1 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt1 = document.getElementById("txt").value;
    var splitTxt1 = checkBoxTxt1.split(",");
    let hasText1 = false;
    for (let i = 0; i < splitTxt1.length; i++){
        if(splitTxt1[i] == 'damlacik_izolasyonu') {
            console.log("Girdi1");
            hasText1 = true;
            break;
        }
    }
    checkBox1.appearanceState = hasText1 ? 'On' : 'Off';
    checkBox1.readOnly = false;
    checkBox1.fieldName = "Damlacık İzolasyonu";
    checkBox1.Rect = [191, 64, 2, 2];
    checkBox.value = 'damlacik_izolasyonu';
    doc.addField(checkBox1);


    doc.setFontSize(8);
    doc.text("Temas İzolasyonu",163,72);
    var checkBox2 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt2 = document.getElementById("txt").value;
    var splitTxt2 = checkBoxTxt2.split(",");
    let hasText2 = false;
    for (let i = 0; i< splitTxt2.length; i++){
        if(splitTxt2[i] == 'temas_izolasyonu') {
            console.log("Girdi2");
            hasText2 = true;
            break;
        }
    }

    checkBox2.appearanceState = hasText2 ? 'On' : 'Off';
    checkBox2.readOnly = false;
    checkBox2.fieldName = "Temas İzlasyonu";
    checkBox2.Rect = [191, 70, 2, 2];
    checkBox.value = 'temas_izolasyonu';
    doc.addField(checkBox2);

// ===============================================
    doc.setLineWidth(0.1);
    doc.line(40, 74, 40, 107);

    doc.setLineWidth(0.1);
    doc.line(75, 74, 75, 107);

    doc.setLineWidth(0.1);
    doc.line(102, 74, 102, 107);

    doc.setLineWidth(0.1);
    doc.line(127, 74, 127, 107);

    doc.setLineWidth(0.1);
    doc.line(152, 74, 152, 103);

    doc.setLineWidth(0.1);
    doc.line(177, 74, 177, 103);

    doc.setLineWidth(0.1);
    doc.line(84, 107, 84, 113);

    doc.setLineWidth(0.1);
    doc.line(120, 107, 120, 113);

// ====================================
    doc.setLineWidth(0.1);
    doc.line(52, 78, 52, 103);

    doc.setLineWidth(0.1);
    doc.line(64, 78, 64, 103);

    doc.setLineWidth(0.1);
    doc.line(95, 78, 95, 103);

    doc.setLineWidth(0.1);
    doc.line(120, 78, 120, 103);

    doc.setLineWidth(0.1);
    doc.line(145, 78, 145, 103);

    doc.setLineWidth(0.1);
    doc.line(170, 78, 170, 103);

    doc.setLineWidth(0.1);
    doc.line(198, 78, 198, 103);

    doc.setLineWidth(0.1);
    doc.line(45, 107, 45, 113);

    doc.line(5,113,205,113)
    doc.line(5,107,205,107)
    doc.line(5,103,205,103)
    doc.line(5,99,205,99)
    doc.line(5,95,205,95)
    doc.line(5,91,205,91)
    doc.line(5,87,205,87)
    doc.line(5,83,205,83)
    doc.line(40,78,205,78)

    doc.setFontSize(10);
    doc.text("VİTAL BULGULAR",10,80);

    doc.setFontSize(7);
    doc.text("ÖLÇÜ ZAMANI",52,77);
    doc.setFontSize(7);
    doc.text("EMESYONEL DURUM",77,77);
    doc.setFontSize(7);
    doc.text("PUPİLLER",108,77);
    doc.setFontSize(7);
    doc.text("DERİ",134,77);
    doc.setFontSize(7);
    doc.text("SOLUNUM",157,77);
    doc.setFontSize(7);
    doc.text("NABIZ",183,77);

    var measurement_1 = document.getElementById("1_measurement").value;
    doc.setFontSize(9);
    doc.text(measurement_1,42,82).value;

    var second_measurement = document.getElementById("second_measurement").value;
    doc.setFontSize(9);
    doc.text(second_measurement,53,82).value;

    var measurement_3 = document.getElementById("3_measurement").value;
    doc.setFontSize(9);
    doc.text(measurement_3,65,82).value;

    doc.setFontSize(9);
    doc.text("Tansiyon",6,86);

    var blood_pressure_1 = document.getElementById("1_blood_pressure").value;
    doc.setFontSize(9);
    doc.text(blood_pressure_1,42,86).value;

    var blood_pressure_2 = document.getElementById("2_blood_pressure").value;
    doc.setFontSize(9);
    doc.text(blood_pressure_2,53,86).value;

    var blood_pressure_3 = document.getElementById("3_blood_pressure").value;
    doc.setFontSize(9);
    doc.text(blood_pressure_3,65,86).value;

    doc.setFontSize(9);
    doc.text("Nabız",6,90);

    var pulse_1 = document.getElementById("1_pulse").value;
    doc.setFontSize(9);
    doc.text(pulse_1,42,90).value;

    var pulse_2 = document.getElementById("2_pulse").value;
    doc.setFontSize(9);
    doc.text(pulse_2,53,90).value;

    var pulse_3 = document.getElementById("3_pulse").value;
    doc.setFontSize(9);
    doc.text(pulse_3,65,90).value;
    
    doc.setFontSize(9);
    doc.text("SpO2",6,94);

    var spo2_1 = document.getElementById("1_spo2").value;
    doc.setFontSize(9);
    doc.text(spo2_1,42,94).value;

    var spo2_2 = document.getElementById("2_spo2").value;
    doc.setFontSize(9);
    doc.text(spo2_2,53,94).value;

    var spo2_3 = document.getElementById("3_spo2").value;
    doc.setFontSize(9);
    doc.text(spo2_3,65,94).value;

    doc.setFontSize(9);
    doc.text("Solunum/dk",6,98);

    var respirations_min_1 = document.getElementById("1_respirations_min").value;
    doc.setFontSize(9);
    doc.text(respirations_min_1,42,98).value;

    var respirations_min_2 = document.getElementById("2_respirations_min").value;
    doc.setFontSize(9);
    doc.text(respirations_min_2,53,98).value;

    var respirations_min_3 = document.getElementById("3_respirations_min").value;
    doc.setFontSize(9);
    doc.text(respirations_min_3,65,98).value;

    doc.setFontSize(9);
    doc.text("Ateş",6,102);

    var fire_1 = document.getElementById("1_fire").value;
    doc.setFontSize(9);
    doc.text(fire_1,42,102).value;

    var fire_2 = document.getElementById("2_fire").value;
    doc.setFontSize(9);
    doc.text(fire_2,53,102).value;

    var fire_3 = document.getElementById("2_fire").value;
    doc.setFontSize(9);
    doc.text(fire_3,65,102).value;

    doc.setFontSize(9);
    doc.text("Normal",76,82);
    var normal = new jspdf.AcroFormCheckBox();
    var normalTxt = document.getElementById("statetxt").value;
    console.log("Normal",normalTxt);
    let hasnormalText = false;
    console.log
    if(normalTxt == 'normal') {
        console.log("Girdi2");
        hasnormalText = true;
    }
    normal.appearanceState = hasnormalText ? 'On' : 'Off';
    normal.readOnly = false;
    normal.fieldName = "Normal";
    normal.Rect = [97, 78.5, 4, 4];
    normal.value = 'normal';
    doc.addField(normal);

    doc.setFontSize(9);
    doc.text("Üzüntülü",76,86);
    var sad = new jspdf.AcroFormCheckBox();
    var sadTxt = document.getElementById("statetxt").value;
    let hassadText = false;
    if(sadTxt == 'sad') {
        console.log("Girdi2");
        hassadText = true;
    }
    sad.appearanceState = hassadText ? 'On' : 'Off';
    sad.readOnly = false;
    sad.fieldName = "Üzüntülü";
    sad.Rect = [97, 83.5, 4, 4];
    sad.value = 'sad';
    doc.addField(sad);

    doc.setFontSize(9);
    doc.text("Huzursuz",76,90);
    var restless = new jspdf.AcroFormCheckBox();
    var restlessTxt = document.getElementById("statetxt").value;
    let hasrestlessText = false;
    if(restlessTxt == 'restless') {
        console.log("Girdi");
        hasrestlessText = true;
    }
    restless.appearanceState = hasrestlessText ? 'On' : 'Off';
    restless.readOnly = false;
    restless.fieldName = "Huzursuz";
    restless.Rect = [97, 87, 4, 4];
    restless.value = 'restless';
    doc.addField(restless);

    doc.setFontSize(9);
    doc.text("Kayıtsız",76,94);
    var indifferent = new jspdf.AcroFormCheckBox();
    var indifferentTxt = document.getElementById("statetxt").value;
    let hasindifferentText = false;
    if(indifferentTxt == 'indifferent') {
        console.log("Girdi2");
        hasindifferentText = true;
    }
    indifferent.appearanceState = hasindifferentText ? 'On' : 'Off';
    indifferent.readOnly = false;
    indifferent.fieldName = "Kayıtsız";
    indifferent.Rect = [97, 91, 4, 4];
    indifferent.value = 'indifferent';
    doc.addField(indifferent);

    doc.setFontSize(9);
    doc.text("Diğer",76,98);
    var other = new jspdf.AcroFormCheckBox();
    var otherTxt = document.getElementById("statetxt").value;
    let hasotherText = false;
    if(otherTxt == 'other') {
        console.log("Girdi2");
        hasotherText = true;
    }
    other.appearanceState = hasotherText ? 'On' : 'Off';
    other.readOnly = false;
    other.fieldName = "Diğer";
    other.Rect = [97, 95, 4, 4];
    other.value = 'other';
    doc.addField(other);

    doc.setFontSize(9);
    doc.text("Normal",103,82);
    var normal1 = new jspdf.AcroFormCheckBox();
    var otherTxt = document.getElementById("pupilstxt").value;
    let hasnormal1Text = false;
    if(otherTxt == 'normal1') {
        console.log("Girdi2");
        hasnormal1Text = true;
    }
    normal1.appearanceState = hasnormal1Text ? 'On' : 'Off';
    normal1.readOnly = false;
    normal1.fieldName = "Normal";
    normal1.Rect = [122, 78.5, 4, 4];
    normal1.value = 'normal1';
    doc.addField(normal1);

    doc.setFontSize(9);
    doc.text("Miyotik",103,86);
    var miotic = new jspdf.AcroFormCheckBox();
    var mioticTxt = document.getElementById("pupilstxt").value;
    let hasmioticText = false;
    if(mioticTxt == 'miotic') {
        console.log("Girdi2");
        hasmioticText = true;
    }
    miotic.appearanceState = hasmioticText ? 'On' : 'Off';
    miotic.readOnly = false;
    miotic.fieldName = "Miyotik";
    miotic.Rect = [122, 83.5, 4, 4];
    miotic.value = 'miotic';
    doc.addField(miotic);

    doc.setFontSize(9);
    doc.text("Midriatik",103,90);
    var mydriatic = new jspdf.AcroFormCheckBox();
    var mydriaticTxt = document.getElementById("pupilstxt").value;
    let hasmydriaticText = false;
    if(mydriaticTxt == 'mydriatic') {
        console.log("Girdi2");
        hasmydriaticText = true;
    }
    mydriatic.appearanceState = hasmydriaticText ? 'On' : 'Off';
    mydriatic.readOnly = false;
    mydriatic.fieldName = "Midriatik";
    mydriatic.Rect = [122, 87, 4, 4];
    mydriatic.value = 'mydriatic';
    doc.addField(mydriatic);

    doc.setFontSize(9);
    doc.text("Anizokorik",103,94);
    var anisochoric = new jspdf.AcroFormCheckBox();
    var anisochoricTxt = document.getElementById("pupilstxt").value;
    let hasanisochoricText = false;
    if(anisochoricTxt == 'anisochoric') {
        console.log("Girdi2");
        hasanisochoricText = true;
    }
    anisochoric.appearanceState = hasanisochoricText ? 'On' : 'Off';
    anisochoric.readOnly = false;
    anisochoric.fieldName = "Anizokorik";
    anisochoric.Rect = [122, 91, 4, 4];
    anisochoric.value = 'anisochoric';
    doc.addField(anisochoric);

    doc.setFontSize(7);
    doc.text("Reaksiyon Yok",103,98);
    var no_reaction = new jspdf.AcroFormCheckBox();
    var no_reactionTxt = document.getElementById("pupilstxt").value;
    let hasno_reactionText = false;
    if(no_reactionTxt == 'no_reaction') {
        console.log("Girdi2");
        hasno_reactionText = true;
    }
    no_reaction.appearanceState = hasno_reactionText ? 'On' : 'Off';
    no_reaction.readOnly = false;
    no_reaction.fieldName = "Reaksiyon Yok";
    no_reaction.Rect = [122, 95, 4, 4];
    no_reaction.value = 'no_reaction';
    doc.addField(no_reaction);

    doc.setFontSize(9);
    doc.text("Fiks Dilate",103,102);
    var fix_dilate = new jspdf.AcroFormCheckBox();
    var fix_dilateTxt = document.getElementById("pupilstxt").value;
    let hasfix_dilateText = false;
    if(fix_dilateTxt == 'fix_dilate') {
        console.log("Girdi2");
        hasfix_dilateText = true;
    }
    fix_dilate.appearanceState = hasfix_dilateText ? 'On' : 'Off';
    fix_dilate.readOnly = false;
    fix_dilate.fieldName = "Fiks Dilate";
    fix_dilate.Rect = [122, 99, 4, 4];
    fix_dilate.value = 'fix_dilate';
    doc.addField(fix_dilate);

    doc.setFontSize(9);
    doc.text("Normal",128,82);
    var normal2 = new jspdf.AcroFormCheckBox();
    var normal2Txt = document.getElementById("skintxt").value;
    let hasnormal2Text = false;
    if(normal2Txt == 'normal2') {
        console.log("Girdi2");
        hasnormal2Text = true;
    }
    normal2.appearanceState = hasnormal2Text ? 'On' : 'Off';
    normal2.readOnly = false;
    normal2.fieldName = "Normal";
    normal2.Rect = [147, 78.5, 4, 4];
    normal2.value = 'normal2';
    doc.addField(normal2);

    doc.setFontSize(9);
    doc.text("Soluk",128,86);
    var pale = new jspdf.AcroFormCheckBox();
    var paleTxt = document.getElementById("skintxt").value;
    let haspaleText = false;
    if(paleTxt == 'pale') {
        console.log("Girdi2");
        haspaleText = true;
    }
    pale.appearanceState = haspaleText ? 'On' : 'Off';
    pale.readOnly = false;
    pale.fieldName = "Soluk";
    pale.Rect = [147, 83.5, 4, 4];
    pale.value = 'pale';
    doc.addField(pale);

    doc.setFontSize(9);
    doc.text("Siyanotik",128,90);
    var cyanonic = new jspdf.AcroFormCheckBox();
    var cyanonicTxt = document.getElementById("skintxt").value;
    let hascyanonicText = false;
    if(cyanonicTxt == 'cyanonic') {
        console.log("Girdi2");
        hascyanonicText = true;
    }
    cyanonic.appearanceState = hascyanonicText ? 'On' : 'Off';
    cyanonic.readOnly = false;
    cyanonic.fieldName = "Siyanotik";
    cyanonic.Rect = [147, 87, 4, 4];
    cyanonic.value = 'cyanonic';
    doc.addField(cyanonic);

    doc.setFontSize(9);
    doc.text("Hiperemik",128,94);
    var hyperemic = new jspdf.AcroFormCheckBox();
    var hyperemicTxt = document.getElementById("skintxt").value;
    let hashyperemicText = false;
    if(hyperemicTxt == 'hyperemic') {
        console.log("Girdi2");
        hashyperemicText = true;
    }
    hyperemic.appearanceState = hashyperemicText ? 'On' : 'Off';
    hyperemic.readOnly = false;
    hyperemic.fieldName = "Hiperemik";
    hyperemic.Rect = [147, 91, 4, 4];
    hyperemic.value = 'hyperemic';
    doc.addField(hyperemic);

    doc.setFontSize(9);
    doc.text("İkterik",128,98);
    var icteric = new jspdf.AcroFormCheckBox();
    var ictericTxt = document.getElementById("skintxt").value;
    let hasictericText = false;
    if(ictericTxt == 'icteric') {
        console.log("Girdi2");
        hasictericText = true;
    }
    icteric.appearanceState = hasictericText ? 'On' : 'Off';
    icteric.readOnly = false;
    icteric.fieldName = "İkterik";
    icteric.Rect = [147, 95, 4, 4];
    icteric.value = 'icteric';
    doc.addField(icteric);

    doc.setFontSize(9);
    doc.text("Terli",128,102);
    var sweaty = new jspdf.AcroFormCheckBox();
    var sweatyTxt = document.getElementById("skintxt").value;
    let hassweatyText = false;
    if(sweatyTxt == 'sweaty') {
        console.log("Girdi2");
        hassweatyText = true;
    }
    sweaty.appearanceState = hassweatyText ? 'On' : 'Off';
    sweaty.readOnly = false;
    sweaty.fieldName = "Terli";
    sweaty.Rect = [147, 99, 4, 4];
    sweaty.value = 'sweaty';
    doc.addField(sweaty);

    doc.setFontSize(9);
    doc.text("Rahat",153,82);
    var comfortable = new jspdf.AcroFormCheckBox();
    var comfortableTxt = document.getElementById("respiratorytxt").value;
    let hascomfortableText = false;
    if(comfortableTxt == 'comfortable') {
        console.log("Girdi2");
        hascomfortableText = true;
    }
    comfortable.appearanceState = hascomfortableText ? 'On' : 'Off';
    comfortable.readOnly = false;
    comfortable.fieldName = "Rahat";
    comfortable.Rect = [171, 78.5, 4, 4];
    comfortable.value = 'comfortable';
    doc.addField(comfortable);

    doc.setFontSize(9);
    doc.text("Derin",153,86);
    var deep = new jspdf.AcroFormCheckBox();
    var deepTxt = document.getElementById("respiratorytxt").value;
    let hasdeepText = false;
    if(deepTxt == 'deep') {
        console.log("Girdi2");
        hasdeepText = true;
    }
    deep.appearanceState = hasdeepText ? 'On' : 'Off';
    deep.readOnly = false;
    deep.fieldName = "Derin";
    deep.Rect = [171, 83.5, 4, 4];
    deep.value = 'deep';
    doc.addField(deep);

    doc.setFontSize(9);
    doc.text("Yüzeysel",153,90);
    var superficial = new jspdf.AcroFormCheckBox();
    var superficialTxt = document.getElementById("respiratorytxt").value;
    let hassuperficialText = false;
    if(superficialTxt == 'superficial') {
        console.log("Girdi2");
        hassuperficialText = true;
    }
    superficial.appearanceState = hassuperficialText ? 'On' : 'Off';
    superficial.readOnly = false;
    superficial.fieldName = "Yüzeysel";
    superficial.Rect = [171, 87, 4, 4];
    superficial.value = 'superficial';
    doc.addField(superficial);

    doc.setFontSize(9);
    doc.text("Düzensiz",153,94);
    var irregular = new jspdf.AcroFormCheckBox();
    var irregularTxt = document.getElementById("respiratorytxt").value;
    let hasirregularText = false;
    if(irregularTxt == 'irregular') {
        console.log("Girdi2");
        hasirregularText = true;
    }
    irregular.appearanceState = hasirregularText ? 'On' : 'Off';
    irregular.readOnly = false;
    irregular.fieldName = "Düzensiz";
    irregular.Rect = [171, 91, 4, 4];
    irregular.value = 'irregular';
    doc.addField(irregular);

    doc.setFontSize(9);
    doc.text("Dispneik",153,98);
    var dyspneic = new jspdf.AcroFormCheckBox();
    var dyspneicTxt = document.getElementById("respiratorytxt").value;
    let hasdyspneicText = false;
    if(dyspneicTxt == 'dyspneic') {
        console.log("Girdi2");
        hasdyspneicText = true;
    }
    dyspneic.appearanceState = hasdyspneicText ? 'On' : 'Off';
    dyspneic.readOnly = false;
    dyspneic.fieldName = "Dispneik";
    dyspneic.Rect = [171, 95, 4, 4];
    dyspneic.value = 'dyspneic';
    doc.addField(dyspneic);

    doc.setFontSize(9);
    doc.text("Yok",153,102);
    var none = new jspdf.AcroFormCheckBox();
    var noneTxt = document.getElementById("respiratorytxt").value;
    let hasnoneText = false;
    if(noneTxt == 'none') {
        console.log("Girdi2");
        hasnoneText = true;
    }
    none.appearanceState = hasnoneText ? 'On' : 'Off';
    none.readOnly = false;
    none.fieldName = "Yok";
    none.Rect = [171, 99, 4, 4];
    none.value = 'none';
    doc.addField(none);


    doc.setFontSize(9);
    doc.text("Düzenli",178,82);
    var organised = new jspdf.AcroFormCheckBox();
    var organisedTxt = document.getElementById("pulsetxt").value;
    let hasorganisedText = false;
    if(organisedTxt == 'organised') {
        console.log("Girdi2");
        hasorganisedText = true;
    }
    organised.appearanceState = hasorganisedText ? 'On' : 'Off';
    organised.readOnly = false;
    organised.fieldName = "Düzenli";
    organised.Rect = [200, 78.5, 4, 4];
    organised.value = 'organised';
    doc.addField(organised);

    doc.setFontSize(9);
    doc.text("Aritmik",178,86);
    var arrhythmic = new jspdf.AcroFormCheckBox();
    var arrhythmicTxt = document.getElementById("pulsetxt").value;
    let haarrhythmicText = false;
    if(arrhythmicTxt == 'arrhythmic') {
        console.log("Girdi2");
        haarrhythmicText = true;
    }
    arrhythmic.appearanceState = haarrhythmicText ? 'On' : 'Off';
    arrhythmic.readOnly = false;
    arrhythmic.fieldName = "Aritmik";
    arrhythmic.Rect = [200, 83.5, 4, 4];
    arrhythmic.value = 'arrhythmic';
    doc.addField(arrhythmic);

    doc.setFontSize(9);
    doc.text("Filiform",178,90);
    var filiform = new jspdf.AcroFormCheckBox();
    var filiformTxt = document.getElementById("pulsetxt").value;
    let hasfiliformText = false;
    if(filiformTxt == 'filiform') {
        console.log("Girdi2");
        hasfiliformText = true;
    }
    filiform.appearanceState = hasfiliformText ? 'On' : 'Off';
    filiform.readOnly = false;
    filiform.fieldName = "Filiform";
    filiform.Rect = [200, 87, 4, 4];
    filiform.value = 'filiform';
    doc.addField(filiform);

    doc.setFontSize(9);
    doc.text("Alınmıyor",178,94);
    var not_received = new jspdf.AcroFormCheckBox();
    var not_receivedTxt = document.getElementById("pulsetxt").value;
    let hasnot_receivedText = false;
    if(not_receivedTxt == 'not_received') {
        console.log("Girdi2");
        hasnot_receivedText = true;
    }
    not_received.appearanceState = hasnot_receivedText ? 'On' : 'Off';
    not_received.readOnly = false;
    not_received.fieldName = "Alınmıyor";
    not_received.Rect = [200, 91, 4, 4];
    not_received.value = 'not_received';
    doc.addField(not_received);

    doc.setFontSize(9);
    doc.text("GKS",6,106);
    doc.setFontSize(8);
    doc.text("Motor Yanıt(A):",42,106);
    var engine_response = document.getElementById("engine_response").value;
    doc.setFontSize(9);
    doc.text(engine_response,62,106).value;

    doc.setFontSize(8);
    doc.text("Sözlü Yanıt(B):",77,106);
    var oral_response = document.getElementById("oral_response").value;
    doc.setFontSize(9);
    doc.text(oral_response,97,106).value;

    doc.setFontSize(8);
    doc.text("Göz Açma(C):",103,106);
    var eyes_open = document.getElementById("eyes_open").value;
    doc.setFontSize(9);
    doc.text(eyes_open,119,106).value;

    doc.setFontSize(8);
    doc.text("GKS Puanı:",128,106);
    var gks_points = document.getElementById("gks_points").value;
    doc.setFontSize(9);
    doc.text(gks_points,144,106).value;

    doc.setFontSize(9);
    doc.text("CPR YAPAN",6,110);
    var cpr_doing = document.getElementById("cpr_doing").value;
    doc.setFontSize(9);
    doc.text(cpr_doing,26,110).value;

    doc.setFontSize(8);
    doc.text("Başlama Zamanı:",46,110);
    var start_time = document.getElementById("start_time").value;
    doc.setFontSize(9);
    doc.text(start_time,72,110).value;

    doc.setFontSize(8);
    doc.text("Bırakma Zamanı:",85,110);
    var finish_time = document.getElementById("finish_time").value;
    doc.setFontSize(9);
    doc.text(finish_time,110,110).value;

    doc.setFontSize(8);
    doc.text("Bırakma Nedeni:",121,110);
    var reason_to_leave = document.getElementById("reason_to_leave").value;
    doc.setFontSize(9);
    doc.text(reason_to_leave,146,110).value;


// ==============================

    doc.setFontSize(7);
    doc.text("Yapılan Uygulamalar ve İşlemler",60,115);

    doc.setFontSize(7);
    doc.text("Transfer Durumu",170,115);

    doc.setLineWidth(0.1);
    doc.line(53, 116, 53, 177);

    doc.setLineWidth(0.1);
    doc.line(95, 116, 95, 177);

    doc.setLineWidth(0.1);
    doc.line(132, 116, 132, 177);

    doc.setLineWidth(0.1);
    doc.line(164, 113, 164, 177);

    doc.line(5,116,205,116)

    doc.line(5,177,205,177)

    doc.setFontSize(5);
    doc.text(" Maske ile hava yolu desteği",8,118);
    var checkBox3 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt3 = document.getElementById("txt1").value;
    var splitTxt3 = checkBoxTxt3.split(",");
    let hasText3 = false;
    for (let i = 0; i< splitTxt3.length; i++){
        if(splitTxt3[i] == 'application1') {
            console.log("Girdi2");
            hasText3 = true;
            break;
        }
    }
    checkBox3.appearanceState = hasText3 ? 'On' : 'Off';
    checkBox3.readOnly = false;
    checkBox3.fieldName = "Maske ile hava yolu desteği";
    checkBox3.Rect = [6, 116, 2, 2];
    checkBox3.value = 'application1'
    doc.addField(checkBox3);

    doc.setFontSize(5);
    doc.text(" Airway ile hava yolu desteği",8,120.5);
    var checkBox4 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt4 = document.getElementById("txt1").value;
    var splitTxt4 = checkBoxTxt4.split(",");
    let hasText4 = false;
    for (let i = 0; i< splitTxt4.length; i++){
        if(splitTxt4[i] == 'application2') {
            console.log("Girdi2");
            hasText4 = true;
            break;
        }
    }
    checkBox4.appearanceState = hasText4 ? 'On' : 'Off';
    checkBox4.readOnly = false;
    checkBox4.fieldName = "Airway ile hava yolu desteği";
    checkBox4.Rect = [6, 118.5, 2, 2];
    checkBox4.value = 'application2'
    doc.addField(checkBox4);

    doc.setFontSize(5);
    doc.text(" Entübasyon uygulaması",8,123);
    var checkBox5 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt5 = document.getElementById("txt1").value;
    var splitTxt5 = checkBoxTxt5.split(",");
    let hasText5 = false;
    for (let i = 0; i< splitTxt5.length; i++){
        if(splitTxt5[i] == 'application3') {
            console.log("Girdi2");
            hasText5 = true;
            break;
        }
    }
    checkBox5.appearanceState = hasText5 ? 'On' : 'Off';
    checkBox5.readOnly = false;
    checkBox5.fieldName = "Entübasyon uygulaması";
    checkBox5.Rect = [6, 121, 2, 2];
    checkBox5.value = 'application3';
    doc.addField(checkBox5);

    doc.setFontSize(5);
    doc.text(" Nazal Entübasyon uygulaması",8,125.5);
    var checkBox6 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt6 = document.getElementById("txt1").value;
    var splitTxt6 = checkBoxTxt6.split(",");
    let hasText6 = false;
    for (let i = 0; i< splitTxt6.length; i++){
        if(splitTxt6[i] == 'application4') {
            console.log("Girdi2");
            hasText6 = true;
            break;
        }
    }
    checkBox6.appearanceState = hasText6 ? 'On' : 'Off';
    checkBox6.readOnly = false;
    checkBox6.fieldName = "Nazal Entübasyon uygulaması";
    checkBox6.Rect = [6, 123.5, 2, 2];
    checkBox6.value = 'application4';
    doc.addField(checkBox6);

    doc.setFontSize(5);
    doc.text(" LMA uygulaması",8,128);
    var checkBox7 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt7 = document.getElementById("txt1").value;
    var splitTxt7 = checkBoxTxt7.split(",");
    let hasText7 = false;
    for (let i = 0; i< splitTxt7.length; i++){
        if(splitTxt7[i] == 'application5') {
            console.log("Girdi2");
            hasText7 = true;
            break;
        }
    }
    checkBox7.appearanceState = hasText7 ? 'On' : 'Off';
    checkBox7.readOnly = false;
    checkBox7.fieldName = "LMA uygulaması";
    checkBox7.Rect = [6, 126, 2, 2];
    checkBox7.value = 'application5';
    doc.addField(checkBox7);

    doc.setFontSize(5);
    doc.text(" Combi tüp uygulaması",8,130.5);
    var checkBox8 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt8 = document.getElementById("txt1").value;
    var splitTxt8 = checkBoxTxt8.split(",");
    let hasText8 = false;
    for (let i = 0; i< splitTxt8.length; i++){
        if(splitTxt8[i] == 'application6') {
            console.log("Girdi2");
            hasText8 = true;
            break;
        }
    }
    checkBox8.appearanceState = hasText8 ? 'On' : 'Off';
    checkBox8.readOnly = false;
    checkBox8.fieldName = "Combi tüp uygulaması";
    checkBox8.Rect = [6, 128.5, 2, 2];
    checkBox8.value = 'application6';
    doc.addField(checkBox8);

    doc.setFontSize(5);
    doc.text(" Acil trakeotomi açılması",8,133);
    var checkBox9 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt9 = document.getElementById("txt1").value;
    var splitTxt9 = checkBoxTxt9.split(",");
    let hasText9 = false;
    for (let i = 0; i< splitTxt9.length; i++){
        if(splitTxt9[i] == 'application7') {
            console.log("Girdi2");
            hasText9 = true;
            break;
        }
    }
    checkBox9.appearanceState = hasText9 ? 'On' : 'Off';
    checkBox9.readOnly = false;
    checkBox9.fieldName = "Acil trakeotomi açılması";
    checkBox9.Rect = [6, 131, 2, 2];
    checkBox9.value = 'application7';
    doc.addField(checkBox9);

    doc.setFontSize(5);
    doc.text(" Mekanik ventilasyon",8,135.5);
    var checkBox10 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt10 = document.getElementById("txt1").value;
    var splitTxt10 = checkBoxTxt10.split(",");
    let hasText10 = false;
    for (let i = 0; i< splitTxt10.length; i++){
        if(splitTxt10[i] == 'application8') {
            console.log("Girdi2");
            hasText10 = true;
            break;
        }
    }
    checkBox10.appearanceState = hasText10 ? 'On' : 'Off';
    checkBox10.readOnly = false;
    checkBox10.fieldName = "Mekanik ventilasyon";
    checkBox10.Rect = [6, 133.5, 2, 2];
    checkBox10.value = 'application8'
    doc.addField(checkBox10);

    doc.setFontSize(5);
    doc.text(" Nebulizatör ile ilaç uygulama",8,138);
    var checkBox11 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt11 = document.getElementById("txt1").value;
    var splitTxt11 = checkBoxTxt11.split(",");
    let hasText11 = false;
    for (let i = 0; i< splitTxt11.length; i++){
        if(splitTxt11[i] == 'application9') {
            console.log("Girdi2");
            hasText11 = true;
            break;
        }
    }
    checkBox11.appearanceState = hasText11 ? 'On' : 'Off';
    checkBox11.readOnly = false;
    checkBox11.fieldName = "Nebulizatör ile ilaç uygulama";
    checkBox11.Rect = [6, 136, 2, 2];
    checkBox11.value = 'application9';
    doc.addField(checkBox11);

    doc.setFontSize(5);
    doc.text(" Oksijen inhalasyon tedavisi 1 Saat",8,140.5);
    var checkBox12 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt12 = document.getElementById("txt1").value;
    var splitTxt12 = checkBoxTxt12.split(",");
    let hasText12 = false;
    for (let i = 0; i< splitTxt12.length; i++){
        if(splitTxt12[i] == 'application10') {
            console.log("Girdi2");
            hasText12 = true;
            break;
        }
    }
    checkBox12.appearanceState = hasText12 ? 'On' : 'Off';
    checkBox12.readOnly = false;
    checkBox12.fieldName = "Oksijen inhalasyon tedavisi 1 Saat";
    checkBox12.Rect = [6, 138.5, 2, 2];
    checkBox12.value = 'application10';
    doc.addField(checkBox12);

    doc.setFontSize(5);
    doc.text(" Aspirasyon uygulaması",8,143);
    var checkBox13 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt13 = document.getElementById("txt1").value;
    var splitTxt13 = checkBoxTxt13.split(",");
    let hasText13 = false;
    for (let i = 0; i< splitTxt13.length; i++){
        if(splitTxt13[i] == 'application11') {
            console.log("Girdi2");
            hasText13 = true;
            break;
        }
    }
    checkBox13.appearanceState = hasText13 ? 'On' : 'Off';
    checkBox13.readOnly = false;
    checkBox13.fieldName = "Aspirasyon uygulaması";
    checkBox13.Rect = [6, 141, 2, 2];
    checkBox13.value = 'application11';
    doc.addField(checkBox13);

    doc.setFontSize(5);
    doc.text(" Ventilatör ile takip (CPAP BİPAP dahil)",8,145.5);
    var checkBox14 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt14= document.getElementById("txt1").value;
    var splitTxt14 = checkBoxTxt14.split(",");
    let hasText14 = false;
    for (let i = 0; i< splitTxt14.length; i++){
        if(splitTxt14[i] == 'application12') {
            console.log("Girdi2");
            hasText14 = true;
            break;
        }
    }
    checkBox14.appearanceState = hasText14 ? 'On' : 'Off';
    checkBox14.readOnly = false;
    checkBox14.fieldName = "Ventilatör ile takip (CPAP BİPAP dahil)";
    checkBox14.Rect = [6, 143.5, 2, 2];
    checkBox14.value = 'application12';
    doc.addField(checkBox14);

    doc.setFontSize(5);
    doc.text(" Balon valf maske uygulaması",8,148);
    var checkBox15 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt15 = document.getElementById("txt1").value;
    var splitTxt15 = checkBoxTxt15.split(",");
    let hasText15 = false;
    for (let i = 0; i< splitTxt15.length; i++){
        if(splitTxt15[i] == 'application13') {
            console.log("Girdi2");
            hasText15 = true;
            break;
        }
    }
    checkBox15.appearanceState = hasText15 ? 'On' : 'Off';
    checkBox15.readOnly = false;
    checkBox15.fieldName = "Balon valf maske uygulaması";
    checkBox15.Rect = [6, 146, 2, 2];
    checkBox15.value = 'application13';
    doc.addField(checkBox15);

    doc.setFontSize(5);
    doc.text(" CPR uygulaması",8,150.5);
    var checkBox16 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt16 = document.getElementById("txt1").value;
    var splitTxt16 = checkBoxTxt16.split(",");
    let hasText16 = false;
    for (let i = 0; i< splitTxt16.length; i++){
        if(splitTxt16[i] == 'application14') {
            console.log("Girdi2");
            hasText16 = true;
            break;
        }
    }
    checkBox16.appearanceState = hasText16 ? 'On' : 'Off';
    checkBox16.readOnly = false;
    checkBox16.fieldName = "CPR uygulaması";
    checkBox16.Rect = [6, 148.5, 2, 2];
    checkBox16.value = 'application14';
    doc.addField(checkBox16);

    doc.setFontSize(5);
    doc.text(" Defibrilasyon",8,153);
    var checkBox17 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt17 = document.getElementById("txt1").value;
    var splitTxt17 = checkBoxTxt17.split(",");
    let hasText17 = false;
    for (let i = 0; i< splitTxt17.length; i++){
        if(splitTxt17[i] == 'application15') {
            console.log("Girdi2");
            hasText17 = true;
            break;
        }
    }
    checkBox17.appearanceState = hasText17 ? 'On' : 'Off';
    checkBox17.readOnly = false;
    checkBox17.fieldName = "Defibrilasyon";
    checkBox17.Rect = [6, 151, 2, 2];
    checkBox17.value = 'application15';
    doc.addField(checkBox17);

    doc.setFontSize(5);
    doc.text(" Kardiyoversiyon",8,155.5);
    var checkBox18 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt18 = document.getElementById("txt1").value;
    var splitTxt18 = checkBoxTxt18.split(",");
    let hasText18 = false;
    for (let i = 0; i< splitTxt18.length; i++){
        if(splitTxt18[i] == 'application16') {
            console.log("Girdi2");
            hasText18 = true;
            break;
        }
    }
    checkBox18.appearanceState = hasText18 ? 'On' : 'Off';
    checkBox18.readOnly = false;
    checkBox18.fieldName = "Kardiyoversiyon";
    checkBox18.Rect = [6, 153.5, 2, 2];
    checkBox18.value = 'application16';
    doc.addField(checkBox18);

    doc.setFontSize(5);
    doc.text(" Monitorizasyon",8,158);
    var checkBox19 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt19 = document.getElementById("txt1").value;
    var splitTxt19 = checkBoxTxt19.split(",");
    let hasText19 = false;
    for (let i = 0; i< splitTxt19.length; i++){
        if(splitTxt19[i] == 'application17') {
            console.log("Girdi2");
            hasText19 = true;
            break;
        }
    }
    checkBox19.appearanceState = hasText19 ? 'On' : 'Off';
    checkBox19.readOnly = false;
    checkBox19.fieldName = "Monitorizasyon";
    checkBox19.Rect = [6, 156, 2, 2];
    checkBox19.value = 'application17';
    doc.addField(checkBox19);

    doc.setFontSize(5);
    doc.text(" EKG uygulaması",8,160.5);
    var checkBox20 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt20 = document.getElementById("txt1").value;
    var splitTxt20 = checkBoxTxt20.split(",");
    let hasText20 = false;
    for (let i = 0; i< splitTxt20.length; i++){
        if(splitTxt20[i] == 'application18') {
            console.log("Girdi2");
            hasText20 = true;
            break;
        }
    }
    checkBox20.appearanceState = hasText20 ? 'On' : 'Off';
    checkBox20.readOnly = false;
    checkBox20.fieldName = "EKG uygulaması";
    checkBox20.Rect = [6, 158.5, 2, 2];
    checkBox20.value = 'application18';
    doc.addField(checkBox20);

    doc.setFontSize(5);
    doc.text(" İlaçlı müdahale",8,163);
    var checkBox21 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt21 = document.getElementById("txt1").value;
    var splitTxt21 = checkBoxTxt21.split(",");
    let hasText21 = false;
    for (let i = 0; i< splitTxt21.length; i++){
        if(splitTxt21[i] == 'application19') {
            console.log("Girdi2");
            hasText21 = true;
            break;
        }
    }
    checkBox21.appearanceState = hasText21 ? 'On' : 'Off';
    checkBox21.readOnly = false;
    checkBox21.fieldName = "İlaçlı müdahale";
    checkBox21.Rect = [6, 161, 2, 2];
    checkBox21.value = 'application19';
    doc.addField(checkBox21);

    doc.setFontSize(5);
    doc.text(" Damar yolu açılması",8,165.5);
    var checkBox22 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt22 = document.getElementById("txt1").value;
    var splitTxt22 = checkBoxTxt22.split(",");
    let hasText22 = false;
    for (let i = 0; i< splitTxt22.length; i++){
        if(splitTxt22[i] == 'application20') {
            console.log("Girdi2");
            hasText22 = true;
            break;
        }
    }
    checkBox22.appearanceState = hasText22 ? 'On' : 'Off';
    checkBox22.readOnly = false;
    checkBox22.fieldName = "Damar yolu açılması";
    checkBox22.Rect = [6, 163.5, 2, 2];
    checkBox22.value = 'application20';
    doc.addField(checkBox22);

    doc.setFontSize(5);
    doc.text(" Intravenöz uygulama",8,168);
    var checkBox23 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt23 = document.getElementById("txt1").value;
    var splitTxt23 = checkBoxTxt23.split(",");
    let hasText23 = false;
    for (let i = 0; i< splitTxt23.length; i++){
        if(splitTxt23[i] == 'application21') {
            console.log("Girdi2");
            hasText23 = true;
            break;
        }
    }
    checkBox23.appearanceState = hasText23 ? 'On' : 'Off';
    checkBox23.readOnly = false;
    checkBox23.fieldName = "Intravenöz uygulama";
    checkBox23.Rect = [6, 166, 2, 2];
    checkBox23.value = 'application21';
    doc.addField(checkBox23);

    doc.setFontSize(5);
    doc.text(" Intra osseöz kiti uygulaması",8,170.5);
    var checkBox24 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt24 = document.getElementById("txt1").value;
    var splitTxt24 = checkBoxTxt24.split(",");
    let hasText24 = false;
    for (let i = 0; i< splitTxt24.length; i++){
        if(splitTxt24[i] == 'application22') {
            console.log("Girdi2");
            hasText24 = true;
            break;
        }
    }
    checkBox24.appearanceState = hasText24 ? 'On' : 'Off';
    checkBox24.readOnly = false;
    checkBox24.fieldName = "Intra osseöz kiti uygulaması";
    checkBox24.Rect = [6, 168.5, 2, 2];
    checkBox24.value = 'application22';
    doc.addField(checkBox24);

    doc.setFontSize(5);
    doc.text(" Intra musculer uygulama",8,173);
    var checkBox25 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt25 = document.getElementById("txt1").value;
    var splitTxt25 = checkBoxTxt25.split(",");
    let hasText25 = false;
    for (let i = 0; i< splitTxt25.length; i++){
        if(splitTxt25[i] == 'application23') {
            console.log("Girdi2");
            hasText25 = true;
            break;
        }
    }
    checkBox25.appearanceState = hasText25 ? 'On' : 'Off';
    checkBox25.readOnly = false;
    checkBox25.fieldName = "Intra musculer uygulama";
    checkBox25.Rect = [6, 171, 2, 2];
    checkBox25.value = 'application23';
    doc.addField(checkBox25);

    doc.setFontSize(5);
    doc.text(" Subcutan uygulama",8,175.5);
    var checkBox26 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt26 = document.getElementById("txt1").value;
    var splitTxt26 = checkBoxTxt26.split(",");
    let hasText26 = false;
    for (let i = 0; i< splitTxt26.length; i++){
        if(splitTxt26[i] == 'application24') {
            console.log("Girdi2");
            hasText26 = true;
            break;
        }
    }
    checkBox26.appearanceState = hasText26 ? 'On' : 'Off';
    checkBox26.readOnly = false;
    checkBox26.fieldName = "Subcutan uygulama";
    checkBox26.Rect = [6, 173.5, 2, 2];
    checkBox26.value = 'application24';
    doc.addField(checkBox26);


// =============================


    doc.setFontSize(5);
    doc.text(" Kanama durdurucu ajan uygulaması",56,118);
    var checkBox27 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt27 = document.getElementById("txt1").value;
    var splitTxt27 = checkBoxTxt27.split(",");
    let hasText27 = false;
    for (let i = 0; i< splitTxt27.length; i++){
        if(splitTxt27[i] == 'application25') {
            console.log("Girdi2");
            hasText27 = true;
            break;
        }
    }
    checkBox27.appearanceState = hasText27 ? 'On' : 'Off';
    checkBox27.readOnly = false;
    checkBox27.fieldName = "Kanama durdurucu ajan uygulaması";
    checkBox27.Rect = [54, 116, 2, 2];
    checkBox27.value = 'application25';
    doc.addField(checkBox27);

    doc.setFontSize(5);
    doc.text(" Cut down uygulaması",56,120.5);
    var checkBox28 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt28 = document.getElementById("txt1").value;
    var splitTxt28 = checkBoxTxt28.split(",");
    let hasText28 = false;
    for (let i = 0; i< splitTxt28.length; i++){
        if(splitTxt28[i] == 'application00') {
            console.log("Girdi2");
            hasText28 = true;
            break;
        }
    }
    checkBox28.appearanceState = hasText28 ? 'On' : 'Off';
    checkBox28.readOnly = false;
    checkBox28.fieldName = "Cut down uygulaması";
    checkBox28.Rect = [54, 118.5, 2, 2];
    checkBox28.value = 'application00';
    doc.addField(checkBox28);

    doc.setFontSize(5);
    doc.text(" İnfüzyon pompası",56,123);
    var checkBox29 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt29 = document.getElementById("txt1").value;
    var splitTxt29 = checkBoxTxt29.split(",");
    let hasText29 = false;
    for (let i = 0; i< splitTxt29.length; i++){
        if(splitTxt29[i] == 'application26') {
            console.log("Girdi2");
            hasText29 = true;
            break;
        }
    }
    checkBox29.appearanceState = hasText29 ? 'On' : 'Off';
    checkBox29.readOnly = false;
    checkBox29.fieldName = "İnfüzyon pompası";
    checkBox29.Rect = [54, 121, 2, 2];
    checkBox29.value = 'application26';
    doc.addField(checkBox29);

    doc.setFontSize(5);
    doc.text(" Kanama kontrolü",56,125.5);
    var checkBox30 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt30 = document.getElementById("txt1").value;
    var splitTxt30 = checkBoxTxt30.split(",");
    let hasText30 = false;
    for (let i = 0; i< splitTxt30.length; i++){
        if(splitTxt30[i] == 'application27') {
            console.log("Girdi2");
            hasText30 = true;
            break;
        }
    }
    checkBox30.appearanceState = hasText30 ? 'On' : 'Off';
    checkBox30.readOnly = false;
    checkBox30.fieldName = "Kanama kontrolü";
    checkBox30.Rect = [54, 123.5, 2, 2];
    checkBox30.value = 'application27';
    doc.addField(checkBox30);

    doc.setFontSize(5);
    doc.text(" Çubuk atel uygulaması",56,128);
    var checkBox31 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt31 = document.getElementById("txt1").value;
    var splitTxt31 = checkBoxTxt31.split(",");
    let hasText31 = false;
    for (let i = 0; i< splitTxt31.length; i++){
        if(splitTxt31[i] == 'application28') {
            console.log("Girdi2");
            hasText31 = true;
            break;
        }
    }
    checkBox31.appearanceState = hasText31 ? 'On' : 'Off';
    checkBox31.readOnly = false;
    checkBox31.fieldName = "Çubuk atel uygulaması";
    checkBox31.Rect = [54, 126, 2, 2];
    checkBox31.value = 'application28';
    doc.addField(checkBox31);

    doc.setFontSize(5);
    doc.text(" Vakum atel uygulaması",56,130.5);
    var checkBox32 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt32 = document.getElementById("txt1").value;
    var splitTxt32 = checkBoxTxt32.split(",");
    let hasText32 = false;
    for (let i = 0; i< splitTxt32.length; i++){
        if(splitTxt32[i] == 'application29') {
            console.log("Girdi2");
            hasText32 = true;
            break;
        }
    }
    checkBox32.appearanceState = hasText32 ? 'On' : 'Off';
    checkBox32.readOnly = false;
    checkBox32.fieldName = " Vakum atel uygulaması";
    checkBox32.Rect = [54, 128.5, 2, 2];
    checkBox32.value = 'application29';
    doc.addField(checkBox32);

    doc.setFontSize(5);
    doc.text(" Şişme atel uygulaması",56,133);
    var checkBox33 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt33 = document.getElementById("txt1").value;
    var splitTxt33 = checkBoxTxt33.split(",");
    let hasText33 = false;
    for (let i = 0; i< splitTxt33.length; i++){
        if(splitTxt33[i] == 'application30') {
            console.log("Girdi2");
            hasText33 = true;
            break;
        }
    }
    checkBox33.appearanceState = hasText33 ? 'On' : 'Off';
    checkBox33.readOnly = false;
    checkBox33.fieldName = "Şişme atel uygulaması";
    checkBox33.Rect = [54, 131, 2, 2];
    checkBox33.value = 'application30';
    doc.addField(checkBox33);

    doc.setFontSize(5);
    doc.text(" U atel uygulaması",56,135.5);
    var checkBox34 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt34 = document.getElementById("txt1").value;
    var splitTxt34 = checkBoxTxt34.split(",");
    let hasText34 = false;
    for (let i = 0; i< splitTxt34.length; i++){
        if(splitTxt34[i] == 'application31') {
            console.log("Girdi2");
            hasText34 = true;
            break;
        }
    }
    checkBox34.appearanceState = hasText34 ? 'On' : 'Off';
    checkBox34.readOnly = false;
    checkBox34.fieldName = "U atel uygulaması";
    checkBox34.Rect = [54, 133.5, 2, 2];
    checkBox34.value = 'application31';
    doc.addField(checkBox34);

    doc.setFontSize(5);
    doc.text(" Traksiyon atel uygulaması",56,138);
    var checkBox35 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt35 = document.getElementById("txt1").value;
    var splitTxt35 = checkBoxTxt35.split(",");
    let hasText35 = false;
    for (let i = 0; i< splitTxt35.length; i++){
        if(splitTxt35[i] == 'application32') {
            console.log("Girdi2");
            hasText35 = true;
            break;
        }
    }
    checkBox35.appearanceState = hasText35 ? 'On' : 'Off';
    checkBox35.readOnly = false;
    checkBox35.fieldName = "Traksiyon atel uygulaması";
    checkBox35.Rect = [54, 136, 2, 2];
    checkBox35.value = 'application32';
    doc.addField(checkBox35);

    doc.setFontSize(5);
    doc.text(" Pelvis kemeri uygulaması",56,140.5);
    var checkBox36 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt36 = document.getElementById("txt1").value;
    var splitTxt36 = checkBoxTxt36.split(",");
    let hasText36 = false;
    for (let i = 0; i< splitTxt36.length; i++){
        if(splitTxt36[i] == 'application33') {
            console.log("Girdi2");
            hasText36 = true;
            break;
        }
    }
    checkBox36.appearanceState = hasText36 ? 'On' : 'Off';
    checkBox36.readOnly = false;
    checkBox36.fieldName = "Pelvis kemeri uygulaması";
    checkBox36.Rect = [54, 138.5, 2, 2];
    checkBox36.value = 'application33';
    doc.addField(checkBox36);

    doc.setFontSize(5);
    doc.text(" Sekiz bandaj uygulaması",56,143);
    var checkBox37 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt37 = document.getElementById("txt1").value;
    var splitTxt37 = checkBoxTxt37.split(",");
    let hasText37 = false;
    for (let i = 0; i< splitTxt37.length; i++){
        if(splitTxt37[i] == 'application34') {
            console.log("Girdi2");
            hasText37 = true;
            break;
        }
    }
    checkBox37.appearanceState = hasText37 ? 'On' : 'Off';
    checkBox37.readOnly = false;
    checkBox37.fieldName = "Sekiz bandaj uygulaması";
    checkBox37.Rect = [54, 141, 2, 2];
    checkBox37.value = 'application34';
    doc.addField(checkBox37);

    doc.setFontSize(5);
    doc.text(" Elastik bandaj (velpa)",56,145.5);
    var checkBox38 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt38 = document.getElementById("txt1").value;
    var splitTxt38 = checkBoxTxt38.split(",");
    let hasText38 = false;
    for (let i = 0; i< splitTxt38.length; i++){
        if(splitTxt38[i] == 'application35') {
            console.log("Girdi2");
            hasText38 = true;
            break;
        }
    }
    checkBox38.appearanceState = hasText38 ? 'On' : 'Off';
    checkBox38.readOnly = false;
    checkBox38.fieldName = "Elastik bandaj (velpa)";
    checkBox38.Rect = [54, 143.5, 2, 2];
    checkBox38.value = 'application35';
    doc.addField(checkBox38);

    doc.setFontSize(5);
    doc.text(" Femur(vücut) traksiyonu",56,148);
    var checkBox39 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt39 = document.getElementById("txt1").value;
    var splitTxt39 = checkBoxTxt39.split(",");
    let hasText39 = false;
    for (let i = 0; i< splitTxt39.length; i++){
        if(splitTxt39[i] == 'application36') {
            console.log("Girdi2");
            hasText39 = true;
            break;
        }
    }
    checkBox39.appearanceState = hasText39 ? 'On' : 'Off';
    checkBox39.readOnly = false;
    checkBox39.fieldName = "Femur(vücut) traksiyonu";
    checkBox39.Rect = [54, 146, 2, 2];
    checkBox39.value = 'application36';
    doc.addField(checkBox39);

    doc.setFontSize(5);
    doc.text(" Eklem çıkığı kapalı redüksiyonu",56,150.5);
    var checkBox40 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt40 = document.getElementById("txt1").value;
    var splitTxt40 = checkBoxTxt40.split(",");
    let hasText40 = false;
    for (let i = 0; i< splitTxt40.length; i++){
        if(splitTxt40[i] == 'application37') {
            console.log("Girdi2");
            hasText40 = true;
            break;
        }
    }
    checkBox40.appearanceState = hasText40 ? 'On' : 'Off';
    checkBox40.readOnly = false;
    checkBox40.fieldName = "Eklem çıkığı kapalı redüksiyonu";
    checkBox40.Rect = [54, 148.5, 2, 2];
    checkBox40.value = 'application37';
    doc.addField(checkBox40);

    doc.setFontSize(5);
    doc.text(" Servical collar uygulama",56,153);
    var checkBox41 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt41 = document.getElementById("txt1").value;
    var splitTxt41 = checkBoxTxt41.split(",");
    let hasText41 = false;
    for (let i = 0; i< splitTxt41.length; i++){
        if(splitTxt41[i] == 'application38') {
            console.log("Girdi2");
            hasText41 = true;
            break;
        }
    }
    checkBox41.appearanceState = hasText41 ? 'On' : 'Off';
    checkBox41.readOnly = false;
    checkBox41.fieldName = "Servical collar uygulama";
    checkBox41.Rect = [54, 151, 2, 2];
    checkBox41.value = 'application38';
    doc.addField(checkBox41);

    doc.setFontSize(5);
    doc.text(" Travma yeleği",56,155.5);
    var checkBox42 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt42 = document.getElementById("txt1").value;
    var splitTxt42 = checkBoxTxt42.split(",");
    let hasText42 = false;
    for (let i = 0; i< splitTxt42.length; i++){
        if(splitTxt42[i] == 'application39') {
            console.log("Girdi2");
            hasText42 = true;
            break;
        }
    }
    checkBox42.appearanceState = hasText42 ? 'On' : 'Off';
    checkBox42.readOnly = false;
    checkBox42.fieldName = "Travma yeleğ";
    checkBox42.Rect = [54, 153.5, 2, 2];
    checkBox42.value = 'application39';
    doc.addField(checkBox42);

    // doc.setFontSize(5);
    // doc.text(" Faraş sedye uygulaması",56,158);
    // var checkBox = new jspdf.AcroFormCheckBox();
    // var checkBoxTxt2 = document.getElementById("txt1").value;
    // var splitTxt2 = checkBoxTxt2.split(",");
    // let hasText43 = false;
    // for (let i = 0; i< splitTxt2.length; i++){
    //     if(splitTxt2[i] == 'application41') {
    //         console.log("Girdi2");
    //         hasText43 = true;
    //         break;
    //     }
    // }
    // checkBox2.appearanceState = hasText43 ? 'On' : 'Off';
    // checkBox.readOnly = false;
    // checkBox.fieldName = "Faraş sedye uygulaması";
    // checkBox.Rect = [54, 156, 2, 2];
    // checkBox.value = 'application41'
    // doc.addField(checkBox);

    doc.setFontSize(5);
    doc.text(" Sırt tahtası uygulaması",56,160.5);
    var checkBox43 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt43 = document.getElementById("txt1").value;
    var splitTxt43 = checkBoxTxt43.split(",");
    let hasText43 = false;
    for (let i = 0; i< splitTxt43.length; i++){
        if(splitTxt43[i] == 'application41') {
            console.log("Girdi2");
            hasText43 = true;
            break;
        }
    }
    checkBox43.appearanceState = hasText43 ? 'On' : 'Off';
    checkBox43.readOnly = false;
    checkBox43.fieldName = "Sırt tahtası uygulaması";
    checkBox43.Rect = [54, 158.5, 2, 2];
    checkBox43.value = 'application41';
    doc.addField(checkBox43);

    doc.setFontSize(5);
    doc.text(" Vakum sedye uygulaması",56,163);
    var checkBox44 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt44 = document.getElementById("txt1").value;
    var splitTxt44 = checkBoxTxt44.split(",");
    let hasText44 = false;
    for (let i = 0; i< splitTxt44.length; i++){
        if(splitTxt44[i] == 'application42') {
            console.log("Girdi2");
            hasText44 = true;
            break;
        }
    }
    checkBox44.appearanceState = hasText44 ? 'On' : 'Off';
    checkBox44.readOnly = false;
    checkBox44.fieldName = "Vakum sedye uygulaması";
    checkBox44.Rect = [54, 161, 2, 2];
    checkBox44.value = 'application42';
    doc.addField(checkBox44);

    doc.setFontSize(5);
    doc.text(" Atel+velpau",56,165.5);
    var checkBox45 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt45 = document.getElementById("txt1").value;
    var splitTxt45 = checkBoxTxt45.split(",");
    let hasText45 = false;
    for (let i = 0; i< splitTxt45.length; i++){
        if(splitTxt45[i] == 'application43') {
            console.log("Girdi2");
            hasText45 = true;
            break;
        }
    }
    checkBox45.appearanceState = hasText45 ? 'On' : 'Off';
    checkBox45.readOnly = false;
    checkBox45.fieldName = "Atel+velpau";
    checkBox45.Rect = [54, 163.5, 2, 2];
    checkBox45.value = 'application43';
    doc.addField(checkBox45);

    doc.setFontSize(5);
    doc.text(" Cilt traksiyonu uygulaması",56,168);
    var checkBox46 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt46 = document.getElementById("txt1").value;
    var splitTxt46 = checkBoxTxt46.split(",");
    let hasText46 = false;
    for (let i = 0; i< splitTxt46.length; i++){
        if(splitTxt46[i] == 'application44') {
            console.log("Girdi2");
            hasText46 = true;
            break;
        }
    }
    checkBox46.appearanceState = hasText46 ? 'On' : 'Off';
    checkBox46.readOnly = false;
    checkBox46.fieldName = "Cilt traksiyonu uygulaması";
    checkBox46.Rect = [54, 166, 2, 2];
    checkBox46.value = 'application44';
    doc.addField(checkBox46);

    doc.setFontSize(5);
    doc.text(" Apse veya hematom drenajı (yüzeyel)",56,170.5);
    var checkBox47 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt47 = document.getElementById("txt1").value;
    var splitTxt47 = checkBoxTxt47.split(",");
    let hasText47 = false;
    for (let i = 0; i< splitTxt47.length; i++){
        if(splitTxt47[i] == 'application45') {
            console.log("Girdi2");
            hasText47 = true;
            break;
        }
    }
    checkBox47.appearanceState = hasText47 ? 'On' : 'Off';
    checkBox47.readOnly = false;
    checkBox47.fieldName = "Apse veya hematom drenajı (yüzeyel)";
    checkBox47.Rect = [54, 168.5, 2, 2];
    checkBox47.value = 'application45';
    doc.addField(checkBox47);

    doc.setFontSize(5);
    doc.text(" Sütur atılması",56,173);
    var checkBox48 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt48 = document.getElementById("txt1").value;
    var splitTxt48 = checkBoxTxt48.split(",");
    let hasText48 = false;
    for (let i = 0; i< splitTxt48.length; i++){
        if(splitTxt48[i] == 'application46') {
            console.log("Girdi2");
            hasText48 = true;
            break;
        }
    }
    checkBox48.appearanceState = hasText48 ? 'On' : 'Off';
    checkBox48.readOnly = false;
    checkBox48.fieldName = "Sütur atılması";
    checkBox48.Rect = [54, 171, 2, 2];
    checkBox48.value = 'application46';
    doc.addField(checkBox48);

    doc.setFontSize(5);
    doc.text(" Sütur alınması",56,175.5);
    var checkBox49 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt49 = document.getElementById("txt1").value;
    var splitTxt49 = checkBoxTxt49.split(",");
    let hasText49 = false;
    for (let i = 0; i< splitTxt49.length; i++){
        if(splitTxt49[i] == 'application47') {
            console.log("Girdi2");
            hasText49 = true;
            break;
        }
    }
    checkBox49.appearanceState = hasText49 ? 'On' : 'Off';
    checkBox49.readOnly = false;
    checkBox49.fieldName = "Sütur alınması";
    checkBox49.Rect = [54, 173.5, 2, 2];
    checkBox49.value = 'application47';
    doc.addField(checkBox49);

// ====================================
    doc.setFontSize(5);
    doc.text(" Mide lavajı",98,118);
    var checkBox50 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt50 = document.getElementById("txt1").value;
    var splitTxt50 = checkBoxTxt50.split(",");
    let hasText50 = false;
    for (let i = 0; i< splitTxt50.length; i++){
        if(splitTxt50[i] == 'application48') {
            console.log("Girdi2");
            hasText50 = true;
            break;
        }
    }
    checkBox50.appearanceState = hasText50 ? 'On' : 'Off';
    checkBox50.readOnly = false;
    checkBox50.fieldName = "Mide lavajı";
    checkBox50.Rect = [96, 116, 2, 2];
    checkBox50.value = 'application48';
    doc.addField(checkBox50);

    doc.setFontSize(5);
    doc.text(" Ng sonda takılması",98,120.5);
    var checkBox51 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt51 = document.getElementById("txt1").value;
    var splitTxt51 = checkBoxTxt51.split(",");
    let hasText51 = false;
    for (let i = 0; i< splitTxt51.length; i++){
        if(splitTxt51[i] == 'application49') {
            console.log("Girdi2");
            hasText51 = true;
            break;
        }
    }
    checkBox51.appearanceState = hasText51 ? 'On' : 'Off';
    checkBox51.readOnly = false;
    checkBox51.fieldName = "Ng sonda takılması";
    checkBox51.Rect = [96, 118.5, 2, 2];
    checkBox51.value = 'application49';
    doc.addField(checkBox51);

    doc.setFontSize(5);
    doc.text(" Mesane sondası takılması",98,123);
    var checkBox52 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt52 = document.getElementById("txt1").value;
    var splitTxt52 = checkBoxTxt52.split(",");
    let hasText52 = false;
    for (let i = 0; i< splitTxt52.length; i++){
        if(splitTxt52[i] == 'application50') {
            console.log("Girdi2");
            hasText52 = true;
            break;
        }
    }
    checkBox52.appearanceState = hasText52 ? 'On' : 'Off';
    checkBox52.readOnly = false;
    checkBox52.fieldName = "Mesane sondası takılması";
    checkBox52.Rect = [96, 121, 2, 2];
    checkBox52.value = 'application50';
    doc.addField(checkBox52);

    doc.setFontSize(5);
    doc.text(" Küçük cerrahi mudahale",98,125.5);
    var checkBox53 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt53 = document.getElementById("txt1").value;
    var splitTxt53 = checkBoxTxt53.split(",");
    let hasText53 = false;
    for (let i = 0; i< splitTxt53.length; i++){
        if(splitTxt53[i] == 'application51') {
            console.log("Girdi2");
            hasText53 = true;
            break;
        }
    }
    checkBox53.appearanceState = hasText53 ? 'On' : 'Off';
    checkBox53.readOnly = false;
    checkBox53.fieldName = "Küçük cerrahi mudahale";
    checkBox53.Rect = [96, 123.5, 2, 2];
    checkBox53.value = 'application51';
    doc.addField(checkBox53);

    doc.setFontSize(5);
    doc.text(" Yanık pansuman (büyük)",98,128);
    var checkBox54 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt54 = document.getElementById("txt1").value;
    var splitTxt54 = checkBoxTxt54.split(",");
    let hasText54 = false;
    for (let i = 0; i< splitTxt54.length; i++){
        if(splitTxt54[i] == 'application52') {
            console.log("Girdi2");
            hasText54 = true;
            break;
        }
    }
    checkBox54.appearanceState = hasText54 ? 'On' : 'Off';
    checkBox54.readOnly = false;
    checkBox54.fieldName = "Yanık pansuman (büyük)";
    checkBox54.Rect = [96, 126, 2, 2];
    checkBox54.value = 'application52';
    doc.addField(checkBox54);

    doc.setFontSize(5);
    doc.text(" Yanık pansuman (orta)",98,130.5);
    var checkBox55 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt55 = document.getElementById("txt1").value;
    var splitTxt55 = checkBoxTxt55.split(",");
    let hasText55 = false;
    for (let i = 0; i< splitTxt55.length; i++){
        if(splitTxt55[i] == 'application53') {
            console.log("Girdi2");
            hasText55 = true;
            break;
        }
    }
    checkBox55.appearanceState = hasText55 ? 'On' : 'Off';
    checkBox55.readOnly = false;
    checkBox55.fieldName = "Yanık pansuman (orta)";
    checkBox55.Rect = [96, 128.5, 2, 2];
    checkBox55.value = 'application53';
    doc.addField(checkBox55);

    doc.setFontSize(5);
    doc.text(" Yanık pansuman (küçük)",98,133);
    var checkBox56 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt56 = document.getElementById("txt1").value;
    var splitTxt56 = checkBoxTxt56.split(",");
    let hasText56 = false;
    for (let i = 0; i< splitTxt56.length; i++){
        if(splitTxt56[i] == 'application54') {
            console.log("Girdi2");
            hasText56 = true;
            break;
        }
    }
    checkBox56.appearanceState = hasText56 ? 'On' : 'Off';
    checkBox56.readOnly = false;
    checkBox56.fieldName = "Yanık pansuman (küçük)";
    checkBox56.Rect = [96, 131, 2, 2];
    checkBox56.value = 'application54';
    doc.addField(checkBox56);

    doc.setFontSize(5);
    doc.text(" Pansuman (büyük)",98,135.5);
    var checkBox57 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt57 = document.getElementById("txt1").value;
    var splitTxt57 = checkBoxTxt57.split(",");
    let hasText57 = false;
    for (let i = 0; i< splitTxt57.length; i++){
        if(splitTxt57[i] == 'application55') {
            console.log("Girdi2");
            hasText57 = true;
            break;
        }
    }
    checkBox57.appearanceState = hasText57 ? 'On' : 'Off';
    checkBox57.readOnly = false;
    checkBox57.fieldName = "Pansuman (büyük)";
    checkBox57.Rect = [96, 133.5, 2, 2];
    checkBox57.value = 'application55';
    doc.addField(checkBox57);

    doc.setFontSize(5);
    doc.text(" Pansuman (küçük)",98,138);
    var checkBox58 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt58 = document.getElementById("txt1").value;
    var splitTxt58 = checkBoxTxt58.split(",");
    let hasText58 = false;
    for (let i = 0; i< splitTxt58.length; i++){
        if(splitTxt58[i] == 'application56') {
            console.log("Girdi2");
            hasText58 = true;
            break;
        }
    }
    checkBox58.appearanceState = hasText58 ? 'On' : 'Off';
    checkBox58.readOnly = false;
    checkBox58.fieldName = "Pansuman (küçük)";
    checkBox58.Rect = [96, 136, 2, 2];
    checkBox58.value = 'application56';
    doc.addField(checkBox58);

    doc.setFontSize(5);
    doc.text(" Burun tamponu uygulaması",98,140.5);
    var checkBox59 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt59 = document.getElementById("txt1").value;
    var splitTxt59 = checkBoxTxt59.split(",");
    let hasText59 = false;
    for (let i = 0; i< splitTxt59.length; i++){
        if(splitTxt59[i] == 'application57') {
            console.log("Girdi2");
            hasText59 = true;
            break;
        }
    }
    checkBox59.appearanceState = hasText59 ? 'On' : 'Off';
    checkBox59.readOnly = false;
    checkBox59.fieldName = "Burun tamponu uygulaması";
    checkBox59.Rect = [96, 138.5, 2, 2];
    checkBox59.value = 'application57';
    doc.addField(checkBox59);

    doc.setFontSize(5);
    doc.text(" Burundan yabancı cisim çıkarma",98,143);
    var checkBox60 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt60 = document.getElementById("txt1").value;
    var splitTxt60 = checkBoxTxt60.split(",");
    let hasText60 = false;
    for (let i = 0; i< splitTxt60.length; i++){
        if(splitTxt60[i] == 'application58') {
            console.log("Girdi2");
            hasText60 = true;
            break;
        }
    }
    checkBox60.appearanceState = hasText60 ? 'On' : 'Off';
    checkBox60.readOnly = false;
    checkBox60.fieldName = "Burundan yabancı cisim çıkarma";
    checkBox60.Rect = [96, 141, 2, 2];
    checkBox60.value = 'application58';
    doc.addField(checkBox60);

    doc.setFontSize(5);
    doc.text(" Korneadan Yabancı cisim çıkarma",98,145.5);
    var checkBox61 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt61 = document.getElementById("txt1").value;
    var splitTxt61 = checkBoxTxt61.split(",");
    let hasText61 = false;
    for (let i = 0; i< splitTxt61.length; i++){
        if(splitTxt61[i] == 'application59') {
            console.log("Girdi2");
            hasText61 = true;
            break;
        }
    }
    checkBox61.appearanceState = hasText61 ? 'On' : 'Off';
    checkBox61.readOnly = false;
    checkBox61.fieldName = "Korneadan Yabancı cisim çıkarma";
    checkBox61.Rect = [96, 143.5, 2, 2];
    checkBox61.value = 'application59';
    doc.addField(checkBox61);

    doc.setFontSize(5);
    doc.text(" Dış Kulaktan yabancı cisim çıkarma",98,148);
    var checkBox62 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt62 = document.getElementById("txt1").value;
    var splitTxt62 = checkBoxTxt62.split(",");
    let hasText62 = false;
    for (let i = 0; i< splitTxt62.length; i++){
        if(splitTxt62[i] == 'application60') {
            console.log("Girdi2");
            hasText62 = true;
            break;
        }
    }
    checkBox62.appearanceState = hasText62 ? 'On' : 'Off';
    checkBox62.readOnly = false;
    checkBox62.fieldName = "Dış Kulaktan yabancı cisim çıkarma";
    checkBox62.Rect = [96, 146, 2, 2];
    checkBox62.value = 'application60';
    doc.addField(checkBox62);

    doc.setFontSize(5);
    doc.text(" Konjuktivadan yabancı cisim çıkarma",98,150.5);
    var checkBox63 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt63 = document.getElementById("txt1").value;
    var splitTxt63 = checkBoxTxt63.split(",");
    let hasText63 = false;
    for (let i = 0; i< splitTxt63.length; i++){
        if(splitTxt63[i] == 'application61') {
            console.log("Girdi2");
            hasText63 = true;
            break;
        }
    }
    checkBox63.appearanceState = hasText63 ? 'On' : 'Off';
    checkBox63.readOnly = false;
    checkBox63.fieldName = "Konjuktivadan yabancı cisim çıkarma";
    checkBox63.Rect = [96, 148.5, 2, 2];
    checkBox63.value = 'application61';
    doc.addField(checkBox63);

    doc.setFontSize(5);
    doc.text(" Larinksten yabancı cisim çıkarılması",98,153);
    var checkBox64 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt64 = document.getElementById("txt1").value;
    var splitTxt64 = checkBoxTxt64.split(",");
    let hasText64 = false;
    for (let i = 0; i< splitTxt64.length; i++){
        if(splitTxt64[i] == 'application62') {
            console.log("Girdi2");
            hasText64 = true;
            break;
        }
    }
    checkBox64.appearanceState = hasText64 ? 'On' : 'Off';
    checkBox64.readOnly = false;
    checkBox64.fieldName = "Larinksten yabancı cisim çıkarılması";
    checkBox64.Rect = [96, 151, 2, 2];
    checkBox64.value = 'application62';
    doc.addField(checkBox64);

    doc.setFontSize(5);
    doc.text(" Dekübit yara debrimanı",98,155.5);
    var checkBox65 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt65 = document.getElementById("txt1").value;
    var splitTxt65 = checkBoxTxt65.split(",");
    let hasText65 = false;
    for (let i = 0; i< splitTxt65.length; i++){
        if(splitTxt65[i] == 'application63') {
            console.log("Girdi2");
            hasText65 = true;
            break;
        }
    }
    checkBox65.appearanceState = hasText65 ? 'On' : 'Off';
    checkBox65.readOnly = false;
    checkBox65.fieldName = "Dekübit yara debrimanı";
    checkBox65.Rect = [96, 153.5, 2, 2];
    checkBox65.value = 'application63';
    doc.addField(checkBox65);

    doc.setFontSize(5);
    doc.text(" Yara debrimanı",98,158);
    var checkBox66 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt66 = document.getElementById("txt1").value;
    var splitTxt66 = checkBoxTxt66.split(",");
    let hasText66 = false;
    for (let i = 0; i< splitTxt66.length; i++){
        if(splitTxt66[i] == 'application64') {
            console.log("Girdi2");
            hasText66 = true;
            break;
        }
    }
    checkBox66.appearanceState = hasText66 ? 'On' : 'Off';
    checkBox66.readOnly = false;
    checkBox66.fieldName = "Yara debrimanı";
    checkBox66.Rect = [96, 156, 2, 2];
    checkBox66.value = 'application64';
    doc.addField(checkBox66);

    doc.setFontSize(5);
    doc.text(" Yenidogan entübasyonu",98,160.5);
    var checkBox67 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt67 = document.getElementById("txt1").value;
    var splitTxt67 = checkBoxTxt67.split(",");
    let hasText67 = false;
    for (let i = 0; i< splitTxt67.length; i++){
        if(splitTxt67[i] == 'application65') {
            console.log("Girdi2");
            hasText67 = true;
            break;
        }
    }
    checkBox67.appearanceState = hasText67 ? 'On' : 'Off';
    checkBox67.readOnly = false;
    checkBox67.fieldName = "Yenidogan entübasyonu";
    checkBox67.Rect = [96, 158.5, 2, 2];
    checkBox67.value = 'application65';
    doc.addField(checkBox67);

    doc.setFontSize(5);
    doc.text(" Yenidogan IM.enjeksiyon",98,163);
    var checkBox68 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt68 = document.getElementById("txt1").value;
    var splitTxt68 = checkBoxTxt68.split(",");
    let hasText68 = false;
    for (let i = 0; i< splitTxt68.length; i++){
        if(splitTxt68[i] == 'application66') {
            console.log("Girdi2");
            hasText68 = true;
            break;
        }
    }
    checkBox68.appearanceState = hasText68 ? 'On' : 'Off';
    checkBox68.readOnly = false;
    checkBox68.fieldName = "Yenidogan IM.enjeksiyon";
    checkBox68.Rect = [96, 161, 2, 2];
    checkBox68.value = 'application66';
    doc.addField(checkBox68);

    doc.setFontSize(5);
    doc.text(" Yenidogan IV mayi takılması",98,165.5);
    var checkBox69 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt69 = document.getElementById("txt1").value;
    var splitTxt69 = checkBoxTxt69.split(",");
    let hasText69 = false;
    for (let i = 0; i< splitTxt69.length; i++){
        if(splitTxt69[i] == 'application67') {
            console.log("Girdi2");
            hasText69 = true;
            break;
        }
    }
    checkBox69.appearanceState = hasText69 ? 'On' : 'Off';
    checkBox69.readOnly = false;
    checkBox69.fieldName = "Yenidogan IV mayi takılması";
    checkBox69.Rect = [96, 163.5, 2, 2];
    checkBox69.value = 'application67';
    doc.addField(checkBox69);

    doc.setFontSize(5);
    doc.text(" Yenidogan IV enjeksiyon uyg.",98,168);
    var checkBox70 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt70 = document.getElementById("txt1").value;
    var splitTxt70 = checkBoxTxt70.split(",");
    let hasText70 = false;
    for (let i = 0; i< splitTxt70.length; i++){
        if(splitTxt70[i] == 'application68') {
            console.log("Girdi2");
            hasText70 = true;
            break;
        }
    }
    checkBox70.appearanceState = hasText70 ? 'On' : 'Off';
    checkBox70.readOnly = false;
    checkBox70.fieldName = "Yenidogan IV enjeksiyon uyg.";
    checkBox70.Rect = [96, 166, 2, 2];
    checkBox70.value = 'application68';
    doc.addField(checkBox70);

    doc.setFontSize(5);
    doc.text(" STransport küvözü ile nakil",98,170.5);
    var checkBox71 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt71 = document.getElementById("txt1").value;
    var splitTxt71 = checkBoxTxt71.split(",");
    let hasText71 = false;
    for (let i = 0; i< splitTxt71.length; i++){
        if(splitTxt71[i] == 'application69') {
            console.log("Girdi2");
            hasText71 = true;
            break;
        }
    }
    checkBox71.appearanceState = hasText71 ? 'On' : 'Off';
    checkBox71.readOnly = false;
    checkBox71.fieldName = "STransport küvözü ile nakil";
    checkBox71.Rect = [96, 168.5, 2, 2];
    checkBox71.value = 'application69';
    doc.addField(checkBox71);

    doc.setFontSize(5);
    doc.text(" Yenidogan monitörizasyon",98,173);
    var checkBox72 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt72 = document.getElementById("txt1").value;
    var splitTxt72 = checkBoxTxt72.split(",");
    let hasText72 = false;
    for (let i = 0; i< splitTxt72.length; i++){
        if(splitTxt72[i] == 'application70') {
            console.log("Girdi2");
            hasText72 = true;
            break;
        }
    }
    checkBox72.appearanceState = hasText72 ? 'On' : 'Off';
    checkBox72.readOnly = false;
    checkBox72.fieldName = "Yenidogan monitörizasyon";
    checkBox72.Rect = [96, 171, 2, 2];
    checkBox72.value = 'application70';
    doc.addField(checkBox72);

    doc.setFontSize(5);
    doc.text(" Yenidoğan ventilasyon",98,175.5);
    var checkBox73 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt73 = document.getElementById("txt1").value;
    var splitTxt73 = checkBoxTxt73.split(",");
    let hasText73 = false;
    for (let i = 0; i< splitTxt73.length; i++){
        if(splitTxt73[i] == 'application71') {
            console.log("Girdi2");
            hasText73 = true;
            break;
        }
    }
    checkBox73.appearanceState = hasText73 ? 'On' : 'Off';
    checkBox73.readOnly = false;
    checkBox73.fieldName = "Yenidoğan ventilasyon";
    checkBox73.Rect = [96, 173.5, 2, 2];
    checkBox73.value = 'application71';
    doc.addField(checkBox73);
// ==============================

    doc.setFontSize(5);
    doc.text(" Yenidoğan canlandırma",135,118);
    var checkBox74 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt74 = document.getElementById("txt1").value;
    var splitTxt74 = checkBoxTxt74.split(",");
    let hasText74 = false;
    for (let i = 0; i< splitTxt74.length; i++){
        if(splitTxt74[i] == 'application72') {
            console.log("Girdi2");
            hasText74 = true;
            break;
        }
    }
    checkBox74.appearanceState = hasText74 ? 'On' : 'Off';
    checkBox74.readOnly = false;
    checkBox74.fieldName = "Yenidoğan canlandırma";
    checkBox74.Rect = [133, 116, 2, 2];
    checkBox74.value = 'application72';
    doc.addField(checkBox74);

    doc.setFontSize(5);
    doc.text(" Lokal anestezi",135,120.5);
    var checkBox75 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt75 = document.getElementById("txt1").value;
    var splitTxt75 = checkBoxTxt75.split(",");
    let hasText75 = false;
    for (let i = 0; i< splitTxt75.length; i++){
        if(splitTxt75[i] == 'application73') {
            console.log("Girdi2");
            hasText75 = true;
            break;
        }
    }
    checkBox75.appearanceState = hasText75 ? 'On' : 'Off';
    checkBox75.readOnly = false;
    checkBox75.fieldName = "Lokal anestezi";
    checkBox75.Rect = [133, 118.5, 2, 2];
    checkBox75.value = 'application73';
    doc.addField(checkBox75);

    doc.setFontSize(5);
    doc.text(" Komplikasyonlu doğum",135,123);
    var checkBox76 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt76 = document.getElementById("txt1").value;
    var splitTxt76 = checkBoxTxt76.split(",");
    let hasText76 = false;
    for (let i = 0; i< splitTxt76.length; i++){
        if(splitTxt76[i] == 'application74') {
            console.log("Girdi2");
            hasText76 = true;
            break;
        }
    }
    checkBox76.appearanceState = hasText76 ? 'On' : 'Off';
    checkBox76.readOnly = false;
    checkBox76.fieldName = "Komplikasyonlu doğum";
    checkBox76.Rect = [133, 121, 2, 2];
    checkBox76.value = 'application74';
    doc.addField(checkBox76);

    doc.setFontSize(5);
    doc.text(" Normal doğum",135,125.5);
    var checkBox77 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt77 = document.getElementById("txt1").value;
    var splitTxt77 = checkBoxTxt77.split(",");
    let hasText77 = false;
    for (let i = 0; i< splitTxt77.length; i++){
        if(splitTxt77[i] == 'application75') {
            console.log("Girdi2");
            hasText77 = true;
            break;
        }
    }
    checkBox77.appearanceState = hasText77 ? 'On' : 'Off';
    checkBox77.readOnly = false;
    checkBox77.fieldName = "Normal doğum";
    checkBox77.Rect = [133, 123.5, 2, 2];
    checkBox77.value = 'application75';
    doc.addField(checkBox77);

    doc.setFontSize(5);
    doc.text(" Transkutan pao² ölçümü",135,128);
    var checkBox78 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt78 = document.getElementById("txt1").value;
    var splitTxt78 = checkBoxTxt78.split(",");
    let hasText78 = false;
    for (let i = 0; i< splitTxt78.length; i++){
        if(splitTxt78[i] == 'application76') {
            console.log("Girdi2");
            hasText78 = true;
            break;
        }
    }
    checkBox78.appearanceState = hasText78 ? 'On' : 'Off';
    checkBox78.readOnly = false;
    checkBox78.fieldName = "Transkutan pao² ölçümü";
    checkBox78.Rect = [133, 126, 2, 2];
    checkBox78.value = 'application76';
    doc.addField(checkBox78);

    doc.setFontSize(5);
    doc.text(" Kan şekeri ölçümü",135,130.5);
    var checkBox79 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt79 = document.getElementById("txt1").value;
    var splitTxt79 = checkBoxTxt79.split(",");
    let hasText79 = false;
    for (let i = 0; i< splitTxt79.length; i++){
        if(splitTxt79[i] == 'application77') {
            console.log("Girdi2");
            hasText79 = true;
            break;
        }
    }
    checkBox79.appearanceState = hasText79 ? 'On' : 'Off';
    checkBox79.readOnly = false;
    checkBox79.fieldName = "Kan şekeri ölçümü";
    checkBox79.Rect = [133, 128.5, 2, 2];
    checkBox79.value = 'application77';
    doc.addField(checkBox79);


// ================================

    doc.setFontSize(5);
    doc.text(" Evde Muayene",167,118);
    var checkBox80 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt80 = document.getElementById("txt2").value;
    var splitTxt80 = checkBoxTxt80.split(",");
    let hasText80 = false;
    for (let i = 0; i< splitTxt80.length; i++){
        if(splitTxt80[i] == 'transfer1') {
            console.log("Girdi2");
            hasText80 = true;
            break;
        }
    }
    checkBox80.appearanceState = hasText80 ? 'On' : 'Off';
    checkBox80.readOnly = false;
    checkBox80.fieldName = "Evde Muayene";
    checkBox80.Rect = [165, 116, 2, 2];
    checkBox80.value = 'transfer1';
    doc.addField(checkBox80);

    doc.setFontSize(5);
    doc.text(" Yerinde Müdahale",167,120.5);
    var checkBox81 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt81 = document.getElementById("txt2").value;
    var splitTxt81 = checkBoxTxt81.split(",");
    let hasText81 = false;
    for (let i = 0; i< splitTxt81.length; i++){
        if(splitTxt81[i] == 'transfer2') {
            console.log("Girdi2");
            hasText81 = true;
            break;
        }
    }
    checkBox81.appearanceState = hasText81 ? 'On' : 'Off';
    checkBox81.readOnly = false;
    checkBox81.fieldName = "Yerinde Müdahale";
    checkBox81.Rect = [165, 118.5, 2, 2];
    checkBox81.value = 'transfer2';
    doc.addField(checkBox81);

    doc.setFontSize(5);
    doc.text(" Hastaneye Nakil",167,123);
    var checkBox82 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt82 = document.getElementById("txt2").value;
    var splitTxt82 = checkBoxTxt82.split(",");
    let hasText82 = false;
    for (let i = 0; i< splitTxt82.length; i++){
        if(splitTxt82[i] == 'transfer3') {
            console.log("Girdi2");
            hasText82 = true;
            break;
        }
    }
    checkBox82.appearanceState = hasText82 ? 'On' : 'Off';
    checkBox82.readOnly = false;
    checkBox82.fieldName = "Hastaneye Nakil";
    checkBox82.Rect = [165, 121, 2, 2];
    checkBox82.value = 'transfer3';
    doc.addField(checkBox82);

    doc.setFontSize(5);
    doc.text(" Hastaneler Arası Nakil",167,125.5);
    var checkBox83 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt83 = document.getElementById("txt2").value;
    var splitTxt83 = checkBoxTxt83.split(",");
    let hasText83 = false;
    for (let i = 0; i< splitTxt83.length; i++){
        if(splitTxt83[i] == 'transfer4') {
            console.log("Girdi2");
            hasText83 = true;
            break;
        }
    }
    checkBox83.appearanceState = hasText83 ? 'On' : 'Off';
    checkBox83.readOnly = false;
    checkBox83.fieldName = "Hastaneler Arası Nakil";
    checkBox83.Rect = [165, 123.5, 2, 2];
    checkBox83.value = 'transfer4';
    doc.addField(checkBox83);

    doc.setFontSize(5);
    doc.text(" Tıbbi Tetkik İçin Nakil",167,128);
    var checkBox84 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt84 = document.getElementById("txt2").value;
    var splitTxt84 = checkBoxTxt84.split(",");
    let hasText84 = false;
    for (let i = 0; i< splitTxt84.length; i++){
        if(splitTxt84[i] == 'transfer5') {
            console.log("Girdi2");
            hasText84 = true;
            break;
        }
    }
    checkBox84.appearanceState = hasText84 ? 'On' : 'Off';
    checkBox84.readOnly = false;
    checkBox84.fieldName = "Tıbbi Tetkik İçin Nakil";
    checkBox84.Rect = [165, 126, 2, 2];
    checkBox84.value = 'transfer5';
    doc.addField(checkBox84);

    doc.setFontSize(5);
    doc.text(" Eve Nakil",167,130.5);
    var checkBox85 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt85 = document.getElementById("txt2").value;
    var splitTxt85 = checkBoxTxt85.split(",");
    let hasText85 = false;
    for (let i = 0; i< splitTxt85.length; i++){
        if(splitTxt85[i] == 'transfer6') {
            console.log("Girdi2");
            hasText11 = true;
            break;
        }
    }
    checkBox85.appearanceState = hasText85 ? 'On' : 'Off';
    checkBox85.readOnly = false;
    checkBox85.fieldName = "Eve Nakilu";
    checkBox85.Rect = [165, 128.5, 2, 2];
    checkBox85.value = 'transfer6';
    doc.addField(checkBox85);

    doc.setFontSize(5);
    doc.text(" Şehirler arası Nakil",167,133);
    var checkBox86 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt86 = document.getElementById("txt2").value;
    var splitTxt86 = checkBoxTxt86.split(",");
    let hasText86 = false;
    for (let i = 0; i< splitTxt86.length; i++){
        if(splitTxt86[i] == 'transfer7') {
            console.log("Girdi2");
            hasText86 = true;
            break;
        }
    }
    checkBox86.appearanceState = hasText86 ? 'On' : 'Off';
    checkBox86.readOnly = false;
    checkBox86.fieldName = "Şehirler arası Nakil";
    checkBox86.Rect = [165, 131, 2, 2];
    checkBox86.value = 'transfer7';
    doc.addField(checkBox86);

    doc.setFontSize(5);
    doc.text(" Uluslar arası Nakil",167,135.5);
    var checkBox87 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt87 = document.getElementById("txt2").value;
    var splitTxt87 = checkBoxTxt87.split(",");
    let hasText87 = false;
    for (let i = 0; i< splitTxt87.length; i++){
        if(splitTxt87[i] == 'transfer8') {
            console.log("Girdi2");
            hasText87 = true;
            break;
        }
    }
    checkBox87.appearanceState = hasText87 ? 'On' : 'Off';
    checkBox87.readOnly = false;
    checkBox87.fieldName = "Uluslar arası Nakil";
    checkBox87.Rect = [165, 133.5, 2, 2];
    checkBox87.value = 'transfer8';
    doc.addField(checkBox87);

    doc.setFontSize(5);
    doc.text(" İlçe Dışı Transport",167,138);
    var checkBox88 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt88 = document.getElementById("txt2").value;
    var splitTxt88 = checkBoxTxt88.split(",");
    let hasText88 = false;
    for (let i = 0; i< splitTxt88.length; i++){
        if(splitTxt8[i] == 'transfer9') {
            console.log("Girdi2");
            hasText88 = true;
            break;
        }
    }
    checkBox88.appearanceState = hasText88 ? 'On' : 'Off';
    checkBox88.readOnly = false;
    checkBox88.fieldName = "İlçe Dışı Transport";
    checkBox88.Rect = [165, 136, 2, 2];
    checkBox88.value = 'transfer9';
    doc.addField(checkBox88);

    doc.setFontSize(5);
    doc.text(" İlçe İçi Transfer",167,140.5);
    var checkBox89 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt89 = document.getElementById("txt2").value;
    var splitTxt89 = checkBoxTxt89.split(",");
    let hasText89 = false;
    for (let i = 0; i< splitTxt89.length; i++){
        if(splitTxt89[i] == 'transfer10') {
            console.log("Girdi2");
            hasText89 = true;
            break;
        }
    }
    checkBox89.appearanceState = hasText89 ? 'On' : 'Off';
    checkBox89.readOnly = false;
    checkBox89.fieldName = "İlçe İçi Transfer";
    checkBox89.Rect = [165, 138.5, 2, 2];
    checkBox89.value = 'transfer10';
    doc.addField(checkBox89);

    doc.setFontSize(5);
    doc.text(" EX (Yerinde bırakıldı)",167,143);
    var checkBox90 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt90 = document.getElementById("txt1").value;
    var splitTxt90 = checkBoxTxt90.split(",");
    let hasText90 = false;
    for (let i = 0; i< splitTxt90.length; i++){
        if(splitTxt90[i] == 'transfer11') {
            console.log("Girdi2");
            hasText90 = true;
            break;
        }
    }
    checkBox90.appearanceState = hasText90 ? 'On' : 'Off';
    checkBox90.readOnly = false;
    checkBox90.fieldName = "EX (Yerinde bırakıldı)u";
    checkBox90.Rect = [165, 141, 2, 2];
    checkBox90.value = 'transfer11';
    doc.addField(checkBox90);

    doc.setFontSize(5);
    doc.text(" Başka araçla nakil",167,145.5);
    var checkBox91 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt91 = document.getElementById("txt2").value;
    var splitTxt91 = checkBoxTxt91.split(",");
    let hasText91 = false;
    for (let i = 0; i< splitTxt91.length; i++){
        if(splitTxt91[i] == 'transfer12') {
            console.log("Girdi2");
            hasText91 = true;
            break;
        }
    }
    checkBox91.appearanceState = hasText91 ? 'On' : 'Off';
    checkBox91.readOnly = false;
    checkBox91.fieldName = "Başka araçla nakil";
    checkBox91.Rect = [165, 143.5, 2, 2];
    checkBox91.value = 'transfer12';
    doc.addField(checkBox91);

    doc.setFontSize(5);
    doc.text(" Sağlık Tedbiri",167,148);
    var checkBox92 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt92 = document.getElementById("txt2").value;
    var splitTxt92 = checkBoxTxt92.split(",");
    let hasText92 = false;
    for (let i = 0; i< splitTxt92.length; i++){
        if(splitTxt92[i] == 'transfer13') {
            console.log("Girdi2");
            hasText92 = true;
            break;
        }
    }
    checkBox92.appearanceState = hasText92 ? 'On' : 'Off';
    checkBox92.readOnly = false;
    checkBox92.fieldName = "Sağlık Tedbiri";
    checkBox92.Rect = [165, 146, 2, 2];
    checkBox92.value = 'transfer13';
    doc.addField(checkBox92);

    doc.setFontSize(5);
    doc.text(" Diğer",167,150.5);
    var checkBox93 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt93 = document.getElementById("txt2").value;
    var splitTxt93 = checkBoxTxt93.split(",");
    let hasText93 = false;
    for (let i = 0; i< splitTxt93.length; i++){
        if(splitTxt93[i] == 'transfer14') {
            console.log("Girdi2");
            hasText93 = true;
            break;
        }
    }
    checkBox93.appearanceState = hasText93 ? 'On' : 'Off';
    checkBox93.readOnly = false;
    checkBox93.fieldName = "Diğer";
    checkBox93.Rect = [165, 148.5, 2, 2];
    checkBox93.value = 'transfer14';
    doc.addField(checkBox93);

    doc.setFontSize(8);
    doc.text("GENEL UYGULAMA",165,154);

    doc.setFontSize(5);
    doc.text(" Dekontaminasyon",167,156.5);
    var checkBox94 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt94 = document.getElementById("txt3").value;
    var splitTxt94 = checkBoxTxt94.split(",");
    let hasText94 = false;
    for (let i = 0; i< splitTxt94.length; i++){
        if(splitTxt94[i] == 'general1') {
            console.log("Girdi2");
            hasText94 = true;
            break;
        }
    }
    checkBox94.appearanceState = hasText94 ? 'On' : 'Off';
    checkBox94.readOnly = false;
    checkBox94.fieldName = "Dekontaminasyon";
    checkBox94.Rect = [165, 155, 2, 2];
    checkBox94.value = 'general1';
    doc.addField(checkBox94);

    doc.setFontSize(5);
    doc.text(" Refakatçı____ Kişi ",167,159);
    var checkBox95 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt95 = document.getElementById("txt3").value;
    doc.setFontSize(5);
    var number_of_attendants = document.getElementById("number_of_attendants").value;
    doc.text(number_of_attendants,176,159).value;

    var splitTxt95 = checkBoxTxt95.split(",");
    let hasText95 = false;
    for (let i = 0; i< splitTxt95.length; i++){
        if(splitTxt95[i] == 'general2') {
            console.log("Girdi2");
            hasText95 = true;
            break;
        }
    }
    checkBox95.appearanceState = hasText95 ? 'On' : 'Off';
    checkBox95.readOnly = false;
    checkBox95.fieldName = "Refakatçı";
    checkBox95.Rect = [165, 157.5, 2, 2];
    checkBox95.value = 'general2';
    doc.addField(checkBox95);

    doc.setFontSize(5);
    doc.text(" Vaka Değerlendirme",167,161.5);
    var checkBox96 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt96 = document.getElementById("txt3").value;
    var splitTxt96 = checkBoxTxt96.split(",");
    let hasText96 = false;
    for (let i = 0; i< splitTxt96.length; i++){
        if(splitTxt96[i] == 'general3') {
            console.log("Girdi2");
            hasText96 = true;
            break;
        }
    }
    checkBox96.appearanceState = hasText96 ? 'On' : 'Off';
    checkBox96.readOnly = false;
    checkBox96.fieldName = "Vaka Değerlendirme";
    checkBox96.Rect = [165, 160, 2, 2];
    checkBox96.value = 'general3';
    doc.addField(checkBox96);

    doc.setFontSize(5);
    doc.text(" Ambulans Bekleme___ Saat ____ Dakika",167,164);
    var checkBox97 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt97 = document.getElementById("patient_transport_ambulance_waiting").value;

    doc.setFontSize(5);
    var ambulance_waiting_hour = document.getElementById("ambulance_waiting_hour").value;
    var ambulance_waiting_minute = document.getElementById("ambulance_waiting_minute").value;
    doc.text(ambulance_waiting_hour,184,164).value;
    doc.text(ambulance_waiting_minute,191,164).value;

    
    var splitTxt97 = checkBoxTxt97.split(",");
    let hasText97 = false;
    for (let i = 0; i< splitTxt97.length; i++){
        if(splitTxt97[i] == 'patient_transport_ambulance_waiting') {
            console.log("Girdi2");
            hasText97 = true;
            break;
        }
    }
    checkBox97.appearanceState = hasText97 ? 'On' : 'Off';
    checkBox97.readOnly = false;
    checkBox97.fieldName = "Ambulans Bekleme";
    checkBox97.Rect = [165, 162.5, 2, 2];
    checkBox97.value = 'patient_transport_ambulance_waiting';
    doc.addField(checkBox97);

    doc.setFontSize(5);
    doc.text(" Organizasyon___ Saat",167,166.5);
    var checkBox98 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt98 = document.getElementById("organization_hour").value;

    doc.setFontSize(5);
    var organization_hour = document.getElementById("organization_hour").value;
    doc.text(organization_hour,179,166.5).value;

    var splitTxt98 = checkBoxTxt98.split(",");
    let hasText98 = false;
    for (let i = 0; i< splitTxt98.length; i++){
        if(splitTxt98[i] == 'organization_hour') {
            console.log("Girdi2");
            hasText98 = true;
            break;
        }
    }
    checkBox98.appearanceState = hasText98 ? 'On' : 'Off';
    checkBox98.readOnly = false;
    checkBox98.fieldName = "Organizasyon";
    checkBox98.Rect = [165, 165, 2, 2];
    checkBox98.value = 'organization_hour';
    doc.addField(checkBox98);

    doc.setFontSize(5);
    doc.text(" Acil Yardım Ambulans Bekleme ___ S ___ Dk",167,169);
    var checkBox99 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt99 = document.getElementById("emergency_ambulance_waiting").value;

    var emergency_ambulance_waiting = document.getElementById("emergency_ambulance_waiting").value;
    var emergency_ambulance_waiting_minute = document.getElementById("emergency_ambulance_waiting_minute").value;
    doc.text(emergency_ambulance_waiting,194,169).value;
    doc.text(emergency_ambulance_waiting_minute,198.5,169).value;

    var splitTxt99 = checkBoxTxt99.split(",");
    let hasText99 = false;
    for (let i = 0; i< splitTxt99.length; i++){
        if(splitTxt99[i] == 'emergency_ambulance_waiting') {
            console.log("Girdi2");
            hasText99 = true;
            break;
        }
    }
    checkBox99.appearanceState = hasText99 ? 'On' : 'Off';
    checkBox99.readOnly = false;
    checkBox99.fieldName = "Acil Yardım Ambulans Bekleme";
    checkBox99.Rect = [165, 167.5, 2, 2];
    checkBox99.value = 'emergency_ambulance_waiting';
    doc.addField(checkBox99);

    doc.setFontSize(5);
    doc.text(" Hasta Nakil Ambulansı Bekleme ___ S ___ Dk",167,171.5);
    var checkBox100 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt100 = document.getElementById("patient_transport_ambulance_waiting").value;

    doc.setFontSize(5);
    var patient_transport_ambulance_waiting = document.getElementById("patient_transport_ambulance_waiting").value;
    var patient_transport_ambulance_waiting_minute = document.getElementById("patient_transport_ambulance_waiting_minute").value;
    doc.text(patient_transport_ambulance_waiting,194,171.5).value;
    doc.text(patient_transport_ambulance_waiting_minute,199,171.5).value;

    var splitTxt100 = checkBoxTxt100.split(",");
    let hasText100 = false;
    for (let i = 0; i< splitTxt100.length; i++){
        if(splitTxt100[i] == 'patient_transport_ambulance_waiting') {
            console.log("Girdi2");
            hasText100 = true;
            break;
        }
    }
    checkBox100.appearanceState = hasText100 ? 'On' : 'Off';
    checkBox100.readOnly = false;
    checkBox100.fieldName = "Hasta Nakil Ambulansı Bekleme";
    checkBox100.Rect = [165, 170, 2, 2];
    checkBox100.value = 'patient_transport_ambulance_waiting';
    doc.addField(checkBox100);


// ================================

    doc.line(5,180,205,180)
    doc.setFontSize(9);
    doc.text("HASTA BİLGİLENDİRME ONAYI",100,180);

    text1 = "Hastamın nakli sırasında ambulansta bulunmamın ambulans ekibinin görevini zorlaştırdığı gibi personel ve ambulans sürüş güvenliği açısından olumsuz sonuçlar doğurabileceği, meydana gelebilecek bir"+
    "kazadan ve buna bağlı olarak ortaya çıkabilecek hukuki sorunlardan etkilenebileceğim, ambulansta bulunduğum sürece emniyet kemerini takmam gerektiği konusunda ambulans personeli tarafından ayrıntılı"+
    "olarak bilgilendirildim. Ambulansa binmem durumunda ortaya çıkabilecek olası riskleri ve hukuki sorunları anladım. Buna rağmen hastamın ambulansla nakli sırasında, Hasta Hakları Yönetmeliği’nin 40. Ve"+
    "Yataklı Tedavi Kurumları İşletme Yönetmeliği’nin 62. Maddesinde belirtilen Refakatçi kapsamında olmak üzere, kendi hür irademle ambulansta hastama refakatçi olarak ön kabinde bulunmayı, nakil sırasında"+
    "ortaya çıkabilecek her türlü hukuksal sorunla ilgili, maddi, manevi ve hukuki tüm sorumluluk şahsıma ait olmak üzere kabul ediyorum. Healmedy (MHAcare Sağlık Turizm İnşaat Ticaret A.Ş.) hekimlerinin/"+
    "param ediklerinin ve çalışma ekibinin uygulayacağı, hastalığım ın teşhis ve tedavisi için gerekli olan ilaçları, tetkikleri, verilecek anestezi ilaçlarını / transportu bilincim yerinde olarak kabul ediyorum. Sağlık"+
    "durum um a ilişkin, riskler ve komplikasyonlar tarafıma anlatılmıştır. Bu tedavi yerine uygulanabilecek bir başka yöntem in bulunup bulunmadığı konusunda da sağlık ekibim tarafından bilgilendirildim. Tedavi"+
    "ya da transport sırasında oluşabilecek olumsuz gelişmelerden haberdar olarak tedavim in/transportum un yapılmasını onaylıyorum. Ayrıca aldığım hizmetin ödem esi transferi talep eden kurum tarafından"+
    "kabul edilmez veya ben özel olarak talep ettiğim de tüm sağlık hizmetleri bedelini Sağlık Bakanlığının belirlemiş olduğu ambulans fiyat tarifesi üzerinden ve yapılan müdahalelerin bedelini SUT fiyat tarifesi"+
    "üzerinden ödeyeceğimi kabul ve taahhüt ederim."
    textlines = doc.setFontSize(6).splitTextToSize(text1,200);
    doc.text(textlines,6,183);

    doc.setFontSize(8);
    doc.text("HASTA/HASTA YAKINI* (Yasal Temsilcisi)",6,208);
    doc.setFontSize(8);
    doc.text("Adı-Soyadı:",6,211);
    var username1 = document.getElementById("username1").value;
    doc.text(username1,22,211);
    doc.setFontSize(8);
    doc.text("İmza:",6,214);
    doc.setFontSize(6);
    doc.text("*Yasal Temsilci; Vesayet altındakilar için vasi, Reşit olmayanlar; anne – baba, bunların bulunmadığı durumlarda 1.dereceden kanuni mirasçılar",60,216);

    // const getSig = document.getElementById('get_sig').getElementsByTagName('canvas');
    // const getSigCtx = getSig[0].toDataURL();
    // console.log(getSigCtx);
    

// =================================

    doc.line(5,217,205,217)
    text2 = "…………………………………………………….................. nedenlerle hastayı hastanemize kabul edemiyorum. Hastanın başka hastaneye nakil için gerekli stabilizasyon sağladım. Şu anda durumu başka bir"+
    "kuruma nakli için uygundur"
    var patient_rejection = document.getElementById("patient_rejection").value;
    doc.text(patient_rejection,7,223);
    doc.setFontSize(9);
    doc.text("HASTANENİN HASTA REDDİ",100,220);
    textlines = doc.setFontSize(6).splitTextToSize(text2,180);
    doc.text(textlines,6,223);

    doc.setFontSize(7);
    doc.text("Kurumun / Hastanenin Adı:",6,228);
    var hospital_rejection = document.getElementById("hospital_rejection").value;
    doc.text(hospital_rejection,39,228);
    doc.setFontSize(7);
    doc.text("Hekimin Adı-Soyadı:",6,231);
    var doctor_username = document.getElementById("doctor_username").value;
    doc.text(doctor_username,30,231);

    var hospital_rejection_datetime = document.getElementById("hospital_rejection_datetime").value;
    doc.text(hospital_rejection_datetime,150,228);

    doc.setFontSize(7);
    doc.text("Kaşe/İmza:",120,228);


// ================================

    doc.line(5,232,205,232)
    doc.setFontSize(9);
    doc.text("HASTANENİN HİZMET REDDİ",100,235);
    text3 = "Ambulansla gelen görevli bana hastanın hemen tedavisi / hastaneye nakli gerektiğini, aksi halde kötü sonuçlar doğurabileceğini anlayacağım şekilde ayrıntılı olarak anlattı. Buna rağmen tedaviyi /hasta"+
    "naklini kabul etmiyorum."

    textlines = doc.setFontSize(6).splitTextToSize(text3,180);
    doc.text(textlines,6,238);

    doc.setFontSize(8);
    doc.text("Hastanın / Yakının Adı-Soyadı:",6,243);
    var patients_relative_username = document.getElementById("patients_relative_username").value;
    doc.text(patients_relative_username,47,243);

    var patients_relative_username_datetime = document.getElementById("patients_relative_username_datetime").value;
    doc.text(patients_relative_username_datetime,150,243);

    doc.setFontSize(8);
    doc.text("İmza:",120,243);
// ===============================

    doc.line(5,247,205,247)
    doc.setFontSize(8);
    doc.text("HASTAYI TESLİM ALANIN Ünvanı Adı-Soyadı:",6,253);
    var delivery_area_username = document.getElementById("delivery_area_username").value;
    doc.text(delivery_area_username,66,253);

    var delivery_area_username_datetime = document.getElementById("delivery_area_username_datetime").value;
    doc.text(delivery_area_username_datetime,150,253);
    doc.setFontSize(8);
    doc.text("İmza:",120,253)

// ==============================

    doc.setLineWidth(0.1);
    doc.line(74, 257, 74, 267);

    doc.setLineWidth(0.1);
    doc.line(139, 257, 139, 267);

    doc.line(5,257,205,257)


    doc.setFontSize(7);
    doc.text("DOKTOR / PARAMEDİK",6,260);
    doc.setFontSize(7);
    doc.text("Adı-Soyadı:",6,263);
    var doctor_username1 = document.getElementById("doctor_username1").value;
    console.log(doctor_username1);
    doc.text(doctor_username1,20,263);

    var doctor_username_datetime = document.getElementById("doctor_username_datetime").value;
    doc.text(doctor_username_datetime,70,260);
    doc.setFontSize(7);
    doc.text("İmza:",6,266);

    doc.setFontSize(7);
    doc.text("SAĞLIK PERSONELİ",75,260);
    doc.setFontSize(7);
    doc.text("Adı-Soyadı:",75,263);
    var personal_username = document.getElementById("personal_username").value;
    doc.text(personal_username,90,263);

    var personal_username_datetime = document.getElementById("personal_username_datetime").value;
    doc.text(personal_username_datetime,130,260);
    doc.setFontSize(7);
    doc.text("İmza:",75,266);

    doc.setFontSize(7);
    doc.text("SÜRÜCÜ/PİLOT",140,260);
    doc.setFontSize(7);
    doc.text("Adı-Soyadı:",140,263);
    var pilot_username = document.getElementById("pilot_username").value;
    doc.text(pilot_username,155,263);

    var pilot_username_datetime = document.getElementById("pilot_username_datetime").value;
    doc.text(pilot_username_datetime,190,260);
    doc.setFontSize(7);
    doc.text("İmza:",140,266);
    // const responsibleSignature  = document.getElementById('pilot_signature').getElementsByTagName('canvas');
    // const responsibleSignaturectx = responsibleSignature[0].toDataURL();
    // console.log(responsibleSignaturectx);
    // doc.addImage(responsibleSignaturectx,"PNG",141,267,5,5);
// ==============================
    doc.setLineWidth(0.1);
    doc.line(41, 267, 41, 295);

    doc.setLineWidth(0.1);
    doc.line(73, 267, 73, 295);

    doc.setLineWidth(0.1);
    doc.line(143, 267, 143, 295);

    doc.line(5,267,205,267)

    doc.line(5,271,73,271)
    doc.line(5,275,73,275)
    doc.line(5,279,73,279)
    doc.line(5,283,73,283)
    doc.line(5,287,73,287)
    doc.line(5,291,73,291)

    doc.setFontSize(9);
    doc.text("Taşıt Bilgisi:",6,270);
    var car_info = document.getElementById("car_info").value;
    doc.text(car_info,42,270);
    doc.setFontSize(9);
    doc.text("Başlangıç KM:",6,274);
    var start_km = document.getElementById("start_km").value;
    doc.text(start_km,42,274);
    doc.setFontSize(9);
    doc.text("Bitiş KM:",6,278);
    var finish_km = document.getElementById("finish_km").value;
    doc.text(finish_km,42,278);
    doc.setFontSize(9);
    doc.text("112 Protokol Numarası:",6,282);
    var protocol_number = document.getElementById("protocol_number").value;
    doc.text(protocol_number,42,282);
    doc.setFontSize(9);
    doc.text("Kurum Adı:",6,286);
    var institution_name = document.getElementById("institution_name").value;
    doc.text(institution_name,42,286);

    doc.setFontSize(9);
    doc.text("Gidiş Dönüş:",6,290); 

    doc.setFontSize(8);
    doc.text("Evet",42,290);
    var yesCheckbox = new jspdf.AcroFormCheckBox();
    var roundYes = document.querySelector('input[name="round_trip"]:checked').value;
    let hasYesText = false;
    if(roundYes == 'yes') {
        console.log("Girdi");
        hasYesText = true;
    }
    yesCheckbox.appearanceState = hasYesText ? 'On' : 'Off';
    yesCheckbox.readOnly = false;
    yesCheckbox.fieldName = "Evet";
    yesCheckbox.Rect = [50, 288, 2, 2];
    yesCheckbox.value = 'yes';
    doc.addField(yesCheckbox);

    doc.setFontSize(8);
    doc.text("Hayır",55,290);
    var noCheckBox = new jspdf.AcroFormCheckBox();
    var roundNo = document.querySelector('input[name="round_trip"]:checked').value;
    let hasNoText = false;
    if(roundNo == 'no') {
        console.log("Girdi");
        hasNoText = true;
    }
    noCheckBox.appearanceState = hasNoText ? 'On' : 'Off';
    noCheckBox.readOnly = false;
    noCheckBox.fieldName = "Hayır";
    noCheckBox.Rect = [63, 288, 2, 2];
    noCheckBox.value = 'no';
    doc.addField(noCheckBox);

    // doc.text(delivery_area_username_datetime,42,290);
    doc.setFontSize(9);
    doc.text("Şirket Bilgisi:",6,294);
    // var delivery_area_username_datetime = document.getElementById("delivery_area_username_datetime").value;
    // doc.text(delivery_area_username_datetime,42,294);


    doc.setFontSize(10);
    doc.text("VAKAYI VEREN KURUM BİLGİSİ:",83,273);
    // var institution_information = document.getElementById("institution_information").value;
    var institution_information = document.getElementById("institution_information").value;
    textlines = doc.setFontSize(8).splitTextToSize(institution_information,67);
    doc.text(textlines,77,277);

    doc.setFontSize(13);
    doc.text("BARKOT",170,282);


    doc.output('pdfobjectnewwindow');
}

function preCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
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
    doc.text(username,85,75);

    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",15,100);
    const preCaseSignature  = document.getElementById('pre_case_signature').getElementsByTagName('canvas');
    const preCaseSignaturectx = preCaseSignature[0].toDataURL();
    console.log(preCaseSignaturectx);
    doc.addImage(preCaseSignaturectx,"PNG",15,105,40,40);

    doc.output('pdfobjectnewwindow');
}

function ambulanceHandoverPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",65,15);

    doc.setFontSize(20);
    doc.text("Ambulans Devir Teslim Formu",75,30);

    doc.setFontSize(17);
    doc.text("Araç Plakası:",45,55);
    var numberPlate = document.getElementById("ambulance_number_plate").value;
    doc.setFontSize(15);
    doc.text(numberPlate,83,55);

    doc.setFontSize(17);
    doc.text("Tarih:",45,65);
    var record_date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(record_date,68,65);

    doc.setFontSize(17);
    doc.text("Teslim Alınan KM:",45,75);
    var deliveryKm = document.getElementById("delivery_km").value;
    doc.setFontSize(15);
    doc.text(deliveryKm,97,75);

    doc.setFontSize(17);
    doc.text("Servis Yapılacak KM:",45,85);
    var servicedKm = document.getElementById("to_be_serviced_km").value;
    doc.setFontSize(15);
    doc.text(servicedKm,102,85);

    doc.setFontSize(17);
    doc.text("Teslim Edenin Notları:",45,95);
    var notes = document.getElementById("notes").value;
    textlines = doc.setFontSize(15).splitTextToSize(notes,120);
    doc.text(textlines,107,95);

    doc.setFontSize(17);
    doc.text("Hasar Tespit Bildirimi:",45,115);
    var damageNotification = document.getElementById("damage_detection_notification").value;
    textlines = doc.setFontSize(15).splitTextToSize(damageNotification,120);
    doc.text(textlines,107,115);

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
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",55,15);

    doc.setFontSize(20);
    doc.text("Ambulans Günlük Kontrol ve Devir Teslim Formu",35,30);

    doc.setFontSize(17);
    doc.text("İstasyon Adı:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,83,55);

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
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Ambulans Cihaz, Malzeme ve İlaç Günük Kontrol Formu",25,30);

    doc.setFontSize(17);
    doc.text("Araç Plakası:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,83,55).value;

    doc.setFontSize(17);
    doc.text("Acil Çanta Kilit No:",45,65);
    var emergencyLockNumber = document.getElementById("emergency_lock_number").value;
    doc.setFontSize(15);
    doc.text(emergencyLockNumber,98,65).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,75);
    var materialControlDate = document.getElementById("material_control_date").value;
    doc.setFontSize(15);
    doc.text(materialControlDate,62,75).value;

    doc.setFontSize(17);
    doc.text("Saat:",45,85);
    var materialControlTime = document.getElementById("material_control_time").value;
    doc.setFontSize(15);
    doc.text(materialControlTime,60,85).value;

    doc.setFontSize(17);
    doc.text("Notlar:",45,95);
    var materialNotes = document.getElementById("material_notes").value;
    textline = doc.setFontSize(15).splitTextToSize(materialNotes,120);
    doc.text(textline,65,95).value;
    
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

function callCenterPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
    // var logo = document.getElementById("logo");
    // doc.addImage(logo, "PNG", 14,10,45,25);

    doc.setFontSize(20);
    doc.text("Çağrı Mekezi Formu",85,30);

    doc.line(5,40,205,40)
    doc.line(25,55,120,55)
    doc.line(25,63,120,63)
    doc.line(140,55,205,55)
    doc.line(140,63,205,63)
    doc.line(25,80,205,80)
    doc.line(25,85,85,85)
    doc.line(95,85,205,85)
    doc.line(25,115,128,115)
    doc.line(25,122,205,122)
    doc.line(5,145,205,145)
    doc.line(25,152,155,152)
    doc.line(25,159,155,159)
    doc.line(25,165,205,165)
    doc.line(25,172,205,172)
    doc.line(5,180,205,180)
    doc.line(5,195,205,195)
    doc.line(5,202,205,202)
    doc.line(5,209,205,209)
    doc.line(53,216,175,216)
    doc.line(53,223,175,223)
    doc.line(53,230,175,230)

    doc.line(128,90,205,90)
    doc.line(128,95,205,95)
    doc.line(128,100,205,100)
    doc.line(160,112,205,112)
    // doc.line(128,115,205,115)

    doc.rect(5,240,200,30)

    doc.line(100,250,205,250)

    doc.setLineWidth(0.1);
    doc.line(127, 70, 127,122);

    doc.setLineWidth(0.1);
    doc.line(155, 145, 155, 165);

    doc.setLineWidth(0.1);
    doc.line(100, 180, 100, 209);

    doc.setLineWidth(0.1);
    doc.line(100, 240, 100, 270);

    doc.setFontSize(12);
    doc.text("ÇAĞRIYI YAPAN",5,45);

    doc.setFontSize(11);
    doc.text("Kurum:",5,54)
    var institution_name = document.getElementById("institution_name").value;
    doc.setFontSize(9);
    doc.text(institution_name,28,54)

    doc.setFontSize(11);
    doc.text("Adı Soyadı:",5,60)
    var caller_username = document.getElementById("caller_username").value;
    doc.setFontSize(9);
    doc.text(caller_username,28,60)

    doc.setFontSize(11);
    doc.text("Yakınlığı:",121,54)
    var proximity = document.getElementById("proximity").value;
    doc.setFontSize(9);
    doc.text(proximity,141,54)

    doc.setFontSize(11);
    doc.text("Telefon:",121,60)
    var caller_tel_no = document.getElementById("caller_tel_no").value;
    doc.setFontSize(9);
    doc.text(caller_tel_no,141,60)

    doc.setFontSize(12);
    doc.text("HASTA",5,73)

    doc.setFontSize(11);
    doc.text("Adı Soyadı:",5,78)
    var patient_username = document.getElementById("patient_username").value;
    doc.setFontSize(9);
    doc.text(patient_username,28,78)

    doc.setFontSize(11);
    doc.text("Cinsiyet:",5,84)

    doc.setFontSize(9);
    doc.text("Erkek",25,84);
    var maleCheckbox = new jspdf.AcroFormCheckBox();
    var roundmale = document.querySelector('input[name="gender"]:checked').value;
    let hasmaleText = false;
    if(roundmale == 'erkek') {
        console.log("Girdi");
        hasmaleText = true;
    }
    maleCheckbox.appearanceState = hasmaleText ? 'On' : 'Off';
    maleCheckbox.readOnly = false;
    maleCheckbox.fieldName = "Erkek";
    maleCheckbox.Rect = [35, 81, 3, 3];
    maleCheckbox.value = 'male';
    doc.addField(maleCheckbox);

    doc.setFontSize(9);
    doc.text("Kadın",50,84);
    var femaleCheckBox = new jspdf.AcroFormCheckBox();
    var roundfemale = document.querySelector('input[name="gender"]:checked').value;
    let hasfemaleText = false;
    if(roundfemale == 'kadın') {
        console.log("Girdi");
        hasfemaleText = true;
    }
    femaleCheckBox.appearanceState = hasfemaleText ? 'On' : 'Off';
    femaleCheckBox.readOnly = false;
    femaleCheckBox.fieldName = "Kadın";
    femaleCheckBox.Rect = [60, 81, 3, 3];
    femaleCheckBox.value = 'female';
    doc.addField(femaleCheckBox);

    doc.setFontSize(11);
    doc.text("Adres:",5,90)
    var patient_adress = document.getElementById("patient_adress").value;
    textlines = doc.setFontSize(8).splitTextToSize(patient_adress,90);
    // doc.setFontSize(9);
    doc.text(textlines,25,90)

    doc.setFontSize(10);
    doc.text("Yaş:",87,85)
    var patient_age = document.getElementById("patient_age").value;
    doc.setFontSize(9);
    doc.text(patient_age,102,85)

    doc.setFontSize(10);
    doc.text("Vaka No:",128,78)
    var case_no = document.getElementById("case_no").value;
    doc.setFontSize(9);
    doc.text(case_no,152,78)

    doc.setFontSize(10);
    doc.text("Tarih :",128,84)
    var case_date = document.getElementById("case_date").value;
    doc.setFontSize(9);
    doc.text(case_date,152,84)

    doc.setFontSize(10);
    doc.text("Araç No:",128,89)
    var car_info = document.getElementById("car_info").value;
    doc.setFontSize(9);
    doc.text(car_info,152,89)

    doc.setFontSize(10);
    doc.text("Çağrı Alış Saati :",128,94)
    var case_time = document.getElementById("case_time").value;
    doc.setFontSize(9);
    doc.text(case_time,155,94)

    doc.setFontSize(10);
    doc.text("Alarm Saati:",128,99)
    var alarm_clock = document.getElementById("alarm_clock").value;
    doc.setFontSize(9);
    doc.text(alarm_clock,152,99)

    doc.setFontSize(10);
    doc.text("Randevu:",128,104)

    doc.setFontSize(9);
    doc.text("Evet",148,104);
    var yesCheckbox = new jspdf.AcroFormCheckBox();
    var roundyes = document.querySelector('input[name="case_yes"]:checked').value;
    let hasyesText = false;
    if(roundyes == 'evet') {
        console.log("Girdi");
        hasyesText = true;
    }
    yesCheckbox.appearanceState = hasyesText ? 'On' : 'Off';
    yesCheckbox.readOnly = false;
    yesCheckbox.fieldName = "Evet";
    yesCheckbox.Rect = [158,102, 2, 2];
    yesCheckbox.value = 'evet';
    doc.addField(yesCheckbox);

    doc.setFontSize(9);
    doc.text("Hayır",168,104);
    var noCheckBox = new jspdf.AcroFormCheckBox();
    var roundno = document.querySelector('input[name="case_yes"]:checked').value;
    let hasnoText = false;
    if(roundno == 'hayır') {
        console.log("Girdi");
        hasnoText = true;
    }
    noCheckBox.appearanceState = hasnoText ? 'On' : 'Off';
    noCheckBox.readOnly = false;
    noCheckBox.fieldName = "Hayır";
    noCheckBox.Rect = [178, 102, 2, 2];
    noCheckBox.value = 'hayır';
    doc.addField(noCheckBox);

    doc.setFontSize(10);
    doc.text("Randevu Saati:",128,111)
    var appointment_time = document.getElementById("appointment_time").value;
    doc.setFontSize(9);
    doc.text(appointment_time,155,111)

    doc.setFontSize(10);
    doc.text("Randevu Tarihi:",128,118)
    var appointment_date = document.getElementById("appointment_date").value;
    doc.setFontSize(9);
    doc.text(appointment_date,155,118)

    doc.setFontSize(10);
    doc.text("Telefon:",5,113)
    // var casedate = document.getElementById("casedate").value;
    // doc.setFontSize(9);
    // doc.text(casedate,180,4).value

    doc.setFontSize(10);
    doc.text("Adres Tarifi:",5,120)
    var patient_for_directions = document.getElementById("patient_for_directions").value;
    // doc.setFontSize(9);
    textlines1 = doc.setFontSize(8).splitTextToSize(patient_for_directions,90);
    doc.text(textlines1,25,130)

    doc.setFontSize(9);
    doc.text("Hastanın Şikayeti :",5,149)
    var patient_complaint = document.getElementById("patient_complaint").value;
    doc.setFontSize(9);
    doc.text(patient_complaint,35,149)

    doc.setFontSize(9);
    doc.text("Hastanın Kliniği    :",5,155)
    var patient_clinic = document.getElementById("patient_clinic").value;
    doc.setFontSize(9);
    doc.text(patient_clinic,35,155)

    doc.setFontSize(9);
    doc.text("Ön Tanı                  :",5,163)
    var pre_diagnosis = document.getElementById("pre_diagnosis").value;
    doc.setFontSize(9);
    doc.text(pre_diagnosis,35,163)

    doc.setFontSize(9);
    doc.text("Onay Alınan Kişi  :",5,170)
    var consent_received_person = document.getElementById("consent_received_person").value;
    doc.setFontSize(9);
    doc.text(consent_received_person,35,170)

    doc.setFontSize(10);
    doc.text("TRİAJ KODU",173,149)

    doc.setFontSize(9);
    doc.text("1",168,155);
    var oneCheckbox = new jspdf.AcroFormCheckBox();
    var roundone = document.querySelector('input[name="triaj"]:checked').value;
    let hasoneText = false;
    if(roundone == '1') {
        console.log("Girdi");
        hasoneText = true;
    }
    oneCheckbox.appearanceState = hasoneText ? 'On' : 'Off';
    oneCheckbox.readOnly = false;
    oneCheckbox.fieldName = "1";
    oneCheckbox.Rect = [173,152, 3, 3];
    oneCheckbox.value = '1';
    doc.addField(oneCheckbox);

    doc.setFontSize(9);
    doc.text("2",178,155);
    var twoCheckBox = new jspdf.AcroFormCheckBox();
    var roundtwo = document.querySelector('input[name="triaj"]:checked').value;
    let hastwoText = false;
    if(roundtwo == '2') {
        console.log("Girdi");
        hastwoText = true;
    }
    twoCheckBox.appearanceState = hastwoText ? 'On' : 'Off';
    twoCheckBox.readOnly = false;
    twoCheckBox.fieldName = "2";
    twoCheckBox.Rect = [182, 152, 3, 3];
    twoCheckBox.value = '2';
    doc.addField(twoCheckBox);

    doc.setFontSize(9);
    doc.text("3",188,155);
    var threeCheckBox = new jspdf.AcroFormCheckBox();
    var roundthree = document.querySelector('input[name="triaj"]:checked').value;
    let hasthreeText = false;
    if(roundthree == '3') {
        console.log("Girdi");
        hasthreeText = true;
    }
    threeCheckBox.appearanceState = hasthreeText ? 'On' : 'Off';
    threeCheckBox.readOnly = false;
    threeCheckBox.fieldName = "3";
    threeCheckBox.Rect = [192, 152, 3, 3];
    threeCheckBox.value = '3';
    doc.addField(threeCheckBox);


    doc.setFontSize(10);
    doc.text("ÇIKIŞ ŞEKLİ           :",5,177)

    doc.setFontSize(10);
    doc.text("Acil",35,177)
    var urgentCheckbox = new jspdf.AcroFormCheckBox();
    var roundurgent = document.querySelector('input[name="output_method"]:checked').value;
    let hasurgentText = false;
    if(roundurgent == 'acil') {
        console.log("Girdi");
        hasurgentText = true;
    }
    urgentCheckbox.appearanceState = hasurgentText ? 'On' : 'Off';
    urgentCheckbox.readOnly = false;
    urgentCheckbox.fieldName = "Acil";
    urgentCheckbox.Rect = [42,174, 3, 3];
    urgentCheckbox.value = 'urgent';
    doc.addField(urgentCheckbox);

    doc.setFontSize(10);
    doc.text("Kontrollü",65,177)
    var controlledCheckbox = new jspdf.AcroFormCheckBox();
    var roundcontrolled = document.querySelector('input[name="output_method"]:checked').value;
    let hascontrolledeText = false;
    if(roundcontrolled == 'kontrollü') {
        console.log("Girdi");
        hascontrolledeText = true;
    }
    controlledCheckbox.appearanceState = hascontrolledeText ? 'On' : 'Off';
    controlledCheckbox.readOnly = false;
    controlledCheckbox.fieldName = "Kontrollü";
    controlledCheckbox.Rect = [85,174, 3, 3];
    controlledCheckbox.value = 'controlled';
    doc.addField(controlledCheckbox);

    doc.setFontSize(10);
    doc.text("Randevulu",95,177)
    var by_appointmentCheckbox = new jspdf.AcroFormCheckBox();
    var roundby_appointment = document.querySelector('input[name="output_method"]:checked').value;
    let hasby_appointmentText = false;
    if(roundby_appointment == 'randevulu') {
        console.log("Girdi");
        hasby_appointmentText = true;
    }
    by_appointmentCheckbox.appearanceState = hasby_appointmentText ? 'On' : 'Off';
    by_appointmentCheckbox.readOnly = false;
    by_appointmentCheckbox.fieldName = "Randevulu";
    by_appointmentCheckbox.Rect = [115,174, 3, 3];
    by_appointmentCheckbox.value = 'by_appointment';
    doc.addField(by_appointmentCheckbox);

    doc.setFontSize(10);
    doc.text("YER",5,184)

    doc.setFontSize(10);
    doc.text("SAAT",50,184)

    doc.setFontSize(10);
    doc.text("YER",102,184)

    doc.setFontSize(10);
    doc.text("SAAT",150,184)

    doc.setFontSize(10);
    doc.text("Çıkış Saat           :",5,191)
    var exit_time = document.getElementById("exit_time").value;
    doc.setFontSize(9);
    doc.text(exit_time,35,191)

    doc.setFontSize(10);
    doc.text("Vakadan Çıkış     :",5,199)
    var event_exit_time = document.getElementById("event_exit_time").value;
    doc.setFontSize(9);
    doc.text(event_exit_time,35,199)

    doc.setFontSize(10);
    doc.text("Hastahaneden Çıkış  :",5,207)
    var time_out_hospital = document.getElementById("time_out_hospital").value;
    doc.setFontSize(9);
    doc.text(time_out_hospital,45,207)

    doc.setFontSize(10);
    doc.text("Ulaşım Saati         :",102,191)
    var transport_hour = document.getElementById("transport_hour").value;
    doc.setFontSize(9);
    doc.text(transport_hour,135,191)

    doc.setFontSize(10);
    doc.text("Hastaneye Varış   :",102,199)
    var hospital_arrival_time = document.getElementById("hospital_arrival_time").value;
    doc.setFontSize(9);
    doc.text(hospital_arrival_time,135,199)

    doc.setFontSize(10);
    doc.text("Noktaya Dönüş       :",102,207)
    var point_return_time = document.getElementById("point_return_time").value;
    doc.setFontSize(9);
    doc.text(point_return_time,135,207)

    doc.setFontSize(10);
    doc.text("Hastanın Alındığı Yer          :",5,215)
    var patient_taken_place = document.getElementById("patient_taken_place").value;
    doc.setFontSize(9);
    doc.text(patient_taken_place,65,215)

    doc.setFontSize(10);
    doc.text("Hastanın İlk Bırakıldığı Yer  :",5,222)
    var where_patient_first_dropped = document.getElementById("where_patient_first_dropped_out").value;
    doc.setFontSize(9);
    doc.text(where_patient_first_dropped,65,222)

    doc.setFontSize(10);
    doc.text("Hastanın Son Bırakıldığı Yer :",5,229)
    var patient_last_off_place = document.getElementById("patient_last_off_place").value;
    doc.setFontSize(9);
    doc.text(patient_last_off_place,65,229)

    doc.setFontSize(10);
    doc.text("Kara Ambulansı",180,215)
    var land_ambulanceCheckbox = new jspdf.AcroFormCheckBox();
    var roundland_ambulance = document.querySelector('input[name="ambulance"]:checked').value;
    let hasland_ambulanceText = false;
    if(roundland_ambulance == 'land_ambulance') {
        console.log("Girdi");
        hasland_ambulanceText = true;
    }
    land_ambulanceCheckbox.appearanceState = hasland_ambulanceText ? 'On' : 'Off';
    land_ambulanceCheckbox.readOnly = false;
    land_ambulanceCheckbox.fieldName = "Kontrollü";
    land_ambulanceCheckbox.Rect = [188,217, 3, 3];
    land_ambulanceCheckbox.value = 'land_ambulance';
    doc.addField(land_ambulanceCheckbox);


    doc.setFontSize(10);
    doc.text("Hava Ambulansı",180,225)
    var air_ambulanceCheckbox = new jspdf.AcroFormCheckBox();
    var roundair_ambulance = document.querySelector('input[name="ambulance"]:checked').value;
    let hasair_ambulanceText = false;
    if(roundair_ambulance == 'air_ambulance') {
        console.log("Girdi");
        hasair_ambulanceText = true;
    }
    air_ambulanceCheckbox.appearanceState = hasair_ambulanceText ? 'On' : 'Off';
    air_ambulanceCheckbox.readOnly = false;
    air_ambulanceCheckbox.fieldName = "Randevulu";
    air_ambulanceCheckbox.Rect = [188,227, 3, 3];
    air_ambulanceCheckbox.value = 'by_appointment';
    doc.addField(air_ambulanceCheckbox);

    doc.setFontSize(10);
    doc.text("HASTANIN GÜVENCESİ",5,238)

    doc.setFontSize(10);
    doc.text("Müdahale",6,245)
    var intervention = document.getElementById("intervention").value;
    textlines2 = doc.setFontSize(8).splitTextToSize(intervention,90);
    doc.text(textlines2,8,255)

    doc.setFontSize(10);
    doc.text("112 Protokol No:",102,245)
    var protocol_number = document.getElementById("protocol_number").value;
    doc.setFontSize(9);
    doc.text(protocol_number,132,245)

    doc.setFontSize(10);
    doc.text("Açıklama",102,254)
    // var casedate = document.getElementById("casedate").value;
    // doc.setFontSize(9);
    // doc.text(casedate,180,4).value

    doc.setFontSize(10);
    doc.text("Çağrıyı Alan Adı Soyadı:",5,275)
    var call_domain_username = document.getElementById("call_domain_username").value;
    doc.setFontSize(9);
    doc.text(call_domain_username,45,275)


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
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",65,30);

    doc.setFontSize(17);
    doc.text("1.Malzeme Adı:",45,55);
    var materialName = document.getElementById("material_name").value;
    doc.setFontSize(15);
    doc.text(materialName,88,55).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,65);
    var quantityRequest = document.getElementById("quantity_request").value;
    doc.setFontSize(15);
    doc.text(quantityRequest,98,65).value;

    doc.setFontSize(17);
    doc.text("2.Malzeme Adı:",45,75);
    var materialName1 = document.getElementById("material_name1").value;
    doc.setFontSize(15);
    doc.text(materialName1,88,75).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,85);
    var quantityRequest1 = document.getElementById("quantity_request1").value;
    doc.setFontSize(15);
    doc.text(quantityRequest1,98,85).value;

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
    doc.text(totalMaterial,135,95).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,105);
    var materialDate = document.getElementById("material_request_date").value;
    doc.setFontSize(15);
    doc.text(materialDate,65,105).value;



    doc.setFontSize(17);
    doc.text("İsteği Yapan Bölüm Yöneticisi",20,135);
    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",30,145);
    const requestManagerSignature  = document.getElementById('request_manager_signature').getElementsByTagName('canvas');
    const requestManagerSignaturectx = requestManagerSignature[0].toDataURL();
    console.log(requestManagerSignaturectx);
    doc.addImage(requestManagerSignaturectx,"PNG",25,150,40,40);

    doc.output('pdfobjectnewwindow');
}

function gasRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Medikal Gaz İstek Formu",75,30);

    doc.setFontSize(17);
    doc.text("Kullanılacak Birim:",45,55);
    // var unit = document.getElementsByName("unit");
    var unit = document.querySelector('input[name="unit"]:checked').value;
    doc.setFontSize(15);
    doc.text(unit,98,55);

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,65);
    var medicalOxygen = document.getElementById("amount_of_medical_oxygen").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen,130,65).value;

    doc.setFontSize(17);
    doc.text("Demirbaş Kodu:",45,75);
    var fixtureCode = document.getElementById("fixture_code").value;
    doc.setFontSize(15);
    doc.text(fixtureCode,90,75).value;

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,85);
    var numberOfTubes = document.getElementById("number_of_tubes").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes,77,85).value;

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,95);
    var medicalOxygen1 = document.getElementById("amount_of_medical_oxygen1").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen1,130,95).value;

    doc.setFontSize(17);
    doc.text("Demirbas Kodu:",45,105);
    var fixtureCode1 = document.getElementById("fixture_code1").value;
    doc.setFontSize(15);
    doc.text(fixtureCode1,90,105).value;

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,115);
    var numberOfTubes1 = document.getElementById("number_of_tubes1").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes1,77,115).value;

    
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

function medicationRequestPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",65,30);

    doc.setFontSize(17);
    doc.text("1.İlaç Adı:",45,55);
    var drugName = document.getElementById("drug_name").value;
    doc.setFontSize(15);
    doc.text(drugName,75,55).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,65);
    var formofDrug = document.getElementById("form_of_drug").value;
    doc.setFontSize(15);
    doc.text(formofDrug,83,65).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,75);
    var quantityRequested = document.getElementById("quantity_requested").value;
    doc.setFontSize(15);
    doc.text(quantityRequested,98,75).value;

    doc.setFontSize(17);
    doc.text("2.İlaç Adı:",45,85);
    var drugName1 = document.getElementById("drug_name1").value;
    doc.setFontSize(15);
    doc.text(drugName1,75,85).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,95);
    var formofDrug1 = document.getElementById("form_of_drug1").value;
    doc.setFontSize(15);
    doc.text(formofDrug1,83,95).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,105);
    var quantityRequested1 = document.getElementById("quantity_requested1").value;
    doc.setFontSize(15);
    doc.text(quantityRequested1,98,105).value;

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen İlaç:",45,115);
    var totalRequestedDrug = document.getElementById("total_requested_drug").value;
    doc.setFontSize(15);
    doc.text(totalRequestedDrug,115,115).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,125);
    var medicationRequestedDate = document.getElementById("medication_request_date").value;
    doc.setFontSize(15);
    doc.text(medicationRequestedDate,65,125).value;



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

function updateregistrationFormPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    // var img = new Image();
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",65,15);

    // img.src="/root/hasta_kayit/surgery_API-main/templates/static/images/filyos-logo.jpeg";
    // doc.addImage(img.src,"JPEG",40,15,60,60);

    doc.setFontSize(20);
    doc.text("Kayıt Ekleme Formu",82,30);

    doc.setFontSize(17);
    doc.text("İsim Soyisim:",45,55);
    var username = document.getElementById("record_username").value;
    doc.setFontSize(15);
    doc.text(username,85,55);


    doc.setFontSize(17);
    doc.text("Telefon Numarası:",45,65);
    var tel = document.getElementById("record_tel").value;
    doc.setFontSize(15);
    doc.text(tel,100,65);


    doc.setFontSize(17);
    doc.text("Kayıt Tarihi:",45,75);
    var date = document.getElementById("record_date").value;
    doc.setFontSize(15);
    doc.text(date,80,75);


    doc.setFontSize(17);
    doc.text("Tc Kimlik Numarası:",45,85);
    var no = document.getElementById("record_tc_no").value;
    doc.setFontSize(15);
    doc.text(no,105,85);

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
    doc.text(75,95,textlines);



    doc.setFontSize(17);
    doc.text("Tanı:",45,110);
    var diagnosis = document.getElementById("record_diagnosis").value;
    textlines= doc.setFontSize(15).splitTextToSize(diagnosis,120);
    doc.text(textlines,75,110);


    doc.setFontSize(17);
    doc.text("Müdahale:",45,130);  
    var intervention = document.getElementById("record_intervention").value;
    textlines = doc.setFontSize(15).splitTextToSize(intervention,120);
    doc.text(textlines,80,130);

    doc.setFontSize(17);
    doc.text("İlaçlar:",45,155);
    var medications = document.getElementById("record_medications").value;
    textlines = doc.setFontSize(15).splitTextToSize(medications,120);
    doc.text(textlines,80,155);

    doc.setFontSize(17);
    doc.text("Sonuç:",45,185);
    var cocnlusion = document.getElementById("record_conclusion").value;
    textlines = doc.setFontSize(15).splitTextToSize(cocnlusion,120);
    doc.text(textlines,75,185);
    
    
    doc.output('pdfobjectnewwindow');
}

function updateAmbulanceCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    // var {CheckBox} = jsPDF.AcroForm;
    doc.setFont("OpenSans-Medium");
    
    //doc.setFont("SourceSansPro-Regular");
    // doc.setFont("Roboto-Light");


    // doc.setFontSize(12);
    // doc.text("FİLYOS SAĞLIK MERKEZİ",90,10);

    doc.setFontSize(12);
    doc.text("AMBULANS VAKA FORMU",90,5);
    doc.setFontSize(9);
    doc.text("(DOLDURULDUĞUNDA HASTAYA ÖZELDİR)",87,9);

    
    // var logo = document.getElementById("logo");
    // // var imgData = 'data:image/png;base64,'+Base64.encode(logo);
    // // console.log(imgData);
    // doc.addImage(logo, 'PNG', 10, 2, 20, 10);
    // const responsibleSignature  = document.getElementById('pilot_signature').getElementsByTagName('canvas');
    // const responsibleSignaturectx = responsibleSignature[0].toDataURL();
    // console.log(responsibleSignaturectx);
    // doc.addImage(responsibleSignaturectx,"PNG",10,2,40,40);


    doc.setFontSize(9);
    doc.text("Tarih:   ....../..../....",171,6);
    var casedate = document.getElementById("date").value;
    doc.setFontSize(9);
    doc.text(casedate,180,4).value

    doc.setFontSize(9);

    var atn_no = document.getElementById("atn_no").value;
    doc.setFontSize(9);
    doc.text(atn_no,180,10).value

    doc.rect(5,12,200,283)

// ================================================   
    doc.setLineWidth(0.1);
    doc.line(45, 12, 45, 28);

    doc.setLineWidth(0.1);
    doc.line(115, 12, 115, 28);

    doc.setLineWidth(0.1);
    doc.line(155, 12, 155, 28);

    doc.line(5,16,205,16)
    doc.line(5,20,205,20)
    doc.line(5,24,205,24)
    doc.line(5,28,205,28)

    doc.setFontSize(9);
    doc.text("Adı Soyadı:",6,15);
    var username = document.getElementById("username").value;
    doc.setFontSize(9);
    doc.text(username,46,15).value;

    doc.setFontSize(9);
    doc.text("T.C Kimlik No:",6,19);
    var username = document.getElementById("identification_number").value;
    doc.setFontSize(9);
    doc.text(username,46,19).value;

    doc.setFontSize(9);
    doc.text("Cinsiyeti:",6,23);
    var username = document.getElementById("gender").value;
    doc.setFontSize(9);
    doc.text(username,46,23).value;

    doc.setFontSize(9);
    doc.text("Yaşı:",6,27);
    var username = document.getElementById("age").value;
    doc.setFontSize(9);
    doc.text(username,46,27).value;

    doc.setFontSize(9);
    doc.text("Vaka Çağrı Saati:",116,15);
    var username = document.getElementById("case_call_clock").value;
    doc.setFontSize(9);
    doc.text(username,156,15).value;

    doc.setFontSize(9);
    doc.text("Vakaya Varış Saati:",116,19);
    var username = document.getElementById("case_arrival_time").value;
    doc.setFontSize(9);
    doc.text(username,156,19).value;

    doc.setFontSize(9);
    doc.text("Vakadan Ayrılış Saati:",116,23); 
    var username = document.getElementById("time_of_leave_from_case").value;
    doc.setFontSize(9);
    doc.text(username,156,23).value;

    doc.setFontSize(9);
    doc.text("Hastahaneye Varış Saati:",116,27);
    var username = document.getElementById("hospital_arrival_time").value;
    doc.setFontSize(9);
    doc.text(username,156,27).value;


// ================================================
    doc.line(5,42,205,42)

    doc.setFontSize(9);
    doc.text("Adresi:",6,33);
    var username = document.getElementById("adress").value;
    doc.setFontSize(9);
    doc.text(username,20,33).value;
    
    doc.setFontSize(9);
    doc.text("Telefonu:",6,40);
    var username = document.getElementById("tel_number").value;
    doc.setFontSize(9);
    doc.text(username,20,40).value;
// ================================================
    doc.setLineWidth(0.1);
    doc.line(80, 42, 80, 46);

    doc.setLineWidth(0.1);
    doc.line(150, 42, 150, 46);

    doc.setLineWidth(0.1);
    doc.line(140, 46, 140, 50);

    doc.line(5,46,205,46)
    doc.line(5,50,205,50)
    doc.line(5,54,205,54)

    doc.setFontSize(9);
    doc.text("Hastanın Alındığı Yer:",6,45);
    var username = document.getElementById("place_from_the_patient").value;
    doc.setFontSize(9);
    doc.text(username,40,45).value;

    doc.setFontSize(8);
    doc.text("Hastanın Nakledildiği 1.Yer:",82,45);
    var username = document.getElementById("1_place_the_patient_is_transported").value;
    doc.setFontSize(9);
    doc.text(username,120,45).value;

    doc.setFontSize(8);
    doc.text("Hastanın Nakledildiği 2.Yer:",151,45);
    var username = document.getElementById("2_place_the_patient_is_transported").value;
    doc.setFontSize(9);
    doc.text(username,188,45).value;

    doc.setFontSize(9);
    doc.text("Hastanın Şikayeti:",6,49);
    var username = document.getElementById("patients_complaint").value;
    doc.setFontSize(9);
    doc.text(username,35,49).value;

    doc.setFontSize(9);
    doc.text("Ön Tanı:",141,49);
    var username = document.getElementById("prediction").value;
    doc.setFontSize(9);
    doc.text(username,155,49).value;

    doc.setFontSize(9);
    doc.text("Kronik Hastalıklar:",6,53);
    var username = document.getElementById("chronic_diseases").value;
    doc.setFontSize(9);
    doc.text(username,35,53).value;
// ================================================
    doc.setLineWidth(0.1);
    doc.line(135, 54, 135, 74);

    doc.line(5,74,205,74)

    doc.setFontSize(9);
    doc.text("Açıklama",6,57);
    doc.text("Hastaya Yapılan Uygulama :",6,64);
    doc.text("Kullanılan İlaçlar",6,69);
    var explanation_application = document.getElementById("explanation_application").value;
    textlines = doc.setFontSize(9).splitTextToSize(explanation_application,90);
    doc.text(textlines,48,57).value;
    
    doc.setFontSize(8);
    doc.text("İzolasyon Durumu:",136,66);

    doc.setFontSize(8);
    doc.text("Solunum İzolasyonu",163,60);
    var checkBox = new jspdf.AcroFormCheckBox();
    var checkBoxTxt = document.getElementById("txt").value;
    var splitTxt = checkBoxTxt.split(",");
    let hasText = false;
    for (let i = 0; i < splitTxt.length; i++){

        if(splitTxt[i] == 'solunum_izolasyonu') {
            console.log("Girdi");
            hasText = true;
            break;
        }
    }
    checkBox.appearanceState = hasText ? 'On' : 'Off';
    checkBox.readOnly = false;
    checkBox.fieldName = "Solunum İzolasyonu";
    checkBox.Rect = [191, 58, 2, 2];
    checkBox.value = 'solunum_izolasyonu';
    doc.addField(checkBox);
    
    doc.setFontSize(8);
    doc.text("Damlacık İzolasyonu",163,66);
    var checkBox1 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt1 = document.getElementById("txt").value;
    var splitTxt1 = checkBoxTxt1.split(",");
    let hasText1 = false;
    for (let i = 0; i < splitTxt1.length; i++){
        if(splitTxt1[i] == 'damlacik_izolasyonu') {
            console.log("Girdi1");
            hasText1 = true;
            break;
        }
    }
    checkBox1.appearanceState = hasText1 ? 'On' : 'Off';
    checkBox1.readOnly = false;
    checkBox1.fieldName = "Damlacık İzolasyonu";
    checkBox1.Rect = [191, 64, 2, 2];
    checkBox.value = 'damlacik_izolasyonu';
    doc.addField(checkBox1);


    doc.setFontSize(8);
    doc.text("Temas İzolasyonu",163,72);
    var checkBox2 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt2 = document.getElementById("txt").value;
    var splitTxt2 = checkBoxTxt2.split(",");
    let hasText2 = false;
    for (let i = 0; i< splitTxt2.length; i++){
        if(splitTxt2[i] == 'temas_izolasyonu') {
            console.log("Girdi2");
            hasText2 = true;
            break;
        }
    }

    checkBox2.appearanceState = hasText2 ? 'On' : 'Off';
    checkBox2.readOnly = false;
    checkBox2.fieldName = "Temas İzlasyonu";
    checkBox2.Rect = [191, 70, 2, 2];
    checkBox.value = 'temas_izolasyonu';
    doc.addField(checkBox2);

// ===============================================
    doc.setLineWidth(0.1);
    doc.line(40, 74, 40, 107);

    doc.setLineWidth(0.1);
    doc.line(75, 74, 75, 107);

    doc.setLineWidth(0.1);
    doc.line(102, 74, 102, 107);

    doc.setLineWidth(0.1);
    doc.line(127, 74, 127, 107);

    doc.setLineWidth(0.1);
    doc.line(152, 74, 152, 103);

    doc.setLineWidth(0.1);
    doc.line(177, 74, 177, 103);

    doc.setLineWidth(0.1);
    doc.line(84, 107, 84, 113);

    doc.setLineWidth(0.1);
    doc.line(120, 107, 120, 113);

// ====================================
    doc.setLineWidth(0.1);
    doc.line(52, 78, 52, 103);

    doc.setLineWidth(0.1);
    doc.line(64, 78, 64, 103);

    doc.setLineWidth(0.1);
    doc.line(95, 78, 95, 103);

    doc.setLineWidth(0.1);
    doc.line(120, 78, 120, 103);

    doc.setLineWidth(0.1);
    doc.line(145, 78, 145, 103);

    doc.setLineWidth(0.1);
    doc.line(170, 78, 170, 103);

    doc.setLineWidth(0.1);
    doc.line(198, 78, 198, 103);

    doc.setLineWidth(0.1);
    doc.line(45, 107, 45, 113);

    doc.line(5,113,205,113)
    doc.line(5,107,205,107)
    doc.line(5,103,205,103)
    doc.line(5,99,205,99)
    doc.line(5,95,205,95)
    doc.line(5,91,205,91)
    doc.line(5,87,205,87)
    doc.line(5,83,205,83)
    doc.line(40,78,205,78)

    doc.setFontSize(10);
    doc.text("VİTAL BULGULAR",10,80);

    doc.setFontSize(7);
    doc.text("ÖLÇÜ ZAMANI",52,77);
    doc.setFontSize(7);
    doc.text("EMESYONEL DURUM",77,77);
    doc.setFontSize(7);
    doc.text("PUPİLLER",108,77);
    doc.setFontSize(7);
    doc.text("DERİ",134,77);
    doc.setFontSize(7);
    doc.text("SOLUNUM",157,77);
    doc.setFontSize(7);
    doc.text("NABIZ",183,77);

    var measurement_1 = document.getElementById("1_measurement").value;
    doc.setFontSize(9);
    doc.text(measurement_1,42,82).value;

    var second_measurement = document.getElementById("second_measurement").value;
    doc.setFontSize(9);
    doc.text(second_measurement,53,82).value;

    var measurement_3 = document.getElementById("3_measurement").value;
    doc.setFontSize(9);
    doc.text(measurement_3,65,82).value;

    doc.setFontSize(9);
    doc.text("Tansiyon",6,86);

    var blood_pressure_1 = document.getElementById("1_blood_pressure").value;
    doc.setFontSize(9);
    doc.text(blood_pressure_1,42,86).value;

    var blood_pressure_2 = document.getElementById("2_blood_pressure").value;
    doc.setFontSize(9);
    doc.text(blood_pressure_2,53,86).value;

    var blood_pressure_3 = document.getElementById("3_blood_pressure").value;
    doc.setFontSize(9);
    doc.text(blood_pressure_3,65,86).value;

    doc.setFontSize(9);
    doc.text("Nabız",6,90);

    var pulse_1 = document.getElementById("1_pulse").value;
    doc.setFontSize(9);
    doc.text(pulse_1,42,90).value;

    var pulse_2 = document.getElementById("2_pulse").value;
    doc.setFontSize(9);
    doc.text(pulse_2,53,90).value;

    var pulse_3 = document.getElementById("3_pulse").value;
    doc.setFontSize(9);
    doc.text(pulse_3,65,90).value;
    
    doc.setFontSize(9);
    doc.text("SpO2",6,94);

    var spo2_1 = document.getElementById("1_spo2").value;
    doc.setFontSize(9);
    doc.text(spo2_1,42,94).value;

    var spo2_2 = document.getElementById("2_spo2").value;
    doc.setFontSize(9);
    doc.text(spo2_2,53,94).value;

    var spo2_3 = document.getElementById("3_spo2").value;
    doc.setFontSize(9);
    doc.text(spo2_3,65,94).value;

    doc.setFontSize(9);
    doc.text("Solunum/dk",6,98);

    var respirations_min_1 = document.getElementById("1_respirations_min").value;
    doc.setFontSize(9);
    doc.text(respirations_min_1,42,98).value;

    var respirations_min_2 = document.getElementById("2_respirations_min").value;
    doc.setFontSize(9);
    doc.text(respirations_min_2,53,98).value;

    var respirations_min_3 = document.getElementById("3_respirations_min").value;
    doc.setFontSize(9);
    doc.text(respirations_min_3,65,98).value;

    doc.setFontSize(9);
    doc.text("Ateş",6,102);

    var fire_1 = document.getElementById("1_fire").value;
    doc.setFontSize(9);
    doc.text(fire_1,42,102).value;

    var fire_2 = document.getElementById("2_fire").value;
    doc.setFontSize(9);
    doc.text(fire_2,53,102).value;

    var fire_3 = document.getElementById("2_fire").value;
    doc.setFontSize(9);
    doc.text(fire_3,65,102).value;

    doc.setFontSize(9);
    doc.text("Normal",76,82);
    var normal = new jspdf.AcroFormCheckBox();
    var normalTxt = document.getElementById("statetxt").value;
    console.log("Normal",normalTxt);
    let hasnormalText = false;
    console.log
    if(normalTxt == 'normal') {
        console.log("Girdi2");
        hasnormalText = true;
    }
    normal.appearanceState = hasnormalText ? 'On' : 'Off';
    normal.readOnly = false;
    normal.fieldName = "Normal";
    normal.Rect = [97, 78.5, 4, 4];
    normal.value = 'normal';
    doc.addField(normal);

    doc.setFontSize(9);
    doc.text("Üzüntülü",76,86);
    var sad = new jspdf.AcroFormCheckBox();
    var sadTxt = document.getElementById("statetxt").value;
    let hassadText = false;
    if(sadTxt == 'sad') {
        console.log("Girdi2");
        hassadText = true;
    }
    sad.appearanceState = hassadText ? 'On' : 'Off';
    sad.readOnly = false;
    sad.fieldName = "Üzüntülü";
    sad.Rect = [97, 83.5, 4, 4];
    sad.value = 'sad';
    doc.addField(sad);

    doc.setFontSize(9);
    doc.text("Huzursuz",76,90);
    var restless = new jspdf.AcroFormCheckBox();
    var restlessTxt = document.getElementById("statetxt").value;
    let hasrestlessText = false;
    if(restlessTxt == 'restless') {
        console.log("Girdi");
        hasrestlessText = true;
    }
    restless.appearanceState = hasrestlessText ? 'On' : 'Off';
    restless.readOnly = false;
    restless.fieldName = "Huzursuz";
    restless.Rect = [97, 87, 4, 4];
    restless.value = 'restless';
    doc.addField(restless);

    doc.setFontSize(9);
    doc.text("Kayıtsız",76,94);
    var indifferent = new jspdf.AcroFormCheckBox();
    var indifferentTxt = document.getElementById("statetxt").value;
    let hasindifferentText = false;
    if(indifferentTxt == 'indifferent') {
        console.log("Girdi2");
        hasindifferentText = true;
    }
    indifferent.appearanceState = hasindifferentText ? 'On' : 'Off';
    indifferent.readOnly = false;
    indifferent.fieldName = "Kayıtsız";
    indifferent.Rect = [97, 91, 4, 4];
    indifferent.value = 'indifferent';
    doc.addField(indifferent);

    doc.setFontSize(9);
    doc.text("Diğer",76,98);
    var other = new jspdf.AcroFormCheckBox();
    var otherTxt = document.getElementById("statetxt").value;
    let hasotherText = false;
    if(otherTxt == 'other') {
        console.log("Girdi2");
        hasotherText = true;
    }
    other.appearanceState = hasotherText ? 'On' : 'Off';
    other.readOnly = false;
    other.fieldName = "Diğer";
    other.Rect = [97, 95, 4, 4];
    other.value = 'other';
    doc.addField(other);

    doc.setFontSize(9);
    doc.text("Normal",103,82);
    var normal1 = new jspdf.AcroFormCheckBox();
    var otherTxt = document.getElementById("pupilstxt").value;
    let hasnormal1Text = false;
    if(otherTxt == 'normal1') {
        console.log("Girdi2");
        hasnormal1Text = true;
    }
    normal1.appearanceState = hasnormal1Text ? 'On' : 'Off';
    normal1.readOnly = false;
    normal1.fieldName = "Normal";
    normal1.Rect = [122, 78.5, 4, 4];
    normal1.value = 'normal1';
    doc.addField(normal1);

    doc.setFontSize(9);
    doc.text("Miyotik",103,86);
    var miotic = new jspdf.AcroFormCheckBox();
    var mioticTxt = document.getElementById("pupilstxt").value;
    let hasmioticText = false;
    if(mioticTxt == 'miotic') {
        console.log("Girdi2");
        hasmioticText = true;
    }
    miotic.appearanceState = hasmioticText ? 'On' : 'Off';
    miotic.readOnly = false;
    miotic.fieldName = "Miyotik";
    miotic.Rect = [122, 83.5, 4, 4];
    miotic.value = 'miotic';
    doc.addField(miotic);

    doc.setFontSize(9);
    doc.text("Midriatik",103,90);
    var mydriatic = new jspdf.AcroFormCheckBox();
    var mydriaticTxt = document.getElementById("pupilstxt").value;
    let hasmydriaticText = false;
    if(mydriaticTxt == 'mydriatic') {
        console.log("Girdi2");
        hasmydriaticText = true;
    }
    mydriatic.appearanceState = hasmydriaticText ? 'On' : 'Off';
    mydriatic.readOnly = false;
    mydriatic.fieldName = "Midriatik";
    mydriatic.Rect = [122, 87, 4, 4];
    mydriatic.value = 'mydriatic';
    doc.addField(mydriatic);

    doc.setFontSize(9);
    doc.text("Anizokorik",103,94);
    var anisochoric = new jspdf.AcroFormCheckBox();
    var anisochoricTxt = document.getElementById("pupilstxt").value;
    let hasanisochoricText = false;
    if(anisochoricTxt == 'anisochoric') {
        console.log("Girdi2");
        hasanisochoricText = true;
    }
    anisochoric.appearanceState = hasanisochoricText ? 'On' : 'Off';
    anisochoric.readOnly = false;
    anisochoric.fieldName = "Anizokorik";
    anisochoric.Rect = [122, 91, 4, 4];
    anisochoric.value = 'anisochoric';
    doc.addField(anisochoric);

    doc.setFontSize(7);
    doc.text("Reaksiyon Yok",103,98);
    var no_reaction = new jspdf.AcroFormCheckBox();
    var no_reactionTxt = document.getElementById("pupilstxt").value;
    let hasno_reactionText = false;
    if(no_reactionTxt == 'no_reaction') {
        console.log("Girdi2");
        hasno_reactionText = true;
    }
    no_reaction.appearanceState = hasno_reactionText ? 'On' : 'Off';
    no_reaction.readOnly = false;
    no_reaction.fieldName = "Reaksiyon Yok";
    no_reaction.Rect = [122, 95, 4, 4];
    no_reaction.value = 'no_reaction';
    doc.addField(no_reaction);

    doc.setFontSize(9);
    doc.text("Fiks Dilate",103,102);
    var fix_dilate = new jspdf.AcroFormCheckBox();
    var fix_dilateTxt = document.getElementById("pupilstxt").value;
    let hasfix_dilateText = false;
    if(fix_dilateTxt == 'fix_dilate') {
        console.log("Girdi2");
        hasfix_dilateText = true;
    }
    fix_dilate.appearanceState = hasfix_dilateText ? 'On' : 'Off';
    fix_dilate.readOnly = false;
    fix_dilate.fieldName = "Fiks Dilate";
    fix_dilate.Rect = [122, 99, 4, 4];
    fix_dilate.value = 'fix_dilate';
    doc.addField(fix_dilate);

    doc.setFontSize(9);
    doc.text("Normal",128,82);
    var normal2 = new jspdf.AcroFormCheckBox();
    var normal2Txt = document.getElementById("skintxt").value;
    let hasnormal2Text = false;
    if(normal2Txt == 'normal2') {
        console.log("Girdi2");
        hasnormal2Text = true;
    }
    normal2.appearanceState = hasnormal2Text ? 'On' : 'Off';
    normal2.readOnly = false;
    normal2.fieldName = "Normal";
    normal2.Rect = [147, 78.5, 4, 4];
    normal2.value = 'normal2';
    doc.addField(normal2);

    doc.setFontSize(9);
    doc.text("Soluk",128,86);
    var pale = new jspdf.AcroFormCheckBox();
    var paleTxt = document.getElementById("skintxt").value;
    let haspaleText = false;
    if(paleTxt == 'pale') {
        console.log("Girdi2");
        haspaleText = true;
    }
    pale.appearanceState = haspaleText ? 'On' : 'Off';
    pale.readOnly = false;
    pale.fieldName = "Soluk";
    pale.Rect = [147, 83.5, 4, 4];
    pale.value = 'pale';
    doc.addField(pale);

    doc.setFontSize(9);
    doc.text("Siyanotik",128,90);
    var cyanonic = new jspdf.AcroFormCheckBox();
    var cyanonicTxt = document.getElementById("skintxt").value;
    let hascyanonicText = false;
    if(cyanonicTxt == 'cyanonic') {
        console.log("Girdi2");
        hascyanonicText = true;
    }
    cyanonic.appearanceState = hascyanonicText ? 'On' : 'Off';
    cyanonic.readOnly = false;
    cyanonic.fieldName = "Siyanotik";
    cyanonic.Rect = [147, 87, 4, 4];
    cyanonic.value = 'cyanonic';
    doc.addField(cyanonic);

    doc.setFontSize(9);
    doc.text("Hiperemik",128,94);
    var hyperemic = new jspdf.AcroFormCheckBox();
    var hyperemicTxt = document.getElementById("skintxt").value;
    let hashyperemicText = false;
    if(hyperemicTxt == 'hyperemic') {
        console.log("Girdi2");
        hashyperemicText = true;
    }
    hyperemic.appearanceState = hashyperemicText ? 'On' : 'Off';
    hyperemic.readOnly = false;
    hyperemic.fieldName = "Hiperemik";
    hyperemic.Rect = [147, 91, 4, 4];
    hyperemic.value = 'hyperemic';
    doc.addField(hyperemic);

    doc.setFontSize(9);
    doc.text("İkterik",128,98);
    var icteric = new jspdf.AcroFormCheckBox();
    var ictericTxt = document.getElementById("skintxt").value;
    let hasictericText = false;
    if(ictericTxt == 'icteric') {
        console.log("Girdi2");
        hasictericText = true;
    }
    icteric.appearanceState = hasictericText ? 'On' : 'Off';
    icteric.readOnly = false;
    icteric.fieldName = "İkterik";
    icteric.Rect = [147, 95, 4, 4];
    icteric.value = 'icteric';
    doc.addField(icteric);

    doc.setFontSize(9);
    doc.text("Terli",128,102);
    var sweaty = new jspdf.AcroFormCheckBox();
    var sweatyTxt = document.getElementById("skintxt").value;
    let hassweatyText = false;
    if(sweatyTxt == 'sweaty') {
        console.log("Girdi2");
        hassweatyText = true;
    }
    sweaty.appearanceState = hassweatyText ? 'On' : 'Off';
    sweaty.readOnly = false;
    sweaty.fieldName = "Terli";
    sweaty.Rect = [147, 99, 4, 4];
    sweaty.value = 'sweaty';
    doc.addField(sweaty);

    doc.setFontSize(9);
    doc.text("Rahat",153,82);
    var comfortable = new jspdf.AcroFormCheckBox();
    var comfortableTxt = document.getElementById("respiratorytxt").value;
    let hascomfortableText = false;
    if(comfortableTxt == 'comfortable') {
        console.log("Girdi2");
        hascomfortableText = true;
    }
    comfortable.appearanceState = hascomfortableText ? 'On' : 'Off';
    comfortable.readOnly = false;
    comfortable.fieldName = "Rahat";
    comfortable.Rect = [171, 78.5, 4, 4];
    comfortable.value = 'comfortable';
    doc.addField(comfortable);

    doc.setFontSize(9);
    doc.text("Derin",153,86);
    var deep = new jspdf.AcroFormCheckBox();
    var deepTxt = document.getElementById("respiratorytxt").value;
    let hasdeepText = false;
    if(deepTxt == 'deep') {
        console.log("Girdi2");
        hasdeepText = true;
    }
    deep.appearanceState = hasdeepText ? 'On' : 'Off';
    deep.readOnly = false;
    deep.fieldName = "Derin";
    deep.Rect = [171, 83.5, 4, 4];
    deep.value = 'deep';
    doc.addField(deep);

    doc.setFontSize(9);
    doc.text("Yüzeysel",153,90);
    var superficial = new jspdf.AcroFormCheckBox();
    var superficialTxt = document.getElementById("respiratorytxt").value;
    let hassuperficialText = false;
    if(superficialTxt == 'superficial') {
        console.log("Girdi2");
        hassuperficialText = true;
    }
    superficial.appearanceState = hassuperficialText ? 'On' : 'Off';
    superficial.readOnly = false;
    superficial.fieldName = "Yüzeysel";
    superficial.Rect = [171, 87, 4, 4];
    superficial.value = 'superficial';
    doc.addField(superficial);

    doc.setFontSize(9);
    doc.text("Düzensiz",153,94);
    var irregular = new jspdf.AcroFormCheckBox();
    var irregularTxt = document.getElementById("respiratorytxt").value;
    let hasirregularText = false;
    if(irregularTxt == 'irregular') {
        console.log("Girdi2");
        hasirregularText = true;
    }
    irregular.appearanceState = hasirregularText ? 'On' : 'Off';
    irregular.readOnly = false;
    irregular.fieldName = "Düzensiz";
    irregular.Rect = [171, 91, 4, 4];
    irregular.value = 'irregular';
    doc.addField(irregular);

    doc.setFontSize(9);
    doc.text("Dispneik",153,98);
    var dyspneic = new jspdf.AcroFormCheckBox();
    var dyspneicTxt = document.getElementById("respiratorytxt").value;
    let hasdyspneicText = false;
    if(dyspneicTxt == 'dyspneic') {
        console.log("Girdi2");
        hasdyspneicText = true;
    }
    dyspneic.appearanceState = hasdyspneicText ? 'On' : 'Off';
    dyspneic.readOnly = false;
    dyspneic.fieldName = "Dispneik";
    dyspneic.Rect = [171, 95, 4, 4];
    dyspneic.value = 'dyspneic';
    doc.addField(dyspneic);

    doc.setFontSize(9);
    doc.text("Yok",153,102);
    var none = new jspdf.AcroFormCheckBox();
    var noneTxt = document.getElementById("respiratorytxt").value;
    let hasnoneText = false;
    if(noneTxt == 'none') {
        console.log("Girdi2");
        hasnoneText = true;
    }
    none.appearanceState = hasnoneText ? 'On' : 'Off';
    none.readOnly = false;
    none.fieldName = "Yok";
    none.Rect = [171, 99, 4, 4];
    none.value = 'none';
    doc.addField(none);


    doc.setFontSize(9);
    doc.text("Düzenli",178,82);
    var organised = new jspdf.AcroFormCheckBox();
    var organisedTxt = document.getElementById("pulsetxt").value;
    let hasorganisedText = false;
    if(organisedTxt == 'organised') {
        console.log("Girdi2");
        hasorganisedText = true;
    }
    organised.appearanceState = hasorganisedText ? 'On' : 'Off';
    organised.readOnly = false;
    organised.fieldName = "Düzenli";
    organised.Rect = [200, 78.5, 4, 4];
    organised.value = 'organised';
    doc.addField(organised);

    doc.setFontSize(9);
    doc.text("Aritmik",178,86);
    var arrhythmic = new jspdf.AcroFormCheckBox();
    var arrhythmicTxt = document.getElementById("pulsetxt").value;
    let haarrhythmicText = false;
    if(arrhythmicTxt == 'arrhythmic') {
        console.log("Girdi2");
        haarrhythmicText = true;
    }
    arrhythmic.appearanceState = haarrhythmicText ? 'On' : 'Off';
    arrhythmic.readOnly = false;
    arrhythmic.fieldName = "Aritmik";
    arrhythmic.Rect = [200, 83.5, 4, 4];
    arrhythmic.value = 'arrhythmic';
    doc.addField(arrhythmic);

    doc.setFontSize(9);
    doc.text("Filiform",178,90);
    var filiform = new jspdf.AcroFormCheckBox();
    var filiformTxt = document.getElementById("pulsetxt").value;
    let hasfiliformText = false;
    if(filiformTxt == 'filiform') {
        console.log("Girdi2");
        hasfiliformText = true;
    }
    filiform.appearanceState = hasfiliformText ? 'On' : 'Off';
    filiform.readOnly = false;
    filiform.fieldName = "Filiform";
    filiform.Rect = [200, 87, 4, 4];
    filiform.value = 'filiform';
    doc.addField(filiform);

    doc.setFontSize(9);
    doc.text("Alınmıyor",178,94);
    var not_received = new jspdf.AcroFormCheckBox();
    var not_receivedTxt = document.getElementById("pulsetxt").value;
    let hasnot_receivedText = false;
    if(not_receivedTxt == 'not_received') {
        console.log("Girdi2");
        hasnot_receivedText = true;
    }
    not_received.appearanceState = hasnot_receivedText ? 'On' : 'Off';
    not_received.readOnly = false;
    not_received.fieldName = "Alınmıyor";
    not_received.Rect = [200, 91, 4, 4];
    not_received.value = 'not_received';
    doc.addField(not_received);

    doc.setFontSize(9);
    doc.text("GKS",6,106);
    doc.setFontSize(8);
    doc.text("Motor Yanıt(A):",42,106);
    var engine_response = document.getElementById("engine_response").value;
    doc.setFontSize(9);
    doc.text(engine_response,62,106).value;

    doc.setFontSize(8);
    doc.text("Sözlü Yanıt(B):",77,106);
    var oral_response = document.getElementById("oral_response").value;
    doc.setFontSize(9);
    doc.text(oral_response,97,106).value;

    doc.setFontSize(8);
    doc.text("Göz Açma(C):",103,106);
    var eyes_open = document.getElementById("eyes_open").value;
    doc.setFontSize(9);
    doc.text(eyes_open,119,106).value;

    doc.setFontSize(8);
    doc.text("GKS Puanı:",128,106);
    var gks_points = document.getElementById("gks_points").value;
    doc.setFontSize(9);
    doc.text(gks_points,144,106).value;

    doc.setFontSize(9);
    doc.text("CPR YAPAN",6,110);
    var cpr_doing = document.getElementById("cpr_doing").value;
    doc.setFontSize(9);
    doc.text(cpr_doing,26,110).value;

    doc.setFontSize(8);
    doc.text("Başlama Zamanı:",46,110);
    var start_time = document.getElementById("start_time").value;
    doc.setFontSize(9);
    doc.text(start_time,72,110).value;

    doc.setFontSize(8);
    doc.text("Bırakma Zamanı:",85,110);
    var finish_time = document.getElementById("finish_time").value;
    doc.setFontSize(9);
    doc.text(finish_time,110,110).value;

    doc.setFontSize(8);
    doc.text("Bırakma Nedeni:",121,110);
    var reason_to_leave = document.getElementById("reason_to_leave").value;
    doc.setFontSize(9);
    doc.text(reason_to_leave,146,110).value;


// ==============================

    doc.setFontSize(7);
    doc.text("Yapılan Uygulamalar ve İşlemler",60,115);

    doc.setFontSize(7);
    doc.text("Transfer Durumu",170,115);

    doc.setLineWidth(0.1);
    doc.line(53, 116, 53, 177);

    doc.setLineWidth(0.1);
    doc.line(95, 116, 95, 177);

    doc.setLineWidth(0.1);
    doc.line(132, 116, 132, 177);

    doc.setLineWidth(0.1);
    doc.line(164, 113, 164, 177);

    doc.line(5,116,205,116)

    doc.line(5,177,205,177)

    doc.setFontSize(5);
    doc.text(" Maske ile hava yolu desteği",8,118);
    var checkBox3 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt3 = document.getElementById("txt1").value;
    var splitTxt3 = checkBoxTxt3.split(",");
    let hasText3 = false;
    for (let i = 0; i< splitTxt3.length; i++){
        if(splitTxt3[i] == 'application1') {
            console.log("Girdi2");
            hasText3 = true;
            break;
        }
    }
    checkBox3.appearanceState = hasText3 ? 'On' : 'Off';
    checkBox3.readOnly = false;
    checkBox3.fieldName = "Maske ile hava yolu desteği";
    checkBox3.Rect = [6, 116, 2, 2];
    checkBox3.value = 'application1'
    doc.addField(checkBox3);

    doc.setFontSize(5);
    doc.text(" Airway ile hava yolu desteği",8,120.5);
    var checkBox4 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt4 = document.getElementById("txt1").value;
    var splitTxt4 = checkBoxTxt4.split(",");
    let hasText4 = false;
    for (let i = 0; i< splitTxt4.length; i++){
        if(splitTxt4[i] == 'application2') {
            console.log("Girdi2");
            hasText4 = true;
            break;
        }
    }
    checkBox4.appearanceState = hasText4 ? 'On' : 'Off';
    checkBox4.readOnly = false;
    checkBox4.fieldName = "Airway ile hava yolu desteği";
    checkBox4.Rect = [6, 118.5, 2, 2];
    checkBox4.value = 'application2'
    doc.addField(checkBox4);

    doc.setFontSize(5);
    doc.text(" Entübasyon uygulaması",8,123);
    var checkBox5 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt5 = document.getElementById("txt1").value;
    var splitTxt5 = checkBoxTxt5.split(",");
    let hasText5 = false;
    for (let i = 0; i< splitTxt5.length; i++){
        if(splitTxt5[i] == 'application3') {
            console.log("Girdi2");
            hasText5 = true;
            break;
        }
    }
    checkBox5.appearanceState = hasText5 ? 'On' : 'Off';
    checkBox5.readOnly = false;
    checkBox5.fieldName = "Entübasyon uygulaması";
    checkBox5.Rect = [6, 121, 2, 2];
    checkBox5.value = 'application3';
    doc.addField(checkBox5);

    doc.setFontSize(5);
    doc.text(" Nazal Entübasyon uygulaması",8,125.5);
    var checkBox6 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt6 = document.getElementById("txt1").value;
    var splitTxt6 = checkBoxTxt6.split(",");
    let hasText6 = false;
    for (let i = 0; i< splitTxt6.length; i++){
        if(splitTxt6[i] == 'application4') {
            console.log("Girdi2");
            hasText6 = true;
            break;
        }
    }
    checkBox6.appearanceState = hasText6 ? 'On' : 'Off';
    checkBox6.readOnly = false;
    checkBox6.fieldName = "Nazal Entübasyon uygulaması";
    checkBox6.Rect = [6, 123.5, 2, 2];
    checkBox6.value = 'application4';
    doc.addField(checkBox6);

    doc.setFontSize(5);
    doc.text(" LMA uygulaması",8,128);
    var checkBox7 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt7 = document.getElementById("txt1").value;
    var splitTxt7 = checkBoxTxt7.split(",");
    let hasText7 = false;
    for (let i = 0; i< splitTxt7.length; i++){
        if(splitTxt7[i] == 'application5') {
            console.log("Girdi2");
            hasText7 = true;
            break;
        }
    }
    checkBox7.appearanceState = hasText7 ? 'On' : 'Off';
    checkBox7.readOnly = false;
    checkBox7.fieldName = "LMA uygulaması";
    checkBox7.Rect = [6, 126, 2, 2];
    checkBox7.value = 'application5';
    doc.addField(checkBox7);

    doc.setFontSize(5);
    doc.text(" Combi tüp uygulaması",8,130.5);
    var checkBox8 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt8 = document.getElementById("txt1").value;
    var splitTxt8 = checkBoxTxt8.split(",");
    let hasText8 = false;
    for (let i = 0; i< splitTxt8.length; i++){
        if(splitTxt8[i] == 'application6') {
            console.log("Girdi2");
            hasText8 = true;
            break;
        }
    }
    checkBox8.appearanceState = hasText8 ? 'On' : 'Off';
    checkBox8.readOnly = false;
    checkBox8.fieldName = "Combi tüp uygulaması";
    checkBox8.Rect = [6, 128.5, 2, 2];
    checkBox8.value = 'application6';
    doc.addField(checkBox8);

    doc.setFontSize(5);
    doc.text(" Acil trakeotomi açılması",8,133);
    var checkBox9 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt9 = document.getElementById("txt1").value;
    var splitTxt9 = checkBoxTxt9.split(",");
    let hasText9 = false;
    for (let i = 0; i< splitTxt9.length; i++){
        if(splitTxt9[i] == 'application7') {
            console.log("Girdi2");
            hasText9 = true;
            break;
        }
    }
    checkBox9.appearanceState = hasText9 ? 'On' : 'Off';
    checkBox9.readOnly = false;
    checkBox9.fieldName = "Acil trakeotomi açılması";
    checkBox9.Rect = [6, 131, 2, 2];
    checkBox9.value = 'application7';
    doc.addField(checkBox9);

    doc.setFontSize(5);
    doc.text(" Mekanik ventilasyon",8,135.5);
    var checkBox10 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt10 = document.getElementById("txt1").value;
    var splitTxt10 = checkBoxTxt10.split(",");
    let hasText10 = false;
    for (let i = 0; i< splitTxt10.length; i++){
        if(splitTxt10[i] == 'application8') {
            console.log("Girdi2");
            hasText10 = true;
            break;
        }
    }
    checkBox10.appearanceState = hasText10 ? 'On' : 'Off';
    checkBox10.readOnly = false;
    checkBox10.fieldName = "Mekanik ventilasyon";
    checkBox10.Rect = [6, 133.5, 2, 2];
    checkBox10.value = 'application8'
    doc.addField(checkBox10);

    doc.setFontSize(5);
    doc.text(" Nebulizatör ile ilaç uygulama",8,138);
    var checkBox11 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt11 = document.getElementById("txt1").value;
    var splitTxt11 = checkBoxTxt11.split(",");
    let hasText11 = false;
    for (let i = 0; i< splitTxt11.length; i++){
        if(splitTxt11[i] == 'application9') {
            console.log("Girdi2");
            hasText11 = true;
            break;
        }
    }
    checkBox11.appearanceState = hasText11 ? 'On' : 'Off';
    checkBox11.readOnly = false;
    checkBox11.fieldName = "Nebulizatör ile ilaç uygulama";
    checkBox11.Rect = [6, 136, 2, 2];
    checkBox11.value = 'application9';
    doc.addField(checkBox11);

    doc.setFontSize(5);
    doc.text(" Oksijen inhalasyon tedavisi 1 Saat",8,140.5);
    var checkBox12 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt12 = document.getElementById("txt1").value;
    var splitTxt12 = checkBoxTxt12.split(",");
    let hasText12 = false;
    for (let i = 0; i< splitTxt12.length; i++){
        if(splitTxt12[i] == 'application10') {
            console.log("Girdi2");
            hasText12 = true;
            break;
        }
    }
    checkBox12.appearanceState = hasText12 ? 'On' : 'Off';
    checkBox12.readOnly = false;
    checkBox12.fieldName = "Oksijen inhalasyon tedavisi 1 Saat";
    checkBox12.Rect = [6, 138.5, 2, 2];
    checkBox12.value = 'application10';
    doc.addField(checkBox12);

    doc.setFontSize(5);
    doc.text(" Aspirasyon uygulaması",8,143);
    var checkBox13 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt13 = document.getElementById("txt1").value;
    var splitTxt13 = checkBoxTxt13.split(",");
    let hasText13 = false;
    for (let i = 0; i< splitTxt13.length; i++){
        if(splitTxt13[i] == 'application11') {
            console.log("Girdi2");
            hasText13 = true;
            break;
        }
    }
    checkBox13.appearanceState = hasText13 ? 'On' : 'Off';
    checkBox13.readOnly = false;
    checkBox13.fieldName = "Aspirasyon uygulaması";
    checkBox13.Rect = [6, 141, 2, 2];
    checkBox13.value = 'application11';
    doc.addField(checkBox13);

    doc.setFontSize(5);
    doc.text(" Ventilatör ile takip (CPAP BİPAP dahil)",8,145.5);
    var checkBox14 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt14= document.getElementById("txt1").value;
    var splitTxt14 = checkBoxTxt14.split(",");
    let hasText14 = false;
    for (let i = 0; i< splitTxt14.length; i++){
        if(splitTxt14[i] == 'application12') {
            console.log("Girdi2");
            hasText14 = true;
            break;
        }
    }
    checkBox14.appearanceState = hasText14 ? 'On' : 'Off';
    checkBox14.readOnly = false;
    checkBox14.fieldName = "Ventilatör ile takip (CPAP BİPAP dahil)";
    checkBox14.Rect = [6, 143.5, 2, 2];
    checkBox14.value = 'application12';
    doc.addField(checkBox14);

    doc.setFontSize(5);
    doc.text(" Balon valf maske uygulaması",8,148);
    var checkBox15 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt15 = document.getElementById("txt1").value;
    var splitTxt15 = checkBoxTxt15.split(",");
    let hasText15 = false;
    for (let i = 0; i< splitTxt15.length; i++){
        if(splitTxt15[i] == 'application13') {
            console.log("Girdi2");
            hasText15 = true;
            break;
        }
    }
    checkBox15.appearanceState = hasText15 ? 'On' : 'Off';
    checkBox15.readOnly = false;
    checkBox15.fieldName = "Balon valf maske uygulaması";
    checkBox15.Rect = [6, 146, 2, 2];
    checkBox15.value = 'application13';
    doc.addField(checkBox15);

    doc.setFontSize(5);
    doc.text(" CPR uygulaması",8,150.5);
    var checkBox16 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt16 = document.getElementById("txt1").value;
    var splitTxt16 = checkBoxTxt16.split(",");
    let hasText16 = false;
    for (let i = 0; i< splitTxt16.length; i++){
        if(splitTxt16[i] == 'application14') {
            console.log("Girdi2");
            hasText16 = true;
            break;
        }
    }
    checkBox16.appearanceState = hasText16 ? 'On' : 'Off';
    checkBox16.readOnly = false;
    checkBox16.fieldName = "CPR uygulaması";
    checkBox16.Rect = [6, 148.5, 2, 2];
    checkBox16.value = 'application14';
    doc.addField(checkBox16);

    doc.setFontSize(5);
    doc.text(" Defibrilasyon",8,153);
    var checkBox17 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt17 = document.getElementById("txt1").value;
    var splitTxt17 = checkBoxTxt17.split(",");
    let hasText17 = false;
    for (let i = 0; i< splitTxt17.length; i++){
        if(splitTxt17[i] == 'application15') {
            console.log("Girdi2");
            hasText17 = true;
            break;
        }
    }
    checkBox17.appearanceState = hasText17 ? 'On' : 'Off';
    checkBox17.readOnly = false;
    checkBox17.fieldName = "Defibrilasyon";
    checkBox17.Rect = [6, 151, 2, 2];
    checkBox17.value = 'application15';
    doc.addField(checkBox17);

    doc.setFontSize(5);
    doc.text(" Kardiyoversiyon",8,155.5);
    var checkBox18 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt18 = document.getElementById("txt1").value;
    var splitTxt18 = checkBoxTxt18.split(",");
    let hasText18 = false;
    for (let i = 0; i< splitTxt18.length; i++){
        if(splitTxt18[i] == 'application16') {
            console.log("Girdi2");
            hasText18 = true;
            break;
        }
    }
    checkBox18.appearanceState = hasText18 ? 'On' : 'Off';
    checkBox18.readOnly = false;
    checkBox18.fieldName = "Kardiyoversiyon";
    checkBox18.Rect = [6, 153.5, 2, 2];
    checkBox18.value = 'application16';
    doc.addField(checkBox18);

    doc.setFontSize(5);
    doc.text(" Monitorizasyon",8,158);
    var checkBox19 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt19 = document.getElementById("txt1").value;
    var splitTxt19 = checkBoxTxt19.split(",");
    let hasText19 = false;
    for (let i = 0; i< splitTxt19.length; i++){
        if(splitTxt19[i] == 'application17') {
            console.log("Girdi2");
            hasText19 = true;
            break;
        }
    }
    checkBox19.appearanceState = hasText19 ? 'On' : 'Off';
    checkBox19.readOnly = false;
    checkBox19.fieldName = "Monitorizasyon";
    checkBox19.Rect = [6, 156, 2, 2];
    checkBox19.value = 'application17';
    doc.addField(checkBox19);

    doc.setFontSize(5);
    doc.text(" EKG uygulaması",8,160.5);
    var checkBox20 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt20 = document.getElementById("txt1").value;
    var splitTxt20 = checkBoxTxt20.split(",");
    let hasText20 = false;
    for (let i = 0; i< splitTxt20.length; i++){
        if(splitTxt20[i] == 'application18') {
            console.log("Girdi2");
            hasText20 = true;
            break;
        }
    }
    checkBox20.appearanceState = hasText20 ? 'On' : 'Off';
    checkBox20.readOnly = false;
    checkBox20.fieldName = "EKG uygulaması";
    checkBox20.Rect = [6, 158.5, 2, 2];
    checkBox20.value = 'application18';
    doc.addField(checkBox20);

    doc.setFontSize(5);
    doc.text(" İlaçlı müdahale",8,163);
    var checkBox21 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt21 = document.getElementById("txt1").value;
    var splitTxt21 = checkBoxTxt21.split(",");
    let hasText21 = false;
    for (let i = 0; i< splitTxt21.length; i++){
        if(splitTxt21[i] == 'application19') {
            console.log("Girdi2");
            hasText21 = true;
            break;
        }
    }
    checkBox21.appearanceState = hasText21 ? 'On' : 'Off';
    checkBox21.readOnly = false;
    checkBox21.fieldName = "İlaçlı müdahale";
    checkBox21.Rect = [6, 161, 2, 2];
    checkBox21.value = 'application19';
    doc.addField(checkBox21);

    doc.setFontSize(5);
    doc.text(" Damar yolu açılması",8,165.5);
    var checkBox22 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt22 = document.getElementById("txt1").value;
    var splitTxt22 = checkBoxTxt22.split(",");
    let hasText22 = false;
    for (let i = 0; i< splitTxt22.length; i++){
        if(splitTxt22[i] == 'application20') {
            console.log("Girdi2");
            hasText22 = true;
            break;
        }
    }
    checkBox22.appearanceState = hasText22 ? 'On' : 'Off';
    checkBox22.readOnly = false;
    checkBox22.fieldName = "Damar yolu açılması";
    checkBox22.Rect = [6, 163.5, 2, 2];
    checkBox22.value = 'application20';
    doc.addField(checkBox22);

    doc.setFontSize(5);
    doc.text(" Intravenöz uygulama",8,168);
    var checkBox23 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt23 = document.getElementById("txt1").value;
    var splitTxt23 = checkBoxTxt23.split(",");
    let hasText23 = false;
    for (let i = 0; i< splitTxt23.length; i++){
        if(splitTxt23[i] == 'application21') {
            console.log("Girdi2");
            hasText23 = true;
            break;
        }
    }
    checkBox23.appearanceState = hasText23 ? 'On' : 'Off';
    checkBox23.readOnly = false;
    checkBox23.fieldName = "Intravenöz uygulama";
    checkBox23.Rect = [6, 166, 2, 2];
    checkBox23.value = 'application21';
    doc.addField(checkBox23);

    doc.setFontSize(5);
    doc.text(" Intra osseöz kiti uygulaması",8,170.5);
    var checkBox24 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt24 = document.getElementById("txt1").value;
    var splitTxt24 = checkBoxTxt24.split(",");
    let hasText24 = false;
    for (let i = 0; i< splitTxt24.length; i++){
        if(splitTxt24[i] == 'application22') {
            console.log("Girdi2");
            hasText24 = true;
            break;
        }
    }
    checkBox24.appearanceState = hasText24 ? 'On' : 'Off';
    checkBox24.readOnly = false;
    checkBox24.fieldName = "Intra osseöz kiti uygulaması";
    checkBox24.Rect = [6, 168.5, 2, 2];
    checkBox24.value = 'application22';
    doc.addField(checkBox24);

    doc.setFontSize(5);
    doc.text(" Intra musculer uygulama",8,173);
    var checkBox25 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt25 = document.getElementById("txt1").value;
    var splitTxt25 = checkBoxTxt25.split(",");
    let hasText25 = false;
    for (let i = 0; i< splitTxt25.length; i++){
        if(splitTxt25[i] == 'application23') {
            console.log("Girdi2");
            hasText25 = true;
            break;
        }
    }
    checkBox25.appearanceState = hasText25 ? 'On' : 'Off';
    checkBox25.readOnly = false;
    checkBox25.fieldName = "Intra musculer uygulama";
    checkBox25.Rect = [6, 171, 2, 2];
    checkBox25.value = 'application23';
    doc.addField(checkBox25);

    doc.setFontSize(5);
    doc.text(" Subcutan uygulama",8,175.5);
    var checkBox26 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt26 = document.getElementById("txt1").value;
    var splitTxt26 = checkBoxTxt26.split(",");
    let hasText26 = false;
    for (let i = 0; i< splitTxt26.length; i++){
        if(splitTxt26[i] == 'application24') {
            console.log("Girdi2");
            hasText26 = true;
            break;
        }
    }
    checkBox26.appearanceState = hasText26 ? 'On' : 'Off';
    checkBox26.readOnly = false;
    checkBox26.fieldName = "Subcutan uygulama";
    checkBox26.Rect = [6, 173.5, 2, 2];
    checkBox26.value = 'application24';
    doc.addField(checkBox26);


// =============================


    doc.setFontSize(5);
    doc.text(" Kanama durdurucu ajan uygulaması",56,118);
    var checkBox27 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt27 = document.getElementById("txt1").value;
    var splitTxt27 = checkBoxTxt27.split(",");
    let hasText27 = false;
    for (let i = 0; i< splitTxt27.length; i++){
        if(splitTxt27[i] == 'application25') {
            console.log("Girdi2");
            hasText27 = true;
            break;
        }
    }
    checkBox27.appearanceState = hasText27 ? 'On' : 'Off';
    checkBox27.readOnly = false;
    checkBox27.fieldName = "Kanama durdurucu ajan uygulaması";
    checkBox27.Rect = [54, 116, 2, 2];
    checkBox27.value = 'application25';
    doc.addField(checkBox27);

    doc.setFontSize(5);
    doc.text(" Cut down uygulaması",56,120.5);
    var checkBox28 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt28 = document.getElementById("txt1").value;
    var splitTxt28 = checkBoxTxt28.split(",");
    let hasText28 = false;
    for (let i = 0; i< splitTxt28.length; i++){
        if(splitTxt28[i] == 'application00') {
            console.log("Girdi2");
            hasText28 = true;
            break;
        }
    }
    checkBox28.appearanceState = hasText28 ? 'On' : 'Off';
    checkBox28.readOnly = false;
    checkBox28.fieldName = "Cut down uygulaması";
    checkBox28.Rect = [54, 118.5, 2, 2];
    checkBox28.value = 'application00';
    doc.addField(checkBox28);

    doc.setFontSize(5);
    doc.text(" İnfüzyon pompası",56,123);
    var checkBox29 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt29 = document.getElementById("txt1").value;
    var splitTxt29 = checkBoxTxt29.split(",");
    let hasText29 = false;
    for (let i = 0; i< splitTxt29.length; i++){
        if(splitTxt29[i] == 'application26') {
            console.log("Girdi2");
            hasText29 = true;
            break;
        }
    }
    checkBox29.appearanceState = hasText29 ? 'On' : 'Off';
    checkBox29.readOnly = false;
    checkBox29.fieldName = "İnfüzyon pompası";
    checkBox29.Rect = [54, 121, 2, 2];
    checkBox29.value = 'application26';
    doc.addField(checkBox29);

    doc.setFontSize(5);
    doc.text(" Kanama kontrolü",56,125.5);
    var checkBox30 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt30 = document.getElementById("txt1").value;
    var splitTxt30 = checkBoxTxt30.split(",");
    let hasText30 = false;
    for (let i = 0; i< splitTxt30.length; i++){
        if(splitTxt30[i] == 'application27') {
            console.log("Girdi2");
            hasText30 = true;
            break;
        }
    }
    checkBox30.appearanceState = hasText30 ? 'On' : 'Off';
    checkBox30.readOnly = false;
    checkBox30.fieldName = "Kanama kontrolü";
    checkBox30.Rect = [54, 123.5, 2, 2];
    checkBox30.value = 'application27';
    doc.addField(checkBox30);

    doc.setFontSize(5);
    doc.text(" Çubuk atel uygulaması",56,128);
    var checkBox31 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt31 = document.getElementById("txt1").value;
    var splitTxt31 = checkBoxTxt31.split(",");
    let hasText31 = false;
    for (let i = 0; i< splitTxt31.length; i++){
        if(splitTxt31[i] == 'application28') {
            console.log("Girdi2");
            hasText31 = true;
            break;
        }
    }
    checkBox31.appearanceState = hasText31 ? 'On' : 'Off';
    checkBox31.readOnly = false;
    checkBox31.fieldName = "Çubuk atel uygulaması";
    checkBox31.Rect = [54, 126, 2, 2];
    checkBox31.value = 'application28';
    doc.addField(checkBox31);

    doc.setFontSize(5);
    doc.text(" Vakum atel uygulaması",56,130.5);
    var checkBox32 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt32 = document.getElementById("txt1").value;
    var splitTxt32 = checkBoxTxt32.split(",");
    let hasText32 = false;
    for (let i = 0; i< splitTxt32.length; i++){
        if(splitTxt32[i] == 'application29') {
            console.log("Girdi2");
            hasText32 = true;
            break;
        }
    }
    checkBox32.appearanceState = hasText32 ? 'On' : 'Off';
    checkBox32.readOnly = false;
    checkBox32.fieldName = " Vakum atel uygulaması";
    checkBox32.Rect = [54, 128.5, 2, 2];
    checkBox32.value = 'application29';
    doc.addField(checkBox32);

    doc.setFontSize(5);
    doc.text(" Şişme atel uygulaması",56,133);
    var checkBox33 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt33 = document.getElementById("txt1").value;
    var splitTxt33 = checkBoxTxt33.split(",");
    let hasText33 = false;
    for (let i = 0; i< splitTxt33.length; i++){
        if(splitTxt33[i] == 'application30') {
            console.log("Girdi2");
            hasText33 = true;
            break;
        }
    }
    checkBox33.appearanceState = hasText33 ? 'On' : 'Off';
    checkBox33.readOnly = false;
    checkBox33.fieldName = "Şişme atel uygulaması";
    checkBox33.Rect = [54, 131, 2, 2];
    checkBox33.value = 'application30';
    doc.addField(checkBox33);

    doc.setFontSize(5);
    doc.text(" U atel uygulaması",56,135.5);
    var checkBox34 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt34 = document.getElementById("txt1").value;
    var splitTxt34 = checkBoxTxt34.split(",");
    let hasText34 = false;
    for (let i = 0; i< splitTxt34.length; i++){
        if(splitTxt34[i] == 'application31') {
            console.log("Girdi2");
            hasText34 = true;
            break;
        }
    }
    checkBox34.appearanceState = hasText34 ? 'On' : 'Off';
    checkBox34.readOnly = false;
    checkBox34.fieldName = "U atel uygulaması";
    checkBox34.Rect = [54, 133.5, 2, 2];
    checkBox34.value = 'application31';
    doc.addField(checkBox34);

    doc.setFontSize(5);
    doc.text(" Traksiyon atel uygulaması",56,138);
    var checkBox35 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt35 = document.getElementById("txt1").value;
    var splitTxt35 = checkBoxTxt35.split(",");
    let hasText35 = false;
    for (let i = 0; i< splitTxt35.length; i++){
        if(splitTxt35[i] == 'application32') {
            console.log("Girdi2");
            hasText35 = true;
            break;
        }
    }
    checkBox35.appearanceState = hasText35 ? 'On' : 'Off';
    checkBox35.readOnly = false;
    checkBox35.fieldName = "Traksiyon atel uygulaması";
    checkBox35.Rect = [54, 136, 2, 2];
    checkBox35.value = 'application32';
    doc.addField(checkBox35);

    doc.setFontSize(5);
    doc.text(" Pelvis kemeri uygulaması",56,140.5);
    var checkBox36 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt36 = document.getElementById("txt1").value;
    var splitTxt36 = checkBoxTxt36.split(",");
    let hasText36 = false;
    for (let i = 0; i< splitTxt36.length; i++){
        if(splitTxt36[i] == 'application33') {
            console.log("Girdi2");
            hasText36 = true;
            break;
        }
    }
    checkBox36.appearanceState = hasText36 ? 'On' : 'Off';
    checkBox36.readOnly = false;
    checkBox36.fieldName = "Pelvis kemeri uygulaması";
    checkBox36.Rect = [54, 138.5, 2, 2];
    checkBox36.value = 'application33';
    doc.addField(checkBox36);

    doc.setFontSize(5);
    doc.text(" Sekiz bandaj uygulaması",56,143);
    var checkBox37 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt37 = document.getElementById("txt1").value;
    var splitTxt37 = checkBoxTxt37.split(",");
    let hasText37 = false;
    for (let i = 0; i< splitTxt37.length; i++){
        if(splitTxt37[i] == 'application34') {
            console.log("Girdi2");
            hasText37 = true;
            break;
        }
    }
    checkBox37.appearanceState = hasText37 ? 'On' : 'Off';
    checkBox37.readOnly = false;
    checkBox37.fieldName = "Sekiz bandaj uygulaması";
    checkBox37.Rect = [54, 141, 2, 2];
    checkBox37.value = 'application34';
    doc.addField(checkBox37);

    doc.setFontSize(5);
    doc.text(" Elastik bandaj (velpa)",56,145.5);
    var checkBox38 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt38 = document.getElementById("txt1").value;
    var splitTxt38 = checkBoxTxt38.split(",");
    let hasText38 = false;
    for (let i = 0; i< splitTxt38.length; i++){
        if(splitTxt38[i] == 'application35') {
            console.log("Girdi2");
            hasText38 = true;
            break;
        }
    }
    checkBox38.appearanceState = hasText38 ? 'On' : 'Off';
    checkBox38.readOnly = false;
    checkBox38.fieldName = "Elastik bandaj (velpa)";
    checkBox38.Rect = [54, 143.5, 2, 2];
    checkBox38.value = 'application35';
    doc.addField(checkBox38);

    doc.setFontSize(5);
    doc.text(" Femur(vücut) traksiyonu",56,148);
    var checkBox39 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt39 = document.getElementById("txt1").value;
    var splitTxt39 = checkBoxTxt39.split(",");
    let hasText39 = false;
    for (let i = 0; i< splitTxt39.length; i++){
        if(splitTxt39[i] == 'application36') {
            console.log("Girdi2");
            hasText39 = true;
            break;
        }
    }
    checkBox39.appearanceState = hasText39 ? 'On' : 'Off';
    checkBox39.readOnly = false;
    checkBox39.fieldName = "Femur(vücut) traksiyonu";
    checkBox39.Rect = [54, 146, 2, 2];
    checkBox39.value = 'application36';
    doc.addField(checkBox39);

    doc.setFontSize(5);
    doc.text(" Eklem çıkığı kapalı redüksiyonu",56,150.5);
    var checkBox40 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt40 = document.getElementById("txt1").value;
    var splitTxt40 = checkBoxTxt40.split(",");
    let hasText40 = false;
    for (let i = 0; i< splitTxt40.length; i++){
        if(splitTxt40[i] == 'application37') {
            console.log("Girdi2");
            hasText40 = true;
            break;
        }
    }
    checkBox40.appearanceState = hasText40 ? 'On' : 'Off';
    checkBox40.readOnly = false;
    checkBox40.fieldName = "Eklem çıkığı kapalı redüksiyonu";
    checkBox40.Rect = [54, 148.5, 2, 2];
    checkBox40.value = 'application37';
    doc.addField(checkBox40);

    doc.setFontSize(5);
    doc.text(" Servical collar uygulama",56,153);
    var checkBox41 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt41 = document.getElementById("txt1").value;
    var splitTxt41 = checkBoxTxt41.split(",");
    let hasText41 = false;
    for (let i = 0; i< splitTxt41.length; i++){
        if(splitTxt41[i] == 'application38') {
            console.log("Girdi2");
            hasText41 = true;
            break;
        }
    }
    checkBox41.appearanceState = hasText41 ? 'On' : 'Off';
    checkBox41.readOnly = false;
    checkBox41.fieldName = "Servical collar uygulama";
    checkBox41.Rect = [54, 151, 2, 2];
    checkBox41.value = 'application38';
    doc.addField(checkBox41);

    doc.setFontSize(5);
    doc.text(" Travma yeleği",56,155.5);
    var checkBox42 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt42 = document.getElementById("txt1").value;
    var splitTxt42 = checkBoxTxt42.split(",");
    let hasText42 = false;
    for (let i = 0; i< splitTxt42.length; i++){
        if(splitTxt42[i] == 'application39') {
            console.log("Girdi2");
            hasText42 = true;
            break;
        }
    }
    checkBox42.appearanceState = hasText42 ? 'On' : 'Off';
    checkBox42.readOnly = false;
    checkBox42.fieldName = "Travma yeleğ";
    checkBox42.Rect = [54, 153.5, 2, 2];
    checkBox42.value = 'application39';
    doc.addField(checkBox42);

    // doc.setFontSize(5);
    // doc.text(" Faraş sedye uygulaması",56,158);
    // var checkBox = new jspdf.AcroFormCheckBox();
    // var checkBoxTxt2 = document.getElementById("txt1").value;
    // var splitTxt2 = checkBoxTxt2.split(",");
    // let hasText43 = false;
    // for (let i = 0; i< splitTxt2.length; i++){
    //     if(splitTxt2[i] == 'application41') {
    //         console.log("Girdi2");
    //         hasText43 = true;
    //         break;
    //     }
    // }
    // checkBox2.appearanceState = hasText43 ? 'On' : 'Off';
    // checkBox.readOnly = false;
    // checkBox.fieldName = "Faraş sedye uygulaması";
    // checkBox.Rect = [54, 156, 2, 2];
    // checkBox.value = 'application41'
    // doc.addField(checkBox);

    doc.setFontSize(5);
    doc.text(" Sırt tahtası uygulaması",56,160.5);
    var checkBox43 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt43 = document.getElementById("txt1").value;
    var splitTxt43 = checkBoxTxt43.split(",");
    let hasText43 = false;
    for (let i = 0; i< splitTxt43.length; i++){
        if(splitTxt43[i] == 'application41') {
            console.log("Girdi2");
            hasText43 = true;
            break;
        }
    }
    checkBox43.appearanceState = hasText43 ? 'On' : 'Off';
    checkBox43.readOnly = false;
    checkBox43.fieldName = "Sırt tahtası uygulaması";
    checkBox43.Rect = [54, 158.5, 2, 2];
    checkBox43.value = 'application41';
    doc.addField(checkBox43);

    doc.setFontSize(5);
    doc.text(" Vakum sedye uygulaması",56,163);
    var checkBox44 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt44 = document.getElementById("txt1").value;
    var splitTxt44 = checkBoxTxt44.split(",");
    let hasText44 = false;
    for (let i = 0; i< splitTxt44.length; i++){
        if(splitTxt44[i] == 'application42') {
            console.log("Girdi2");
            hasText44 = true;
            break;
        }
    }
    checkBox44.appearanceState = hasText44 ? 'On' : 'Off';
    checkBox44.readOnly = false;
    checkBox44.fieldName = "Vakum sedye uygulaması";
    checkBox44.Rect = [54, 161, 2, 2];
    checkBox44.value = 'application42';
    doc.addField(checkBox44);

    doc.setFontSize(5);
    doc.text(" Atel+velpau",56,165.5);
    var checkBox45 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt45 = document.getElementById("txt1").value;
    var splitTxt45 = checkBoxTxt45.split(",");
    let hasText45 = false;
    for (let i = 0; i< splitTxt45.length; i++){
        if(splitTxt45[i] == 'application43') {
            console.log("Girdi2");
            hasText45 = true;
            break;
        }
    }
    checkBox45.appearanceState = hasText45 ? 'On' : 'Off';
    checkBox45.readOnly = false;
    checkBox45.fieldName = "Atel+velpau";
    checkBox45.Rect = [54, 163.5, 2, 2];
    checkBox45.value = 'application43';
    doc.addField(checkBox45);

    doc.setFontSize(5);
    doc.text(" Cilt traksiyonu uygulaması",56,168);
    var checkBox46 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt46 = document.getElementById("txt1").value;
    var splitTxt46 = checkBoxTxt46.split(",");
    let hasText46 = false;
    for (let i = 0; i< splitTxt46.length; i++){
        if(splitTxt46[i] == 'application44') {
            console.log("Girdi2");
            hasText46 = true;
            break;
        }
    }
    checkBox46.appearanceState = hasText46 ? 'On' : 'Off';
    checkBox46.readOnly = false;
    checkBox46.fieldName = "Cilt traksiyonu uygulaması";
    checkBox46.Rect = [54, 166, 2, 2];
    checkBox46.value = 'application44';
    doc.addField(checkBox46);

    doc.setFontSize(5);
    doc.text(" Apse veya hematom drenajı (yüzeyel)",56,170.5);
    var checkBox47 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt47 = document.getElementById("txt1").value;
    var splitTxt47 = checkBoxTxt47.split(",");
    let hasText47 = false;
    for (let i = 0; i< splitTxt47.length; i++){
        if(splitTxt47[i] == 'application45') {
            console.log("Girdi2");
            hasText47 = true;
            break;
        }
    }
    checkBox47.appearanceState = hasText47 ? 'On' : 'Off';
    checkBox47.readOnly = false;
    checkBox47.fieldName = "Apse veya hematom drenajı (yüzeyel)";
    checkBox47.Rect = [54, 168.5, 2, 2];
    checkBox47.value = 'application45';
    doc.addField(checkBox47);

    doc.setFontSize(5);
    doc.text(" Sütur atılması",56,173);
    var checkBox48 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt48 = document.getElementById("txt1").value;
    var splitTxt48 = checkBoxTxt48.split(",");
    let hasText48 = false;
    for (let i = 0; i< splitTxt48.length; i++){
        if(splitTxt48[i] == 'application46') {
            console.log("Girdi2");
            hasText48 = true;
            break;
        }
    }
    checkBox48.appearanceState = hasText48 ? 'On' : 'Off';
    checkBox48.readOnly = false;
    checkBox48.fieldName = "Sütur atılması";
    checkBox48.Rect = [54, 171, 2, 2];
    checkBox48.value = 'application46';
    doc.addField(checkBox48);

    doc.setFontSize(5);
    doc.text(" Sütur alınması",56,175.5);
    var checkBox49 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt49 = document.getElementById("txt1").value;
    var splitTxt49 = checkBoxTxt49.split(",");
    let hasText49 = false;
    for (let i = 0; i< splitTxt49.length; i++){
        if(splitTxt49[i] == 'application47') {
            console.log("Girdi2");
            hasText49 = true;
            break;
        }
    }
    checkBox49.appearanceState = hasText49 ? 'On' : 'Off';
    checkBox49.readOnly = false;
    checkBox49.fieldName = "Sütur alınması";
    checkBox49.Rect = [54, 173.5, 2, 2];
    checkBox49.value = 'application47';
    doc.addField(checkBox49);

// ====================================
    doc.setFontSize(5);
    doc.text(" Mide lavajı",98,118);
    var checkBox50 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt50 = document.getElementById("txt1").value;
    var splitTxt50 = checkBoxTxt50.split(",");
    let hasText50 = false;
    for (let i = 0; i< splitTxt50.length; i++){
        if(splitTxt50[i] == 'application48') {
            console.log("Girdi2");
            hasText50 = true;
            break;
        }
    }
    checkBox50.appearanceState = hasText50 ? 'On' : 'Off';
    checkBox50.readOnly = false;
    checkBox50.fieldName = "Mide lavajı";
    checkBox50.Rect = [96, 116, 2, 2];
    checkBox50.value = 'application48';
    doc.addField(checkBox50);

    doc.setFontSize(5);
    doc.text(" Ng sonda takılması",98,120.5);
    var checkBox51 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt51 = document.getElementById("txt1").value;
    var splitTxt51 = checkBoxTxt51.split(",");
    let hasText51 = false;
    for (let i = 0; i< splitTxt51.length; i++){
        if(splitTxt51[i] == 'application49') {
            console.log("Girdi2");
            hasText51 = true;
            break;
        }
    }
    checkBox51.appearanceState = hasText51 ? 'On' : 'Off';
    checkBox51.readOnly = false;
    checkBox51.fieldName = "Ng sonda takılması";
    checkBox51.Rect = [96, 118.5, 2, 2];
    checkBox51.value = 'application49';
    doc.addField(checkBox51);

    doc.setFontSize(5);
    doc.text(" Mesane sondası takılması",98,123);
    var checkBox52 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt52 = document.getElementById("txt1").value;
    var splitTxt52 = checkBoxTxt52.split(",");
    let hasText52 = false;
    for (let i = 0; i< splitTxt52.length; i++){
        if(splitTxt52[i] == 'application50') {
            console.log("Girdi2");
            hasText52 = true;
            break;
        }
    }
    checkBox52.appearanceState = hasText52 ? 'On' : 'Off';
    checkBox52.readOnly = false;
    checkBox52.fieldName = "Mesane sondası takılması";
    checkBox52.Rect = [96, 121, 2, 2];
    checkBox52.value = 'application50';
    doc.addField(checkBox52);

    doc.setFontSize(5);
    doc.text(" Küçük cerrahi mudahale",98,125.5);
    var checkBox53 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt53 = document.getElementById("txt1").value;
    var splitTxt53 = checkBoxTxt53.split(",");
    let hasText53 = false;
    for (let i = 0; i< splitTxt53.length; i++){
        if(splitTxt53[i] == 'application51') {
            console.log("Girdi2");
            hasText53 = true;
            break;
        }
    }
    checkBox53.appearanceState = hasText53 ? 'On' : 'Off';
    checkBox53.readOnly = false;
    checkBox53.fieldName = "Küçük cerrahi mudahale";
    checkBox53.Rect = [96, 123.5, 2, 2];
    checkBox53.value = 'application51';
    doc.addField(checkBox53);

    doc.setFontSize(5);
    doc.text(" Yanık pansuman (büyük)",98,128);
    var checkBox54 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt54 = document.getElementById("txt1").value;
    var splitTxt54 = checkBoxTxt54.split(",");
    let hasText54 = false;
    for (let i = 0; i< splitTxt54.length; i++){
        if(splitTxt54[i] == 'application52') {
            console.log("Girdi2");
            hasText54 = true;
            break;
        }
    }
    checkBox54.appearanceState = hasText54 ? 'On' : 'Off';
    checkBox54.readOnly = false;
    checkBox54.fieldName = "Yanık pansuman (büyük)";
    checkBox54.Rect = [96, 126, 2, 2];
    checkBox54.value = 'application52';
    doc.addField(checkBox54);

    doc.setFontSize(5);
    doc.text(" Yanık pansuman (orta)",98,130.5);
    var checkBox55 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt55 = document.getElementById("txt1").value;
    var splitTxt55 = checkBoxTxt55.split(",");
    let hasText55 = false;
    for (let i = 0; i< splitTxt55.length; i++){
        if(splitTxt55[i] == 'application53') {
            console.log("Girdi2");
            hasText55 = true;
            break;
        }
    }
    checkBox55.appearanceState = hasText55 ? 'On' : 'Off';
    checkBox55.readOnly = false;
    checkBox55.fieldName = "Yanık pansuman (orta)";
    checkBox55.Rect = [96, 128.5, 2, 2];
    checkBox55.value = 'application53';
    doc.addField(checkBox55);

    doc.setFontSize(5);
    doc.text(" Yanık pansuman (küçük)",98,133);
    var checkBox56 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt56 = document.getElementById("txt1").value;
    var splitTxt56 = checkBoxTxt56.split(",");
    let hasText56 = false;
    for (let i = 0; i< splitTxt56.length; i++){
        if(splitTxt56[i] == 'application54') {
            console.log("Girdi2");
            hasText56 = true;
            break;
        }
    }
    checkBox56.appearanceState = hasText56 ? 'On' : 'Off';
    checkBox56.readOnly = false;
    checkBox56.fieldName = "Yanık pansuman (küçük)";
    checkBox56.Rect = [96, 131, 2, 2];
    checkBox56.value = 'application54';
    doc.addField(checkBox56);

    doc.setFontSize(5);
    doc.text(" Pansuman (büyük)",98,135.5);
    var checkBox57 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt57 = document.getElementById("txt1").value;
    var splitTxt57 = checkBoxTxt57.split(",");
    let hasText57 = false;
    for (let i = 0; i< splitTxt57.length; i++){
        if(splitTxt57[i] == 'application55') {
            console.log("Girdi2");
            hasText57 = true;
            break;
        }
    }
    checkBox57.appearanceState = hasText57 ? 'On' : 'Off';
    checkBox57.readOnly = false;
    checkBox57.fieldName = "Pansuman (büyük)";
    checkBox57.Rect = [96, 133.5, 2, 2];
    checkBox57.value = 'application55';
    doc.addField(checkBox57);

    doc.setFontSize(5);
    doc.text(" Pansuman (küçük)",98,138);
    var checkBox58 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt58 = document.getElementById("txt1").value;
    var splitTxt58 = checkBoxTxt58.split(",");
    let hasText58 = false;
    for (let i = 0; i< splitTxt58.length; i++){
        if(splitTxt58[i] == 'application56') {
            console.log("Girdi2");
            hasText58 = true;
            break;
        }
    }
    checkBox58.appearanceState = hasText58 ? 'On' : 'Off';
    checkBox58.readOnly = false;
    checkBox58.fieldName = "Pansuman (küçük)";
    checkBox58.Rect = [96, 136, 2, 2];
    checkBox58.value = 'application56';
    doc.addField(checkBox58);

    doc.setFontSize(5);
    doc.text(" Burun tamponu uygulaması",98,140.5);
    var checkBox59 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt59 = document.getElementById("txt1").value;
    var splitTxt59 = checkBoxTxt59.split(",");
    let hasText59 = false;
    for (let i = 0; i< splitTxt59.length; i++){
        if(splitTxt59[i] == 'application57') {
            console.log("Girdi2");
            hasText59 = true;
            break;
        }
    }
    checkBox59.appearanceState = hasText59 ? 'On' : 'Off';
    checkBox59.readOnly = false;
    checkBox59.fieldName = "Burun tamponu uygulaması";
    checkBox59.Rect = [96, 138.5, 2, 2];
    checkBox59.value = 'application57';
    doc.addField(checkBox59);

    doc.setFontSize(5);
    doc.text(" Burundan yabancı cisim çıkarma",98,143);
    var checkBox60 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt60 = document.getElementById("txt1").value;
    var splitTxt60 = checkBoxTxt60.split(",");
    let hasText60 = false;
    for (let i = 0; i< splitTxt60.length; i++){
        if(splitTxt60[i] == 'application58') {
            console.log("Girdi2");
            hasText60 = true;
            break;
        }
    }
    checkBox60.appearanceState = hasText60 ? 'On' : 'Off';
    checkBox60.readOnly = false;
    checkBox60.fieldName = "Burundan yabancı cisim çıkarma";
    checkBox60.Rect = [96, 141, 2, 2];
    checkBox60.value = 'application58';
    doc.addField(checkBox60);

    doc.setFontSize(5);
    doc.text(" Korneadan Yabancı cisim çıkarma",98,145.5);
    var checkBox61 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt61 = document.getElementById("txt1").value;
    var splitTxt61 = checkBoxTxt61.split(",");
    let hasText61 = false;
    for (let i = 0; i< splitTxt61.length; i++){
        if(splitTxt61[i] == 'application59') {
            console.log("Girdi2");
            hasText61 = true;
            break;
        }
    }
    checkBox61.appearanceState = hasText61 ? 'On' : 'Off';
    checkBox61.readOnly = false;
    checkBox61.fieldName = "Korneadan Yabancı cisim çıkarma";
    checkBox61.Rect = [96, 143.5, 2, 2];
    checkBox61.value = 'application59';
    doc.addField(checkBox61);

    doc.setFontSize(5);
    doc.text(" Dış Kulaktan yabancı cisim çıkarma",98,148);
    var checkBox62 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt62 = document.getElementById("txt1").value;
    var splitTxt62 = checkBoxTxt62.split(",");
    let hasText62 = false;
    for (let i = 0; i< splitTxt62.length; i++){
        if(splitTxt62[i] == 'application60') {
            console.log("Girdi2");
            hasText62 = true;
            break;
        }
    }
    checkBox62.appearanceState = hasText62 ? 'On' : 'Off';
    checkBox62.readOnly = false;
    checkBox62.fieldName = "Dış Kulaktan yabancı cisim çıkarma";
    checkBox62.Rect = [96, 146, 2, 2];
    checkBox62.value = 'application60';
    doc.addField(checkBox62);

    doc.setFontSize(5);
    doc.text(" Konjuktivadan yabancı cisim çıkarma",98,150.5);
    var checkBox63 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt63 = document.getElementById("txt1").value;
    var splitTxt63 = checkBoxTxt63.split(",");
    let hasText63 = false;
    for (let i = 0; i< splitTxt63.length; i++){
        if(splitTxt63[i] == 'application61') {
            console.log("Girdi2");
            hasText63 = true;
            break;
        }
    }
    checkBox63.appearanceState = hasText63 ? 'On' : 'Off';
    checkBox63.readOnly = false;
    checkBox63.fieldName = "Konjuktivadan yabancı cisim çıkarma";
    checkBox63.Rect = [96, 148.5, 2, 2];
    checkBox63.value = 'application61';
    doc.addField(checkBox63);

    doc.setFontSize(5);
    doc.text(" Larinksten yabancı cisim çıkarılması",98,153);
    var checkBox64 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt64 = document.getElementById("txt1").value;
    var splitTxt64 = checkBoxTxt64.split(",");
    let hasText64 = false;
    for (let i = 0; i< splitTxt64.length; i++){
        if(splitTxt64[i] == 'application62') {
            console.log("Girdi2");
            hasText64 = true;
            break;
        }
    }
    checkBox64.appearanceState = hasText64 ? 'On' : 'Off';
    checkBox64.readOnly = false;
    checkBox64.fieldName = "Larinksten yabancı cisim çıkarılması";
    checkBox64.Rect = [96, 151, 2, 2];
    checkBox64.value = 'application62';
    doc.addField(checkBox64);

    doc.setFontSize(5);
    doc.text(" Dekübit yara debrimanı",98,155.5);
    var checkBox65 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt65 = document.getElementById("txt1").value;
    var splitTxt65 = checkBoxTxt65.split(",");
    let hasText65 = false;
    for (let i = 0; i< splitTxt65.length; i++){
        if(splitTxt65[i] == 'application63') {
            console.log("Girdi2");
            hasText65 = true;
            break;
        }
    }
    checkBox65.appearanceState = hasText65 ? 'On' : 'Off';
    checkBox65.readOnly = false;
    checkBox65.fieldName = "Dekübit yara debrimanı";
    checkBox65.Rect = [96, 153.5, 2, 2];
    checkBox65.value = 'application63';
    doc.addField(checkBox65);

    doc.setFontSize(5);
    doc.text(" Yara debrimanı",98,158);
    var checkBox66 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt66 = document.getElementById("txt1").value;
    var splitTxt66 = checkBoxTxt66.split(",");
    let hasText66 = false;
    for (let i = 0; i< splitTxt66.length; i++){
        if(splitTxt66[i] == 'application64') {
            console.log("Girdi2");
            hasText66 = true;
            break;
        }
    }
    checkBox66.appearanceState = hasText66 ? 'On' : 'Off';
    checkBox66.readOnly = false;
    checkBox66.fieldName = "Yara debrimanı";
    checkBox66.Rect = [96, 156, 2, 2];
    checkBox66.value = 'application64';
    doc.addField(checkBox66);

    doc.setFontSize(5);
    doc.text(" Yenidogan entübasyonu",98,160.5);
    var checkBox67 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt67 = document.getElementById("txt1").value;
    var splitTxt67 = checkBoxTxt67.split(",");
    let hasText67 = false;
    for (let i = 0; i< splitTxt67.length; i++){
        if(splitTxt67[i] == 'application65') {
            console.log("Girdi2");
            hasText67 = true;
            break;
        }
    }
    checkBox67.appearanceState = hasText67 ? 'On' : 'Off';
    checkBox67.readOnly = false;
    checkBox67.fieldName = "Yenidogan entübasyonu";
    checkBox67.Rect = [96, 158.5, 2, 2];
    checkBox67.value = 'application65';
    doc.addField(checkBox67);

    doc.setFontSize(5);
    doc.text(" Yenidogan IM.enjeksiyon",98,163);
    var checkBox68 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt68 = document.getElementById("txt1").value;
    var splitTxt68 = checkBoxTxt68.split(",");
    let hasText68 = false;
    for (let i = 0; i< splitTxt68.length; i++){
        if(splitTxt68[i] == 'application66') {
            console.log("Girdi2");
            hasText68 = true;
            break;
        }
    }
    checkBox68.appearanceState = hasText68 ? 'On' : 'Off';
    checkBox68.readOnly = false;
    checkBox68.fieldName = "Yenidogan IM.enjeksiyon";
    checkBox68.Rect = [96, 161, 2, 2];
    checkBox68.value = 'application66';
    doc.addField(checkBox68);

    doc.setFontSize(5);
    doc.text(" Yenidogan IV mayi takılması",98,165.5);
    var checkBox69 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt69 = document.getElementById("txt1").value;
    var splitTxt69 = checkBoxTxt69.split(",");
    let hasText69 = false;
    for (let i = 0; i< splitTxt69.length; i++){
        if(splitTxt69[i] == 'application67') {
            console.log("Girdi2");
            hasText69 = true;
            break;
        }
    }
    checkBox69.appearanceState = hasText69 ? 'On' : 'Off';
    checkBox69.readOnly = false;
    checkBox69.fieldName = "Yenidogan IV mayi takılması";
    checkBox69.Rect = [96, 163.5, 2, 2];
    checkBox69.value = 'application67';
    doc.addField(checkBox69);

    doc.setFontSize(5);
    doc.text(" Yenidogan IV enjeksiyon uyg.",98,168);
    var checkBox70 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt70 = document.getElementById("txt1").value;
    var splitTxt70 = checkBoxTxt70.split(",");
    let hasText70 = false;
    for (let i = 0; i< splitTxt70.length; i++){
        if(splitTxt70[i] == 'application68') {
            console.log("Girdi2");
            hasText70 = true;
            break;
        }
    }
    checkBox70.appearanceState = hasText70 ? 'On' : 'Off';
    checkBox70.readOnly = false;
    checkBox70.fieldName = "Yenidogan IV enjeksiyon uyg.";
    checkBox70.Rect = [96, 166, 2, 2];
    checkBox70.value = 'application68';
    doc.addField(checkBox70);

    doc.setFontSize(5);
    doc.text(" STransport küvözü ile nakil",98,170.5);
    var checkBox71 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt71 = document.getElementById("txt1").value;
    var splitTxt71 = checkBoxTxt71.split(",");
    let hasText71 = false;
    for (let i = 0; i< splitTxt71.length; i++){
        if(splitTxt71[i] == 'application69') {
            console.log("Girdi2");
            hasText71 = true;
            break;
        }
    }
    checkBox71.appearanceState = hasText71 ? 'On' : 'Off';
    checkBox71.readOnly = false;
    checkBox71.fieldName = "STransport küvözü ile nakil";
    checkBox71.Rect = [96, 168.5, 2, 2];
    checkBox71.value = 'application69';
    doc.addField(checkBox71);

    doc.setFontSize(5);
    doc.text(" Yenidogan monitörizasyon",98,173);
    var checkBox72 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt72 = document.getElementById("txt1").value;
    var splitTxt72 = checkBoxTxt72.split(",");
    let hasText72 = false;
    for (let i = 0; i< splitTxt72.length; i++){
        if(splitTxt72[i] == 'application70') {
            console.log("Girdi2");
            hasText72 = true;
            break;
        }
    }
    checkBox72.appearanceState = hasText72 ? 'On' : 'Off';
    checkBox72.readOnly = false;
    checkBox72.fieldName = "Yenidogan monitörizasyon";
    checkBox72.Rect = [96, 171, 2, 2];
    checkBox72.value = 'application70';
    doc.addField(checkBox72);

    doc.setFontSize(5);
    doc.text(" Yenidoğan ventilasyon",98,175.5);
    var checkBox73 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt73 = document.getElementById("txt1").value;
    var splitTxt73 = checkBoxTxt73.split(",");
    let hasText73 = false;
    for (let i = 0; i< splitTxt73.length; i++){
        if(splitTxt73[i] == 'application71') {
            console.log("Girdi2");
            hasText73 = true;
            break;
        }
    }
    checkBox73.appearanceState = hasText73 ? 'On' : 'Off';
    checkBox73.readOnly = false;
    checkBox73.fieldName = "Yenidoğan ventilasyon";
    checkBox73.Rect = [96, 173.5, 2, 2];
    checkBox73.value = 'application71';
    doc.addField(checkBox73);
// ==============================

    doc.setFontSize(5);
    doc.text(" Yenidoğan canlandırma",135,118);
    var checkBox74 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt74 = document.getElementById("txt1").value;
    var splitTxt74 = checkBoxTxt74.split(",");
    let hasText74 = false;
    for (let i = 0; i< splitTxt74.length; i++){
        if(splitTxt74[i] == 'application72') {
            console.log("Girdi2");
            hasText74 = true;
            break;
        }
    }
    checkBox74.appearanceState = hasText74 ? 'On' : 'Off';
    checkBox74.readOnly = false;
    checkBox74.fieldName = "Yenidoğan canlandırma";
    checkBox74.Rect = [133, 116, 2, 2];
    checkBox74.value = 'application72';
    doc.addField(checkBox74);

    doc.setFontSize(5);
    doc.text(" Lokal anestezi",135,120.5);
    var checkBox75 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt75 = document.getElementById("txt1").value;
    var splitTxt75 = checkBoxTxt75.split(",");
    let hasText75 = false;
    for (let i = 0; i< splitTxt75.length; i++){
        if(splitTxt75[i] == 'application73') {
            console.log("Girdi2");
            hasText75 = true;
            break;
        }
    }
    checkBox75.appearanceState = hasText75 ? 'On' : 'Off';
    checkBox75.readOnly = false;
    checkBox75.fieldName = "Lokal anestezi";
    checkBox75.Rect = [133, 118.5, 2, 2];
    checkBox75.value = 'application73';
    doc.addField(checkBox75);

    doc.setFontSize(5);
    doc.text(" Komplikasyonlu doğum",135,123);
    var checkBox76 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt76 = document.getElementById("txt1").value;
    var splitTxt76 = checkBoxTxt76.split(",");
    let hasText76 = false;
    for (let i = 0; i< splitTxt76.length; i++){
        if(splitTxt76[i] == 'application74') {
            console.log("Girdi2");
            hasText76 = true;
            break;
        }
    }
    checkBox76.appearanceState = hasText76 ? 'On' : 'Off';
    checkBox76.readOnly = false;
    checkBox76.fieldName = "Komplikasyonlu doğum";
    checkBox76.Rect = [133, 121, 2, 2];
    checkBox76.value = 'application74';
    doc.addField(checkBox76);

    doc.setFontSize(5);
    doc.text(" Normal doğum",135,125.5);
    var checkBox77 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt77 = document.getElementById("txt1").value;
    var splitTxt77 = checkBoxTxt77.split(",");
    let hasText77 = false;
    for (let i = 0; i< splitTxt77.length; i++){
        if(splitTxt77[i] == 'application75') {
            console.log("Girdi2");
            hasText77 = true;
            break;
        }
    }
    checkBox77.appearanceState = hasText77 ? 'On' : 'Off';
    checkBox77.readOnly = false;
    checkBox77.fieldName = "Normal doğum";
    checkBox77.Rect = [133, 123.5, 2, 2];
    checkBox77.value = 'application75';
    doc.addField(checkBox77);

    doc.setFontSize(5);
    doc.text(" Transkutan pao² ölçümü",135,128);
    var checkBox78 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt78 = document.getElementById("txt1").value;
    var splitTxt78 = checkBoxTxt78.split(",");
    let hasText78 = false;
    for (let i = 0; i< splitTxt78.length; i++){
        if(splitTxt78[i] == 'application76') {
            console.log("Girdi2");
            hasText78 = true;
            break;
        }
    }
    checkBox78.appearanceState = hasText78 ? 'On' : 'Off';
    checkBox78.readOnly = false;
    checkBox78.fieldName = "Transkutan pao² ölçümü";
    checkBox78.Rect = [133, 126, 2, 2];
    checkBox78.value = 'application76';
    doc.addField(checkBox78);

    doc.setFontSize(5);
    doc.text(" Kan şekeri ölçümü",135,130.5);
    var checkBox79 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt79 = document.getElementById("txt1").value;
    var splitTxt79 = checkBoxTxt79.split(",");
    let hasText79 = false;
    for (let i = 0; i< splitTxt79.length; i++){
        if(splitTxt79[i] == 'application77') {
            console.log("Girdi2");
            hasText79 = true;
            break;
        }
    }
    checkBox79.appearanceState = hasText79 ? 'On' : 'Off';
    checkBox79.readOnly = false;
    checkBox79.fieldName = "Kan şekeri ölçümü";
    checkBox79.Rect = [133, 128.5, 2, 2];
    checkBox79.value = 'application77';
    doc.addField(checkBox79);


// ================================

    doc.setFontSize(5);
    doc.text(" Evde Muayene",167,118);
    var checkBox80 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt80 = document.getElementById("txt2").value;
    var splitTxt80 = checkBoxTxt80.split(",");
    let hasText80 = false;
    for (let i = 0; i< splitTxt80.length; i++){
        if(splitTxt80[i] == 'transfer1') {
            console.log("Girdi2");
            hasText80 = true;
            break;
        }
    }
    checkBox80.appearanceState = hasText80 ? 'On' : 'Off';
    checkBox80.readOnly = false;
    checkBox80.fieldName = "Evde Muayene";
    checkBox80.Rect = [165, 116, 2, 2];
    checkBox80.value = 'transfer1';
    doc.addField(checkBox80);

    doc.setFontSize(5);
    doc.text(" Yerinde Müdahale",167,120.5);
    var checkBox81 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt81 = document.getElementById("txt2").value;
    var splitTxt81 = checkBoxTxt81.split(",");
    let hasText81 = false;
    for (let i = 0; i< splitTxt81.length; i++){
        if(splitTxt81[i] == 'transfer2') {
            console.log("Girdi2");
            hasText81 = true;
            break;
        }
    }
    checkBox81.appearanceState = hasText81 ? 'On' : 'Off';
    checkBox81.readOnly = false;
    checkBox81.fieldName = "Yerinde Müdahale";
    checkBox81.Rect = [165, 118.5, 2, 2];
    checkBox81.value = 'transfer2';
    doc.addField(checkBox81);

    doc.setFontSize(5);
    doc.text(" Hastaneye Nakil",167,123);
    var checkBox82 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt82 = document.getElementById("txt2").value;
    var splitTxt82 = checkBoxTxt82.split(",");
    let hasText82 = false;
    for (let i = 0; i< splitTxt82.length; i++){
        if(splitTxt82[i] == 'transfer3') {
            console.log("Girdi2");
            hasText82 = true;
            break;
        }
    }
    checkBox82.appearanceState = hasText82 ? 'On' : 'Off';
    checkBox82.readOnly = false;
    checkBox82.fieldName = "Hastaneye Nakil";
    checkBox82.Rect = [165, 121, 2, 2];
    checkBox82.value = 'transfer3';
    doc.addField(checkBox82);

    doc.setFontSize(5);
    doc.text(" Hastaneler Arası Nakil",167,125.5);
    var checkBox83 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt83 = document.getElementById("txt2").value;
    var splitTxt83 = checkBoxTxt83.split(",");
    let hasText83 = false;
    for (let i = 0; i< splitTxt83.length; i++){
        if(splitTxt83[i] == 'transfer4') {
            console.log("Girdi2");
            hasText83 = true;
            break;
        }
    }
    checkBox83.appearanceState = hasText83 ? 'On' : 'Off';
    checkBox83.readOnly = false;
    checkBox83.fieldName = "Hastaneler Arası Nakil";
    checkBox83.Rect = [165, 123.5, 2, 2];
    checkBox83.value = 'transfer4';
    doc.addField(checkBox83);

    doc.setFontSize(5);
    doc.text(" Tıbbi Tetkik İçin Nakil",167,128);
    var checkBox84 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt84 = document.getElementById("txt2").value;
    var splitTxt84 = checkBoxTxt84.split(",");
    let hasText84 = false;
    for (let i = 0; i< splitTxt84.length; i++){
        if(splitTxt84[i] == 'transfer5') {
            console.log("Girdi2");
            hasText84 = true;
            break;
        }
    }
    checkBox84.appearanceState = hasText84 ? 'On' : 'Off';
    checkBox84.readOnly = false;
    checkBox84.fieldName = "Tıbbi Tetkik İçin Nakil";
    checkBox84.Rect = [165, 126, 2, 2];
    checkBox84.value = 'transfer5';
    doc.addField(checkBox84);

    doc.setFontSize(5);
    doc.text(" Eve Nakil",167,130.5);
    var checkBox85 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt85 = document.getElementById("txt2").value;
    var splitTxt85 = checkBoxTxt85.split(",");
    let hasText85 = false;
    for (let i = 0; i< splitTxt85.length; i++){
        if(splitTxt85[i] == 'transfer6') {
            console.log("Girdi2");
            hasText11 = true;
            break;
        }
    }
    checkBox85.appearanceState = hasText85 ? 'On' : 'Off';
    checkBox85.readOnly = false;
    checkBox85.fieldName = "Eve Nakilu";
    checkBox85.Rect = [165, 128.5, 2, 2];
    checkBox85.value = 'transfer6';
    doc.addField(checkBox85);

    doc.setFontSize(5);
    doc.text(" Şehirler arası Nakil",167,133);
    var checkBox86 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt86 = document.getElementById("txt2").value;
    var splitTxt86 = checkBoxTxt86.split(",");
    let hasText86 = false;
    for (let i = 0; i< splitTxt86.length; i++){
        if(splitTxt86[i] == 'transfer7') {
            console.log("Girdi2");
            hasText86 = true;
            break;
        }
    }
    checkBox86.appearanceState = hasText86 ? 'On' : 'Off';
    checkBox86.readOnly = false;
    checkBox86.fieldName = "Şehirler arası Nakil";
    checkBox86.Rect = [165, 131, 2, 2];
    checkBox86.value = 'transfer7';
    doc.addField(checkBox86);

    doc.setFontSize(5);
    doc.text(" Uluslar arası Nakil",167,135.5);
    var checkBox87 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt87 = document.getElementById("txt2").value;
    var splitTxt87 = checkBoxTxt87.split(",");
    let hasText87 = false;
    for (let i = 0; i< splitTxt87.length; i++){
        if(splitTxt87[i] == 'transfer8') {
            console.log("Girdi2");
            hasText87 = true;
            break;
        }
    }
    checkBox87.appearanceState = hasText87 ? 'On' : 'Off';
    checkBox87.readOnly = false;
    checkBox87.fieldName = "Uluslar arası Nakil";
    checkBox87.Rect = [165, 133.5, 2, 2];
    checkBox87.value = 'transfer8';
    doc.addField(checkBox87);

    doc.setFontSize(5);
    doc.text(" İlçe Dışı Transport",167,138);
    var checkBox88 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt88 = document.getElementById("txt2").value;
    var splitTxt88 = checkBoxTxt88.split(",");
    let hasText88 = false;
    for (let i = 0; i< splitTxt88.length; i++){
        if(splitTxt8[i] == 'transfer9') {
            console.log("Girdi2");
            hasText88 = true;
            break;
        }
    }
    checkBox88.appearanceState = hasText88 ? 'On' : 'Off';
    checkBox88.readOnly = false;
    checkBox88.fieldName = "İlçe Dışı Transport";
    checkBox88.Rect = [165, 136, 2, 2];
    checkBox88.value = 'transfer9';
    doc.addField(checkBox88);

    doc.setFontSize(5);
    doc.text(" İlçe İçi Transfer",167,140.5);
    var checkBox89 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt89 = document.getElementById("txt2").value;
    var splitTxt89 = checkBoxTxt89.split(",");
    let hasText89 = false;
    for (let i = 0; i< splitTxt89.length; i++){
        if(splitTxt89[i] == 'transfer10') {
            console.log("Girdi2");
            hasText89 = true;
            break;
        }
    }
    checkBox89.appearanceState = hasText89 ? 'On' : 'Off';
    checkBox89.readOnly = false;
    checkBox89.fieldName = "İlçe İçi Transfer";
    checkBox89.Rect = [165, 138.5, 2, 2];
    checkBox89.value = 'transfer10';
    doc.addField(checkBox89);

    doc.setFontSize(5);
    doc.text(" EX (Yerinde bırakıldı)",167,143);
    var checkBox90 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt90 = document.getElementById("txt1").value;
    var splitTxt90 = checkBoxTxt90.split(",");
    let hasText90 = false;
    for (let i = 0; i< splitTxt90.length; i++){
        if(splitTxt90[i] == 'transfer11') {
            console.log("Girdi2");
            hasText90 = true;
            break;
        }
    }
    checkBox90.appearanceState = hasText90 ? 'On' : 'Off';
    checkBox90.readOnly = false;
    checkBox90.fieldName = "EX (Yerinde bırakıldı)u";
    checkBox90.Rect = [165, 141, 2, 2];
    checkBox90.value = 'transfer11';
    doc.addField(checkBox90);

    doc.setFontSize(5);
    doc.text(" Başka araçla nakil",167,145.5);
    var checkBox91 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt91 = document.getElementById("txt2").value;
    var splitTxt91 = checkBoxTxt91.split(",");
    let hasText91 = false;
    for (let i = 0; i< splitTxt91.length; i++){
        if(splitTxt91[i] == 'transfer12') {
            console.log("Girdi2");
            hasText91 = true;
            break;
        }
    }
    checkBox91.appearanceState = hasText91 ? 'On' : 'Off';
    checkBox91.readOnly = false;
    checkBox91.fieldName = "Başka araçla nakil";
    checkBox91.Rect = [165, 143.5, 2, 2];
    checkBox91.value = 'transfer12';
    doc.addField(checkBox91);

    doc.setFontSize(5);
    doc.text(" Sağlık Tedbiri",167,148);
    var checkBox92 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt92 = document.getElementById("txt2").value;
    var splitTxt92 = checkBoxTxt92.split(",");
    let hasText92 = false;
    for (let i = 0; i< splitTxt92.length; i++){
        if(splitTxt92[i] == 'transfer13') {
            console.log("Girdi2");
            hasText92 = true;
            break;
        }
    }
    checkBox92.appearanceState = hasText92 ? 'On' : 'Off';
    checkBox92.readOnly = false;
    checkBox92.fieldName = "Sağlık Tedbiri";
    checkBox92.Rect = [165, 146, 2, 2];
    checkBox92.value = 'transfer13';
    doc.addField(checkBox92);

    doc.setFontSize(5);
    doc.text(" Diğer",167,150.5);
    var checkBox93 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt93 = document.getElementById("txt2").value;
    var splitTxt93 = checkBoxTxt93.split(",");
    let hasText93 = false;
    for (let i = 0; i< splitTxt93.length; i++){
        if(splitTxt93[i] == 'transfer14') {
            console.log("Girdi2");
            hasText93 = true;
            break;
        }
    }
    checkBox93.appearanceState = hasText93 ? 'On' : 'Off';
    checkBox93.readOnly = false;
    checkBox93.fieldName = "Diğer";
    checkBox93.Rect = [165, 148.5, 2, 2];
    checkBox93.value = 'transfer14';
    doc.addField(checkBox93);

    doc.setFontSize(8);
    doc.text("GENEL UYGULAMA",165,154);

    doc.setFontSize(5);
    doc.text(" Dekontaminasyon",167,156.5);
    var checkBox94 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt94 = document.getElementById("txt3").value;
    var splitTxt94 = checkBoxTxt94.split(",");
    let hasText94 = false;
    for (let i = 0; i< splitTxt94.length; i++){
        if(splitTxt94[i] == 'general1') {
            console.log("Girdi2");
            hasText94 = true;
            break;
        }
    }
    checkBox94.appearanceState = hasText94 ? 'On' : 'Off';
    checkBox94.readOnly = false;
    checkBox94.fieldName = "Dekontaminasyon";
    checkBox94.Rect = [165, 155, 2, 2];
    checkBox94.value = 'general1';
    doc.addField(checkBox94);

    doc.setFontSize(5);
    doc.text(" Refakatçı____ Kişi ",167,159);
    var checkBox95 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt95 = document.getElementById("txt3").value;
    doc.setFontSize(5);
    var number_of_attendants = document.getElementById("number_of_attendants").value;
    doc.text(number_of_attendants,176,159).value;

    var splitTxt95 = checkBoxTxt95.split(",");
    let hasText95 = false;
    for (let i = 0; i< splitTxt95.length; i++){
        if(splitTxt95[i] == 'general2') {
            console.log("Girdi2");
            hasText95 = true;
            break;
        }
    }
    checkBox95.appearanceState = hasText95 ? 'On' : 'Off';
    checkBox95.readOnly = false;
    checkBox95.fieldName = "Refakatçı";
    checkBox95.Rect = [165, 157.5, 2, 2];
    checkBox95.value = 'general2';
    doc.addField(checkBox95);

    doc.setFontSize(5);
    doc.text(" Vaka Değerlendirme",167,161.5);
    var checkBox96 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt96 = document.getElementById("txt3").value;
    var splitTxt96 = checkBoxTxt96.split(",");
    let hasText96 = false;
    for (let i = 0; i< splitTxt96.length; i++){
        if(splitTxt96[i] == 'general3') {
            console.log("Girdi2");
            hasText96 = true;
            break;
        }
    }
    checkBox96.appearanceState = hasText96 ? 'On' : 'Off';
    checkBox96.readOnly = false;
    checkBox96.fieldName = "Vaka Değerlendirme";
    checkBox96.Rect = [165, 160, 2, 2];
    checkBox96.value = 'general3';
    doc.addField(checkBox96);

    doc.setFontSize(5);
    doc.text(" Ambulans Bekleme___ Saat ____ Dakika",167,164);
    var checkBox97 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt97 = document.getElementById("patient_transport_ambulance_waiting").value;

    doc.setFontSize(5);
    var ambulance_waiting_hour = document.getElementById("ambulance_waiting_hour").value;
    var ambulance_waiting_minute = document.getElementById("ambulance_waiting_minute").value;
    doc.text(ambulance_waiting_hour,184,164).value;
    doc.text(ambulance_waiting_minute,191,164).value;

    
    var splitTxt97 = checkBoxTxt97.split(",");
    let hasText97 = false;
    for (let i = 0; i< splitTxt97.length; i++){
        if(splitTxt97[i] == 'patient_transport_ambulance_waiting') {
            console.log("Girdi2");
            hasText97 = true;
            break;
        }
    }
    checkBox97.appearanceState = hasText97 ? 'On' : 'Off';
    checkBox97.readOnly = false;
    checkBox97.fieldName = "Ambulans Bekleme";
    checkBox97.Rect = [165, 162.5, 2, 2];
    checkBox97.value = 'patient_transport_ambulance_waiting';
    doc.addField(checkBox97);

    doc.setFontSize(5);
    doc.text(" Organizasyon___ Saat",167,166.5);
    var checkBox98 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt98 = document.getElementById("organization_hour").value;

    doc.setFontSize(5);
    var organization_hour = document.getElementById("organization_hour").value;
    doc.text(organization_hour,179,166.5).value;

    var splitTxt98 = checkBoxTxt98.split(",");
    let hasText98 = false;
    for (let i = 0; i< splitTxt98.length; i++){
        if(splitTxt98[i] == 'organization_hour') {
            console.log("Girdi2");
            hasText98 = true;
            break;
        }
    }
    checkBox98.appearanceState = hasText98 ? 'On' : 'Off';
    checkBox98.readOnly = false;
    checkBox98.fieldName = "Organizasyon";
    checkBox98.Rect = [165, 165, 2, 2];
    checkBox98.value = 'organization_hour';
    doc.addField(checkBox98);

    doc.setFontSize(5);
    doc.text(" Acil Yardım Ambulans Bekleme ___ S ___ Dk",167,169);
    var checkBox99 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt99 = document.getElementById("emergency_ambulance_waiting").value;

    var emergency_ambulance_waiting = document.getElementById("emergency_ambulance_waiting").value;
    var emergency_ambulance_waiting_minute = document.getElementById("emergency_ambulance_waiting_minute").value;
    doc.text(emergency_ambulance_waiting,194,169).value;
    doc.text(emergency_ambulance_waiting_minute,198.5,169).value;

    var splitTxt99 = checkBoxTxt99.split(",");
    let hasText99 = false;
    for (let i = 0; i< splitTxt99.length; i++){
        if(splitTxt99[i] == 'emergency_ambulance_waiting') {
            console.log("Girdi2");
            hasText99 = true;
            break;
        }
    }
    checkBox99.appearanceState = hasText99 ? 'On' : 'Off';
    checkBox99.readOnly = false;
    checkBox99.fieldName = "Acil Yardım Ambulans Bekleme";
    checkBox99.Rect = [165, 167.5, 2, 2];
    checkBox99.value = 'emergency_ambulance_waiting';
    doc.addField(checkBox99);

    doc.setFontSize(5);
    doc.text(" Hasta Nakil Ambulansı Bekleme ___ S ___ Dk",167,171.5);
    var checkBox100 = new jspdf.AcroFormCheckBox();
    var checkBoxTxt100 = document.getElementById("patient_transport_ambulance_waiting").value;

    doc.setFontSize(5);
    var patient_transport_ambulance_waiting = document.getElementById("patient_transport_ambulance_waiting").value;
    var patient_transport_ambulance_waiting_minute = document.getElementById("patient_transport_ambulance_waiting_minute").value;
    doc.text(patient_transport_ambulance_waiting,194,171.5).value;
    doc.text(patient_transport_ambulance_waiting_minute,199,171.5).value;

    var splitTxt100 = checkBoxTxt100.split(",");
    let hasText100 = false;
    for (let i = 0; i< splitTxt100.length; i++){
        if(splitTxt100[i] == 'patient_transport_ambulance_waiting') {
            console.log("Girdi2");
            hasText100 = true;
            break;
        }
    }
    checkBox100.appearanceState = hasText100 ? 'On' : 'Off';
    checkBox100.readOnly = false;
    checkBox100.fieldName = "Hasta Nakil Ambulansı Bekleme";
    checkBox100.Rect = [165, 170, 2, 2];
    checkBox100.value = 'patient_transport_ambulance_waiting';
    doc.addField(checkBox100);


// ================================

    doc.line(5,180,205,180)
    doc.setFontSize(9);
    doc.text("HASTA BİLGİLENDİRME ONAYI",100,180);

    text1 = "Hastamın nakli sırasında ambulansta bulunmamın ambulans ekibinin görevini zorlaştırdığı gibi personel ve ambulans sürüş güvenliği açısından olumsuz sonuçlar doğurabileceği, meydana gelebilecek bir"+
    "kazadan ve buna bağlı olarak ortaya çıkabilecek hukuki sorunlardan etkilenebileceğim, ambulansta bulunduğum sürece emniyet kemerini takmam gerektiği konusunda ambulans personeli tarafından ayrıntılı"+
    "olarak bilgilendirildim. Ambulansa binmem durumunda ortaya çıkabilecek olası riskleri ve hukuki sorunları anladım. Buna rağmen hastamın ambulansla nakli sırasında, Hasta Hakları Yönetmeliği’nin 40. Ve"+
    "Yataklı Tedavi Kurumları İşletme Yönetmeliği’nin 62. Maddesinde belirtilen Refakatçi kapsamında olmak üzere, kendi hür irademle ambulansta hastama refakatçi olarak ön kabinde bulunmayı, nakil sırasında"+
    "ortaya çıkabilecek her türlü hukuksal sorunla ilgili, maddi, manevi ve hukuki tüm sorumluluk şahsıma ait olmak üzere kabul ediyorum. Healmedy (MHAcare Sağlık Turizm İnşaat Ticaret A.Ş.) hekimlerinin/"+
    "param ediklerinin ve çalışma ekibinin uygulayacağı, hastalığım ın teşhis ve tedavisi için gerekli olan ilaçları, tetkikleri, verilecek anestezi ilaçlarını / transportu bilincim yerinde olarak kabul ediyorum. Sağlık"+
    "durum um a ilişkin, riskler ve komplikasyonlar tarafıma anlatılmıştır. Bu tedavi yerine uygulanabilecek bir başka yöntem in bulunup bulunmadığı konusunda da sağlık ekibim tarafından bilgilendirildim. Tedavi"+
    "ya da transport sırasında oluşabilecek olumsuz gelişmelerden haberdar olarak tedavim in/transportum un yapılmasını onaylıyorum. Ayrıca aldığım hizmetin ödem esi transferi talep eden kurum tarafından"+
    "kabul edilmez veya ben özel olarak talep ettiğim de tüm sağlık hizmetleri bedelini Sağlık Bakanlığının belirlemiş olduğu ambulans fiyat tarifesi üzerinden ve yapılan müdahalelerin bedelini SUT fiyat tarifesi"+
    "üzerinden ödeyeceğimi kabul ve taahhüt ederim."
    textlines = doc.setFontSize(6).splitTextToSize(text1,200);
    doc.text(textlines,6,183);

    doc.setFontSize(8);
    doc.text("HASTA/HASTA YAKINI* (Yasal Temsilcisi)",6,208);
    doc.setFontSize(8);
    doc.text("Adı-Soyadı:",6,211);
    var username1 = document.getElementById("username1").value;
    doc.text(username1,22,211);
    doc.setFontSize(8);
    doc.text("İmza:",6,214);
    doc.setFontSize(6);
    doc.text("*Yasal Temsilci; Vesayet altındakilar için vasi, Reşit olmayanlar; anne – baba, bunların bulunmadığı durumlarda 1.dereceden kanuni mirasçılar",60,216);

    const getSig = document.getElementById('get_sig').getElementsByTagName('canvas');
    const getSigCtx = getSig[0].toDataURL();
    // console.log(getSigCtx);
    

// =================================

    doc.line(5,217,205,217)
    text2 = "…………………………………………………….................. nedenlerle hastayı hastanemize kabul edemiyorum. Hastanın başka hastaneye nakil için gerekli stabilizasyon sağladım. Şu anda durumu başka bir"+
    "kuruma nakli için uygundur"
    var patient_rejection = document.getElementById("patient_rejection").value;
    doc.text(patient_rejection,7,223);
    doc.setFontSize(9);
    doc.text("HASTANENİN HASTA REDDİ",100,220);
    textlines = doc.setFontSize(6).splitTextToSize(text2,180);
    doc.text(textlines,6,223);

    doc.setFontSize(7);
    doc.text("Kurumun / Hastanenin Adı:",6,228);
    var hospital_rejection = document.getElementById("hospital_rejection").value;
    doc.text(hospital_rejection,39,228);
    doc.setFontSize(7);
    doc.text("Hekimin Adı-Soyadı:",6,231);
    var doctor_username = document.getElementById("doctor_username").value;
    doc.text(doctor_username,30,231);

    var hospital_rejection_datetime = document.getElementById("hospital_rejection_datetime").value;
    doc.text(hospital_rejection_datetime,150,228);

    doc.setFontSize(7);
    doc.text("Kaşe/İmza:",120,228);


// ================================

    doc.line(5,232,205,232)
    doc.setFontSize(9);
    doc.text("HASTANENİN HİZMET REDDİ",100,235);
    text3 = "Ambulansla gelen görevli bana hastanın hemen tedavisi / hastaneye nakli gerektiğini, aksi halde kötü sonuçlar doğurabileceğini anlayacağım şekilde ayrıntılı olarak anlattı. Buna rağmen tedaviyi /hasta"+
    "naklini kabul etmiyorum."

    textlines = doc.setFontSize(6).splitTextToSize(text3,180);
    doc.text(textlines,6,238);

    doc.setFontSize(8);
    doc.text("Hastanın / Yakının Adı-Soyadı:",6,243);
    var patients_relative_username = document.getElementById("patients_relative_username").value;
    doc.text(patients_relative_username,47,243);

    var patients_relative_username_datetime = document.getElementById("patients_relative_username_datetime").value;
    doc.text(patients_relative_username_datetime,150,243);

    doc.setFontSize(8);
    doc.text("İmza:",120,243);
// ===============================

    doc.line(5,247,205,247)
    doc.setFontSize(8);
    doc.text("HASTAYI TESLİM ALANIN Ünvanı Adı-Soyadı:",6,253);
    var delivery_area_username = document.getElementById("delivery_area_username").value;
    doc.text(delivery_area_username,66,253);

    var delivery_area_username_datetime = document.getElementById("delivery_area_username_datetime").value;
    doc.text(delivery_area_username_datetime,150,253);
    doc.setFontSize(8);
    doc.text("İmza:",120,253)

// ==============================

    doc.setLineWidth(0.1);
    doc.line(74, 257, 74, 267);

    doc.setLineWidth(0.1);
    doc.line(139, 257, 139, 267);

    doc.line(5,257,205,257)


    doc.setFontSize(7);
    doc.text("DOKTOR / PARAMEDİK",6,260);
    doc.setFontSize(7);
    doc.text("Adı-Soyadı:",6,263);
    var doctor_username1 = document.getElementById("doctor_username1").value;
    console.log(doctor_username1);
    doc.text(doctor_username1,20,263);

    var doctor_username_datetime = document.getElementById("doctor_username_datetime").value;
    doc.text(doctor_username_datetime,70,260);
    doc.setFontSize(7);
    doc.text("İmza:",6,266);

    doc.setFontSize(7);
    doc.text("SAĞLIK PERSONELİ",75,260);
    doc.setFontSize(7);
    doc.text("Adı-Soyadı:",75,263);
    var personal_username = document.getElementById("personal_username").value;
    doc.text(personal_username,90,263);

    var personal_username_datetime = document.getElementById("personal_username_datetime").value;
    doc.text(personal_username_datetime,130,260);
    doc.setFontSize(7);
    doc.text("İmza:",75,266);

    doc.setFontSize(7);
    doc.text("SÜRÜCÜ/PİLOT",140,260);
    doc.setFontSize(7);
    doc.text("Adı-Soyadı:",140,263);
    var pilot_username = document.getElementById("pilot_username").value;
    doc.text(pilot_username,155,263);

    var pilot_username_datetime = document.getElementById("pilot_username_datetime").value;
    doc.text(pilot_username_datetime,190,260);
    doc.setFontSize(7);
    doc.text("İmza:",140,266);
    // const responsibleSignature  = document.getElementById('pilot_signature').getElementsByTagName('canvas');
    // const responsibleSignaturectx = responsibleSignature[0].toDataURL();
    // console.log(responsibleSignaturectx);
    // doc.addImage(responsibleSignaturectx,"PNG",141,267,5,5);
// ==============================
    doc.setLineWidth(0.1);
    doc.line(41, 267, 41, 295);

    doc.setLineWidth(0.1);
    doc.line(73, 267, 73, 295);

    doc.setLineWidth(0.1);
    doc.line(143, 267, 143, 295);

    doc.line(5,267,205,267)

    doc.line(5,271,73,271)
    doc.line(5,275,73,275)
    doc.line(5,279,73,279)
    doc.line(5,283,73,283)
    doc.line(5,287,73,287)
    doc.line(5,291,73,291)

    doc.setFontSize(9);
    doc.text("Taşıt Bilgisi:",6,270);
    var car_info = document.getElementById("car_info").value;
    doc.text(car_info,42,270);
    doc.setFontSize(9);
    doc.text("Başlangıç KM:",6,274);
    var start_km = document.getElementById("start_km").value;
    doc.text(start_km,42,274);
    doc.setFontSize(9);
    doc.text("Bitiş KM:",6,278);
    var finish_km = document.getElementById("finish_km").value;
    doc.text(finish_km,42,278);
    doc.setFontSize(9);
    doc.text("112 Protokol Numarası:",6,282);
    var protocol_number = document.getElementById("protocol_number").value;
    doc.text(protocol_number,42,282);
    doc.setFontSize(9);
    doc.text("Kurum Adı:",6,286);
    var institution_name = document.getElementById("institution_name").value;
    doc.text(institution_name,42,286);

    doc.setFontSize(9);
    doc.text("Gidiş Dönüş:",6,290); 

    doc.setFontSize(8);
    doc.text("Evet",42,290);
    var yesCheckbox = new jspdf.AcroFormCheckBox();
    var roundYes = document.querySelector('input[name="round_trip"]:checked').value;
    console.log(roundYes);
    let hasYesText = false;
    if(roundYes == 'yes') {
        console.log("Girdi");
        hasYesText = true;
    }
    yesCheckbox.appearanceState = hasYesText ? 'On' : 'Off';
    yesCheckbox.readOnly = false;
    yesCheckbox.fieldName = "Evet";
    yesCheckbox.Rect = [50, 288, 2, 2];
    yesCheckbox.value = 'yes';
    doc.addField(yesCheckbox);

    doc.setFontSize(8);
    doc.text("Hayır",55,290);
    var noCheckBox = new jspdf.AcroFormCheckBox();
    var roundNo = document.querySelector('input[name="round_trip"]:checked').value;
    console.log(roundNo);
    let hasNoText = false;
    if(roundNo == 'no') {
        console.log("Girdi");
        hasNoText = true;
    }
    noCheckBox.appearanceState = hasNoText ? 'On' : 'Off';
    noCheckBox.readOnly = false;
    noCheckBox.fieldName = "Hayır";
    noCheckBox.Rect = [63, 288, 2, 2];
    noCheckBox.value = 'no';
    doc.addField(noCheckBox);

    doc.text(delivery_area_username_datetime,42,290);
    doc.setFontSize(9);
    doc.text("Şirket Bilgisi:",6,294);
    // var delivery_area_username_datetime = document.getElementById("delivery_area_username_datetime").value;
    // doc.text(delivery_area_username_datetime,42,294);


    doc.setFontSize(10);
    doc.text("VAKAYI VEREN KURUM BİLGİSİ:",83,273);
    // var institution_information = document.getElementById("institution_information").value;
    var institution_information = document.getElementById("institution_information").value;
    textlines = doc.setFontSize(8).splitTextToSize(institution_information,67);
    doc.text(textlines,77,277);

    doc.setFontSize(13);
    doc.text("BARKOT",170,282);



    doc.output('pdfobjectnewwindow');
    
}

function updateAmbulanceMaterialPdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Ambulans Cihaz, Malzeme ve İlaç Günük Kontrol Formu",25,30);

    doc.setFontSize(17);
    doc.text("Araç Plakası:",45,55);
    var stationName = document.getElementById("station_name").value;
    doc.setFontSize(15);
    doc.text(stationName,83,55).value;

    doc.setFontSize(17);
    doc.text("Acil Çanta Kilit No:",45,65);
    var emergencyLockNumber = document.getElementById("emergency_lock_number").value;
    doc.setFontSize(15);
    doc.text(emergencyLockNumber,98,65).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,75);
    var materialControlDate = document.getElementById("material_control_date").value;
    doc.setFontSize(15);
    doc.text(materialControlDate,62,75).value;

    doc.setFontSize(17);
    doc.text("Saat:",45,85);
    var materialControlTime = document.getElementById("material_control_time").value;
    doc.setFontSize(15);
    doc.text(materialControlTime,60,85).value;

    doc.setFontSize(17);
    doc.text("Notlar:",45,95);
    var materialNotes = document.getElementById("material_notes").value;
    textline = doc.setFontSize(15).splitTextToSize(materialNotes,120);
    doc.text(textline,65,95).value;
    
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
    doc.setFont("OpenSans-Medium");
    // var logo = document.getElementById("logo");
    // doc.addImage(logo, "PNG", 14,10,45,25);

    doc.setFontSize(20);
    doc.text("Çağrı Mekezi Formu",85,30);

    doc.line(5,40,205,40)
    doc.line(25,55,120,55)
    doc.line(25,63,120,63)
    doc.line(140,55,205,55)
    doc.line(140,63,205,63)
    doc.line(25,80,205,80)
    doc.line(25,85,85,85)
    doc.line(95,85,205,85)
    doc.line(25,115,128,115)
    doc.line(25,122,205,122)
    doc.line(5,145,205,145)
    doc.line(25,152,155,152)
    doc.line(25,159,155,159)
    doc.line(25,165,205,165)
    doc.line(25,172,205,172)
    doc.line(5,180,205,180)
    doc.line(5,195,205,195)
    doc.line(5,202,205,202)
    doc.line(5,209,205,209)
    doc.line(53,216,175,216)
    doc.line(53,223,175,223)
    doc.line(53,230,175,230)

    doc.line(128,90,205,90)
    doc.line(128,95,205,95)
    doc.line(128,100,205,100)
    doc.line(160,112,205,112)
    // doc.line(128,115,205,115)

    doc.rect(5,240,200,30)

    doc.line(100,250,205,250)

    doc.setLineWidth(0.1);
    doc.line(127, 70, 127,122);

    doc.setLineWidth(0.1);
    doc.line(155, 145, 155, 165);

    doc.setLineWidth(0.1);
    doc.line(100, 180, 100, 209);

    doc.setLineWidth(0.1);
    doc.line(100, 240, 100, 270);

    doc.setFontSize(12);
    doc.text("ÇAĞRIYI YAPAN",5,45);

    doc.setFontSize(11);
    doc.text("Kurum:",5,54)
    var institution_name = document.getElementById("institution_name").value;
    doc.setFontSize(9);
    doc.text(institution_name,28,54)

    doc.setFontSize(11);
    doc.text("Adı Soyadı:",5,60)
    var caller_username = document.getElementById("caller_username").value;
    doc.setFontSize(9);
    doc.text(caller_username,28,60)

    doc.setFontSize(11);
    doc.text("Yakınlığı:",121,54)
    var proximity = document.getElementById("proximity").value;
    doc.setFontSize(9);
    doc.text(proximity,141,54)

    doc.setFontSize(11);
    doc.text("Telefon:",121,60)
    var caller_tel_no = document.getElementById("caller_tel_no").value;
    doc.setFontSize(9);
    doc.text(caller_tel_no,141,60)

    doc.setFontSize(12);
    doc.text("HASTA",5,73)

    doc.setFontSize(11);
    doc.text("Adı Soyadı:",5,78)
    var patient_username = document.getElementById("patient_username").value;
    doc.setFontSize(9);
    doc.text(patient_username,28,78)

    doc.setFontSize(11);
    doc.text("Cinsiyet:",5,84)

    doc.setFontSize(9);
    doc.text("Erkek",25,84);
    var maleCheckbox = new jspdf.AcroFormCheckBox();
    var roundmale = document.querySelector('input[name="gender"]:checked').value;
    let hasmaleText = false;
    if(roundmale == 'erkek') {
        console.log("Girdi");
        hasmaleText = true;
    }
    maleCheckbox.appearanceState = hasmaleText ? 'On' : 'Off';
    maleCheckbox.readOnly = false;
    maleCheckbox.fieldName = "Erkek";
    maleCheckbox.Rect = [35, 81, 3, 3];
    maleCheckbox.value = 'male';
    doc.addField(maleCheckbox);

    doc.setFontSize(9);
    doc.text("Kadın",50,84);
    var femaleCheckBox = new jspdf.AcroFormCheckBox();
    var roundfemale = document.querySelector('input[name="gender"]:checked').value;
    let hasfemaleText = false;
    if(roundfemale == 'kadın') {
        console.log("Girdi");
        hasfemaleText = true;
    }
    femaleCheckBox.appearanceState = hasfemaleText ? 'On' : 'Off';
    femaleCheckBox.readOnly = false;
    femaleCheckBox.fieldName = "Kadın";
    femaleCheckBox.Rect = [60, 81, 3, 3];
    femaleCheckBox.value = 'female';
    doc.addField(femaleCheckBox);

    doc.setFontSize(11);
    doc.text("Adres:",5,90)
    var patient_adress = document.getElementById("patient_adress").value;
    textlines = doc.setFontSize(8).splitTextToSize(patient_adress,90);
    // doc.setFontSize(9);
    doc.text(textlines,25,90)

    doc.setFontSize(10);
    doc.text("Yaş:",87,85)
    var patient_age = document.getElementById("patient_age").value;
    doc.setFontSize(9);
    doc.text(patient_age,102,85)

    doc.setFontSize(10);
    doc.text("Vaka No:",128,78)
    var case_no = document.getElementById("case_no").value;
    doc.setFontSize(9);
    doc.text(case_no,152,78)

    doc.setFontSize(10);
    doc.text("Tarih :",128,84)
    var case_date = document.getElementById("case_date").value;
    doc.setFontSize(9);
    doc.text(case_date,152,84)

    doc.setFontSize(10);
    doc.text("Araç No:",128,89)
    var car_info = document.getElementById("car_info").value;
    doc.setFontSize(9);
    doc.text(car_info,152,89)

    doc.setFontSize(10);
    doc.text("Çağrı Alış Saati :",128,94)
    var case_time = document.getElementById("case_time").value;
    doc.setFontSize(9);
    doc.text(case_time,155,94)

    doc.setFontSize(10);
    doc.text("Alarm Saati:",128,99)
    var alarm_clock = document.getElementById("alarm_clock").value;
    doc.setFontSize(9);
    doc.text(alarm_clock,152,99)

    doc.setFontSize(10);
    doc.text("Randevu:",128,104)

    doc.setFontSize(9);
    doc.text("Evet",148,104);
    var yesCheckbox = new jspdf.AcroFormCheckBox();
    var roundyes = document.querySelector('input[name="case_yes"]:checked').value;
    let hasyesText = false;
    if(roundyes == 'evet') {
        console.log("Girdi");
        hasyesText = true;
    }
    yesCheckbox.appearanceState = hasyesText ? 'On' : 'Off';
    yesCheckbox.readOnly = false;
    yesCheckbox.fieldName = "Evet";
    yesCheckbox.Rect = [158,102, 2, 2];
    yesCheckbox.value = 'evet';
    doc.addField(yesCheckbox);

    doc.setFontSize(9);
    doc.text("Hayır",168,104);
    var noCheckBox = new jspdf.AcroFormCheckBox();
    var roundno = document.querySelector('input[name="case_yes"]:checked').value;
    let hasnoText = false;
    if(roundno == 'hayır') {
        console.log("Girdi");
        hasnoText = true;
    }
    noCheckBox.appearanceState = hasnoText ? 'On' : 'Off';
    noCheckBox.readOnly = false;
    noCheckBox.fieldName = "Hayır";
    noCheckBox.Rect = [178, 102, 2, 2];
    noCheckBox.value = 'hayır';
    doc.addField(noCheckBox);

    doc.setFontSize(10);
    doc.text("Randevu Saati:",128,111)
    var appointment_time = document.getElementById("appointment_time").value;
    doc.setFontSize(9);
    doc.text(appointment_time,155,111)

    doc.setFontSize(10);
    doc.text("Randevu Tarihi:",128,118)
    var appointment_date = document.getElementById("appointment_date").value;
    doc.setFontSize(9);
    doc.text(appointment_date,155,118)

    doc.setFontSize(10);
    doc.text("Telefon:",5,113)
    // var casedate = document.getElementById("casedate").value;
    // doc.setFontSize(9);
    // doc.text(casedate,180,4).value

    doc.setFontSize(10);
    doc.text("Adres Tarifi:",5,120)
    var patient_for_directions = document.getElementById("patient_for_directions").value;
    // doc.setFontSize(9);
    textlines1 = doc.setFontSize(8).splitTextToSize(patient_for_directions,90);
    doc.text(textlines1,25,130)

    doc.setFontSize(9);
    doc.text("Hastanın Şikayeti :",5,149)
    var patient_complaint = document.getElementById("patient_complaint").value;
    doc.setFontSize(9);
    doc.text(patient_complaint,35,149)

    doc.setFontSize(9);
    doc.text("Hastanın Kliniği    :",5,155)
    var patient_clinic = document.getElementById("patient_clinic").value;
    doc.setFontSize(9);
    doc.text(patient_clinic,35,155)

    doc.setFontSize(9);
    doc.text("Ön Tanı                  :",5,163)
    var pre_diagnosis = document.getElementById("pre_diagnosis").value;
    doc.setFontSize(9);
    doc.text(pre_diagnosis,35,163)

    doc.setFontSize(9);
    doc.text("Onay Alınan Kişi  :",5,170)
    var consent_received_person = document.getElementById("consent_received_person").value;
    doc.setFontSize(9);
    doc.text(consent_received_person,35,170)

    doc.setFontSize(10);
    doc.text("TRİAJ KODU",173,149)

    doc.setFontSize(9);
    doc.text("1",168,155);
    var oneCheckbox = new jspdf.AcroFormCheckBox();
    var roundone = document.querySelector('input[name="triaj"]:checked').value;
    let hasoneText = false;
    if(roundone == '1') {
        console.log("Girdi");
        hasoneText = true;
    }
    oneCheckbox.appearanceState = hasoneText ? 'On' : 'Off';
    oneCheckbox.readOnly = false;
    oneCheckbox.fieldName = "1";
    oneCheckbox.Rect = [173,152, 3, 3];
    oneCheckbox.value = '1';
    doc.addField(oneCheckbox);

    doc.setFontSize(9);
    doc.text("2",178,155);
    var twoCheckBox = new jspdf.AcroFormCheckBox();
    var roundtwo = document.querySelector('input[name="triaj"]:checked').value;
    let hastwoText = false;
    if(roundtwo == '2') {
        console.log("Girdi");
        hastwoText = true;
    }
    twoCheckBox.appearanceState = hastwoText ? 'On' : 'Off';
    twoCheckBox.readOnly = false;
    twoCheckBox.fieldName = "2";
    twoCheckBox.Rect = [182, 152, 3, 3];
    twoCheckBox.value = '2';
    doc.addField(twoCheckBox);

    doc.setFontSize(9);
    doc.text("3",188,155);
    var threeCheckBox = new jspdf.AcroFormCheckBox();
    var roundthree = document.querySelector('input[name="triaj"]:checked').value;
    let hasthreeText = false;
    if(roundthree == '3') {
        console.log("Girdi");
        hasthreeText = true;
    }
    threeCheckBox.appearanceState = hasthreeText ? 'On' : 'Off';
    threeCheckBox.readOnly = false;
    threeCheckBox.fieldName = "3";
    threeCheckBox.Rect = [192, 152, 3, 3];
    threeCheckBox.value = '3';
    doc.addField(threeCheckBox);


    doc.setFontSize(10);
    doc.text("ÇIKIŞ ŞEKLİ           :",5,177)

    doc.setFontSize(10);
    doc.text("Acil",35,177)
    var urgentCheckbox = new jspdf.AcroFormCheckBox();
    var roundurgent = document.querySelector('input[name="output_method"]:checked').value;
    let hasurgentText = false;
    if(roundurgent == 'acil') {
        console.log("Girdi");
        hasurgentText = true;
    }
    urgentCheckbox.appearanceState = hasurgentText ? 'On' : 'Off';
    urgentCheckbox.readOnly = false;
    urgentCheckbox.fieldName = "Acil";
    urgentCheckbox.Rect = [42,174, 3, 3];
    urgentCheckbox.value = 'urgent';
    doc.addField(urgentCheckbox);

    doc.setFontSize(10);
    doc.text("Kontrollü",65,177)
    var controlledCheckbox = new jspdf.AcroFormCheckBox();
    var roundcontrolled = document.querySelector('input[name="output_method"]:checked').value;
    let hascontrolledeText = false;
    if(roundcontrolled == 'kontrollü') {
        console.log("Girdi");
        hascontrolledeText = true;
    }
    controlledCheckbox.appearanceState = hascontrolledeText ? 'On' : 'Off';
    controlledCheckbox.readOnly = false;
    controlledCheckbox.fieldName = "Kontrollü";
    controlledCheckbox.Rect = [85,174, 3, 3];
    controlledCheckbox.value = 'controlled';
    doc.addField(controlledCheckbox);

    doc.setFontSize(10);
    doc.text("Randevulu",95,177)
    var by_appointmentCheckbox = new jspdf.AcroFormCheckBox();
    var roundby_appointment = document.querySelector('input[name="output_method"]:checked').value;
    let hasby_appointmentText = false;
    if(roundby_appointment == 'randevulu') {
        console.log("Girdi");
        hasby_appointmentText = true;
    }
    by_appointmentCheckbox.appearanceState = hasby_appointmentText ? 'On' : 'Off';
    by_appointmentCheckbox.readOnly = false;
    by_appointmentCheckbox.fieldName = "Randevulu";
    by_appointmentCheckbox.Rect = [115,174, 3, 3];
    by_appointmentCheckbox.value = 'by_appointment';
    doc.addField(by_appointmentCheckbox);

    doc.setFontSize(10);
    doc.text("YER",5,184)

    doc.setFontSize(10);
    doc.text("SAAT",50,184)

    doc.setFontSize(10);
    doc.text("YER",102,184)

    doc.setFontSize(10);
    doc.text("SAAT",150,184)

    doc.setFontSize(10);
    doc.text("Çıkış Saat           :",5,191)
    var exit_time = document.getElementById("exit_time").value;
    doc.setFontSize(9);
    doc.text(exit_time,35,191)

    doc.setFontSize(10);
    doc.text("Vakadan Çıkış     :",5,199)
    var event_exit_time = document.getElementById("event_exit_time").value;
    doc.setFontSize(9);
    doc.text(event_exit_time,35,199)

    doc.setFontSize(10);
    doc.text("Hastahaneden Çıkış  :",5,207)
    var time_out_hospital = document.getElementById("time_out_hospital").value;
    doc.setFontSize(9);
    doc.text(time_out_hospital,45,207)

    doc.setFontSize(10);
    doc.text("Ulaşım Saati         :",102,191)
    var transport_hour = document.getElementById("transport_hour").value;
    doc.setFontSize(9);
    doc.text(transport_hour,135,191)

    doc.setFontSize(10);
    doc.text("Hastaneye Varış   :",102,199)
    var hospital_arrival_time = document.getElementById("hospital_arrival_time").value;
    doc.setFontSize(9);
    doc.text(hospital_arrival_time,135,199)

    doc.setFontSize(10);
    doc.text("Noktaya Dönüş       :",102,207)
    var point_return_time = document.getElementById("point_return_time").value;
    doc.setFontSize(9);
    doc.text(point_return_time,135,207)

    doc.setFontSize(10);
    doc.text("Hastanın Alındığı Yer          :",5,215)
    var patient_taken_place = document.getElementById("patient_taken_place").value;
    doc.setFontSize(9);
    doc.text(patient_taken_place,65,215)

    doc.setFontSize(10);
    doc.text("Hastanın İlk Bırakıldığı Yer  :",5,222)
    var where_patient_first_dropped = document.getElementById("where_patient_first_dropped_out").value;
    doc.setFontSize(9);
    doc.text(where_patient_first_dropped,65,222)

    doc.setFontSize(10);
    doc.text("Hastanın Son Bırakıldığı Yer :",5,229)
    var patient_last_off_place = document.getElementById("patient_last_off_place").value;
    doc.setFontSize(9);
    doc.text(patient_last_off_place,65,229)

    doc.setFontSize(10);
    doc.text("Kara Ambulansı",180,215)
    var land_ambulanceCheckbox = new jspdf.AcroFormCheckBox();
    var roundland_ambulance = document.querySelector('input[name="ambulance"]:checked').value;
    let hasland_ambulanceText = false;
    if(roundland_ambulance == 'land_ambulance') {
        console.log("Girdi");
        hasland_ambulanceText = true;
    }
    land_ambulanceCheckbox.appearanceState = hasland_ambulanceText ? 'On' : 'Off';
    land_ambulanceCheckbox.readOnly = false;
    land_ambulanceCheckbox.fieldName = "Kontrollü";
    land_ambulanceCheckbox.Rect = [188,217, 3, 3];
    land_ambulanceCheckbox.value = 'land_ambulance';
    doc.addField(land_ambulanceCheckbox);


    doc.setFontSize(10);
    doc.text("Hava Ambulansı",180,225)
    var air_ambulanceCheckbox = new jspdf.AcroFormCheckBox();
    var roundair_ambulance = document.querySelector('input[name="ambulance"]:checked').value;
    let hasair_ambulanceText = false;
    if(roundair_ambulance == 'air_ambulance') {
        console.log("Girdi");
        hasair_ambulanceText = true;
    }
    air_ambulanceCheckbox.appearanceState = hasair_ambulanceText ? 'On' : 'Off';
    air_ambulanceCheckbox.readOnly = false;
    air_ambulanceCheckbox.fieldName = "Randevulu";
    air_ambulanceCheckbox.Rect = [188,227, 3, 3];
    air_ambulanceCheckbox.value = 'by_appointment';
    doc.addField(air_ambulanceCheckbox);

    doc.setFontSize(10);
    doc.text("HASTANIN GÜVENCESİ",5,238)

    doc.setFontSize(10);
    doc.text("Müdahale",6,245)
    var intervention = document.getElementById("intervention").value;
    textlines2 = doc.setFontSize(8).splitTextToSize(intervention,90);
    doc.text(textlines2,8,255)

    doc.setFontSize(10);
    doc.text("112 Protokol No:",102,245)
    var protocol_number = document.getElementById("protocol_number").value;
    doc.setFontSize(9);
    doc.text(protocol_number,132,245)

    doc.setFontSize(10);
    doc.text("Açıklama",102,254)
    // var casedate = document.getElementById("casedate").value;
    // doc.setFontSize(9);
    // doc.text(casedate,180,4).value

    doc.setFontSize(10);
    doc.text("Çağrıyı Alan Adı Soyadı:",5,275)
    var call_domain_username = document.getElementById("call_domain_username").value;
    doc.setFontSize(9);
    doc.text(call_domain_username,45,275)


    doc.output('pdfobjectnewwindow');
}

function updateHealmedyCasePdf(){
    const {jsPDF} = window.jspdf;

    var doc = new jsPDF();
    doc.setFont("OpenSans-Medium");
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
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",65,30);

    doc.setFontSize(17);
    doc.text("1.Malzeme Adı:",45,55);
    var materialName = document.getElementById("material_name").value;
    doc.setFontSize(15);
    doc.text(materialName,88,55).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,65);
    var quantityRequest = document.getElementById("quantity_request").value;
    doc.setFontSize(15);
    doc.text(quantityRequest,98,65).value;

    doc.setFontSize(17);
    doc.text("2.Malzeme Adı:",45,75);
    var materialName1 = document.getElementById("material_name1").value;
    doc.setFontSize(15);
    doc.text(materialName1,88,75).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,85);
    var quantityRequest1 = document.getElementById("quantity_request1").value;
    doc.setFontSize(15);
    doc.text(quantityRequest1,98,85).value;

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen Malzeme:",45,95);
    var totalMaterial = document.getElementById("total_requested_material").value;
    doc.setFontSize(15);
    doc.text(totalMaterial,135,95).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,105);
    var materialDate = document.getElementById("material_request_date").value;
    doc.setFontSize(15);
    doc.text(materialDate,65,105).value;

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
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Medikal Gaz İstek Formu",75,30);

    doc.setFontSize(17);
    doc.text("Kullanılacak Birim:",45,55);
    // var unit = document.getElementsByName("unit");
    var unit = document.querySelector('input[name="unit"]:checked').value;
    doc.setFontSize(15);
    doc.text(unit,98,55);

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,65);
    var medicalOxygen = document.getElementById("amount_of_medical_oxygen").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen,130,65).value;

    doc.setFontSize(17);
    doc.text("Demirbaş Kodu:",45,75);
    var fixtureCode = document.getElementById("fixture_code").value;
    doc.setFontSize(15);
    doc.text(fixtureCode,90,75).value;

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,85);
    var numberOfTubes = document.getElementById("number_of_tubes").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes,77,85).value;

    doc.setFontSize(17);
    doc.text("Medikal Oksijen Miktar(Litre):",45,95);
    var medicalOxygen1 = document.getElementById("amount_of_medical_oxygen1").value;
    doc.setFontSize(15);
    doc.text(medicalOxygen1,130,95).value;

    doc.setFontSize(17);
    doc.text("Demirbas Kodu:",45,105);
    var fixtureCode1 = document.getElementById("fixture_code1").value;
    doc.setFontSize(15);
    doc.text(fixtureCode1,90,105).value;

    doc.setFontSize(17);
    doc.text("Tüp Adedi:",45,115);
    var numberOfTubes1 = document.getElementById("number_of_tubes1").value;
    doc.setFontSize(15);
    doc.text(numberOfTubes1,77,115).value;

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
    doc.setFont("OpenSans-Medium");
    doc.setFontSize(30);
    doc.text("FİLYOS SAĞLIK MERKEZİ",60,15);

    doc.setFontSize(20);
    doc.text("Malzeme Talep ve Teslim Formu",65,30);

    doc.setFontSize(17);
    doc.text("1.İlaç Adı:",45,55);
    var drugName = document.getElementById("drug_name").value;
    doc.setFontSize(15);
    doc.text(drugName,75,55).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,65);
    var formofDrug = document.getElementById("form_of_drug").value;
    doc.setFontSize(15);
    doc.text(formofDrug,83,65).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,75);
    var quantityRequested = document.getElementById("quantity_requested").value;
    doc.setFontSize(15);
    doc.text(quantityRequested,98,75).value;

    doc.setFontSize(17);
    doc.text("2.İlaç Adı:",45,85);
    var drugName1 = document.getElementById("drug_name1").value;
    doc.setFontSize(15);
    doc.text(drugName1,75,85).value;

    doc.setFontSize(17);
    doc.text("İlacın Formu:",45,95);
    var formofDrug1 = document.getElementById("form_of_drug1").value;
    doc.setFontSize(15);
    doc.text(formofDrug1,83,95).value;

    doc.setFontSize(17);
    doc.text("Talep Edilen Miktar:",45,105);
    var quantityRequested1 = document.getElementById("quantity_requested1").value;
    doc.setFontSize(15);
    doc.text(quantityRequested1,98,105).value;

    doc.setFontSize(17);
    doc.text("Toplam Talep Edilen İlaç:",45,115);
    var totalRequestedDrug = document.getElementById("total_requested_drug").value;
    doc.setFontSize(15);
    doc.text(totalRequestedDrug,115,115).value;

    doc.setFontSize(17);
    doc.text("Tarih:",45,125);
    var medicationRequestedDate = document.getElementById("medication_request_date").value;
    doc.setFontSize(15);
    doc.text(medicationRequestedDate,65,125).value;

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
    doc.setFont("OpenSans-Medium");
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
    doc.text(username,85,75);

    doc.setFontSize(17);
    doc.text("ADI SOYADI-İMZA",20,100);
    const preCaseSignature  = document.getElementById('pre_case_signature').getElementsByTagName('canvas');
    const preCaseSignaturectx = preCaseSignature[0].toDataURL();
    console.log(preCaseSignaturectx);
    doc.addImage(preCaseSignaturectx,"PNG",15,105,40,40);

    doc.output('pdfobjectnewwindow');

}