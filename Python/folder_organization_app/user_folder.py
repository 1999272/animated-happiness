import os
import sys

def get_user_folder():
    folder_path = input("Enter the folder path:")
    print(folder_path)
    isdir = os.path.isdir(folder_path)

    if not isdir:
        print("Invalid directory entered.")
        sys.exit()

    return folder_path
# print to see if it is okay