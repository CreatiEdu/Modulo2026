from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Usuario
        fields = ['nombre','email','password','dni','telefono']
        read_only_fields = ['id_usuario','rol']

