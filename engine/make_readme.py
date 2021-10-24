import json

def create_dirctory():
    '''make list from json data'''
    f = open('../src/json/directoryList.json',)
    data = json.load(f)
    opportunity_dir = data['opportunity_dir']
    f.close()
    return opportunity_dir

# def make_readme(quote):
#     name_of_file = 'README'
#     path = f'{opportunity_dir}/{current_year} Quotes/{quote}'
#     completeName = os.path.join(path, name_of_file + ".txt")

#     readme = open(completeName, "w")

#     opportunity_info = f'Quote Number = {self.quote_number}\nProject Name = {self.project_name}\nProject Category = {self.project_category}\nProject Type = {self.project_type}\nProject Zip = {self.project_zip}\nBid Due Date = {self.bid_due}\nCustomer List = {self.customer_list}'

#     # f'Project Number = {self.project_number}\nProject Name = {self.project_name}\nProject Category = {self.project_category}\nProject Type = {self.project_type}\nProject Zip = {self.project_zip}\nCustomer = {self.customer}\nQuote Number = {self.quote}\nTerms = {self.terms}\nTax Exempt = {self.tax}\nBilling Type = {self.billing}\nSell Price (USD) = ${self.price}\n'
#     readme.write(opportunity_info)
#     readme.close()

print(create_dirctory())