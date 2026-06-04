from django.urls import path
from .views import UsuarioViewSet,register, login

urlpatterns = [
    path('register/', UsuarioViewSet.as_view({'post': 'register'})),
    path('login/', UsuarioViewSet.as_view({'post': 'login'})),
]