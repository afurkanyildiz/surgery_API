from django import forms
from .models import GeneralInformation,InjectionInformed,KVKKConsent,minorConsent,PunctureConsent

class GeneralInformationForm(forms.ModelForm):
    class Meta:
        model=GeneralInformation
        fields="__all__"

class InjectionInformedForm(forms.ModelForm):
    class Meta:
        model = InjectionInformed
        fields="__all__"

class KVKKConsentForm(forms.ModelForm):
    class Meta:
        model = KVKKConsent
        fields = "__all__"

class minorConsentForm(forms.ModelForm):
    class Meta:
        model = minorConsent
        fields="__all__"
        
class PunctureConsentForm(forms.ModelForm):
    class Meta:
        model = PunctureConsent
        fields="__all__"