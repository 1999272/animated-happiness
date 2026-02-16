def check_the_magic(**kwargs):
    print(f"The data type is: {type(kwargs)}")
    print(f"The content is: {kwargs}")
    print(f"Location is:", {kwargs["location"]})


def check_the_magic2(name, age, location):
    print(f"name is:", name)
    print(f"age is:", age)
    print(f"location is:", location)

    check_the_magic2(name="John", location="Kenya", age=30)
