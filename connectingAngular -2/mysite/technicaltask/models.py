# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField()
    address = models.CharField(max_length=200)

