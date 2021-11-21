import os
import time
import os.path
import platform
import subprocess

BASE_DIR = "/Users/bryanbordeman/Desktop/folder_wizard_2.0/test"
current_year = time.strftime("%Y")

def main():
    # create_opportunity_folder(quote)
    open_folder(BASE_DIR)

def createFolder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print('Error: Creating directory. ' + directory)

def open_folder(path):
    if platform.system() == "Windows":
        os.startfile(path)
    elif platform.system() == "Darwin":
        subprocess.Popen(["open", path])
    else:
        subprocess.Popen(["xdg-open", path])

def create_opportunity_folder(quote):
    opportunity_dir = BASE_DIR + "/RFQ's"
    opportunity_dir_list = (os.listdir(opportunity_dir)) # make list of folders in directory
    year_list = [] 
    
    # search for current year folder. If none exist make one
    for year in opportunity_dir_list:
            try:
                if int(year[:5]):
                    year_list.append(year) # add folder to list if its a year
            except ValueError:
                continue
    year_list.sort()
    if year_list[-1] == str(current_year):
        year_dir = current_year #make pointer to current year folder
    else:
        createFolder(f'{opportunity_dir}/{current_year} Quotes') # create new year folder
    
    # create opportunity folder and sub folders
    createFolder(f'{opportunity_dir}/{current_year} Quotes/{quote}/00_quotations_estimates')
    createFolder(f'{opportunity_dir}/{current_year} Quotes/{quote}/00_quotations_estimates/vendor_quotes')
    createFolder(f'{opportunity_dir}/{current_year} Quotes/{quote}/01_drawings_specs')
    createFolder(f'{opportunity_dir}/{current_year} Quotes/{quote}/02_rfi_addenda')
    createFolder(f'{opportunity_dir}/{current_year} Quotes/{quote}/03_photos')
    createFolder(f'{opportunity_dir}/{current_year} Quotes/{quote}/04_misc_docs')

def create_project_folder():
    pass

def create_service_folder():
    pass

def create_HSE_folder():
    pass

if __name__ == "__main__":
    main()