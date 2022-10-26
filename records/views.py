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
        username = request.POST.get('username')
        date = request.POST.get('date')
        hours = request.POST.get('hours')
        tel = request.POST.get('tel')
        tcNo = request.POST.get('tcNo')
        adress = request.POST.get('adress')
        kurum = request.POST.get('kurum')
        diagnosis = request.POST.get('diagnosis')
        intervention = request.POST.get('intervention')
        medications = request.POST.get('medications')
        conclusion = request.POST.get('conclusion')
        doctor = request.POST.get('doctor')

        records = Records( username = username,date = date,hours = hours, tel = tel, tcNo = tcNo, adress = adress,kurum=kurum,diagnosis=diagnosis,intervention=intervention,medications=medications,conclusion=conclusion,doctor=doctor)
        records.save()
        messages.add_message(request, messages.SUCCESS,'Kayit Basarili')
        return render(request,'registration_form.html')
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

