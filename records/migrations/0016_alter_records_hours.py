# Generated by Django 4.0.6 on 2022-09-08 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0015_alter_records_hours'),
    ]

    operations = [
        migrations.AlterField(
            model_name='records',
            name='hours',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
