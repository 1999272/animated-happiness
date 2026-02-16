def user_data(name,**kwargs):
    print(f"name is",name)
    print(f"kwargs is:",kwargs)


    collect_user_data():
    name=input("Enter your name:")
    print("-------------------")
    print("You can fill your bio")
    print("Enter categories and values")
    print("done to exit")
    print("-------------------- ")
    user_data={}
    while True:

        category_name=input("Enter category name:")
        if category_name=="done":
            break
        category_description=input("Enter description:")
        user_data[category_name]=category_description
        #print(user_data)
        save_user_data(name,**user_data)


collect_user_data()


