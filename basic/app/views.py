from django.http import HttpResponse
from django.shortcuts import render

def view(request):
    return render(request,"index.html") 

def dynamic(request,text):
    return HttpResponse(text)


def movies(request):

    data={
        'title':'Ms'
    }

    return render(request,"movies.html",data)


def top_movies(request):
    return render(request,"top-movies.html")

def watchlist(request):
    return render(request,"watchlist.html")






def calculator(request):
    ans=''
    if request.method == "POST":
        try:
        
            num1 = float(request.POST.get("num1"))
            num2= float(request.POST.get("num2"))
            operator= request.POST.get("operator")
            

            if operator == "+":
                ans=num1 + num2
            elif operator == "-":
                ans=num1 - num2
            elif operator == "*":
                ans=num1 * num2
            elif operator == "/":
                ans=num1 / num2
            
        except:
            ans="Invalid operation"
            
    return render(request,"calculator.html",{"ans":ans})