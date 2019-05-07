from django.conf.urls import url
from views import simpleView, inputView


urlpatterns = [
    url(r'home', simpleView, name='home'),
    url(r'^input/$', inputView, name='input'),
]