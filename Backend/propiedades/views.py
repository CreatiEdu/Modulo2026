from django.shortcuts import render
from rest_framework import viewsets
from .models import Propiedad
from .serializers import PropiedadSerializer

class PropiedadViewSet(viewsets.ModelViewSet):
    # Cambiado a fecha_creacion
    queryset = Propiedad.objects.all().order_by("-fecha_creacion") 
    serializer_class = PropiedadSerializer