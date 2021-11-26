import os
import sys
import os.path
import platform
import subprocess


def main():
    # inputs = sys.argv[1] # input string
    # inputDict = eval('dict('+inputs+')') # convert input string into dict
    # open_folder(inputDict['directory'])
    open_folder('/Users/bryanbordeman/Desktop/folder_wizard_2.0/test')
    print('Open Folder')

def open_folder(path):
    if platform.system() == "Windows":
        os.startfile(path)
    elif platform.system() == "Darwin":
        subprocess.Popen(["open", path])
    else:
        subprocess.Popen(["xdg-open", path])
