from django.db import models

class Tasks(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    task_time=models.TimeField(null=True,blank=True)
    required_time=models.IntegerField(null=True,blank=True)

    