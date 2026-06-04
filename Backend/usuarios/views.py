from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario


@api_view(['POST'])
def register(request):

    nombre = request.data.get('nombre')
    email = request.data.get('email')
    password = request.data.get('password')

    if Usuario.objects.filter(email=email).exists():
        return Response(
            {'error': 'El email ya está registrado'},
            status=status.HTTP_400_BAD_REQUEST
        )

    Usuario.objects.create(
        nombre=nombre,
        email=email,
        password=password,
        rol='cliente'
    )

    return Response(
        {'mensaje': 'Usuario registrado correctamente'},
        status=status.HTTP_201_CREATED
    )
    
def login(request):

    email = request.data.get('email')
    password = request.data.get('password')

    try:
        usuario = Usuario.objects.get(
            email=email,
            password=password
        )

        return Response({
            'id': usuario.id_usuario,
            'nombre': usuario.nombre,
            'email': usuario.email,
            'rol': usuario.rol
        })

    except Usuario.DoesNotExist:
        return Response(
            {'error': 'Credenciales incorrectas'},
            status=status.HTTP_401_UNAUTHORIZED
        )
