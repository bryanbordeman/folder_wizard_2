import json

BASE_DIR = './src/json/directoryList.json'

def main():
    '''ONLY FOR TESTING'''
    quote_dir = Opportunity_dir()
    print(quote_dir.directory)
    pass

class Directory:
    f = open(BASE_DIR,)
    data = json.load(f)
    f.close()

class Opportunity_dir(Directory):
    directory = Directory.data['opportunity_dir']
    
class Project_dir(Directory):
    directory = Directory.data['project_dir']

class Service_dir(Directory):
    directory = Directory.data['service_dir']

if __name__ == "__main__":
    main()
