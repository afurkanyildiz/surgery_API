from multiprocessing import context
from django.shortcuts import redirect, render
from django.contrib import  messages
import string

from .models import Records,Institution,MedicationName,WayOfApplication
from .forms import RecordsForm,InstitutionForm,MedicationForm
from django.http import HttpResponse, JsonResponse


from django.contrib.auth.decorators import login_required
@login_required(login_url='redirect')
def record_page(request):
    context = {'institutionName':Institution.objects.all(),'medicationName':MedicationName.objects.all(),'way_of_application':WayOfApplication.objects.all()} 
    return render(request,'registration_form.html',context)

@login_required(login_url='redirect')
def record_form(request): 
    if request.method == "POST" and 'registrationSave' in request.POST:
        records = Records()
        records.username = request.POST.get('username')
        records.date = request.POST.get('date')
        records.hours = request.POST.get('hours')
        records.tel = request.POST.get('tel')
        records.tcNo = request.POST.get('tcNo')
        records.adress = request.POST.get('adress')
        records.kurum = request.POST.get('kurum')
        records.diagnosis = request.POST.get('diagnosis')
        records.intervention = request.POST.get('intervention')
        # records.medications = request.POST.get('medications')
        records.conclusion = request.POST.get('conclusion')
        records.doctor = request.POST.get('doctor')
        records.record_one_measurement = request.POST.get('record_one_measurement')
        records.record_one_blood_pressure = request.POST.get('record_one_blood_pressure')
        records.record_one_pulse = request.POST.get('record_one_pulse')
        records.record_one_spo2 = request.POST.get('record_one_spo2')
        records.record_one_respirations_min = request.POST.get('record_one_respirations_min')
        records.record_one_fire = request.POST.get('record_one_fire')
        records.record_second_measurement = request.POST.get('record_second_measurement')
        records.record_second_blood_pressure = request.POST.get('record_second_blood_pressure')
        records.record_second_pulse = request.POST.get('record_second_pulse')
        records.record_second_spo2 = request.POST.get('record_second_spo2')
        records.record_second_respirations_min = request.POST.get('record_second_respirations_min')
        records.record_second_fire = request.POST.get('record_second_fire')
        records.record_third_measurement = request.POST.get('record_third_measurement')
        records.record_third_blood_pressure = request.POST.get('record_third_blood_pressure')
        records.record_third_pulse = request.POST.get('record_third_pulse')
        records.record_third_spo2 = request.POST.get('record_third_spo2')
        records.record_third_fire = request.POST.get('record_third_fire')
        records.record_third_respirations_min = request.POST.get('record_third_respirations_min')
        records.medications = ','.join(request.POST.getlist('medications'))
        records.scale_used =','.join(request.POST.getlist('scale_used'))
        records.way_of_application =','.join(request.POST.getlist('way_of_application'))
        
        records.save()
        return redirect('/index/tables')
    else:
        #messages.add_message(request,messages.WARNING,'Kayit Basarisiz')
        return render(request,'registration_form.html') 

@login_required(login_url='redirect')
def editRecords(request,id):
    edit_records = Records.objects.get(id=id)
    if edit_records.medications is not None:
        edit_records.medications = edit_records.medications.strip("[']").split(',')
    if edit_records.scale_used is not None:
        edit_records.scale_used = edit_records.scale_used.strip("[']").split(',')
    if  edit_records.way_of_application is not None:
        edit_records.way_of_application = edit_records.way_of_application.strip("[']").split(',')
    institutionName = Institution.objects.all()
    medicationName = MedicationName.objects.all()
    way_of_application = WayOfApplication.objects.all()
    return render(request,"update_record.html",{"Records": edit_records, "institutionName":institutionName,"medicationName":medicationName,"way_of_application":way_of_application})
    
@login_required(login_url='redirect')
def updateRecords(request, id):  
    record = Records.objects.get(id=id)
    form = RecordsForm(data=request.POST, instance=record)
    if form.is_valid():
        record.medications = request.POST.getlist('medications')
        record.scale_used = request.POST.getlist('scale_used')
        record.way_of_application = request.POST.getlist('way_of_application')
        # record.save()
        form.save()
        messages.success(request,"Kayit Basarili...")
        print("basarili")
        context={'Records':Records.objects.all()}
        return render(request,"tables.html", context)
        # return redirect('/index/tables')
    else:
        print(form.errors.as_data())
        return render(request,"update_record.html",{"Records": record})

@login_required(login_url='redirect')
def index_page(request):
    context={'Records':Records.objects.all()}
    return render(request,"index.html", context)

@login_required(login_url='redirect')
def tables_page(request):
    context={'Records':Records.objects.all()}
    return render(request,"tables.html",context)
    
@login_required(login_url='redirect')
def charts_page(request):
    return render(request,'charts.html')    

@login_required(login_url='redirect/')
def deleteData(request, id):
    record = Records.objects.get(pk=id)
    record.delete()
    return redirect('/index/tables')

@login_required(login_url='redirect')
def saveInstitutionName(request):
    form = InstitutionForm(request.POST)
    if form.is_valid():
        institutionName = Institution()
        institutionName.institutionName = form.cleaned_data['institutionName']
        print(institutionName.institutionName)
        institutionName.save()
        return redirect('record_page')
    print(form.errors.as_data())
    return redirect('tables')

def saveNewMedicationName(request):
    medicationName = MedicationName()
    medicationName.medicationName = request.POST.get('medicationName')
    print(medicationName.medicationName)
    medicationName.save()

    print('Kayit Basarili')
    return redirect('/index/record_page')
   
    