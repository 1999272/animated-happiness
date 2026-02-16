from user_folder import get_user_folder
from file_sys import list_folder_files

IMAGES=["jpg","jpeg","png"]
MUSIC=["mp3","wav"]
PDF=["pdf"]
ZIP=["zip","rar","tar"]

def main():
    print("Welcom to folder organisation app")
    print("-------------------------------")
    working_folder = get_user_folder()
    items = list_folder_files(working_folder)

    for item in items:
        #print a single file in the array
        print("single item is",item)


main() 