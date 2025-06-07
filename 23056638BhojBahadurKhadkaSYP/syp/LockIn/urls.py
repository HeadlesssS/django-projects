from django.urls import path,include
from .views import authView,home,blog
from django.contrib.auth import views as auth_views

app_name = "LockIn"

urlpatterns = [
 path("", auth_views.LoginView.as_view(template_name="registration/login.html"),name="login"),
 path("home/", home, name="home"),
 path("signup/", authView,name="authView"),
 path("accounts/", include("django.contrib.auth.urls")),
 path("blog/", blog,name="blog"),
] 