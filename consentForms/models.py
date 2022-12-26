from django.db import models


class GeneralInformation(models.Model):
    generalPatientUsername = models.CharField(max_length=1000,null=True,blank=True)
    generalPatientBirthDate = models.CharField(max_length=1000,null=True,blank=True)
    generalProtocolNumber = models.CharField(max_length=1000,null=True,blank=True)
    generalGender = models.CharField(max_length=1000,null=True,blank=True)
    generalprocessingTime = models.CharField(max_length=1000,null=True,blank=True)
    generalDate = models.CharField(max_length=1000,null=True,blank=True)
    generalHour = models.CharField(max_length=1000,null=True,blank=True)
    generalPatientUsername1 = models.CharField(max_length=1000,null=True,blank=True)
    generalPatientAdress = models.CharField(max_length=1000,null=True,blank=True)
    generalPatientTel = models.CharField(max_length=1000,null=True,blank=True)
    generalPatientSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    generalDoctorUsername = models.CharField(max_length=1000,null=True,blank=True)
    generalDoctorSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    generalWitnessUsername = models.CharField(max_length=1000,null=True,blank=True)
    generalWitnessSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    generalRepresentativeUsername = models.CharField(max_length=1000,null=True,blank=True)
    generalRepresentativeAdress = models.CharField(max_length=1000,null=True,blank=True)
    generalRepresentativeTel = models.CharField(max_length=1000,null=True,blank=True)
    generalRepresentativeSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    generalRepresentativeDoctorUsername = models.CharField(max_length=10000,null=True,blank=True)
    generalRepresentativeDoctorSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    generalRepresentativeWitnessUsername = models.CharField(max_length=1000,null=True,blank=True)
    generalRepresentativeWitnessSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    generalApproval = models.CharField(max_length=1000,null=True,blank=True)
    generalApprovalTxt = models.CharField(max_length=1000,null=True,blank=True)
    
    def __str__(self):
        return self.generalPatientUsername

class  InjectionInformed(models.Model):
    injection1 = models.CharField(max_length=1000,null=True,blank=True)
    injectionDate = models.CharField(max_length=1000,null=True,blank=True)
    injectionHour = models.CharField(max_length=1000,null=True,blank=True)
    patientUsername = models.CharField(max_length=1000,null=True,blank=True)
    patientAdress = models.CharField(max_length=1000,null=True,blank=True)
    patientTelNo = models.CharField(max_length=1000,null=True,blank=True)
    patientSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    employeeUsername = models.CharField(max_length=1000,null=True,blank=True)
    employeeSignatureText = models.CharField(max_length=5000,null=True,blank=True)

    def __str__(self):
        return self.patientUsername

class KVKKConsent(models.Model):
    kvkkName = models.CharField(max_length=1000,null=True,blank=True)
    myRelatives = models.CharField(max_length=1000,null=True,blank=True)
    legalPerson = models.CharField(max_length=1000,null=True,blank=True)
    kvkkPatientUsername = models.CharField(max_length=1000,null=True,blank=True)
    kvkkPatientDate = models.CharField(max_length=1000,null=True,blank=True)
    kvkkPatientSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    expression = models.CharField(max_length=1000,blank=True, null=True)
    declaration = models.CharField(max_length=1000,blank=True, null=True)
    
    def __str__(self):
        return self.kvkkName

class minorConsent(models.Model):
    minorDiagnosis = models.CharField(max_length=1000,null=True,blank=True)
    minorOther = models.CharField(max_length=1000,null=True,blank=True)
    minorAlternative = models.CharField(max_length=1000,null=True,blank=True)
    processing_time = models.CharField(max_length=1000,null=True,blank=True)
    minorDate = models.CharField(max_length=1000,null=True,blank=True)
    minorHour = models.CharField(max_length=1000,null=True,blank=True)
    minorPatientUsername = models.CharField(max_length=1000,null=True,blank=True)
    minorPatientAdress = models.CharField(max_length=1000,null=True,blank=True)
    minorPatientTel = models.CharField(max_length=1000,null=True,blank=True)
    minorPatientSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    minorDoctorUsername = models.CharField(max_length=1000,null=True,blank=True)
    minorDoctorSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    minorlegalRepresentativeUsername = models.CharField(max_length=1000,null=True,blank=True)
    minorlegalRepresentativeAdress = models.CharField(max_length=1000,null=True,blank=True)
    minorlegalRepresentativeTel = models.CharField(max_length=1000,null=True,blank=True)
    minorlegalRepresentativeSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    minorinterpreterUsername = models.CharField(max_length=1000,null=True,blank=True)
    minorinterpreterSignatureText = models.CharField(max_length=5000,null=True,blank=True)
    minorinterpreterTel = models.CharField(max_length=1000,null=True,blank=True)
    minorApproval = models.CharField(max_length=1000,blank=True, null=True)
    minorApprovalTxt = models.CharField(max_length=1000,blank=True,null=True)
    
    def __str__(self):
        return self.minorDiagnosis

class PunctureConsent(models.Model):
    punctureDate = models.CharField(max_length=1000,null=True,blank=True)
    punctureHour = models.CharField(max_length=1000,null=True,blank=True)
    puncturePatientUsername = models.CharField(max_length=1000,null=True,blank=True)
    puncturePatientAdress = models.CharField(max_length=1000,null=True,blank=True)
    puncturePatientTel = models.CharField(max_length=1000,null=True,blank=True)
    puncturePatientSignatureText = models.CharField(max_length=1000,null=True,blank=True)
    punctureDoctorUsername = models.CharField(max_length=1000,null=True,blank=True)
    punctureDoctorSignatureText = models.CharField(max_length=1000,null=True,blank=True)
    punctureWitnessUsername = models.CharField(max_length=1000,null=True,blank=True)
    punctureWitnessSignatureText = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeUsername = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeAdress = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeTel = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeSignatureText = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeDoctorUsername = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeDoctorSignatureText = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeWitnessUsername = models.CharField(max_length=1000,null=True,blank=True)
    punctureRepresentativeWitnessSignatureText = models.CharField(max_length=1000,null=True,blank=True)
    punctureApprovalTxt = models.CharField(max_length=1000,null=True,blank=True,)
    punctureApproval = models.CharField(max_length=1000,blank=True, null=True)
    
    def __str__(self):
        return self.puncturePatientUsername
    
    
    
    
