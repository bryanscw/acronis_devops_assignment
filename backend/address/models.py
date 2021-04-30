from django.db import models


# Create your models here.
class Address(models.Model):
    f_name = models.TextField()
    l_name = models.TextField()
    phone_num = models.TextField()
    department = models.TextField()

    def __str__(self):
        return f'{self.f_name}, {self.l_name}, {self.phone_num}, {self.department}'

    def save(self, *args, **kwargs):
        self.f_name = self.f_name.title()
        self.l_name = self.l_name.title()
        self.department = self.department.title()
        super(Address, self).save(*args, **kwargs)
