from rest_framework import serializers
from .models import Contacto

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = ['nombre', 'email', 'telefono', 'mensaje', 'asunto']
        read_only_fields = ['fecha_envio']