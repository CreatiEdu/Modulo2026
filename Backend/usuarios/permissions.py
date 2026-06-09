from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminUserRole(BasePermission):
    """
    Permite el acceso únicamente a usuarios administradores (rol = 3).
    """
    def has_permission(self, request, view):
        return bool(
            request.user and 
            request.user.is_authenticated and 
            getattr(request.user, 'rol', None) == 3
        )

class IsGestorUserRole(BasePermission):
    """
    Permite el acceso únicamente a usuarios gestores (rol = 2).
    """
    def has_permission(self, request, view):
        return bool(
            request.user and 
            request.user.is_authenticated and 
            getattr(request.user, 'rol', None) == 2
        )

class IsGestorOrAdminUser(BasePermission):
    """
    Permite el acceso a gestores (rol = 2) y administradores (rol = 3).
    """
    def has_permission(self, request, view):
        return bool(
            request.user and 
            request.user.is_authenticated and 
            getattr(request.user, 'rol', None) in [2, 3]
        )

class ReadOnlyOrAdminGestor(BasePermission):
    """
    Permite acceso de sólo lectura a cualquiera, pero modificaciones (POST, PUT, DELETE)
    sólo a gestores (rol = 2) o administradores (rol = 3).
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(
            request.user and 
            request.user.is_authenticated and 
            getattr(request.user, 'rol', None) in [2, 3]
        )

class CreateOnlyOrAdminGestor(BasePermission):
    """
    Permite crear (POST) a cualquiera (ej. enviar mensajes de contacto),
    pero ver la lista o modificar requiere ser gestor o administrador.
    """
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        return bool(
            request.user and 
            request.user.is_authenticated and 
            getattr(request.user, 'rol', None) in [2, 3]
        )
