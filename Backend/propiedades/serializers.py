from rest_framework import serializers
from .models import Propiedad

class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ['titulo', 'descripcion', 'direccion', 'precio', 'disponible', 'fecha_creacion']