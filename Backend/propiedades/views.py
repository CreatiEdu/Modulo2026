from django.shortcuts import render

from rest_framework import viewsets
from .models import Propiedad
from .serializers import PropiedadSerializer

class PropiedadViewSet(viewsets.ModelViewSet):
    queryset = Propiedad.objects.all().order_by("titulo")
    serializer_class = PropiedadSerializer
