from django.db import models
import string
import random


def generate_code():
    length = 8

    while True:
        ucode = "".join(random.choices(string.ascii_uppercase, k=length))
        if Curs.objects.filter(code = ucode).count() == 0:
            break
    return ucode

# Create your models here.

class Lections(models.Model):
    name = models.CharField(max_length=100, default="name")
    text = models.TextField()
    date = models.DateField(null=False, auto_now_add=True)




class Curs(models.Model):
    code = models.CharField(max_length=8, unique=True, null=False)
    name = models.CharField(max_length=100, default="name")
    descr = models.TextField()
    #preview_img = models.ImageField()
    #main_img = models.ImageField()

class Users(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
