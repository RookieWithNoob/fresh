# Register your models here.
from django.contrib import admin
from django.core.cache import cache
from user.models import User


class UserAmdin(admin.ModelAdmin):
    pass


admin.site.register(User, UserAmdin)