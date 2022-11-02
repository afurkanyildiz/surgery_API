from django.shortcuts import redirect, render
from multiprocessing import context
from .models import AmbulanceCase,AmbulanceDailyControl,AmbulanceHandover,AmbulanceMaterialControl,PreCaseControl,CallCenter,MaterialRequest,MedicalGasRequest,MedicationRequest,HealmedyCase
from .forms import AmbulanceCaseForm,AmbulanceDailyControlForm,AmbulanceHandoverForm,AmbulanceMaterialControlForm,PreCaseControlForm,CallCenterForm,MaterialRequestForm,MedicalGasRequestForm,MedicationRequestForm,HealmedyCaseForm

from django.contrib.auth.decorators import login_required
from django.contrib import  messages

   
@login_required(login_url='redirect')
def ambulance_case_form(request): 
    if request.method == "POST" and 'save' in request.POST:
        ambulanceCase = AmbulanceCase()  

        ambulanceCase.date = request.POST.get('date')
        ambulanceCase.sas_protokol = request.POST.get('sas_protokol')
        ambulanceCase.username = request.POST.get('username')
        ambulanceCase.identification_number = request.POST.get('identification_number')
        ambulanceCase.gender = request.POST.get('gender')
        ambulanceCase.age = request.POST.get('age')
        ambulanceCase.case_call_clock = request.POST.get('case_call_clock')
        ambulanceCase.case_arrival_time = request.POST.get('case_arrival_time')
        ambulanceCase.time_of_leave_from_case = request.POST.get('time_of_leave_from_case')
        ambulanceCase.hospital_arrival_time = request.POST.get('hospital_arrival_time')
        ambulanceCase.tel_number = request.POST.get('tel_number')
        ambulanceCase.adress = request.POST.get('adress')
        ambulanceCase.place_from_the_patient = request.POST.get('place_from_the_patient')
        ambulanceCase.first_place_the_patient_is_transported = request.POST.get('first_place_the_patient_is_transported')
        ambulanceCase.second_place_the_patient_is_transported = request.POST.get('second_place_the_patient_is_transported')
        ambulanceCase.patients_complaint = request.POST.get('patients_complaint')
        ambulanceCase.prediction = request.POST.get('prediction')
        ambulanceCase.chronic_diseases = request.POST.get('chronic_diseases')
        ambulanceCase.explanation_application = request.POST.get('explanation_application')
        ambulanceCase.isolationStatus = request.POST.get('isolationStatus')
        ambulanceCase.one_measurement = request.POST.get('one_measurement')
        ambulanceCase.one_blood_pressure = request.POST.get('one_blood_pressure')
        ambulanceCase.one_pulse = request.POST.get('one_pulse')
        ambulanceCase.one_spo2 = request.POST.get('one_spo2')
        ambulanceCase.one_respirations_min = request.POST.get('one_respirations_min')
        ambulanceCase.one_fire = request.POST.get('one_fire')
        ambulanceCase.second_measurement = request.POST.get('second_measurement')
        ambulanceCase.second_blood_pressure = request.POST.get('second_blood_pressure')
        ambulanceCase.second_pulse = request.POST.get('second_pulse')
        ambulanceCase.second_spo2 = request.POST.get('second_spo2')
        ambulanceCase.second_respirations_min = request.POST.get('second_respirations_min')
        ambulanceCase.second_fire = request.POST.get('second_fire')
        ambulanceCase.third_measurement = request.POST.get('third_measurement')
        ambulanceCase.third_blood_pressure = request.POST.get('third_blood_pressure')
        ambulanceCase.third_pulse = request.POST.get('third_pulse')
        ambulanceCase.third_spo2 = request.POST.get('third_spo2')
        ambulanceCase.third_respirations_min = request.POST.get('third_respirations_min')
        ambulanceCase.third_fire = request.POST.get('third_fire')
        ambulanceCase.state = request.POST.get('state')
        ambulanceCase.pupils = request.POST.get('pupils')
        ambulanceCase.skin = request.POST.get('skin')
        ambulanceCase.respiratory = request.POST.get('respiratory')
        ambulanceCase.pulse = request.POST.get('pulse')
        ambulanceCase.engine_response = request.POST.get('engine_response')
        ambulanceCase.oral_response= request.POST.get('oral_response')
        ambulanceCase.eyes_open = request.POST.get('eyes_open')
        ambulanceCase.gks_points = request.POST.get('gks_points')
        ambulanceCase.cpr_doing = request.POST.get('cpr_doing')
        ambulanceCase.start_time = request.POST.get('start_time')
        ambulanceCase.finish_time = request.POST.get('finish_time')
        ambulanceCase.reason_to_leave = request.POST.get('reason_to_leave')
        ambulanceCase.applicationList = request.POST.get('applicationList')
        ambulanceCase.Casetransfer = request.POST.get('Casetransfer')
        ambulanceCase.generalList = request.POST.get('generalList')
        ambulanceCase.number_of_attendants = request.POST.get('number_of_attendants')
        ambulanceCase.ambulance_waiting_hour = request.POST.get('ambulance_waiting_hour')
        ambulanceCase.ambulance_waiting_minute = request.POST.get('ambulance_waiting_minute')
        ambulanceCase.emergency_ambulance_waiting = request.POST.get('emergency_ambulance_waiting')
        ambulanceCase.emergency_ambulance_waiting_minute = request.POST.get('emergency_ambulance_waiting_minute')
        ambulanceCase.patient_transport_ambulance_waiting = request.POST.get('patient_transport_ambulance_waiting')
        ambulanceCase.patient_transport_ambulance_waiting_minute = request.POST.get('patient_transport_ambulance_waiting_minute')
        ambulanceCase.patient_username = request.POST.get('patient_username')
        ambulanceCase.hospital_rejection = request.POST.get('hospital_rejection')
        ambulanceCase.patients_relative_username = request.POST.get('patients_relative_username')
        ambulanceCase.delivery_area_username = request.POST.get('delivery_area_username')
        ambulanceCase.doctor_username = request.POST.get('doctor_username')
        ambulanceCase.personal_username = request.POST.get('personal_username')
        ambulanceCase.pilot_username = request.POST.get('pilot_username')
        ambulanceCase.car_info = request.POST.get('car_info')
        ambulanceCase.start_km = request.POST.get('start_km')
        ambulanceCase.finish_km = request.POST.get('finish_km')
        ambulanceCase.protocol_number = request.POST.get('protocol_number')
        ambulanceCase.other = request.POST.get('other')
        ambulanceCase.current = request.POST.get('current')
        ambulanceCase.institution_name = request.POST.get('institution_name')
        ambulanceCase.round_trip = request.POST.get('round_trip')
        ambulanceCase.money = request.POST.get('money')
        ambulanceCase.transfer_doctor_username = request.POST.get('transfer_doctor_username')
        ambulanceCase.file_number = request.POST.get('file_number')
        ambulanceCase.patient_signature = request.POST.get('patient_signature')
        ambulanceCase.sigtext = request.POST.get('sigtext')
        ambulanceCase.hospital_rejection_sigtext = request.POST.get('hospital_rejection_sigtext')
        ambulanceCase.patients_relative_signaturetext = request.POST.get('patients_relative_signaturetext')
        ambulanceCase.delivery_area_signaturetext = request.POST.get('delivery_area_signaturetext')
        ambulanceCase.doctor_signaturetext = request.POST.get('doctor_signaturetext')
        ambulanceCase.personal_signaturetext = request.POST.get('personal_signaturetext')
        ambulanceCase.pilot_signaturetext = request.POST.get('pilot_signaturetext')
        ambulanceCase.transfer_doctor_signaturetext = request.POST.get('transfer_doctor_signaturetext')
        ambulanceCase.get_sig_date = request.POST.get('get_sig_date')
        ambulanceCase.hospital_rejection_datetime = request.POST.get('hospital_rejection_datetime')
        ambulanceCase.patients_relative_username_datetime = request.POST.get('patients_relative_username_datetime')
        ambulanceCase.delivery_area_username_datetime = request.POST.get('delivery_area_username_datetime')
        ambulanceCase.doctor_username_datetime = request.POST.get('doctor_username_datetime')
        ambulanceCase.personal_username_datetime = request.POST.get('personal_username_datetime')
        ambulanceCase.pilot_username_datetime = request.POST.get('pilot_username_datetime')
        ambulanceCase.doctor_username1 = request.POST.get('doctor_username1')
        ambulanceCase.institution_information = request.POST.get('institution_information')
        ambulanceCase.patient_rejection = request.POST.get('patient_rejection')
        ambulanceCase.organization_hour = request.POST.get('organization_hour')
        ambulanceCase.statetxt = request.POST.get('statetxt')
        ambulanceCase.pupilstxt = request.POST.get('pupilstxt')
        ambulanceCase.skintxt = request.POST.get('skintxt')
        ambulanceCase.respiratorytxt = request.POST.get('respiratorytxt')
        ambulanceCase.pulsetxt = request.POST.get('pulsetxt')
        ambulanceCase.atn_no = request.POST.get('atn_no')
        if len(request.FILES) != 0:           
            ambulanceCase.barkod = request.FILES['barkod']
  
        ambulanceCase.save()
        return redirect('/forms/ambulance_case_tables')
        
    else:
        print('basarisiz')
        return render(request,'forms/ambulance_case.html')
    
@login_required(login_url='redirect')
def editAmbulanceCaseForm(request,id):
    edit_ambulanceCase = AmbulanceCase.objects.get(id=id)
    print(edit_ambulanceCase.isolationStatus)
    if edit_ambulanceCase.isolationStatus is not None:
        edit_ambulanceCase.isolationStatus = edit_ambulanceCase.isolationStatus.split(',')
    if edit_ambulanceCase.applicationList is not None:
        edit_ambulanceCase.applicationList = edit_ambulanceCase.applicationList.split(',')
    if edit_ambulanceCase.Casetransfer is not None:
        edit_ambulanceCase.Casetransfer = edit_ambulanceCase.Casetransfer.split(',')
    if edit_ambulanceCase.generalList is not None:
        edit_ambulanceCase.generalList = edit_ambulanceCase.generalList.split(',')
    return render(request,"forms/update_forms/ambulance_case.html",{"AmbulanceCase":edit_ambulanceCase})

@login_required(login_url='redirect')
def updateAmbulanceCaseForm(request,id):
    ambulanceCase = AmbulanceCase.objects.get(id=id)
    form = AmbulanceCaseForm(data=request.POST, instance=ambulanceCase)
   
    if form.is_valid():               
        form.save()
        messages.success(request,"Kayit Basarili...")
        print(form.data)
        context={'AmbulanceCase':AmbulanceCase.objects.all()}
        return render(request,"tables/ambulance_case.html", context)
    else:
        print(form.errors.as_data())
        return render(request,"forms/update_forms/ambulance_case.html",{"AmbulanceCase": ambulanceCase})

@login_required(login_url='redirect')
def deleteAmbulanceCaseForm(request,id):
    ambulanceCaseForm = AmbulanceCase.objects.get(pk=id)
    ambulanceCaseForm.delete()
    return redirect('/forms/ambulance_case_tables')

@login_required(login_url='redirect')
def ambulance_case_tables(request):
    context={'AmbulanceCase':AmbulanceCase.objects.all()}
    return render(request,"tables/ambulance_case.html",context)


# ======================================================================


@login_required(login_url='redirect')
def ambulance_daily_control_form(request):
    if request.method == "POST" and 'dailySave' in request.POST:
        ambulanceDailyControl = AmbulanceDailyControl()
        ambulanceDailyControl.station_name = request.POST.get('station_name')
        ambulanceDailyControl.ambulance_km = request.POST.get('ambulance_km')
        ambulanceDailyControl.number_plate = request.POST.get('number_plate')
        ambulanceDailyControl.ambulance_control_date = request.POST.get('ambulance_control_date')
        ambulanceDailyControl.permit = request.POST.get('permit')
        ambulanceDailyControl.physical_apperance = request.POST.get('physical_apperance')
        ambulanceDailyControl.bodywork = request.POST.get('bodywork')
        ambulanceDailyControl.doors = request.POST.get('doors')
        ambulanceDailyControl.tyre = request.POST.get('tyre')
        ambulanceDailyControl.fuel = request.POST.get('fuel')
        ambulanceDailyControl.fuel_status =request.POST.get('fuel_status')
        ambulanceDailyControl.oil_dripping = request.POST.get('oil_dripping')
        ambulanceDailyControl.hydraulic_leakage = request.POST.get('hydraulic_leakage')
        ambulanceDailyControl.blow = request.POST.get('blow')
        ambulanceDailyControl.water_leak = request.POST.get('water_leak')
        ambulanceDailyControl.fuel_leak = request.POST.get('fuel_leak')
        ambulanceDailyControl.hood_opening_system = request.POST.get('hood_opening_system')
        ambulanceDailyControl.wiper_water_level = request.POST.get('wiper_water_level')
        ambulanceDailyControl.engine_oil_level = request.POST.get('engine_oil_level')
        ambulanceDailyControl.malfuntion_lamp = request.POST.get('malfuntion_lamp')
        ambulanceDailyControl.wiper_rubber = request.POST.get('wiper_rubber')
        ambulanceDailyControl.radiator_fluid_level = request.POST.get('radiator_fluid_level')
        ambulanceDailyControl.brake_hydraulic_oil_level = request.POST.get('brake_hydraulic_oil_level')
        ambulanceDailyControl.spare_wheel = request.POST.get('spare_wheel')
        ambulanceDailyControl.air_conditioner = request.POST.get('air_conditioner')
        ambulanceDailyControl.gps = request.POST.get('gps')
        ambulanceDailyControl.mayk = request.POST.get('mayk')
        ambulanceDailyControl.headlight = request.POST.get('headlight')
        ambulanceDailyControl.reversing_light = request.POST.get('reversing_light')
        ambulanceDailyControl.overhead_lamps = request.POST.get('overhead_lamps')
        ambulanceDailyControl.braking_system = request.POST.get('braking_system')
        ambulanceDailyControl.car_radio = request.POST.get('car_radio')
        ambulanceDailyControl.sirens = request.POST.get('sirens')
        ambulanceDailyControl.flasher = request.POST.get('flasher')
        ambulanceDailyControl.rear_door_lighting = request.POST.get('rear_door_lighting')
        ambulanceDailyControl.break_lights = request.POST.get('break_lights')
        ambulanceDailyControl.gear_system = request.POST.get('gear_system')
        ambulanceDailyControl.safety_belt = request.POST.get('safety_belt')
        ambulanceDailyControl.engine_operation = request.POST.get('engine_operation')
        ambulanceDailyControl.steering_system = request.POST.get('steering_system')
        ambulanceDailyControl.instrument_panel = request.POST.get('instrument_panel')
        ambulanceDailyControl.mirrors = request.POST.get('mirrors')
        ambulanceDailyControl.exhaust = request.POST.get('exhaust')
        ambulanceDailyControl.central_system_locking = request.POST.get('central_system_locking')
        ambulanceDailyControl.radio_tape = request.POST.get('radio_tape')
        ambulanceDailyControl.cleaning = request.POST.get('cleaning')
        ambulanceDailyControl.lighting = request.POST.get('lighting')
        ambulanceDailyControl.rubbish_bin = request.POST.get('rubbish_bin')
        ambulanceDailyControl.rectifiers = request.POST.get('rectifiers')
        ambulanceDailyControl.jack = request.POST.get('jack')
        ambulanceDailyControl.skidding_chain = request.POST.get('skidding_chain')
        ambulanceDailyControl.charging_cable = request.POST.get('charging_cable')
        ambulanceDailyControl.stud_wrench = request.POST.get('stud_wrench')
        ambulanceDailyControl.fire_extinguishing_tube = request.POST.get('fire_extinguishing_tube')
        ambulanceDailyControl.distress_hammer = request.POST.get('distress_hammer')
        ambulanceDailyControl.ambulance_daily_explanation = request.POST.get('ambulance_daily_explanation')
        ambulanceDailyControl.delivery_by_username = request.POST.get('delivery_by_username')
        ambulanceDailyControl.receiving_area_username =request.POST.get('receiving_area_username')
        ambulanceDailyControl.receiving_area_signaturetext =request.POST.get('receiving_area_signaturetext')
        ambulanceDailyControl.delivery_by_signaturetext =request.POST.get('delivery_by_signaturetext')

        ambulanceDailyControl.save()
        print(ambulanceDailyControl)
        print('basarili')
        return redirect('/forms/ambulance_daily_control_tables')
        
    else:
        print('basarisiz')
        return render(request,'forms/ambulance_daily_control.html')

@login_required(login_url='redirect')
def ambulance_daily_control_tables(request):
    context = {'AmbulanceDailyControl' : AmbulanceDailyControl.objects.all()}
    return render(request,"tables/ambulance_daily_control.html",context)

@login_required(login_url='redirect')
def editAmbulanceDailyControl(request,id):
    editAmbulanceDaily = AmbulanceDailyControl.objects.get(id=id)
    return render(request,"forms/update_forms/ambulance_daily_control.html",{"AmbulanceDailyControl": editAmbulanceDaily})

@login_required(login_url='redirect')
def updateAmbulanceDailyControl(request,id):

    ambulanceDailyControl = AmbulanceDailyControl.objects.get(id=id)
    form = AmbulanceDailyControlForm(data=request.POST, instance=ambulanceDailyControl)
    if form.is_valid():
        form.save()
        context={'AmbulanceDailyControl': AmbulanceDailyControl.objects.all()}
        return render(request,"tables/ambulance_daily_control.html",context)
    else:
        print('basarisiz')
        return render(request,"forms/update_forms/ambulance_daily_control.html",{"AmbulanceDailyControl":ambulanceDailyControl})

@login_required(login_url='redirect')
def deleteAmbulanceDaily(request,id):
    ambulanceDailyControl = AmbulanceDailyControl.objects.get(id=id)
    ambulanceDailyControl.delete()
    return redirect('/forms/ambulance_daily_control_tables')

# =========================================================================
@login_required(login_url='redirect')
def ambulance_handover_form(request):
    if request.method == "POST" and 'handoverSave' in request.POST:
        ambulanceHandover = AmbulanceHandover()
        ambulanceHandover.ambulance_number_plate = request.POST.get('ambulance_number_plate')
        ambulanceHandover.date = request.POST.get('date')
        ambulanceHandover.delivery_km = request.POST.get('delivery_km')
        ambulanceHandover.to_be_serviced_km = request.POST.get('to_be_serviced_km')
        ambulanceHandover.phosphor_vest = request.POST.get('phosphor_vest')
        ambulanceHandover.jumper_cable = request.POST.get('jumper_cable')
        ambulanceHandover.towing_cable = request.POST.get('towing_cable')
        ambulanceHandover.triangle = request.POST.get('triangle')
        ambulanceHandover.notes = request.POST.get('notes')
        ambulanceHandover.damage_detection_notification = request.POST.get('damage_detection_notification')
        ambulanceHandover.submitter_username = request.POST.get('submitter_username')
        ambulanceHandover.delivery_area_username = request.POST.get('delivery_area_username')
        ambulanceHandover.department_manager_username = request.POST.get('department_manager_username')
        ambulanceHandover.department_date = request.POST.get('department_date')
        ambulanceHandover.submitter_username_signaturetext = request.POST.get('submitter_username_signaturetext')
        ambulanceHandover.delivery_domain_username_signaturetext = request.POST.get('delivery_domain_username_signaturetext')
        ambulanceHandover.department_manager_signaturetext = request.POST.get('department_manager_signaturetext')

        ambulanceHandover.save()
        return redirect('/forms/ambulance_handover_tables')
    else:
        return render(request,'forms/ambulance_handover.html')

@login_required(login_url='redirect')
def ambulance_handover_tables(request):
    context = {'AmbulanceHandover' : AmbulanceHandover.objects.all()}
    return render(request,'tables/ambulance_handover.html',context)

@login_required(login_url='redirect')
def editAmbulanceHandover(request,id):
    editAmbulanceHandover = AmbulanceHandover.objects.get(id=id)
    return render(request,"forms/update_forms/ambulance_handover.html",{"AmbulanceHandover":editAmbulanceHandover})

@login_required(login_url='redirect')
def updateAmbulanceHandover(request,id):
    updateAmbulanceHandover = AmbulanceHandover.objects.get(id=id)
    form = AmbulanceHandoverForm(data=request.POST, instance=updateAmbulanceHandover)
    if form.is_valid():
        form.save()
        context = {'AmbulanceHandover': AmbulanceHandover.objects.all()}
        return render(request,"tables/ambulance_handover.html",context)
    else:
        return render(request,"forms/update_forms/ambulance_handover.html",{"AmbulanceHandover": updateAmbulanceHandover})

@login_required(login_url='redirect')
def deleteAmbulanceHandover(request,id):
    ambulanceHandover = AmbulanceHandover.objects.get(id=id)
    ambulanceHandover.delete()
    return redirect('/forms/ambulance_handover_tables')

# ===================================================
@login_required(login_url='redirect')
def ambulance_material_control_form(request):
    if request.method == "POST" and 'materialSave' in request.POST:
        ambulanceMaterial = AmbulanceMaterialControl()
        ambulanceMaterial.station_name = request.POST.get('station_name')
        ambulanceMaterial.emergency_lock_number = request.POST.get('emergency_look_number')
        ambulanceMaterial.material_control_date = request.POST.get('material_control_date')
        ambulanceMaterial.material_control_time = request.POST.get('material_control_time')
        ambulanceMaterial.main_stretcher = request.POST.get('main_stretcher')
        ambulanceMaterial.combination_stretcher = request.POST.get('combination_stretcher')
        ambulanceMaterial.vacuum_stretcher = request.POST.get('vacuum_stretcher')
        ambulanceMaterial.faras_stretcher = request.POST.get('faras_stretcher')
        ambulanceMaterial.back_board = request.POST.get('back_board')
        ambulanceMaterial.traction_splint_set = request.POST.get('traction_splint_set')
        ambulanceMaterial.infitable_splint_set = request.POST.get('infitable_splint_set')
        ambulanceMaterial.neck_brace_set = request.POST.get('neck_brace_set')
        ambulanceMaterial.ked_rescue_vest = request.POST.get('ked_rescue_vest')
        ambulanceMaterial.stationary_oxygen_cylinder = request.POST.get('stationary_oxygen_cylinder')
        ambulanceMaterial.transport_ventilator_device_healthy = request.POST.get('transport_ventilator_device_healthy')
        ambulanceMaterial.constant_vacuum_aspirator = request.POST.get('constant_vacuum_aspirator')
        ambulanceMaterial.portable_aspirator = request.POST.get('portable_aspirator')
        ambulanceMaterial.portable_aspirator_charging = request.POST.get('portable_aspirator_charging')
        ambulanceMaterial.stationary_sphygmomanometer = request.POST.get('stationary_sphygmomanometer')
        ambulanceMaterial.portable_sphymomanometer = request.POST.get('portable_sphymomanometer')
        ambulanceMaterial.portable_sphymomanometer_kid = request.POST.get('portable_sphymomanometer_kid')
        ambulanceMaterial.oximeter = request.POST.get('oximeter')
        ambulanceMaterial.thermometer = request.POST.get('thermometer')
        ambulanceMaterial.diagnostic_set = request.POST.get('diagnostic_set')
        ambulanceMaterial.serum_sling = request.POST.get('serum_sling')
        ambulanceMaterial.injector_pump = request.POST.get('injector_pump')
        ambulanceMaterial.defibrillator = request.POST.get('defibrillator')
        ambulanceMaterial.balloon_valve_maske_set = request.POST.get('balloon_valve_maske_set')
        ambulanceMaterial.laryngoscope_set = request.POST.get('laryngoscope_set')
        ambulanceMaterial.intubation_tubes = request.POST.get('intubation_tubes')
        ambulanceMaterial.airway_tube = request.POST.get('airway_tube')
        ambulanceMaterial.glucometer = request.POST.get('glucometer')
        ambulanceMaterial.sewing_kit = request.POST.get('sewing_kit')
        ambulanceMaterial.heat_insulation_container = request.POST.get('heat_insulation_container')
        ambulanceMaterial.oxygen_mask = request.POST.get('oxygen_mask')
        ambulanceMaterial.aspiration_catheters = request.POST.get('aspiration_catheters')
        ambulanceMaterial.urinary_catheter = request.POST.get('urinary_catheter')
        ambulanceMaterial.bladder  = request.POST.get('bladder')
        ambulanceMaterial.injector = request.POST.get('injector')
        ambulanceMaterial.emergency_birth_kit = request.POST.get('emergency_birth_kit')
        ambulanceMaterial.burn_kit = request.POST.get('burn_kit')
        ambulanceMaterial.basic_medical_equiqment_bag = request.POST.get('basic_medical_equiqment_bag')
        ambulanceMaterial.interracquets = request.POST.get('interracquets')
        ambulanceMaterial.funeral_bag = request.POST.get('funeral_bag')
        ambulanceMaterial.scalpel = request.POST.get('scalpel')
        ambulanceMaterial.poviddon_iod = request.POST.get('poviddon_iod')
        ambulanceMaterial.alcohol = request.POST.get('alcohol')
        ambulanceMaterial.cotton = request.POST.get('cotton')
        ambulanceMaterial.blanket = request.POST.get('blanket')
        ambulanceMaterial.sheet = request.POST.get('sheet')
        ambulanceMaterial.head_pillow = request.POST.get('head_pillow')
        ambulanceMaterial.adrenaline_bulb = request.POST.get('adrenaline_bulb')
        ambulanceMaterial.aminocardol_bulb = request.POST.get('aminocardol_bulb')
        ambulanceMaterial.lidokain_bulb = request.POST.get('lidokain_bulb')
        ambulanceMaterial.atropin_bulb = request.POST.get('atropin_bulb')
        ambulanceMaterial.antihistaminik_bulb = request.POST.get('antihistaminik_bulb')
        ambulanceMaterial.beta_bloker_bulb = request.POST.get('beta_bloker_bulb')
        ambulanceMaterial.spazmolitik_bulb = request.POST.get('spazmolitik_bulb')
        ambulanceMaterial.calcium_bulb = request.POST.get('calcium_bulb')
        ambulanceMaterial.citanest_flakon = request.POST.get('citanest_flakon')
        ambulanceMaterial.diazepam_bulb = request.POST.get('diazepam_bulb')
        ambulanceMaterial.kortikosteroid_bulb = request.POST.get('kortikosteroid_bulb')
        ambulanceMaterial.nitroderm_tts_5_bulb = request.POST.get('nitroderm_tts_5_bulb')
        ambulanceMaterial.nitroderm_tts_10_bulb = request.POST.get('nitroderm_tts_10_bulb')
        ambulanceMaterial.h2_bloker_bulb = request.POST.get('h2_bloker_bulb')
        ambulanceMaterial.saline_ampoule = request.POST.get('saline_ampoule')
        ambulanceMaterial.inhaler_nebul = request.POST.get('inhaler_nebul')
        ambulanceMaterial.isoptin_bulb = request.POST.get('isoptin_bulb')
        ambulanceMaterial.diaepam_bulb = request.POST.get('diaepam_bulb')
        ambulanceMaterial.diltiazem_bulb = request.POST.get('diltiazem_bulb')
        ambulanceMaterial.dopamin_bulb = request.POST.get('dopamin_bulb')
        ambulanceMaterial.dormicum_bulb = request.POST.get('dormicum_bulb')
        ambulanceMaterial.antiemetik_bulb = request.POST.get('antiemetik_bulb')
        ambulanceMaterial.antiepileptik_bulb = request.POST.get('antiepileptik_bulb')
        ambulanceMaterial.etil_chloride_spray =request.POST.get('etil_chloride_spray')
        ambulanceMaterial.jetocaine_bulb = request.POST.get('jetocaine_bulb')
        ambulanceMaterial.lasix_bulb = request.POST.get('lasix_bulb')
        ambulanceMaterial.amiadarone_bulb = request.POST.get('amiadarone_bulb')
        ambulanceMaterial.analjezik_bulb = request.POST.get('analjezik_bulb')
        ambulanceMaterial.sodium_bicarbonate_bulb = request.POST.get('sodium_bicarbonate_bulb')
        ambulanceMaterial.naloksan_bulb = request.POST.get('naloksan_bulb')
        ambulanceMaterial.anestezik_pomad = request.POST.get('anestezik_pomad')
        ambulanceMaterial.antimikrobial_pomad = request.POST.get('antimikrobial_pomad')
        ambulanceMaterial.silverdin_pomad = request.POST.get('silverdin_pomad')
        ambulanceMaterial.isordil_bulb = request.POST.get('isordil_bulb')
        ambulanceMaterial.kartopil_tablet = request.POST.get('kartopil_tablet')
        ambulanceMaterial.dextrose_500 = request.POST.get('dextrose_500')
        ambulanceMaterial.isolyte_500 = request.POST.get('isolyte_500')
        ambulanceMaterial.isolyte_p_500 = request.POST.get('isolyte_p_500')
        ambulanceMaterial.isolyte_s_500 = request.POST.get('isolyte_s_500')
        ambulanceMaterial.izotonik_500 = request.POST.get('izotonik_500')
        ambulanceMaterial.mannitol_500 = request.POST.get('mannitol_500')
        ambulanceMaterial.ringer_laktat = request.POST.get('ringer_laktat')
        ambulanceMaterial.magnesium_sulphate = request.POST.get('magnesium_sulphate')
        ambulanceMaterial.flumazenil =request.POST.get('flumazenil')
        ambulanceMaterial.paracetamol_tablet = request.POST.get('paracetamol_tablet')
        ambulanceMaterial.responsible_username = request.POST.get('responsible_username')
        ambulanceMaterial.material_notes = request.POST.get('material_notes')
        ambulanceMaterial.responsible_signaturetext = request.POST.get('responsible_signaturetext')

        ambulanceMaterial.save()
        return redirect('/forms/ambulance_material_control_tables')
    else:
        return render(request,'forms/ambulance_material_control.html')

@login_required(login_url='redirect')
def ambulance_material_control_tables(request):
    context = {'AmbulanceMaterial' : AmbulanceMaterialControl.objects.all()}
    return render(request,'tables/ambulance_material_control.html',context)

@login_required(login_url='redirect')
def editAmbulanceMaterial(request,id):
    editAmbulanceMaterial = AmbulanceMaterialControl.objects.get(id=id)
    return render(request,"forms/update_forms/ambulance_material_control.html",{"AmbulanceMaterial":editAmbulanceMaterial})

@login_required(login_url='redirect')
def updateAmbulanceMaterial(request,id):
    updateAmbulanceMaterial = AmbulanceMaterialControl.objects.get(id=id)
    ambulanceMaterialForm = AmbulanceMaterialControlForm(data= request.POST, instance=updateAmbulanceMaterial)
    if ambulanceMaterialForm.is_valid():
        ambulanceMaterialForm.save()
        context = {"AmbulanceMaterial":AmbulanceMaterialControl.objects.all()}
        return render(request,"tables/ambulance_material_control.html",context)
    else:
        return render(request,"forms/update_forms/ambulance_material_control.html",{"AmbulanceMaterial" : updateAmbulanceMaterial})

@login_required(login_url='redirect')
def deleteAmbulanceMaterial(request,id):
    ambulanceMaterial = AmbulanceMaterialControl.objects.get(id=id)
    ambulanceMaterial.delete()
    return redirect('/forms/ambulance_material_control_tables')

# ===================================================================
@login_required(login_url='redirect')
def call_center_form(request):
    if request.method == "POST" and 'callSave' in request.POST:
        callCenter = CallCenter()
        callCenter.institution_name = request.POST.get('institution_name')
        callCenter.caller_username = request.POST.get('caller_username')
        callCenter.proximity = request.POST.get('proximity')
        callCenter.caller_tel_no = request.POST.get('caller_tel_no')
        callCenter.patient_username = request.POST.get('patient_username')
        callCenter.patient_age = request.POST.get('patient_age')
        callCenter.gender = request.POST.get('gender')
        callCenter.patient_adress = request.POST.get('patient_adress')
        callCenter.patient_for_directions = request.POST.get('patient_for_directions')
        callCenter.case_no = request.POST.get('case_no')
        callCenter.case_date = request.POST.get('case_date')
        callCenter.car_info = request.POST.get('car_info')
        callCenter.case_time = request.POST.get('case_time')
        callCenter.alarm_clock = request.POST.get('alarm_clock')
        callCenter.case_yes = request.POST.get('case_yes')
        callCenter.appointment_time = request.POST.get('appointment_time')
        callCenter.appointment_time = request.POST.get('appointment_time')
        callCenter.patient_complaint = request.POST.get('patient_complaint')
        callCenter.appointment_date = request.POST.get('appointment_date')
        callCenter.patient_clinic = request.POST.get('patient_clinic')
        callCenter.pre_diagnosis = request.POST.get('pre_diagnosis')
        callCenter.consent_received_person = request.POST.get('consent_received_person')
        callCenter.triaj = request.POST.get('triaj')
        callCenter.exit_time = request.POST.get('exit_time')
        callCenter.output_method = request.POST.get('output_method')
        callCenter.transport_hour = request.POST.get('transport_hour')
        callCenter.event_exit_time = request.POST.get('event_exit_time')
        callCenter.hospital_arrival_time = request.POST.get('hospital_arrival_time')
        callCenter.time_out_hospital = request.POST.get('time_out_hospital')
        callCenter.point_return_time = request.POST.get('point_return_time')
        callCenter.patient_taken_place = request.POST.get('patient_taken_place')
        callCenter.where_patient_first_dropped = request.POST.get('where_patient_first_dropped')
        callCenter.patient_last_off_place = request.POST.get('patient_last_off_place')
        callCenter.ambulance = request.POST.get('ambulance')
        callCenter.assurance = request.POST.get('assurance')
        callCenter.paid = request.POST.get('paid')
        callCenter.free = request.POST.get('free')
        callCenter.contracted_institution = request.POST.get('contracted_institution')
        callCenter.discount  = request.POST.get('discount')
        callCenter.protocol_number = request.POST.get('protocol_number')
        callCenter.intervention = request.POST.get('intervention')
        callCenter.confirmation_code = request.POST.get('confirmation_code')
        callCenter.fee = request.POST.get('fee')
        callCenter.call_domain_username = request.POST.get('call_domain_username')
        callCenter.patient_tel_no = request.POST.get('patient_tel_no')
        callCenter.explanation = request.POST.get('explanation')

        callCenter.save()
        return redirect('/forms/call_center_tables')
    else:
        return render(request,'forms/call_center.html')

@login_required(login_url='redirect')
def call_center_tables(request):
    context = {"CallCenter": CallCenter.objects.all()}
    return render(request,'tables/call_center.html',context)

@login_required(login_url='redirect')
def editCallCenter(request,id):
    editCallCenter = CallCenter.objects.get(id=id)
    return render(request,"forms/update_forms/call_center.html",{"CallCenter":editCallCenter})

@login_required(login_url='redirect')
def updateCallCenter(request,id):
    updateCallCenter = CallCenter.objects.get(id=id)
    callCenterForms = CallCenterForm(data=request.POST, instance=updateCallCenter)
    if callCenterForms.is_valid():
        callCenterForms.save()
        context = {"CallCenter":CallCenter.objects.all()}
        return render(request,"tables/call_center.html",context)
    else:
        return render(request,"forms/update_forms/call_center.html",{"CallCenter":updateCallCenter})

@login_required(login_url='redirect')
def deleteCallCenter(request,id):
    deleteCallCenter = CallCenter.objects.get(id=id)
    deleteCallCenter.delete()
    return redirect('/forms/call_center_tables')

# ====================================================================
@login_required(login_url='redirect')
def healmedy_case_form(request):
    if request.method == "POST" and 'healmedySave' in request.POST:
        healmedyCase = HealmedyCase()
        healmedyCase.healmedy_date = request.POST.get('healmedy_date')
        healmedyCase.healmedy_time = request.POST.get('healmedy_time')
        healmedyCase.healmedy_patient_username = request.POST.get('healmedy_patient_username')
        healmedyCase.healmedy_patient_username1 = request.POST.get('healmedy_patient_username1')
        healmedyCase.healmedy_patient_username2 = request.POST.get('healmedy_patient_username2')
        healmedyCase.healmedy_patient_username3 = request.POST.get('healmedy_patient_username3')
        healmedyCase.healmedy_patient_username4 = request.POST.get('healmedy_patient_username4')
        healmedyCase.healmedy_patient_username5 = request.POST.get('healmedy_patient_username5')
        healmedyCase.healmedy_patient_username6 = request.POST.get('healmedy_patient_username6')
        healmedyCase.healmedy_patient_username7 = request.POST.get('healmedy_patient_username7')
        healmedyCase.healmedy_patient_username8 = request.POST.get('healmedy_patient_username8')
        healmedyCase.healmedy_patient_username9 = request.POST.get('healmedy_patient_username9')
        healmedyCase.healmedy_fee = request.POST.get('healmedy_fee')
        healmedyCase.healmedy_tel = request.POST.get('healmedy_tel')
        healmedyCase.healmedy_notes = request.POST.get('healmedy_notes')
        healmedyCase.healmedy_explanation = request.POST.get('healmedy_explanation')
        healmedyCase.healmedy_where_it_was_transplanted = request.POST.get('healmedy_where_it_was_transplanted')
        healmedyCase.healmedy_car_info =request.POST.get('healmedy_car_info')
        healmedyCase.healmedy_adress = request.POST.get('healmedy_adress')
        healmedyCase.healmedy_where_taken =request.POST.get('healmedy_where_taken')

        healmedyCase.save()
        return redirect('/forms/healmedy_case_tables')
    else:
        return render(request,'forms/healmedy_case.html')

@login_required(login_url='redirect')
def healmedy_case_tables(request):
    context = {'HealmedyCase':HealmedyCase.objects.all()}
    return render(request,'tables/healmedy_case.html',context)

@login_required(login_url='redirect')
def editHealmedyCase(request,id):
    editHealmedyCase = HealmedyCase.objects.get(id=id)
    return render(request,"forms/update_forms/healmedy_case.html",{"HealmedyCase" :editHealmedyCase})

@login_required(login_url='redirect')
def updateHealmedyCase(request,id):
    updateHealmedyCase = HealmedyCase.objects.get(id=id)
    healMedyCaseForm = HealmedyCaseForm(data=request.POST, instance=updateHealmedyCase)
    if healMedyCaseForm.is_valid():
        healMedyCaseForm.save()
        context = {"HealmedyCase" : HealmedyCase.objects.all()}
        return render(request,'tables/healmedy_case.html', context)
    else:
        return render(request,'forms/update_forms/healmedy_case.html',{"HealmedyCase" : updateHealmedyCase})

@login_required(login_url='redirect')
def deleteHealmedyCase(request,id):
    deleteHealmedyCase = HealmedyCase.objects.get(id=id)
    deleteHealmedyCase.delete()
    return redirect('/forms/healmedy_case_tables')

# ====================================================================
@login_required(login_url='redirect')
def material_request_form(request):
    if request.method == "POST" and 'materialSave' in request.POST:
        materialRequest = MaterialRequest()
        materialRequest.material_name = request.POST.get('material_name')
        materialRequest.material_name1 = request.POST.get('material_name1')
        materialRequest.material_name2 = request.POST.get('material_name2')
        materialRequest.material_name3 = request.POST.get('material_name3')
        materialRequest.material_name4 = request.POST.get('material_name4')
        materialRequest.material_name5 = request.POST.get('material_name5')
        materialRequest.material_name6 = request.POST.get('material_name6')
        materialRequest.material_name7 = request.POST.get('material_name7')
        materialRequest.material_name8 = request.POST.get('material_name8')
        materialRequest.material_name9 = request.POST.get('material_name9')
        materialRequest.material_name1o = request.POST.get('material_name10')
        materialRequest.material_name11 = request.POST.get('material_name11')
        materialRequest.material_name12 = request.POST.get('material_name12')
        materialRequest.material_name13 = request.POST.get('material_name13')
        materialRequest.material_name14 = request.POST.get('material_name14')
        materialRequest.material_name15 = request.POST.get('material_name15')
        materialRequest.material_name16 = request.POST.get('material_name16')
        materialRequest.material_name17 = request.POST.get('material_name17')
        materialRequest.quantity_request = request.POST.get('quantity_request')
        materialRequest.quantity_request1 = request.POST.get('quantity_request1')
        materialRequest.quantity_request2 = request.POST.get('quantity_request2')
        materialRequest.quantity_request3 = request.POST.get('quantity_request3')
        materialRequest.quantity_request4 = request.POST.get('quantity_request4')
        materialRequest.quantity_request5 = request.POST.get('quantity_request5')
        materialRequest.quantity_request6 = request.POST.get('quantity_request6')
        materialRequest.quantity_request7 = request.POST.get('quantity_request7')
        materialRequest.quantity_request8 = request.POST.get('quantity_request8')
        materialRequest.quantity_request9 = request.POST.get('quantity_request9')
        materialRequest.quantity_request10 = request.POST.get('quantity_request10')
        materialRequest.quantity_request11 = request.POST.get('quantity_request11')
        materialRequest.quantity_request12 = request.POST.get('quantity_request12')
        materialRequest.quantity_request13 = request.POST.get('quantity_request13')
        materialRequest.quantity_request14 = request.POST.get('quantity_request14')
        materialRequest.quantity_request15 = request.POST.get('quantity_request15')
        materialRequest.quantity_request16 = request.POST.get('quantity_request16')
        materialRequest.quantity_request17 = request.POST.get('quantity_request17')
        materialRequest.total_requested_material = request.POST.get('total_requested_material')
        materialRequest.the_department_of_request_manager = request.POST.get('the_department_of_request_manager')
        materialRequest.manager_title = request.POST.get('manager_title')
        materialRequest.material_request_date = request.POST.get('material_request_date')
        materialRequest.request_manager_signaturetext = request.POST.get('request_manager_signaturetext')

        materialRequest.save()
        return redirect('/forms/material_request_tables')
    else:
        return render(request,'forms/material_request.html')

@login_required(login_url='redirect')
def material_request_tables(request):
    context = {"MaterialRequest":MaterialRequest.objects.all()}
    return render(request,'tables/material_request.html',context)

@login_required(login_url='redirect')
def editMaterialRequest(request,id):
    editMaterialRequest = MaterialRequest.objects.get(id=id)
    return render(request,"forms/update_forms/material_request.html",{"MaterialRequest":editMaterialRequest})

@login_required(login_url='redirect')
def updateMaterialRequest(request,id):
    updateMaterialRequest = MaterialRequest.objects.get(id=id)
    materialRequestForm = MaterialRequestForm(data=request.POST, instance=updateMaterialRequest)
    if materialRequestForm.is_valid():
        materialRequestForm.save()
        context={"MaterialRequest":MaterialRequest.objects.all()}
        return render(request,"tables/material_request.html",context)
    else:
        return render(request,"forms/update_forms/material_request.html",{"MaterialRequest":updateMaterialRequest})

@login_required(login_url='redirect')
def deleteMaterialRequest(request,id):
    deleteMaterialRequest = MaterialRequest.objects.get(id=id)
    deleteMaterialRequest.delete()
    return redirect('/forms/material_request_tables')

# ===================================================================
@login_required(login_url='redirect')
def medical_gas_request_form(request):
    if request.method == "POST" and 'medicalSave' in request.POST:
        medicalGasRequest = MedicalGasRequest()
        medicalGasRequest.unit = request.POST.get('unit')
        medicalGasRequest.submitter_username = request.POST.get('submitter_username')
        medicalGasRequest.gas_request_date = request.POST.get('gas_request_date')
        medicalGasRequest.receiving_username = request.POST.get('receiving_username')
        medicalGasRequest.receiving_date = request.POST.get('receiving_date')
        medicalGasRequest.amount_of_medical_oxygen = request.POST.get('amount_of_medical_oxygen')
        medicalGasRequest.fixture_code = request.POST.get('fixture_code')
        medicalGasRequest.number_of_tubes = request.POST.get('number_of_tubes')
        medicalGasRequest.amount_of_medical_oxygen1 = request.POST.get('amount_of_medical_oxygen1')
        medicalGasRequest.fixture_code1 = request.POST.get('fixture_code1')
        medicalGasRequest.number_of_tubes1 = request.POST.get('number_of_tubes1')
        medicalGasRequest.amount_of_medical_oxygen2 = request.POST.get('amount_of_medical_oxygen2')
        medicalGasRequest.fixture_code2 = request.POST.get('fixture_code2')
        medicalGasRequest.number_of_tubes2 = request.POST.get('number_of_tubes2')
        medicalGasRequest.amount_of_medical_oxygen3 = request.POST.get('amount_of_medical_oxygen3')
        medicalGasRequest.fixture_code3 = request.POST.get('fixture_code3')
        medicalGasRequest.number_of_tubes3 = request.POST.get('number_of_tubes3')
        medicalGasRequest.amount_of_medical_oxygen4 = request.POST.get('amount_of_medical_oxygen4')
        medicalGasRequest.fixture_code4 = request.POST.get('fixture_code4')
        medicalGasRequest.number_of_tubes4 = request.POST.get('number_of_tubes4')
        medicalGasRequest.amount_of_medical_oxygen5 = request.POST.get('amount_of_medical_oxygen5')
        medicalGasRequest.fixture_code5 = request.POST.get('fixture_code5')
        medicalGasRequest.number_of_tubes5 = request.POST.get('number_of_tubes5')
        medicalGasRequest.amount_of_medical_oxygen6 = request.POST.get('amount_of_medical_oxygen6')
        medicalGasRequest.fixture_code6 = request.POST.get('fixture_code6')
        medicalGasRequest.number_of_tubes6 = request.POST.get('number_of_tubes6')
        medicalGasRequest.amount_of_medical_oxygen7 = request.POST.get('amount_of_medical_oxygen7')
        medicalGasRequest.fixture_code7 = request.POST.get('fixture_code7')
        medicalGasRequest.number_of_tubes7 = request.POST.get('number_of_tubes7')
        medicalGasRequest.amount_of_medical_oxygen8 = request.POST.get('amount_of_medical_oxygen8')
        medicalGasRequest.fixture_code8 = request.POST.get('fixture_code8')
        medicalGasRequest.number_of_tubes8 = request.POST.get('number_of_tubes8')
        medicalGasRequest.amount_of_medical_oxygen9 = request.POST.get('amount_of_medical_oxygen9')
        medicalGasRequest.fixture_code9 = request.POST.get('fixture_code9')
        medicalGasRequest.number_of_tubes9 = request.POST.get('number_of_tubes9')
        medicalGasRequest.the_requesters_username = request.POST.get('the_requesters_username')
        medicalGasRequest.request_date = request.POST.get('request_date')
        medicalGasRequest.approver_username = request.POST.get('approver_username')
        medicalGasRequest.approved_date = request.POST.get('approved_date')
        medicalGasRequest.gas_request_submitter_signaturetext = request.POST.get('gas_request_submitter_signaturetext')
        medicalGasRequest.receiving_username_signaturetext = request.POST.get('receiving_username_signaturetext')
        medicalGasRequest.the_requesters_signaturetext = request.POST.get('the_requesters_signaturetext')
        medicalGasRequest.approver_signaturetext = request.POST.get('approver_signaturetext')

        medicalGasRequest.save()
        print(medicalGasRequest.request_date)
        print(medicalGasRequest.approved_date)
        return redirect('/forms/medical_gas_request_tables')
    else:
        return render(request,'forms/medical_gas_request.html')

@login_required(login_url='redirect')
def medical_gas_request_tables(request):
    context = {"MedicalGasRequest" : MedicalGasRequest.objects.all()}
    return render(request,'tables/medical_gas_request.html',context)

@login_required(login_url='redirect')
def editMedicalGasRequest(request,id):
    editMedicalGasRequest = MedicalGasRequest.objects.get(id=id)
    return render(request,'forms/update_forms/medical_gas_request.html',{"MedicalGasRequest":editMedicalGasRequest})

@login_required(login_url='redirect')
def updateMedicalGasRequest(request,id):
    updateMedicalGasRequest = MedicalGasRequest.objects.get(id=id)
    medicalGasRequestForm = MedicalGasRequestForm(data=request.POST, instance=updateMedicalGasRequest)
    if medicalGasRequest.is_valid():
        medicalGasRequest.save()
        
        context = {"MedicalGasRequest":MedicalGasRequest.objects.all()}
        return render(request,"tables/medical_gas_request.html", context)
    else:
        return render(request,'forms/update_forms/medical_gas_request.html',{"MedicalGasRequest" : updateMedicalGasRequest})

@login_required(login_url='redirect')
def deleteMedicalGasRequest(request,id):
    deleteMedicalGasRequest = MedicalGasRequest.objects.get(id=id)
    deleteMedicalGasRequest.delete()
    return redirect('/forms/medical_gas_request_tables')

# ==========================================
@login_required(login_url='redirect')
def medication_request_form(request):
    if request.method == "POST" and 'medicationSave' in request.POST:
        medicationRequest = MedicationRequest()
        medicationRequest.drug_name = request.POST.get('drug_name')
        medicationRequest.form_of_drug = request.POST.get('form_of_drug')
        medicationRequest.quantity_requested = request.POST.get('quantity_requested')
        medicationRequest.drug_name1 = request.POST.get('drug_name1')
        medicationRequest.form_of_drug1 = request.POST.get('form_of_drug1')
        medicationRequest.quantity_requested1 = request.POST.get('quantity_requested1')
        medicationRequest.drug_name2 = request.POST.get('drug_name2')
        medicationRequest.form_of_drug2 = request.POST.get('form_of_drug2')
        medicationRequest.quantity_requested2 = request.POST.get('quantity_requested2')
        medicationRequest.drug_name3 = request.POST.get('drug_name3')
        medicationRequest.form_of_drug3 = request.POST.get('form_of_drug3')
        medicationRequest.quantity_requested3 = request.POST.get('quantity_requested3')
        medicationRequest.drug_name4 = request.POST.get('drug_name4')
        medicationRequest.form_of_drug4 = request.POST.get('form_of_drug4')
        medicationRequest.quantity_requested4 = request.POST.get('quantity_requested4')
        medicationRequest.drug_name5 = request.POST.get('drug_name5')
        medicationRequest.form_of_drug5 = request.POST.get('form_of_drug5')
        medicationRequest.quantity_requested5 = request.POST.get('quantity_requested5')
        medicationRequest.drug_name6 = request.POST.get('drug_name6')
        medicationRequest.form_of_drug6 = request.POST.get('form_of_drug6')
        medicationRequest.quantity_requested6 = request.POST.get('quantity_requested6')
        medicationRequest.drug_name7 = request.POST.get('drug_name7')
        medicationRequest.form_of_drug7 = request.POST.get('form_of_drug7')
        medicationRequest.quantity_requested7 = request.POST.get('quantity_requested7')
        medicationRequest.drug_name8 = request.POST.get('drug_name8')
        medicationRequest.form_of_drug8 = request.POST.get('form_of_drug8')
        medicationRequest.quantity_requested8 = request.POST.get('quantity_requested8')
        medicationRequest.drug_name9 = request.POST.get('drug_name9')
        medicationRequest.form_of_drug9 = request.POST.get('form_of_drug9')
        medicationRequest.quantity_requested9 = request.POST.get('quantity_requested9')
        medicationRequest.drug_name10 = request.POST.get('drug_name10')
        medicationRequest.form_of_drug10 = request.POST.get('form_of_drug10')
        medicationRequest.quantity_requested10 = request.POST.get('quantity_requested10')
        medicationRequest.drug_name11 = request.POST.get('drug_name11')
        medicationRequest.form_of_drug11 = request.POST.get('form_of_drug11')
        medicationRequest.quantity_requested11 = request.POST.get('quantity_requested11')
        medicationRequest.drug_name12 = request.POST.get('drug_name12')
        medicationRequest.form_of_drug12 = request.POST.get('form_of_drug12')
        medicationRequest.quantity_requested12 = request.POST.get('quantity_requested12')
        medicationRequest.drug_name13 = request.POST.get('drug_name13')
        medicationRequest.form_of_drug13 = request.POST.get('form_of_drug13')
        medicationRequest.quantity_requested13 = request.POST.get('quantity_requested13')
        medicationRequest.drug_name14 = request.POST.get('drug_name14')
        medicationRequest.form_of_drug14 = request.POST.get('form_of_drug14')
        medicationRequest.quantity_requested14 = request.POST.get('quantity_requested14')
        medicationRequest.drug_name15 = request.POST.get('drug_name15')
        medicationRequest.form_of_drug15 = request.POST.get('form_of_drug15')
        medicationRequest.quantity_requested15 = request.POST.get('quantity_requested15')
        medicationRequest.drug_name16 = request.POST.get('drug_name16')
        medicationRequest.form_of_drug16 = request.POST.get('form_of_drug16')
        medicationRequest.quantity_requested16 = request.POST.get('quantity_requested16')
        medicationRequest.drug_name17 = request.POST.get('drug_name17')
        medicationRequest.form_of_drug17 = request.POST.get('form_of_drug17')
        medicationRequest.quantity_requested17 = request.POST.get('quantity_requested17')
        medicationRequest.drug_name18 = request.POST.get('drug_name18')
        medicationRequest.form_of_drug18 = request.POST.get('form_of_drug18')
        medicationRequest.quantity_requested18 = request.POST.get('quantity_requested18')
        medicationRequest.drug_name19 = request.POST.get('drug_name19')
        medicationRequest.form_of_drug19 = request.POST.get('form_of_drug19')
        medicationRequest.quantity_requested19 = request.POST.get('quantity_requested19')
        medicationRequest.total_requested_drug = request.POST.get('total_requested_drug')
        medicationRequest.the_requesters_username = request.POST.get('the_requesters_username')
        medicationRequest.material_requested_manager_title = request.POST.get('material_requested_manager_title')
        medicationRequest.medication_request_date = request.POST.get('medication_request_date')
        medicationRequest.medication_request_manager_signaturetext = request.POST.get('medication_request_manager_signaturetext')

        medicationRequest.save()
        return redirect('/forms/medication_request_tables')
    else:
        return render(request,'forms/medication_request.html')

@login_required(login_url='redirect')
def medication_request_tables(request):
    context = {"MedicationRequest" : MedicationRequest.objects.all()}
    return render(request,'tables/medication_request.html',context)

@login_required(login_url='redirect')
def editMedicationRequest(request,id):
    editMedicationRequest = MedicationRequest.objects.get(id=id)
    return render(request,'forms/update_forms/medication_request.html',{"MedicationRequest":editMedicationRequest})

@login_required(login_url='redirect')
def updateMedicationRequest(request,id):
    updateMedicationRequest = MedicationRequest.objects.get(id=id)
    medicationRequestForm = MedicationRequestForm(data=request.POST, instance=updateMedicationRequest)
    if MedicationRequestForm.is_valid():
        medicationRequestForm.save()
        context = {"MedicationRequest":MedicationRequest.objects.all()}
        return render(request,'tables/medication_request.html',context)
    else:
        return render(request,'forms/update_forms/medication_request.html',{"MedicationRequest":updateMedicationRequest})

@login_required(login_url='redirect')
def deleteMedicationRequest(request,id):
    deleteMedicationRequest = MedicationRequest.objects.get(id=id)
    deleteMedicationRequest.delete()
    return redirect('/forms/medication_request_tables')

# ================================================
def pre_case_control_form(request):
    if request.method == "POST" and 'preSave' in request.POST:
        preCaseControl = PreCaseControl()
        preCaseControl.Defibrillator = request.POST.get('Defibrillator')
        preCaseControl.mechanicalventilator = request.POST.get('mechanicalventilator')
        preCaseControl.portableaspirator = request.POST.get('portableaspirator')
        preCaseControl.fixedaspirator = request.POST.get('fixedaspirator')
        preCaseControl.fixedoxygenaspirator = request.POST.get('fixedoxygenaspirator')
        preCaseControl.portableoxygensystem = request.POST.get('portableoxygensystem')
        preCaseControl.mainstretcher = request.POST.get('mainstretcher')
        preCaseControl.combinationstretcher = request.POST.get('combinationstretcher')
        preCaseControl.spineboard = request.POST.get('spineboard')
        preCaseControl.spoonstretcher = request.POST.get('spoonstretcher')
        preCaseControl.emergencybag = request.POST.get('emergencybag')
        preCaseControl.firstaidkit = request.POST.get('firstaidkit')
        preCaseControl.rearcabfloor = request.POST.get('rearcabfloor')
        preCaseControl.medicalwaste = request.POST.get('medicalwaste')
        preCaseControl.pre_case_date = request.POST.get('pre_case_date')
        preCaseControl.pre_case_time = request.POST.get('pre_case_time')
        preCaseControl.pre_case_username = request.POST.get('pre_case_username')
        preCaseControl.pre_case_signaturetext = request.POST.get('pre_case_signaturetext')

        preCaseControl.save()
        return redirect('/forms/pre_case_control_tables')
    return render(request,'forms/pre-case_control.html')

def pre_case_control_tables(request):
    context = {"PreCaseControl":PreCaseControl.objects.all()}
    return render(request,'tables/pre-case_control.html',context)

def editPreCaseControl(request,id):
    editPreCaseControl = PreCaseControl.objects.get(id=id)
    if editPreCaseControl.Defibrillator is not None:
        editPreCaseControl.Defibrillator = editPreCaseControl.Defibrillator.split(',')
    if editPreCaseControl.mechanicalventilator is not None:
        editPreCaseControl.mechanicalventilator = editPreCaseControl.mechanicalventilator.split(',')
    if editPreCaseControl.portableaspirator is not None:
        editPreCaseControl.portableaspirator = editPreCaseControl.portableaspirator.split(',')
    if editPreCaseControl.fixedaspirator is not None:
        editPreCaseControl.fixedaspirator = editPreCaseControl.fixedaspirator.split(',')
    if editPreCaseControl.fixedoxygenaspirator is not None:
        editPreCaseControl.fixedoxygenaspirator = editPreCaseControl.fixedoxygenaspirator.split(',')
    if editPreCaseControl.portableoxygensystem is not None:
        editPreCaseControl.portableoxygensystem = editPreCaseControl.portableoxygensystem.split(',')
    if editPreCaseControl.mainstretcher is not None:
        editPreCaseControl.mainstretcher = editPreCaseControl.mainstretcher.split(',')
    if editPreCaseControl.combinationstretcher is not None:
        editPreCaseControl.combinationstretcher = editPreCaseControl.combinationstretcher.split(',')
    if editPreCaseControl.spineboard is not None:
        editPreCaseControl.spineboard = editPreCaseControl.spineboard.split(',')
    if editPreCaseControl.spoonstretcher is not None:
        editPreCaseControl.spoonstretcher = editPreCaseControl.spoonstretcher.split(',')
    if editPreCaseControl.emergencybag is not None:
        editPreCaseControl.emergencybag = editPreCaseControl.emergencybag.split(',')
    if editPreCaseControl.firstaidkit is not None:
        editPreCaseControl.firstaidkit = editPreCaseControl.firstaidkit.split(',')
    if editPreCaseControl.rearcabfloor is not None:
        editPreCaseControl.rearcabfloor = editPreCaseControl.rearcabfloor.split(',')
    if editPreCaseControl.medicalwaste is not None:
        editPreCaseControl.medicalwaste = editPreCaseControl.medicalwaste.split(',')
    return render(request,"forms/update_forms/pre-case_control.html",{"PreCaseControl":editPreCaseControl})

def updatePreCaseControl(request,id):
    updatePreCaseControl = PreCaseControl.objects.get(id=id)
    preCaseControlForm = PreCaseControlForm(data=request.POST, instance=updatePreCaseControl)
    if preCaseControlForm.is_valid():
        preCaseControlForm.save()
        context = {"PreCaseControl":PreCaseControl.objects.all()}
        return render(request,"tables/pre-case_control.html",context)
    else:
        return render(request,"forms/update_forms/pre-case_control.html",{"PreCaseControl":updatePreCaseControl})

def deletePreCaseControl(request,id):
    deletePreCaseControl = PreCaseControl.objects.get(id=id)
    deletePreCaseControl.delete()
    return redirect('/forms/pre_case_control_tables')