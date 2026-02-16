import os

#list all files
#input: path
#output An arrry of files
def list_folder_files(folder_path):
    files = os.listdir(folder_path)
    print(files)
    return files