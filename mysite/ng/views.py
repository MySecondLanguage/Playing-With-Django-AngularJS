from django.shortcuts import render
from rest_framework import viewsets
from . serializers import ContactSerializers
from . models import Contact

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers


def home(request):
    return render(request, 'index.html')
