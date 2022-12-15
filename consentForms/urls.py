from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('generalInformation', views.generalInformation, name='generalInformation'),
    path('injectionInformed', views.injectionInformed, name='injectionInformed'),
    path('kvkkConsent', views.kvkkConsent, name='kvkkConsent'),
    path('minorSurgery', views.minorSurgery, name='minorSurgery'),
    path('punctureConsent', views.punctureConsent, name='punctureConsent'),
    
    path('getGeneralInformation/<int:id>', views.getGeneralInformation, name='getGeneralInformation'),
    path('getInjectionInformed/<int:id>', views.getInjectionInformed, name='getInjectionInformed'),
    path('getKvkkConsent/<int:id>', views.getKvkkConsent, name='getKvkkConsent'),
    path('getMinorSurgery/<int:id>', views.getMinorSurgery, name='getMinorSurgery'),
    path('getPunctureConsent/<int:id>', views.getPunctureConsent, name='getPunctureConsent'),
    
    path('updateGeneralConsent/<int:id>', views.updateGeneralConsent, name='updateGeneralConsent'),
    path('updateInjectionConsent/<int:id>', views.updateInjectionConsent, name='updateInjectionConsent'),
    path('updateKvkkConsent/<int:id>', views.updateKvkkConsent, name='updateKvkkConsent'),
    path('updateMinorSurgery/<int:id>', views.updateMinorSurgery, name='updateMinorSurgery'),
    path('updatePunctureConsent/<int:id>', views.updatePunctureConsent, name='updatePunctureConsent'),
    
    path('generalInformationTables', views.generalInformationTables, name='generalInformationTables'),
    path('injectionInformedTables', views.injectionInformedTables, name='injectionInformedTables'),
    path('kvkkConsentTables', views.kvkkConsentTables, name='kvkkConsentTables'),
    path('minorSurgeryTables', views.minorSurgeryTables, name='minorSurgeryTables'),
    path('punctureConsentTables', views.punctureConsentTables, name='punctureConsentTables'),
]
