from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include ('propiedades.urls')),
    path('api/', include ('contacto.urls')),
    path('api/users/', include ('usuarios.urls')),
    
]
