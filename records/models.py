from django.db import models
from datetime import datetime

class Records(models.Model):
    username = models.CharField(max_length=100, verbose_name='Ad Soyad',null=True,blank=True)
    date = models.CharField(max_length=200,null=True,blank=True)   
    hours = models.CharField(max_length=200,blank=True,null=True)
    tel = models.CharField(max_length=200,verbose_name='Telefon Numarası',null=True,blank=True)
    tcNo = models.CharField(max_length=1000, verbose_name='TC Numarası',null=True,blank=True)
    adress = models.CharField(max_length = 200,verbose_name='Adres/Köy',null=True,blank=True)
    kurum = models.CharField(max_length=11,verbose_name='Kurum',null=True,blank=True)
    diagnosis = models.CharField(max_length=1000, verbose_name='Tanı',null=True,blank=True)
    intervention = models.CharField(max_length=100, verbose_name='Müdahale', null=True,blank=True)
    medications = models.CharField(max_length=100, verbose_name='İlaçlar', null=True,blank=True)
    conclusion = models.CharField(max_length = 200,verbose_name='Sonuç',null=True,blank=True)
    doctor = models.CharField(max_length=200, verbose_name='Doktor',null=True,blank=True)

    def __str__(self):
       return self.username
 
    
    