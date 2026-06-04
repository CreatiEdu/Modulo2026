from rest_framework import serializers
from .models import Propiedad

class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ['titulo', 'descripcion', 'precio','direccion', 'disponible', 'fecha_creacion']
        read_only_fields = ['id_propiedad','']