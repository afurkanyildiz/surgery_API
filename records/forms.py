from django import forms
from .models import Records,Institution

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