from django.shortcuts import redirect, render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from .models import Tasks

@login_required
def home(request):
    last_task = None
    if request.method == "POST":
        title = request.POST.get("title")
        description = request.POST.get("description")
        task_time = request.POST.get("task_time")
        required_time = request.POST.get("required_time")

        if title and description and task_time and required_time:
            last_task = Tasks.objects.create(
                title=title,
                description=description,
                task_time=task_time,
                required_time=int(required_time),
            )

            return redirect("LockIn:home")  # Refresh the page after saving

    tasks = Tasks.objects.all()
    return render(request, "home.html", {"tasks": tasks, "last_task": last_task})
def authView(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST or None)
        if form.is_valid():
            form.save()
            return redirect("LockIn:login")
    else:
        form=UserCreationForm()
    return render(request,"registration/signup.html",{"form" : form} )


def blog(request):
    return render(request,"blog.html")
