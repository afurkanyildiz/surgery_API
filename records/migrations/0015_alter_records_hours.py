# Generated by Django 4.0.6 on 2022-09-08 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0014_alter_records_hours'),
    ]

    operations = [
        migrations.AlterField(
            model_name='records',
            name='hours',
            field=models.TimeField(auto_now=True, null=True),
        ),
    ]
