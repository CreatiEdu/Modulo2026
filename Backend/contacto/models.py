from django.db import models
from django.utils import timezone

class Contacto(models.Model):
    
    id_contacto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, verbose_name="Nombre Completo")
    email = models.EmailField(verbose_name="Correo Electronico")
    telefono = models.CharField(max_length=20, blank=True, null=True, verbose_name="Numero Telefonico")
    mensaje = models.TextField(verbose_name="Mensaje")
    fecha_envio = models.DateTimeField(default=timezone.now, verbose_name="Fecha de Envio")
    asunto= models.CharField(max_length=100, verbose_name="Asunto")
    class Meta:  db_table = "contacto"

    def __str__(self):
        return self.fecha_envio.strftime("%d/%m/%Y %H:%M")