edad = int(input("Cual es tu edad?"))
edo = input ("eres soltero? s/n ")
work = input ("trabajas actualmente? s/n ")

if edad >= 18 and edad < 38 and edo == "s" and work == "s":
    print("Obtuviste la beca")

if input("Eres mama Soltera? s/n ") == "s":
    print("Tienes un 15 por ciento extra")
