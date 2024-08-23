# Generated by Django 5.1 on 2024-08-23 13:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Component',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicels',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reg_number', models.CharField(max_length=20)),
                ('model', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Issues',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue', models.TextField()),
                ('repair_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('repair_or_replace', models.CharField(choices=[('repair', 'Repair'), ('replace', 'Replace')], max_length=10)),
                ('date_resolved', models.DateField(auto_now_add=True)),
                ('component', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='services.component')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='services.vehicels')),
            ],
        ),
    ]
