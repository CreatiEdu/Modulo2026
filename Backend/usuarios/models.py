from django.db import models

class Usuario(models.Model):
    
    ROLES = (
       ('cliente','CLIENTE'),
       ('admin','ADMIN') ,
    )

    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    telefono = models.CharField(max_length=50, blank=True, null=True)
    rol = models.CharField(max_length=20, choices=ROLES, default= 'cliente')

    def __str__(self):
        return f'{self.nombre} ({self.get_rol_display()})'