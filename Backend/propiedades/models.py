from django.db import models

class Propiedad(models.Model):
    id_propiedad = models.AutoField(primary_key=True)
    # Campos básicos para una inmobiliaria
    titulo = models.CharField(max_length=150, verbose_name="Título de la propiedad")
    descripcion = models.TextField(verbose_name="Descripción detallada")
    direccion = models.CharField(max_length=255, verbose_name="Dirección")
    precio = models.DecimalField(max_digits=12, decimal_places=2, verbose_name="Precio")
    disponible = models.BooleanField(default=True, verbose_name="¿Está disponible?")
    fecha_creacion = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de publicación")
    class Meta:
        db_table = "propiedad"

    def __str__(self):
        return self.titulo
