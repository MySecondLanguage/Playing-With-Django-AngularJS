from rest_framework import serializers
from . models import Contact


class ContactSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'userid', 'name', 'email', 'phone']