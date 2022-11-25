from django.db import models
from datetime import datetime

class Records(models.Model):
    username = models.CharField(max_length=1000, verbose_name='Ad Soyad',null=True,blank=True)
    date = models.CharField(max_length=1000,null=True,blank=True)   
    hours = models.CharField(max_length=1000,blank=True,null=True)
    tel = models.CharField(max_length=1000,verbose_name='Telefon Numarası',null=True,blank=True)
    tcNo = models.CharField(max_length=1000, verbose_name='TC Numarası',null=True,blank=True)
    adress = models.CharField(max_length = 1000,verbose_name='Adres/Köy',null=True,blank=True)
    kurum = models.CharField(max_length=1000,verbose_name='Kurum',null=True,blank=True)
    diagnosis = models.CharField(max_length=1000, verbose_name='Tanı',null=True,blank=True)
    intervention = models.CharField(max_length=1000, verbose_name='Müdahale', null=True,blank=True)
    # medications = models.CharField(max_length=1000, verbose_name='İlaçlar', null=True,blank=True)
    conclusion = models.CharField(max_length = 1000,verbose_name='Sonuç',null=True,blank=True)
    doctor = models.CharField(max_length=1000, verbose_name='Doktor',null=True,blank=True)
    record_one_measurement = models.CharField(max_length=1000, verbose_name='1.Ölçüm',null=True,blank=True)
    record_one_blood_pressure = models.CharField(max_length=1000, verbose_name='1.Tansiyon',null=True,blank=True)
    record_one_pulse = models.CharField(max_length=1000, verbose_name='1.Nabız',null=True,blank=True)
    record_one_spo2 = models.CharField(max_length=1000, verbose_name='1.SPO2',null=True,blank=True)
    record_one_respirations_min = models.CharField(max_length=1000, verbose_name='1.Solunum/DK',null=True,blank=True)
    record_one_fire = models.CharField(max_length=1000, verbose_name='1.Ateş',null=True,blank=True)
    record_second_measurement = models.CharField(max_length=1000, verbose_name='2.Ölçüm',null=True,blank=True)
    record_second_blood_pressure = models.CharField(max_length=1000, verbose_name='2.Tansiyon',null=True,blank=True)
    record_second_pulse = models.CharField(max_length=1000, verbose_name='2.Nabız',null=True,blank=True)
    record_second_spo2 = models.CharField(max_length=1000, verbose_name='2.SPO2',null=True,blank=True)
    record_second_respirations_min = models.CharField(max_length=1000, verbose_name='2.Solunum/DK',null=True,blank=True)
    record_second_fire = models.CharField(max_length=1000, verbose_name='2.Ateş',null=True,blank=True)
    record_third_measurement = models.CharField(max_length=1000, verbose_name='3.Ölçüm',null=True,blank=True)
    record_third_blood_pressure = models.CharField(max_length=1000, verbose_name='3.Tansiyon',null=True,blank=True)
    record_third_pulse = models.CharField(max_length=1000, verbose_name='3.Nabız',null=True,blank=True)
    record_third_spo2 = models.CharField(max_length=1000, verbose_name='3.SPO2',null=True,blank=True)
    record_third_fire = models.CharField(max_length=1000, verbose_name='3.Ateş',null=True,blank=True)
    record_third_respirations_min = models.CharField(max_length=1000, verbose_name='3.Solunum/DK',null=True,blank=True)
    medications = models.CharField(max_length=1000, null=True,blank=True)
    scale_used = models.CharField(max_length=1000, null=True,blank=True)

    def __str__(self):
       return self.username
   

class Institution(models.Model):
    institutionName = models.CharField(max_length=200,null=True,blank=True)
    
    def __str__(self):
        return self.institutionName
    
class MedicationName(models.Model):
    medicationName = models.CharField(max_length=200,blank=True,null=True)
    
    def __str__(self):
        return self.medicationName
    
    