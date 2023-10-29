from django.db import models


class contactForm(models.Model):
    name = models.CharField("Имя", max_length=100)
    phone = models.IntegerField("Номер телефона")
    comments = models.TextField("Комментарий ")
    privacyPolicy = models.BooleanField("Приватность", default=False)
