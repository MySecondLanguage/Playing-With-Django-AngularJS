# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, get_object_or_404
from django.views.generic import TemplateView
from rest_framework import viewsets
from . serializers import ContactSerializers
from . models import Contact

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers


def simpleView(request):
    contact = Contact.objects.all()
    return render(request, 'index.html', {'contact': contact})


def inputView(request):
    return HttpResponse('yes, the url works')