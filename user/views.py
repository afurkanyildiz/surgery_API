from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import auth, messages
from records.models import Records
from django.contrib.auth import login,logout

def login(request):
    if request.user.is_authenticated:
        return redirect('index')
    else:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']

            user = auth.authenticate(username = username, password=password)
            if user is not None:
                auth.login(request, user)
                messages.add_message(request, messages.SUCCESS,'Giris Basarili')
                return redirect('index')
            else:
                messages.add_message(request,messages.ERROR,'Kullanici Adi veya Parola Hatali')
                return redirect('login')
        else:
            return render(request,'login.html')

def redirect_view(request):
    response = redirect('login')
    return response

def logOut(request):
    logout(request)
    return redirect(login)
