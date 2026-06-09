from django.shortcuts import render

from rest_framework import viewsets
from .models import Contacto
from .serializers import ContactoSerializer
from usuarios.permissions import CreateOnlyOrAdminGestor

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all().order_by("fecha_envio")
    serializer_class = ContactoSerializer
    permission_classes = [CreateOnlyOrAdminGestor]