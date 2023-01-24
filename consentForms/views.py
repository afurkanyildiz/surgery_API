from django.shortcuts import render,redirect

from django.contrib.auth.decorators import login_required
from .models import GeneralInformation,InjectionInformed,KVKKConsent,minorConsent,PunctureConsent
from .forms import GeneralInformationForm,InjectionInformedForm,KVKKConsentForm,minorConsentForm,PunctureConsentForm

#save forms
def generalInformation(request):
    if request.method == 'POST':
        generalInformation = GeneralInformation()
        generalInformation.generalPatientUsername = request.POST.get('generalPatientUsername')
        generalInformation.generalPatientBirthDate = request.POST.get('generalPatientBirthDate')
        generalInformation.generalProtocolNumber = request.POST.get('generalProtocolNumber')
        generalInformation.generalGender = request.POST.get('generalGender')
        generalInformation.generalprocessingTime = request.POST.get('generalprocessingTime')
        generalInformation.generalDate = request.POST.get('generalDate')
        generalInformation.generalHour = request.POST.get('generalHour')
        generalInformation.generalPatientUsername1 = request.POST.get('generalPatientUsername1')
        generalInformation.generalPatientAdress = request.POST.get('generalPatientAdress')
        generalInformation.generalPatientTel = request.POST.get('generalPatientTel')
        generalInformation.generalPatientSignatureText = request.POST.get('generalPatientSignatureText')
        generalInformation.generalDoctorUsername = request.POST.get('generalDoctorUsername')
        generalInformation.generalDoctorSignatureText = request.POST.get('generalDoctorSignatureText')
        generalInformation.generalWitnessUsername = request.POST.get('generalWitnessUsername')
        generalInformation.generalWitnessSignatureText = request.POST.get('generalWitnessSignatureText')
        generalInformation.generalRepresentativeUsername = request.POST.get('generalRepresentativeUsername')
        generalInformation.generalRepresentativeAdress = request.POST.get('generalRepresentativeAdress')
        generalInformation.generalRepresentativeTel = request.POST.get('generalRepresentativeTel')
        generalInformation.generalRepresentativeSignatureText = request.POST.get('generalRepresentativeSignatureText')
        generalInformation.generalRepresentativeDoctorUsername = request.POST.get('generalRepresentativeDoctorUsername')
        generalInformation.generalRepresentativeDoctorSignatureText = request.POST.get('generalRepresentativeDoctorSignatureText')
        generalInformation.generalRepresentativeWitnessUsername = request.POST.get('generalRepresentativeWitnessUsername')
        generalInformation.generalRepresentativeWitnessSignatureText = request.POST.get('generalRepresentativeWitnessSignatureText')
        generalInformation.generalApproval = request.POST.get('generalApproval')
        
        generalInformation.save()
        return redirect('/consentForms/generalInformationTables')
    return render(request,"forms/concent_forms/general_information_and _consent_form.html")

def injectionInformed(request):
    if request.method == 'POST':
        injectionInformed = InjectionInformed()
        injectionInformed.injection1 = request.POST.get('injection1')
        injectionInformed.injectionDate = request.POST.get('injectionDate')
        injectionInformed.injectionHour = request.POST.get('injectionHour')
        injectionInformed.patientUsername = request.POST.get('patientUsername')
        injectionInformed.patientAdress = request.POST.get('patientAdress')
        injectionInformed.patientTelNo = request.POST.get('patientTelNo')
        injectionInformed.patientSignatureText = request.POST.get('patientSignatureText')
        injectionInformed.employeeUsername = request.POST.get('employeeUsername')
        injectionInformed.employeeSignatureText = request.POST.get('employeeSignatureText')
        
        injectionInformed.save()
        return redirect('/consentForms/injectionInformedTables')
    return render(request,"forms/concent_forms/injection_informed_consent_form.html")

def kvkkConsent(request):
    if request.method == 'POST':
        kvkkConsent = KVKKConsent()
        kvkkConsent.kvkkName = request.POST.get('kvkkName')
        kvkkConsent.myRelatives = request.POST.get('myRelatives')
        kvkkConsent.legalPerson = request.POST.get('legalPerson')
        kvkkConsent.kvkkPatientUsername = request.POST.get('kvkkPatientUsername')
        kvkkConsent.kvkkPatientDate = request.POST.get('kvkkPatientDate')
        kvkkConsent.kvkkPatientSignatureText = request.POST.get('kvkkPatientSignatureText')
        kvkkConsent.expression = request.POST.get('expression')
        kvkkConsent.declaration = request.POST.get('declaration')
        kvkkConsent.save()
        return redirect('/consentForms/kvkkConsentTables')
    return render(request,"forms/concent_forms/kvkk_consent_form.html")

def minorSurgery(request):
    if request.method == 'POST':
        minorSurgery = minorConsent()
        minorSurgery.minorDiagnosis = request.POST.get('minorDiagnosis')
        minorSurgery.minorOther = request.POST.get('minorOther')
        minorSurgery.minorAlternative = request.POST.get('minorAlternative')
        minorSurgery.processing_time = request.POST.get('processing_time')
        minorSurgery.minorDate = request.POST.get('minorDate')
        minorSurgery.minorHour = request.POST.get('minorHour')
        minorSurgery.minorPatientUsername = request.POST.get('minorPatientUsername')
        minorSurgery.minorPatientAdress = request.POST.get('minorPatientAdress')
        minorSurgery.minorPatientTel = request.POST.get('minorPatientTel')
        minorSurgery.minorPatientSignatureText = request.POST.get('minorPatientSignatureText')
        minorSurgery.minorDoctorUsername = request.POST.get('minorDoctorUsername')
        minorSurgery.minorDoctorSignatureText = request.POST.get('minorDoctorSignatureText')
        minorSurgery.minorlegalRepresentativeUsername = request.POST.get('minorlegalRepresentativeUsername')
        minorSurgery.minorlegalRepresentativeAdress = request.POST.get('minorlegalRepresentativeAdress')
        minorSurgery.minorlegalRepresentativeTel = request.POST.get('minorlegalRepresentativeTel')
        minorSurgery.minorlegalRepresentativeSignatureText = request.POST.get('minorlegalRepresentativeSignatureText')
        minorSurgery.minorinterpreterUsername = request.POST.get('minorinterpreterUsername')
        minorSurgery.minorinterpreterTel = request.POST.get('minorinterpreterTel')
        minorSurgery.minorinterpreterSignatureText = request.POST.get('minorinterpreterSignatureText')
        minorSurgery.minorApproval = request.POST.get('minorApproval')
        minorSurgery.minorApprovalTxt = request.POST.get('minorApprovalTxt')
        minorSurgery.save()
        return redirect('/consentForms/minorSurgeryTables')
    return render(request,"forms/concent_forms/minor_surgery_informed_consent_form.html")

def punctureConsent(request):
    if request.method == 'POST':
        punctureConsent = PunctureConsent()
        punctureConsent.punctureDate = request.POST.get('punctureDate')
        punctureConsent.punctureHour = request.POST.get('punctureHour')
        punctureConsent.puncturePatientUsername = request.POST.get('puncturePatientUsername')
        punctureConsent.puncturePatientAdress = request.POST.get('puncturePatientAdress')
        punctureConsent.puncturePatientTel = request.POST.get('puncturePatientTel')
        punctureConsent.puncturePatientSignatureText =request.POST.get('puncturePatientSignatureText')
        punctureConsent.punctureDoctorUsername =request.POST.get('punctureDoctorUsername')
        punctureConsent.punctureDoctorSignatureText = request.POST.get('punctureDoctorSignatureText')
        punctureConsent.punctureWitnessUsername = request.POST.get('punctureWitnessUsername')
        punctureConsent.punctureWitnessSignatureText =request.POST.get('punctureWitnessSignatureText')
        punctureConsent.punctureRepresentativeUsername =request.POST.get('punctureRepresentativeUsername')
        punctureConsent.punctureRepresentativeAdress = request.POST.get('punctureRepresentativeAdress')
        punctureConsent.punctureRepresentativeTel = request.POST.get('punctureRepresentativeTel')
        punctureConsent.punctureRepresentativeSignatureText =request.POST.get('punctureRepresentativeSignatureText')
        punctureConsent.punctureRepresentativeDoctorUsername = request.POST.get('punctureRepresentativeDoctorUsername')
        punctureConsent.punctureRepresentativeDoctorSignatureText = request.POST.get('punctureRepresentativeDoctorSignatureText')
        punctureConsent.punctureRepresentativeWitnessUsername = request.POST.get('punctureRepresentativeWitnessUsername')
        punctureConsent.punctureRepresentativeWitnessSignatureText =request.POST.get('punctureRepresentativeWitnessSignatureText')
        punctureConsent.punctureApproval = request.POST.get('punctureApproval')
        punctureConsent.punctureApprovalTxt = request.POST.get('punctureApprovalTxt')
        punctureConsent.save()
        return redirect('/consentForms/punctureConsentTables')
    return render(request,"forms/concent_forms/puncture_consent_form.html")#

#get forms
def getGeneralInformation(request,id):
    generalInformation = GeneralInformation.objects.get(id=id)
    print(generalInformation.generalGender)
    return render(request,"forms/concent_forms/update_forms/generalConsentUpdate.html",{"generalInformation":generalInformation})

def getInjectionInformed(request,id):
    injectionInformed = InjectionInformed.objects.get(id=id) 
    return render(request,"forms/concent_forms/update_forms/injectionConsentUpdate.html",{"injectionInformed":injectionInformed})

def getKvkkConsent(request,id):
    kvkkConsent = KVKKConsent.objects.get(id=id)
    return render(request,"forms/concent_forms/update_forms/kvkkConsentUpdate.html",{"kvkkConsent":kvkkConsent})

def getMinorSurgery(request,id):
    minorSurgery = minorConsent.objects.get(id=id)
    return render(request,"forms/concent_forms/update_forms/minorConsentUpdate.html",{"minorSurgery":minorSurgery})

def getPunctureConsent(request,id):
    punctureConsent = PunctureConsent.objects.get(id=id)
    return render(request,"forms/concent_forms/update_forms/punctureConsentUpdate.html",{"punctureConsent":punctureConsent})

#update Forms
@login_required(login_url='redirect')
def updateGeneralConsent(request,id):
    generalInformation = GeneralInformation.objects.get(id=id)
    form = GeneralInformationForm(data=request.POST, instance=generalInformation)
   
    if form.is_valid():               
        form.save()
        print(form.data)
        context={'generalInformation':GeneralInformation.objects.all()}
        return render(request,"tables/concent_tables/generalConsent.html", context)
    else:
        print(form.errors.as_data())
        return render(request,"forms/concent_forms/update_forms/generalConsentUpdate.html",{"generalInformation": generalInformation})
    
@login_required(login_url='redirect')
def updateInjectionConsent(request,id):
    injectionInformed = InjectionInformed.objects.get(id=id)
    form = InjectionInformedForm(data=request.POST, instance=injectionInformed)
   
    if form.is_valid():               
        form.save()
        print(form.data)
        context={'injectionInformed':InjectionInformed.objects.all()}
        return render(request,"tables/concent_tables/injectionConsent.html", context)
    else:
        print(form.errors.as_data())
        return render(request,"forms/concent_forms/update_forms/injectionConsentUpdate.html",{"injectionInformed": injectionInformed})
    
@login_required(login_url='redirect')
def updateKvkkConsent(request,id):
    kvkkConsent = KVKKConsent.objects.get(id=id)
    form = KVKKConsentForm(data=request.POST, instance=kvkkConsent)
   
    if form.is_valid():               
        form.save()
        print(form.data)
        context={'kvkkConsent':KVKKConsent.objects.all()}
        return render(request,"tables/concent_tables/kvkkConsent.html", context)
    else:
        print(form.errors.as_data())
        return render(request,"forms/concent_forms/update_forms/kvkkConsentUpdate.html",{"kvkkConsent": kvkkConsent})
    
@login_required(login_url='redirect')
def updateMinorSurgery(request,id):
    minorSurgery = minorConsent.objects.get(id=id)
    form = minorConsentForm(data=request.POST, instance=minorSurgery)
   
    if form.is_valid():               
        form.save()
        print(form.data)
        context={'minorSurgery':minorConsent.objects.all()}
        return render(request,"tables/concent_tables/minorConsent.html", context)
    else:
        print(form.errors.as_data())
        return render(request,"forms/concent_forms/update_forms/minorConsentUpdate.html",{"minorSurgery": minorSurgery})
    
@login_required(login_url='redirect')
def updatePunctureConsent(request,id):
    punctureConsent = PunctureConsent.objects.get(id=id)
    form = PunctureConsentForm(data=request.POST, instance=punctureConsent)
   
    if form.is_valid():               
        form.save()
        print(form.data)
        context={'punctureConsent':PunctureConsent.objects.all()}
        return render(request,"tables/concent_tables/punctureConsent.html", context)
    else:
        print(form.errors.as_data())
        return render(request,"forms/concent_forms/update_forms/punctureConsentUpdatee.html",{"punctureConsent": punctureConsent})


#table forms
def generalInformationTables(request):
    context ={'generalInformation':GeneralInformation.objects.all().order_by('-id')}
    return render(request,"tables/concent_tables/generalConsent.html",context)

def injectionInformedTables(request):
    context={'injectionInformed': InjectionInformed.objects.all().order_by('-id')}
    return render(request,"tables/concent_tables/injectionConsent.html",context)

def kvkkConsentTables(request):
    context={'kvkkConsent':KVKKConsent.objects.all().order_by('-id')}
    return render(request,"tables/concent_tables/kvkkConsent.html", context)

def minorSurgeryTables(request):
    context={'minorSurgery':minorConsent.objects.all().order_by('-id')}
    return render(request,"tables/concent_tables/minorConsent.html",context)

def punctureConsentTables(request):
    context = {'punctureConsent':PunctureConsent.objects.all().order_by('-id')}
    return render(request,"tables/concent_tables/punctureConsent.html",context)#Create your views here.
