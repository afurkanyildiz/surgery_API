# Generated by Django 4.1 on 2022-11-14 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0005_alter_records_kurum'),
    ]

    operations = [
        migrations.CreateModel(
            name='MedicationName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medicationName', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
