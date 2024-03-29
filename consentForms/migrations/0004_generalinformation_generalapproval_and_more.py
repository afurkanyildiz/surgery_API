# Generated by Django 4.1 on 2022-12-06 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consentForms', '0003_rename_generalrepresentativedoctorsignature_generalinformation_generalrepresentativedoctorsignaturet'),
    ]

    operations = [
        migrations.AddField(
            model_name='generalinformation',
            name='generalApproval',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='kvkkconsent',
            name='declaration',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='kvkkconsent',
            name='expression',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='minorconsent',
            name='minorApproval',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='punctureconsent',
            name='punctureApproval',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
