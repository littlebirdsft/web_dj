"""web_dj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import django_web.views

urlpatterns = [
    path('', django_web.views.index),
    path('admin', admin.site.urls),
    path('hello', django_web.views.hello),
    path('helloRedirect', django_web.views.helloRedirect),
    path('helloRender', django_web.views.helloRender),
    path('index', django_web.views.index),
    path('loginPage', django_web.views.loginPage),
    path('login', django_web.views.login),
    path('forgetPassword', django_web.views.forgetPassword),
    path('newUser', django_web.views.newUser),
    path('addUser', django_web.views.addUser),




]
