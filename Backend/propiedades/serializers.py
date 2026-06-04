from rest_framework import serializers
from .models import Propiedad

class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ['titulo','descripcion','precio','habitaciones','baños','superficie','acepta_mascotas','id_tipo','id_estado','id_Gestor']
        read_only_fields = ['id_propiedad','fecha_creacion']