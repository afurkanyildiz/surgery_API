# Generated by Django 4.1 on 2022-11-07 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Institution',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('institutionName', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
