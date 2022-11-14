from django.urls import path
from . import views 

urlpatterns = [
    # path('getRecords/', views.recordsList, name='recordsList'),
    # path('postRecords/', views.recordCreate, name='recordCreate'),
    # path('<int:id>/', views.getRecord, name='getRecord'),
    # path('<int:id>', views.recordUpdate, name='recordUpdate'),
    # path('registrationForm/', views.registrationForm, name='registrationForm'),
    path('record_page', views.record_page, name='record_page'),
    path('insert', views.record_form, name='insertRecord'),
    path('update/<int:id>/', views.editRecords, name='editRecords'),
    path('<int:id>', views.updateRecords, name='updateRecords'),
    path('deleteData/<int:id>', views.deleteData, name='deleteData'),
    path('tables', views.tables_page, name='tables'),
    path('', views.index_page, name='index'),    
    path('chart', views.charts_page, name='chart'),
    path('saveInstitutionName', views.saveInstitutionName, name='saveInstitutionName'),
]
