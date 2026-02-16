#def sum_receipt(a,b,c):
#    sum=a+b+c
#    print("sum is:",sum)
#    return sum

def sum_receipt(*args):
    print(args)
    sum=0
    for n in args:
        print("n is:",n)
        sum=sum+n
    print("sum is:",sum)

def main():
    price_list=[]

    while True:
        user_input=input("Enter a price or type 'done' to end: ").lower()

        if user_input == 'done':
            break

        try:
            price =float(user_input)
            price_list.append(price)
        except 