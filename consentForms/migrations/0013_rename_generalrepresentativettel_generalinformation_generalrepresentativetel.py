# Generated by Django 4.1 on 2022-12-14 13:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('consentForms', '0012_rename_processing_time_generalinformation_generalprocessingtime'),
    ]

    operations = [
        migrations.RenameField(
            model_name='generalinformation',
            old_name='generalRepresentativetTel',
            new_name='generalRepresentativeTel',
        ),
    ]
