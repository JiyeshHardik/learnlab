# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-10-15 22:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0002_auto_20201015_2235'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]