from django import forms
from .models import AmbulanceCase,AmbulanceDailyControl,AmbulanceHandover,AmbulanceMaterialControl,PreCaseControl,CallCenter,MaterialRequest,MedicalGasRequest,MedicationRequest,HealmedyCase


class AmbulanceCaseForm(forms.ModelForm):
    class Meta:
        model = AmbulanceCase
        fields="__all__"

class AmbulanceDailyControlForm(forms.ModelForm):
    class Meta:
        model = AmbulanceDailyControl
        fields='__all__'


class AmbulanceHandoverForm(forms.ModelForm):
    class Meta:
        model = AmbulanceHandover
        fields='__all__'


class AmbulanceMaterialControlForm(forms.ModelForm):
    class Meta:
        model = AmbulanceMaterialControl
        fields='__all__'


class CallCenterForm(forms.ModelForm):
    class Meta:
        model = CallCenter
        fields='__all__'


class HealmedyCaseForm(forms.ModelForm):
    class Meta:
        model = HealmedyCase
        fields='__all__'


class MaterialRequestForm(forms.ModelForm):
    class Meta:
        model = MaterialRequest
        fields='__all__'



class MedicalGasRequestForm(forms.ModelForm):
    class Meta:
        model = MedicalGasRequest
        fields='__all__'



class MedicationRequestForm(forms.ModelForm):
    class Meta:
        model = MedicationRequest
        fields='__all__'



class PreCaseControlForm(forms.ModelForm):
    class Meta:
        model = PreCaseControl
        fields='__all__'


