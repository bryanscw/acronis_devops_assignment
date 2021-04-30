from rest_framework import viewsets
from .serializer import AddressSerializer
from .models import Address


# Create your views here.

class AddressView(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        f_name = self.request.query_params.get('f_name', None)
        l_name = self.request.query_params.get('l_name', None)
        dept = self.request.query_params.get('dept', None)
        if f_name:
            queryset = queryset.filter(f_name=f_name.title())
        if l_name:
            queryset = queryset.filter(l_name=l_name.title())
        if dept:
            queryset = queryset.filter(department=dept.title())
        return queryset
