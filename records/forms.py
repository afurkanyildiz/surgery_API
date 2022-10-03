from django import forms
from .models import Records

class RecordsForm(forms.ModelForm):
    class Meta:
        model = Records
        fields="__all__"

    # def __init__(self, *args, **kwargs):
    #     super(RecordsForm,self).__init__(*args,**kwargs)