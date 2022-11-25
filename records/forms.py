from django import forms
from .models import Records,Institution,MedicationName

class RecordsForm(forms.ModelForm):
    class Meta:
        model = Records
        fields="__all__"

    # def __init__(self, *args, **kwargs):
    #     super(RecordsForm,self).__init__(*args,**kwargs)
    
class InstitutionForm(forms.ModelForm):
    class Meta:
        model = Institution
        fields="__all__"
        
class MedicationForm(forms.ModelForm):
    class Meta:
        model = MedicationName
        fields=['medicationName']