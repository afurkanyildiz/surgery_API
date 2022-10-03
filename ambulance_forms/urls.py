from django.urls import path
from . import views

urlpatterns = [
    path('ambulance_case_form', views.ambulance_case_form, name='ambulance_case_form'),
    path('<int:id>/', views.editAmbulanceCaseForm, name='editAmbulanceCaseForm'),
    path('<int:id>', views.updateAmbulanceCaseForm, name='updateAmbulanceCaseForm'),
    path('delete/<int:id>', views.deleteAmbulanceCaseForm, name='deleteAmbulanceCaseForm'),
    path('ambulance_case_tables/', views.ambulance_case_tables, name='ambulance_case_tables'),

    path('ambulance_daily_control_form', views.ambulance_daily_control_form, name='ambulance_daily_control_form'),
    path('ambulance_daily_control_tables', views.ambulance_daily_control_tables, name='ambulance_daily_control_tables'),
    path('editDaily/<int:id>', views.editAmbulanceDailyControl, name='editAmbulanceDailyControl'),
    path('updateDaily/<int:id>', views.updateAmbulanceDailyControl, name='updateAmbulanceDailyControl'),
    path('deleteDailyControl/<int:id>', views.deleteAmbulanceDaily, name='deleteAmbulanceDaily'),

    path('ambulance_handover_form', views.ambulance_handover_form, name='ambulance_handover_form'),
    path('ambulance_handover_tables', views.ambulance_handover_tables, name='ambulance_handover_tables'),
    path('editAmbulanceHandover/<int:id>', views.editAmbulanceHandover, name='editAmbulanceHandover'),
    path('updateAmbulanceHandover/<int:id>', views.updateAmbulanceHandover, name='updateAmbulanceHandover'),
    path('deleteAmbulanceHandover/<int:id>', views.deleteAmbulanceHandover, name='deleteAmbulanceHandover'),

    path('ambulance_material_control_form', views.ambulance_material_control_form, name='ambulance_material_control_form'),
    path('ambulance_material_control_tables', views.ambulance_material_control_tables, name='ambulance_material_control_tables'),
    path('editAmbulanceMaterial/<int:id>', views.editAmbulanceMaterial, name='editAmbulanceMaterial'),
    path('updateAmbulanceMaterial/<int:id>', views.updateAmbulanceMaterial, name='updateAmbulanceMaterial'),
    path('deleteAmbulanceMaterial/<int:id>', views.deleteAmbulanceMaterial, name='deleteAmbulanceMaterial'),


    path('call_center_form', views.call_center_form, name='call_center_form'),
    path('call_center_tables', views.call_center_tables, name='call_center_tables'),
    path('editCallCenter/<int:id>', views.editCallCenter, name='editCallCenter'),
    path('updateCallCenter/<int:id>', views.updateCallCenter, name='updateCallCenter'),
    path('deleteCallCenter/<int:id>', views.deleteCallCenter, name='deleteCallCenter'),

    path('healmedy_case_form', views.healmedy_case_form, name='healmedy_case_form'),
    path('healmedy_case_tables', views.healmedy_case_tables, name='healmedy_case_tables'),
    path('editHealmedyCase/<int:id>', views.editHealmedyCase, name='editHealmedyCase'),
    path('updateHealmedyCase/<int:id>', views.updateHealmedyCase, name='updateHealmedyCase'),
    path('deleteHealmedyCase/<int:id>', views.deleteHealmedyCase, name='deleteHealmedyCase'),

    path('material_request_form', views.material_request_form, name='material_request_form'),
    path('material_request_tables', views.material_request_tables, name='material_request_tables'),
    path('editMaterialRequest/<int:id>', views.editMaterialRequest, name='editMaterialRequest'),
    path('updateMaterialRequest/<int:id>', views.updateMaterialRequest, name='updateMaterialRequest'),
    path('deleteMaterialRequest/<int:id>', views.deleteMaterialRequest, name='deleteMaterialRequest'),


    path('medical_gas_request_form', views.medical_gas_request_form, name='medical_gas_request_form'),
    path('medical_gas_request_tables', views.medical_gas_request_tables, name='medical_gas_request_tables'),
    path('editMedicalGasRequest/<int:id>', views.editMedicalGasRequest, name='editMedicalGasRequest'),
    path('updateMedicalGasRequest/<int:id>', views.updateMedicalGasRequest, name='updateMedicalGasRequest'),
    path('deleteMedicalGasRequest/<int:id>', views.deleteMedicalGasRequest, name='deleteMedicalGasRequest'), 

    path('medication_request_form', views.medication_request_form, name='medication_request_form'),
    path('medication_request_tables', views.medication_request_tables, name='medication_request_tables'),
    path('editMedicationRequest/<int:id>', views.editMedicationRequest, name='editMedicationRequest'),
    path('updateMedicationRequest/<int:id>', views.updateMedicationRequest, name='updateMedicationRequest'),
    path('deleteMedicationRequest/<int:id>', views.deleteMedicationRequest, name='deleteMedicationRequest'),


    path('pre_case_control_form', views.pre_case_control_form, name='pre_case_control_form'),
    path('pre_case_control_tables', views.pre_case_control_tables, name='pre_case_control_tables'),
    path('editPreCaseControl/<int:id>', views.editPreCaseControl, name='editPreCaseControl'),
    path('updatePreCaseControl/<int:id>', views.updatePreCaseControl, name='updatePreCaseControl'),
    path('deletePreCaseControl/<int:id>', views.deletePreCaseControl, name='deletePreCaseControl'),
]