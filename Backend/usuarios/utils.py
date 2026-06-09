import jwt
from datetime import datetime, timedelta
from django.conf import settings

def generate_jwt_token(usuario):
    """
    Generates a JWT token for a given user.
    """
    payload = {
        'id_usuario': usuario.id_usuario,
        'nombre': usuario.nombre,
        'email': usuario.email,
        'rol': usuario.rol,
        'exp': datetime.utcnow() + timedelta(days=1),
        'iat': datetime.utcnow()
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token

def decode_jwt_token(token):
    """
    Decodes and validates a JWT token.
    Returns the payload if valid, or raises an appropriate exception.
    """
    payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
    return payload
