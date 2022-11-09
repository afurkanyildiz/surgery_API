from multiprocessing import context
from django.shortcuts import redirect, render
from django.contrib import  messages

from .models import Records
from .forms import RecordsForm
from django.http import JsonResponse


from django.contrib.auth.decorators import login_required
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
        records.medications = request.POST.get('medications')
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

        # records = Records( username = username,date = date,hours = hours, tel = tel, tcNo = tcNo, adress = adress,kurum=kurum,diagnosis=diagnosis,intervention=intervention,medications=medications,conclusion=conclusion,doctor=doctor)
        records.save()
        messages.add_message(request, messages.SUCCESS,'Kayit Basarili')
        return redirect('/index//tables')
    else:
        #messages.add_message(request,messages.WARNING,'Kayit Basarisiz')
        return render(request,'registration_form.html') 

@login_required(login_url='redirect')
def editRecords(request,id):
    edit_records = Records.objects.get(id=id)
    return render(request,"update_record.html",{"Records": edit_records})
    
@login_required(login_url='redirect')
def updateRecords(request, id):  
    record = Records.objects.get(id=id)
    form = RecordsForm(data=request.POST, instance=record)
    if form.is_valid():
        form.save()
        messages.success(request,"Kayit Basarili...")
        print("basarili")
        context={"Records":Records.objects.all()}
        return render(request,"tables.html", context)
    else:
        print("basarisiz")
        return render(request,"update_record.html",{"Records": record})

@login_required(login_url='redirect')
def index_page(request):
    context={'records':Records.objects.all()}
    return render(request,"index.html", context)

@login_required(login_url='redirect')
def tables_page(request):
    context={'records':Records.objects.all()}
    return render(request,"tables.html",context)
    
@login_required(login_url='redirect')
def charts_page(request):
    return render(request,'charts.html')    

@login_required(login_url='redirect/')
def deleteData(request, id):
    record = Records.objects.get(pk=id)
    record.delete()
    return redirect('/index//tables')



    
# @api_view(['GET'])
# def recordsList(request): 
#     if request.method == 'GET':
#         records = Records.objects.all()
#         serializer = RecordSerializer(records, many=True)
#         # print(serializer.data)
#         # return render(request,"tables.html", {'records' : serializer.data})
#         return JsonResponse(serializer.data,safe=False)
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = RecordSerializer(data = data)
#         if serializer.is_valid():
#             serializer.save()
#             # return render(request,"registration_form.html")
#             return JsonResponse(serializer.data)  
#         print('basarisiz')     
#         # return render(request,"registration_form.html")
#         return JsonResponse(serializer.errors)


# def registrationForm(request):
#     return render(request,"registration_form.html")

# @api_view(["POST"])
# def recordCreate(request):
#     if request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = RecordSerializer(data = data)
#         if serializer.is_valid():
#             serializer.save()
#             # return render(request,"registration_form.html")
#             return JsonResponse(serializer.data)  
#         print('basarisiz')     
#         # return render(request,"registration_form.html")
#         return JsonResponse(serializer.errors)

# @api_view(["GET"])
# def getRecord(request,id):
#     records = Records.objects.get(id=id)
#     if request.method == 'GET':       
#         serializer = RecordSerializer(records)
#         return JsonResponse(serializer.data)
#         # return Response(request,"update_record.html",{"Records":serializer.data})
#         # return render(request,"update_record.html",{"Records":serializer.data})
# @api_view(["PUT"])
# def recordUpdate(request,id):
#     records = Records.objects.get(id=id)
#     if request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = RecordSerializer(records, data = data)
#         if serializer.is_valid():
#             serializer.save()
#             print('basarili')
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors)

