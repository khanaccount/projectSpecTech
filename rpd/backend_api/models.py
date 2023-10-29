from django.db import models


class contactForm(models.Model):
    name = models.CharField("Имя", max_length=100)
    number = models.IntegerField("Номер телефона")
    text = models.TextField("Комментарий ")
