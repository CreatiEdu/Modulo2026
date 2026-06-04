from django.db import models

class Propiedad(models.Model):
    # cosita = ((1,'cosa 1'),(2,'cosa 2'),(3,'cosa 3'),)
    Tipos=[(1,'Casa'),(2,'Departamento'),(3,'Local'),(4,'Terreno')];
    Estados=[(1,'Disponible'),(2,'Reservado'),(3,'En evaluacion'),(4,'Alquilado'),(5,'Vendido')];
    Gestores=[(1,'Carlos Mendez'),(2,'Laura Gimenez'),(3,'Roberto Silva')];
    id_propiedad = models.AutoField(primary_key=True)
    # Campos básicos para una inmobiliaria
    titulo = models.CharField(max_length=150, verbose_name="Título de la propiedad")
    descripcion = models.TextField(verbose_name="Descripción detallada")
    precio = models.DecimalField(max_digits=12, decimal_places=2, verbose_name="Precio")
    habitaciones = models.IntegerField(verbose_name="Habitaciones")
    baños = models.IntegerField(verbose_name="Baños")
    superficie = models.DecimalField(max_digits=12, decimal_places=2, verbose_name="Superficie")
    acepta_mascotas = models.BooleanField(default=False, verbose_name="¿Acepta mascotas?")
    id_tipo=models.IntegerField(choices=Tipos,default=1)
    id_estado=models.IntegerField(choices=Estados,default=1)
    id_Gestor=models.IntegerField(choices=Gestores,default=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de publicación")
    class Meta:
        db_table = "propiedad"

    def __str__(self):
        return self.titulo
