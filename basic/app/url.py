from .views import view,dynamic,movies,top_movies,watchlist,calculator,secondindex,blog1,blog2,maps
from django.urls import path

urlpatterns=[
    path('', view, name='home'),
    path("dynamic/<str:text>",dynamic,name='dynamic'),
    path("movies/",movies,name='movies'),
    path("top-movies/",top_movies,name='top-movies'),
    path("watchlist/",watchlist,name='watchlist'),
    path("calculator/",calculator,name='calculator'),
    path("index/",secondindex,name="home2"),
    path("blog1/",blog1),
    path("blog2",blog2),
    path("maps/",maps)

]