import os
import sys
import os.path

def main():
    inputs = sys.argv[1] # input string
    current_path = sys.argv[2]
    inputDict = eval('dict('+inputs+')') # convert input string into dict
    make_readme(inputDict, current_path)
    # print('current path = ' + inputDict['currentDirectory'])
    # print(current_path)
    

def make_readme(inputs, current_path):
    name_of_file = 'README'
    completeName = os.path.join(current_path, name_of_file + ".txt")

    readme = open(completeName, "w")

    # opportunity_info = 'Test'

    opportunity_info = f"Quote Number = {inputs['quote_number']}\nProject Name = {inputs['project_name']}\nProject Category = {inputs['project_category']}\nProject Type = {inputs['project_type']}\nProject Zip = {inputs['project_zip']}\nBid Due Date = {inputs['due_date']}\nCustomer List = {inputs['customers']}"

    # f'Project Number = {self.project_number}\nProject Name = {self.project_name}\nProject Category = {self.project_category}\nProject Type = {self.project_type}\nProject Zip = {self.project_zip}\nCustomer = {self.customer}\nQuote Number = {self.quote}\nTerms = {self.terms}\nTax Exempt = {self.tax}\nBilling Type = {self.billing}\nSell Price (USD) = ${self.price}\n'
    readme.write(opportunity_info)
    readme.close()

    return print('Opportunity Readme Created')

if __name__ == "__main__":
    main()