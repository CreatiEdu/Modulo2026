from django.shortcuts import render
from rest_framework import viewsets
from .models import Propiedad
from .serializers import PropiedadSerializer
from usuarios.permissions import ReadOnlyOrAdminGestor

class PropiedadViewSet(viewsets.ModelViewSet):
    queryset = Propiedad.objects.all().order_by("titulo")
    serializer_class = PropiedadSerializer
    permission_classes = [ReadOnlyOrAdminGestor]