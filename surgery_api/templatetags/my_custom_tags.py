from django import template
from django.shortcuts import redirect

register = template.Library()

@register.simple_tag
def redirect_views(request):
    print("Deneme")
    response =redirect('login')
    return response