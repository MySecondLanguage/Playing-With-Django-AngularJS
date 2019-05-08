from django.db import models

class Contact(models.Model):
    userid = models.IntegerField()
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField()
