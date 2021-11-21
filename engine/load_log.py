import json

# FILE = '../src/json/directoryList.json'
FILE = '../src/json/logs.json'

def main():
    '''ONLY FOR TESTING'''
    # quote = Opportunity_log()
    print(Opportunity_log().log)
    pass

class Log:
    file = open(FILE,)
    data = json.load(file)
    file.close()

class Opportunity_log(Log):
    log = Log.data['quoteLog']

class Project_log(Log):
    log = Log.data['projectLog']

if __name__ == "__main__":
    main()
