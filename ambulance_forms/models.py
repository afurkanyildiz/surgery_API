from django.db import models
# from jsignature.fields import JSignatureField

class AmbulanceCase(models.Model):
    date = models.CharField(max_length=200,blank=True,null=True)
    sas_protokol = models.CharField(max_length=200, blank=True,null=True)
    username = models.CharField(max_length=200, blank=True,null=True)
    identification_number = models.CharField(max_length=200,blank=True,null=True,default=None)
    gender = models.CharField(max_length=50,blank=True,null=True)
    age = models.CharField(max_length=200,blank=True,null=True)
    case_call_clock = models.CharField(max_length=200,blank=True,null=True)
    case_arrival_time = models.CharField(max_length=200,blank=True,null=True)
    time_of_leave_from_case = models.CharField(max_length=200,blank=True,null=True)
    hospital_arrival_time = models.CharField(max_length=200,blank=True,null=True)
    tel_number = models.CharField(max_length=200,blank=True,null=True)
    adress = models.CharField(max_length=200, blank=True,null=True)
    place_from_the_patient = models.CharField(max_length=200, blank=True,null=True)
    first_place_the_patient_is_transported = models.CharField(max_length=200, blank=True,null=True)
    second_place_the_patient_is_transported = models.CharField(max_length=200,blank=True,null=True)
    patients_complaint = models.CharField(max_length=200,blank=True,null=True)
    prediction = models.CharField(max_length=200,blank=True,null=True)
    chronic_diseases = models.CharField(max_length=200,blank=True,null=True)
    explanation_application = models.CharField(max_length=200,blank=True,null=True)
    isolationStatus = models.CharField(max_length=200,blank=True,null=True)
    one_measurement = models.CharField(max_length=200,blank=True,null=True)
    one_blood_pressure = models.CharField(max_length=200,blank=True,null=True)
    one_pulse = models.CharField(max_length=200,blank=True,null=True)
    one_spo2 = models.CharField(max_length=200,blank=True,null=True)
    one_respirations_min = models.CharField(max_length=200,blank=True,null=True)
    one_fire = models.CharField(max_length=200,blank=True,null=True)
    second_measurement = models.CharField(max_length=200,blank=True,null=True)
    second_blood_pressure = models.CharField(max_length=200,blank=True,null=True)
    second_pulse = models.CharField(max_length=200,blank=True,null=True)
    second_spo2 = models.CharField(max_length=200,blank=True,null=True)
    second_respirations_min = models.CharField(max_length=200,blank=True,null=True)
    second_fire = models.CharField(max_length=200,blank=True,null=True)
    third_measurement = models.CharField(max_length=200,blank=True,null=True)
    third_blood_pressure = models.CharField(max_length=200,blank=True,null=True)
    third_pulse = models.CharField(max_length=200,blank=True,null=True)
    third_spo2 = models.CharField(max_length=200,blank=True,null=True)
    third_respirations_min = models.CharField(max_length=200,blank=True,null=True)
    third_fire = models.CharField(max_length=200,blank=True,null=True)
    state = models.CharField(max_length=200, blank=True,null=True)
    pupils = models.CharField(max_length=200, blank=True,null=True)
    skin = models.CharField(max_length=200, blank=True,null=True)
    respiratory = models.CharField(max_length=200, blank=True,null=True)
    pulse = models.CharField(max_length=200, blank=True,null=True)
    engine_response = models.CharField(max_length=200, blank=True,null=True)
    oral_response = models.CharField(max_length = 200, blank=True,null=True)
    eyes_open = models.CharField(max_length=200, blank=True,null=True)
    gks_points = models.CharField(max_length=200,blank=True,null=True)
    cpr_doing  = models.CharField(max_length=200,blank=True,null=True)
    start_time = models.CharField(max_length=200,blank=True,null=True)
    finish_time = models.CharField(max_length=200,blank=True,null=True)
    reason_to_leave = models.CharField(max_length=200,blank=True,null=True)
    applicationList = models.CharField(max_length=200, blank=True,null=True)
    Casetransfer = models.CharField(max_length=200,blank=True,null=True)
    generalList = models.CharField(max_length=200,blank=True,null=True)
    number_of_attendants = models.CharField(max_length=200,blank=True,null=True)
    emergency_ambulance_waiting = models.CharField(max_length=200,blank=True,null=True)
    patient_transport_ambulance_waiting = models.CharField(max_length=200,blank=True,null=True)
    patient_username = models.CharField(max_length=200, blank=True,null=True)
    patient_signature = models.CharField(max_length=200, blank=True,null=True)
    hospital_rejection = models.CharField(max_length=200,blank=True,null=True)
    sigtext = models.CharField(max_length=5000,blank=True,null=True)
    patients_relative_username = models.CharField(max_length=200, blank=True,null=True)
    hospital_rejection_sigtext = models.CharField(max_length=5000, blank=True,null=True)
    patients_relative_signaturetext = models.CharField(max_length=5000, blank=True,null=True)
    delivery_area_username = models.CharField(max_length=200,blank=True,null=True)
    delivery_area_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    doctor_username = models.CharField(max_length=200, blank=True,null=True)
    doctor_signaturetext = models.CharField(max_length=5000, blank=True,null=True)
    personal_username = models.CharField(max_length=200,blank=True,null=True)
    personal_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    pilot_username = models.CharField(max_length=200,blank=True,null=True)
    pilot_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    car_info = models.CharField(max_length=200, blank=True,null=True)
    start_km = models.CharField(max_length=200,blank=True,null=True)
    finish_km = models.CharField(max_length=200,blank=True,null=True)
    protocol_number = models.CharField(max_length=200, blank=True,null=True)
    other = models.CharField(max_length=200, blank=True,null=True)
    current = models.CharField(max_length=200, blank=True,null=True)
    current_institution_name = models.CharField(max_length=200, blank=True,null=True)
    round_trip = models.CharField(max_length=200,blank=True,null=True)
    money = models.CharField(max_length=200,blank=True,null=True)
    transfer_doctor_username = models.CharField(max_length=200, blank=True,null=True)
    transfer_doctor_signaturetext = models.CharField(max_length=5000, blank=True,null=True)
    file_number = models.CharField(max_length=200, blank=True,null=True)

    def __str__(self):
        return self.id
    
class AmbulanceDailyControl(models.Model):
    station_name = models.CharField(max_length=200, blank=True,null=True)
    ambulance_km = models.CharField(max_length=200,blank=True,null=True)
    number_plate = models.CharField(max_length=200, blank=True,null=True)
    ambulance_control_date = models.CharField(max_length=200,blank=True,null=True)
    permit = models.CharField(max_length=200, blank=True,null=True)
    physical_apperance = models.CharField(max_length=200,blank=True,null=True)
    bodywork = models.CharField(max_length=200, blank=True,null=True)
    doors = models.CharField(max_length=200,blank=True,null=True)
    tyre = models.CharField(max_length=200, blank=True,null=True)
    fuel = models.CharField(max_length=200, blank=True,null=True)
    fuel_status = models.CharField(max_length=200,blank=True,null=True)
    oil_dripping = models.CharField(max_length=200,blank=True,null=True)
    hydraulic_leakage = models.CharField(max_length=200, blank=True,null=True)
    blow = models.CharField(max_length=200,blank=True,null=True)
    water_leak = models.CharField(max_length=200,blank=True,null=True)
    fuel_leak = models.CharField(max_length=200, blank=True,null=True)
    hood_opening_system = models.CharField(max_length=200,blank=True,null=True)
    wiper_water_level = models.CharField(max_length=200,blank=True,null=True)
    engine_oil_level = models.CharField(max_length=200,blank=True,null=True)
    engine_cleaning = models.CharField(max_length=200,blank=True,null=True)
    malfuntion_lamp = models.CharField(max_length=200,blank=True,null=True)
    wiper_rubber = models.CharField(max_length=200,blank=True,null=True)
    radiator_fluid_level = models.CharField(max_length=200, blank=True,null=True)
    brake_hydraulic_oil_level = models.CharField(max_length=200, blank=True,null=True)
    spare_wheel = models.CharField(max_length=200,blank=True,null=True)
    air_conditioner = models.CharField(max_length=200,blank=True,null=True)
    gps = models.CharField(max_length=200,blank=True,null=True)
    mayk = models.CharField(max_length=200,blank=True,null=True)
    headlight = models.CharField(max_length=200, blank=True,null=True)
    reversing_light = models.CharField(max_length=200,blank=True,null=True)
    overhead_lamps = models.CharField(max_length=200,blank=True,null=True)
    braking_system = models.CharField(max_length=200, blank=True,null=True)
    car_radio = models.CharField(max_length=200,blank=True,null=True)
    sirens = models.CharField(max_length=200,blank=True,null=True)
    flasher = models.CharField(max_length=200,blank=True,null=True)
    rear_door_lighting = models.CharField(max_length=200,blank=True,null=True)
    break_lights = models.CharField(max_length=200,blank=True,null=True)
    gear_system = models.CharField(max_length=200,blank=True,null=True)
    safety_belt = models.CharField(max_length=200,blank=True,null=True)
    engine_operation = models.CharField(max_length=200,blank=True,null=True)
    steering_system = models.CharField(max_length=200,blank=True,null=True)
    instrument_panel = models.CharField(max_length=200,blank=True,null=True)
    mirrors = models.CharField(max_length=200,blank=True,null=True)
    exhaust = models.CharField(max_length=200, blank=True,null=True)
    central_system_locking = models.CharField(max_length=200,blank=True,null=True)
    radio_tape = models.CharField(max_length=200,blank=True,null=True)
    cleaning = models.CharField(max_length=200,blank=True,null=True)
    lighting = models.CharField(max_length=200,blank=True,null=True)
    rubbish_bin = models.CharField(max_length=200,blank=True,null=True)
    rectifiers = models.CharField(max_length=200,blank=True,null=True)
    jack = models.CharField(max_length=200,blank=True,null=True)
    skidding_chain = models.CharField(max_length=200, blank=True,null=True)
    charging_cable = models.CharField(max_length=200,blank=True,null=True)
    stud_wrench = models.CharField(max_length=200,blank=True,null=True)
    fire_extinguishing_tube = models.CharField(max_length=200, blank=True,null=True)
    distress_hammer = models.CharField(max_length=200,blank=True,null=True)
    ambulance_daily_explanation = models.CharField(max_length=200,blank=True,null=True)
    delivery_by_username = models.CharField(max_length=200,blank=True,null=True)
    receiving_area_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    receiving_area_username = models.CharField(max_length=200,blank=True,null=True)
    delivery_by_signaturetext = models.CharField(max_length=5000,blank=True,null=True)

    def __str__(self):
        return self.station_name

class AmbulanceHandover(models.Model):
    ambulance_number_plate = models.CharField(max_length=200,blank=True,null=True)
    date = models.CharField(max_length=200,blank=True,null=True)
    delivery_km = models.CharField(max_length=200,blank=True,null=True)
    to_be_serviced_km = models.CharField(max_length=200,blank=True,null=True)
    phosphor_vest = models.CharField(max_length=200,blank=True,null=True)
    jumper_cable = models.CharField(max_length=200, blank=True,null=True)
    towing_cable = models.CharField(max_length=200,blank=True,null=True)
    triangle = models.CharField(max_length=200,blank=True,null=True)
    notes = models.CharField(max_length=200,blank=True,null=True)
    damage_detection_notification = models.CharField(max_length=200, blank=True,null=True)
    submitter_username = models.CharField(max_length=200,blank=True,null=True)
    submitter_username_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    delivery_area_username = models.CharField(max_length=200,blank=True,null=True)
    delivery_domain_username_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    department_manager_username = models.CharField(max_length=200,blank=True,null=True)
    department_date = models.CharField(max_length=200,blank=True,null=True)
    department_manager_signaturetext =  models.CharField(max_length=5000,blank=True,null=True)

    def __str__(self):
        return self.delivery_area_username

class AmbulanceMaterialControl(models.Model):
    station_name = models.CharField(max_length=200,blank=True,null=True)
    emergency_lock_number = models.CharField(max_length=200,null=True,blank=True)
    material_control_date = models.CharField(max_length=200,null=True,blank=True)
    material_control_time = models.CharField(max_length=200,null=True,blank=True)
    main_stretcher = models.CharField(max_length=200,null=True,blank=True)
    combination_stretcher = models.CharField(max_length=200,null=True,blank=True)
    vacuum_stretcher = models.CharField(max_length=200,null=True,blank=True)
    faras_stretcher = models.CharField(max_length=200,null=True,blank=True)
    back_board = models.CharField(max_length=200,null=True,blank=True)
    traction_splint_set = models.CharField(max_length=200,null=True,blank=True)
    infitable_splint_set = models.CharField(max_length=200,null=True,blank=True)
    neck_brace_set = models.CharField(max_length=200,null=True,blank=True)
    ked_rescue_vest = models.CharField(max_length=200,null=True,blank=True)
    stationary_oxygen_cylinder = models.CharField(max_length=200,null=True, blank=True)
    transport_ventilator_device_healthy = models.CharField(max_length=200,null=True,blank=True)
    constant_vacuum_aspirator = models.CharField(max_length=200,null=True,blank=True)
    portable_aspirator = models.CharField(max_length=200,null=True,blank=True)
    portable_aspirator_charging = models.CharField(max_length=200,null=True,blank=True)
    stationary_sphygmomanometer = models.CharField(max_length=200,null=True,blank=True)
    portable_sphymomanometer = models.CharField(max_length=200,null=True,blank=True)
    portable_sphymomanometer_kid = models.CharField(max_length=200,null=True,blank=True)
    oximeter = models.CharField(max_length=200,null=True,blank=True)
    thermometer = models.CharField(max_length=200,null=True,blank=True)
    diagnostic_set = models.CharField(max_length=200,null=True,blank=True)
    serum_sling = models.CharField(max_length=200,null=True,blank=True)
    injector_pump = models.CharField(max_length=200,null=True,blank=True)
    defibrillator = models.CharField(max_length=200,null=True,blank=True)
    balloon_valve_maske_set = models.CharField(max_length=200,null=True,blank=True)
    laryngoscope_set = models.CharField(max_length=200,null=True,blank=True)
    intubation_tubes = models.CharField(max_length=200,null=True,blank=True)
    airway_tube = models.CharField(max_length=2000,null=True,blank=True)
    glucometer = models.CharField(max_length=200,null=True,blank=True)
    sewing_kit = models.CharField(max_length=200,null=True,blank=True)
    heat_insulation_container = models.CharField(max_length=200,null=True,blank=True)
    oxygen_mask = models.CharField(max_length=200,null=True,blank=True)
    aspiration_catheters = models.CharField(max_length=200,null=True,blank=True)
    urinary_catheter = models.CharField(max_length=200,null=True,blank=True)
    bladder = models.CharField(max_length=200,null=True,blank=True)
    injector = models.CharField(max_length=200,null=True,blank=True)
    emergency_birth_kit = models.CharField(max_length=200,null=True,blank=True)
    burn_kit = models.CharField(max_length=200,null=True,blank=True)
    basic_medical_equiqment_bag = models.CharField(max_length=200,null=True,blank=True)
    interracquets = models.CharField(max_length=200,null=True,blank=True)
    funeral_bag = models.CharField(max_length=200,null=True,blank=True)
    scalpel = models.CharField(max_length=200,null=True,blank=True)
    poviddon_iod = models.CharField(max_length=200,null=True,blank=True)
    alcohol = models.CharField(max_length=200,null=True,blank=True)
    cotton = models.CharField(max_length=200,null=True,blank=True)
    blanket = models.CharField(max_length=200,null=True,blank=True)
    sheet = models.CharField(max_length=200,null=True,blank=True)
    head_pillow = models.CharField(max_length=200,null=True, blank=True)
    adrenaline_bulb = models.CharField(max_length=200,null=True,blank=True)
    aminocardol_bulb = models.CharField(max_length=200,null=True,blank=True)
    lidokain_bulb = models.CharField(max_length=200,null=True,blank=True)
    atropin_bulb = models.CharField(max_length=200,null=True,blank=True)
    antihistaminik_bulb = models.CharField(max_length=200,null=True,blank=True)
    beta_bloker_bulb = models.CharField(max_length=200,null=True,blank=True)
    spazmolitik_bulb = models.CharField(max_length=200,null=True,blank=True)
    calcium_bulb = models.CharField(max_length=200,null=True,blank=True)
    citanest_flakon = models.CharField(max_length=200,null=True,blank=True)
    diazepam_bulb = models.CharField(max_length=200,null=True,blank=True)
    kortikosteroid_bulb = models.CharField(max_length=200,null=True,blank=True)
    nitroderm_tts_5_bulb = models.CharField(max_length=200,null=True,blank=True)
    nitroderm_tts_10_bulb = models.CharField(max_length=200,null=True,blank=True)
    h2_bloker_bulb = models.CharField(max_length=200,null=True,blank=True)
    saline_ampoule = models.CharField(max_length=200,null=True,blank=True)
    inhaler_nebul = models.CharField(max_length=200,null=True,blank=True)
    isoptin_bulb = models.CharField(max_length=200,null=True,blank=True)
    diaepam_bulb = models.CharField(max_length=200,null=True,blank=True)
    diltiazem_bulb = models.CharField(max_length=200,null=True,blank=True)
    dopamin_bulb = models.CharField(max_length=200,null=True,blank=True)
    dormicum_bulb = models.CharField(max_length=200,null=True,blank=True)
    antiemetik_bulb = models.CharField(max_length=200,null=True,blank=True)
    antiepileptik_bulb = models.CharField(max_length=200,null=True, blank=True)
    etil_chloride_spray = models.CharField(max_length=200,null=True,blank=True)
    jetocaine_bulb = models.CharField(max_length=200,null=True,blank=True)
    lasix_bulb = models.CharField(max_length=200,null=True,blank=True)
    amiadarone_bulb = models.CharField(max_length=200,null=True,blank=True)
    analjezik_bulb = models.CharField(max_length=200,null=True,blank=True)
    sodium_bicarbonate_bulb = models.CharField(max_length=200, null=True,blank=True)
    naloksan_bulb = models.CharField(max_length=200,null=True,blank=True)
    anestezik_pomad = models.CharField(max_length=200,null=True,blank=True)
    antimikrobial_pomad = models.CharField(max_length=200,null=True,blank=True)
    silverdin_pomad = models.CharField(max_length=200,null=True,blank=True)
    isordil_bulb = models.CharField(max_length=200,null=True,blank=True)
    kartopil_tablet = models.CharField(max_length=200,null=True,blank=True)
    dextrose_500 = models.CharField(max_length=200,null=True,blank=True)
    isolyte_500 = models.CharField(max_length=200, null=True,blank=True)
    isolyte_p_500 = models.CharField(max_length=200,null=True,blank=True)
    isolyte_s_500 = models.CharField(max_length=200,null=True,blank=True)
    izotonik_500 = models.CharField(max_length=200,null=True,blank=True)
    mannitol_500 = models.CharField(max_length=200,null=True,blank=True)
    ringer_laktat = models.CharField(max_length=200,null=True,blank=True)
    magnesium_sulphate= models.CharField(max_length=200,null=True,blank=True)
    flumazenil = models.CharField(max_length=200,null=True,blank=True)
    paracetamol_tablet = models.CharField(max_length=200,null=True,blank=True)
    responsible_username = models.CharField(max_length=200,null=True,blank=True)
    material_notes = models.CharField(max_length=200,null=True,blank=True)
    responsible_signaturetext = models.CharField(max_length=5000,null=True,blank=True)

    def __str__(self):
        return self.station_name

class CallCenter(models.Model):
    institution_name = models.CharField(max_length=200, blank=True,null=True)
    caller_username = models.CharField(max_length=200,blank=True,null=True)
    proximity = models.CharField(max_length=200,blank=True,null=True)
    caller_tel_no = models.CharField(max_length=200,blank=True,null=True)
    patient_username = models.CharField(max_length=200,blank=True,null=True)
    patient_age = models.CharField(max_length=200,blank=True,null=True)
    gender = models.CharField(max_length=200,blank=True,null=True)
    patient_adress = models.CharField(max_length=200,blank=True,null=True)
    patient_for_directions = models.CharField(max_length=200,blank=True,null=True)
    case_no = models.CharField(max_length=200,blank=True,null=True)
    case_date = models.CharField(max_length=200,blank=True,null=True)
    car_info = models.CharField(max_length=200, blank=True,null=True)
    case_time = models.CharField(max_length=200,blank=True,null=True)
    alarm_clock = models.CharField(max_length=200,blank=True,null=True)
    case_yes = models.CharField(max_length=200,blank=True,null=True)
    appointment_time = models.CharField(max_length=200,blank=True,null=True)
    appointment_date = models.CharField(max_length=200,blank=True,null=True)
    patient_complaint = models.CharField(max_length=200,blank=True,null=True)
    patient_clinic = models.CharField(max_length=200,blank=True,null=True)
    pre_diagnosis = models.CharField(max_length=200, blank=True,null=True)
    consent_received_person = models.CharField(max_length=200,blank=True,null=True)
    triaj = models.CharField(max_length=200,blank=True,null=True)
    exit_time = models.CharField(max_length=200,blank=True,null=True)
    output_method = models.CharField(max_length=200, blank=True,null=True)
    transport_hour = models.CharField(max_length=200,blank=True,null=True)
    event_exit_time = models.CharField(max_length=200,blank=True,null=True)
    hospital_arrival_time = models.CharField(max_length=200,blank=True,null=True)
    time_out_hospital = models.CharField(max_length=200,blank=True,null=True)
    point_return_time = models.CharField(max_length=200,blank=True,null=True)
    patient_taken_place = models.CharField(max_length=200,blank=True,null=True)
    where_patient_first_dropped_out = models.CharField(max_length=200,blank=True,null=True)
    patient_last_off_place = models.CharField(max_length=200,blank=True,null=True)
    ambulance = models.CharField(max_length=200,blank=True,null=True)
    assurance = models.CharField(max_length=200,blank=True,null=True)
    paid = models.CharField(max_length=200,blank=True,null=True)
    free = models.CharField(max_length=200,blank=True,null=True)
    contracted_institution = models.CharField(max_length=200,blank=True,null=True)
    discount = models.CharField(max_length=200,blank=True,null=True)
    protocol_number = models.CharField(max_length=200,blank=True,null=True)
    intervention = models.CharField(max_length=200,blank=True,null=True)
    confirmation_code = models.CharField(max_length=200,blank=True,null=True)
    fee = models.CharField(max_length=200,blank=True,null=True)
    call_domain_username = models.CharField(max_length=200, blank=True,null=True)

    def __str__(self):
        return self.institution_name

class HealmedyCase(models.Model):
    healmedy_date = models.CharField(max_length=200,blank=True,null=True)
    healmedy_time = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username1 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username2 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username3 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username4 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username5 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username6 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username7 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username8 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_patient_username9 = models.CharField(max_length=200,blank=True,null=True)
    healmedy_fee = models.CharField(max_length=200,blank=True,null=True)
    healmedy_tel = models.CharField(max_length=200,blank=True,null=True)
    healmedy_notes = models.CharField(max_length=200,blank=True,null=True)
    healmedy_explanation = models.CharField(max_length=200,blank=True,null=True)
    healmedy_where_it_was_transplanted = models.CharField(max_length=200,blank=True,null=True)
    healmedy_car_info = models.CharField(max_length=200,blank=True,null=True)
    healmedy_adress = models.CharField(max_length=200,blank=True,null=True)
    healmedy_where_taken = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.healmedy_patient_username

class MaterialRequest(models.Model):
    material_name = models.CharField(max_length=200, blank=True,null=True)
    material_name1 = models.CharField(max_length=200, blank=True,null=True)
    material_name2 = models.CharField(max_length=200, blank=True,null=True)
    material_name3 = models.CharField(max_length=200, blank=True,null=True)
    material_name4= models.CharField(max_length=200, blank=True,null=True)
    material_name5 = models.CharField(max_length=200, blank=True,null=True)
    material_name6 = models.CharField(max_length=200, blank=True,null=True)
    material_name7 = models.CharField(max_length=200, blank=True,null=True)
    material_name8 = models.CharField(max_length=200, blank=True,null=True)
    material_name9 = models.CharField(max_length=200, blank=True,null=True)
    material_name10 = models.CharField(max_length=200, blank=True,null=True)
    material_name11 = models.CharField(max_length=200, blank=True,null=True)
    material_name12 = models.CharField(max_length=200, blank=True,null=True)
    material_name13 = models.CharField(max_length=200, blank=True,null=True)
    material_name14 = models.CharField(max_length=200, blank=True,null=True)
    material_name15 = models.CharField(max_length=200, blank=True,null=True)
    material_name16 = models.CharField(max_length=200, blank=True,null=True)
    material_name17 = models.CharField(max_length=200, blank=True,null=True)
    quantity_request = models.CharField(max_length=200,blank=True,null=True)
    quantity_request1 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request2= models.CharField(max_length=200,blank=True,null=True)
    quantity_request3 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request4 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request5 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request6 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request7 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request8 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request9 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request10 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request11= models.CharField(max_length=200,blank=True,null=True)
    quantity_request12 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request13 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request14 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request15 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request16 = models.CharField(max_length=200,blank=True,null=True)
    quantity_request17 = models.CharField(max_length=200,blank=True,null=True)
    total_requested_material = models.CharField(max_length=200,blank=True,null=True)
    the_department_of_request_manager = models.CharField(max_length=200,blank=True,null=True)
    manager_title = models.CharField(max_length=200,blank=True,null=True)
    material_request_date = models.CharField(max_length=200,blank=True,null=True)
    request_manager_signaturetext = models.CharField(max_length=5000,blank=True,null=True)

    def __str__(self):
        return self.the_department_of_request_manager

class MedicalGasRequest(models.Model):
    unit = models.CharField(max_length=200,blank=True,null=True)
    submitter_username = models.CharField(max_length=200,blank=True,null=True)
    gas_request_date = models.CharField(max_length=200,blank=True,null=True)
    gas_request_submitter_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    receiving_username = models.CharField(max_length=200,blank=True,null=True)
    receiving_date = models.CharField(max_length=200,blank=True,null=True)
    receiving_username_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    amount_of_medical_oxygen = models.CharField(max_length=200,blank=True,null=True)
    fixture_code = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen1 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code1 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes1 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen2 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code2 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes2 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen3 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code3 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes3 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen4 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code4 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes4 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen5 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code5 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes5 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen6 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code6 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes6 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen7 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code7 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes7 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen8 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code8 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes8 = models.CharField(max_length=200,blank=True,null=True)
    amount_of_medical_oxygen9 = models.CharField(max_length=200,blank=True,null=True)
    fixture_code9 = models.CharField(max_length=200,blank=True,null=True)
    number_of_tubes9 = models.CharField(max_length=200,blank=True,null=True)
    the_requesters_username = models.CharField(max_length=200,blank=True,null=True)
    request_date = models.CharField(max_length=200,blank=True,null=True)
    the_requesters_signaturetext = models.CharField(max_length=5000,blank=True,null=True)
    approver_username = models.CharField(max_length=200,blank=True,null=True)
    approved_date = models.CharField(max_length=200,blank=True,null=True)
    approver_signaturetext = models.CharField(max_length=5000,blank=True,null=True)

    def __str__(self):
        return self.unit

class MedicationRequest(models.Model):
    drug_name = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested = models.CharField(max_length=200,blank=True,null=True)
    drug_name1 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug1 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested1 = models.CharField(max_length=200,blank=True,null=True)
    drug_name2 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug2 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested2 = models.CharField(max_length=200,blank=True,null=True)
    drug_name3 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug3 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested3 = models.CharField(max_length=200,blank=True,null=True)
    drug_name4 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug4 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested4 = models.CharField(max_length=200,blank=True,null=True)
    drug_name5 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug5 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested5 = models.CharField(max_length=200,blank=True,null=True)
    drug_name6 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug6 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested6 = models.CharField(max_length=200,blank=True,null=True)
    drug_name7 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug7 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested7 = models.CharField(max_length=200,blank=True,null=True)
    drug_name8 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug8 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested8 = models.CharField(max_length=200,blank=True,null=True)
    drug_name9 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug9 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested9 = models.CharField(max_length=200,blank=True,null=True)
    drug_name10 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug10 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested10 = models.CharField(max_length=200,blank=True,null=True)
    drug_name11 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug11 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested11 = models.CharField(max_length=200,blank=True,null=True)
    drug_name12 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug12 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested12 = models.CharField(max_length=200,blank=True,null=True)
    drug_name13 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug13 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested13 = models.CharField(max_length=200,blank=True,null=True)
    drug_name14 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug14 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested14 = models.CharField(max_length=200,blank=True,null=True)
    drug_name15 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug15 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested15 = models.CharField(max_length=200,blank=True,null=True)
    drug_name16 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug16 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested16 = models.CharField(max_length=200,blank=True,null=True)
    drug_name17 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug17 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested17 = models.CharField(max_length=200,blank=True,null=True)
    drug_name18 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug18 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested18 = models.CharField(max_length=200,blank=True,null=True)
    drug_name19 = models.CharField(max_length=200,blank=True,null=True)
    form_of_drug19 = models.CharField(max_length=200,blank=True,null=True)
    quantity_requested19 = models.CharField(max_length=200,blank=True,null=True)
    total_requested_drug = models.CharField(max_length=200,blank=True,null=True)
    the_requesters_username = models.CharField(max_length=200,blank=True,null=True)
    material_requested_manager_title = models.CharField(max_length=200,blank=True,null=True)
    medication_request_date = models.CharField(max_length=200,blank=True,null=True)
    medication_request_manager_signaturetext = models.CharField(max_length=5000,blank=True,null=True)

    def __str__(self):
        return self.material_requested_manager_title

class PreCaseControl(models.Model):
    Defibrillator = models.CharField(max_length=200, blank=True,null=True)
    mechanicalventilator = models.CharField(max_length=200, blank=True,null=True)
    portableaspirator = models.CharField(max_length=200, blank=True,null=True)
    fixedaspirator = models.CharField(max_length=200,blank=True,null=True)
    fixedoxygenaspirator = models.CharField(max_length=200,blank=True,null=True)
    portableoxygensystem = models.CharField(max_length=200,blank=True,null=True)
    mainstretcher = models.CharField(max_length=200,blank=True,null=True)
    combinationstretcher = models.CharField(max_length=200,blank=True,null=True)
    spineboard = models.CharField(max_length=200, blank=True,null=True)
    spoonstretcher = models.CharField(max_length=200,blank=True,null=True)
    emergencybag = models.CharField(max_length=200,blank=True,null=True)
    firstaidkit = models.CharField(max_length=200, blank=True,null=True)
    rearcabfloor = models.CharField(max_length=200,blank=True,null=True)
    medicalwaste = models.CharField(max_length=200,blank=True,null=True)
    pre_case_date = models.CharField(max_length=200,blank=True,null=True)
    pre_case_time = models.CharField(max_length=200,blank=True,null=True)
    pre_case_username = models.CharField(max_length=200,blank=True,null=True)
    pre_case_signaturetext = models.CharField(max_length=5000,blank=True,null=True)

    def __str__(self):
        return self.pre_case_username
