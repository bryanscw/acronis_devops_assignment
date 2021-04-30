from django.contrib import admin
from .models import Address


# Register your models here.
class AddressAdmin(admin.ModelAdmin):
    list_display = ('f_name', 'l_name', 'phone_num', 'department')


admin.site.register(Address, AddressAdmin)
