# Generated by Django 4.1 on 2022-11-01 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ambulance_forms', '0007_alter_ambulancecase_barkod'),
    ]

    operations = [
        migrations.AddField(
            model_name='ambulancecase',
            name='atn_no',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
