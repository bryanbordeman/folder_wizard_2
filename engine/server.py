# import sys
# print("Command executed from Python script")
# sys.stdout.flush()

import sys
import os
from folder_wizard_2 import Opportunity

project_name = sys.argv[1]
project_category = sys.argv[2]
project_type = sys.argv[3]
type_code = sys.argv[4]
manager = sys.argv[5]
project_zip = sys.argv[6]
due_date = sys.argv[7]
customers = sys.argv[8]

quote = Opportunity(quote_number = "", project_name = project_name, project_category = project_category, project_type = project_type, type_code = type_code, project_zip = project_zip, customer_list = customers, bid_due = due_date, manager = manager)
print(quote)
processded_data = 'Project Name: ' + project_name + '\n' + 'Project Category: ' + project_category + '\n' + 'Project Type: ' + project_type + '\n' + 'Type Code: ' + type_code + '\n' + 'Manager: ' + manager + '\n' + 'Project Zip: ' + project_zip + '\n' + 'Due Date: ' + due_date + '\n' + 'Customers: ' + customers
# processded_data = 'Project Name: ' + quote.project_name + '\n' + 'Project Category: ' + quote.project_category + '\n' + 'Project Type: ' + quote.project_type + '\n' + 'Type Code: ' + quote.type_code + '\n' + 'Manager: ' + quote.manager + '\n' + 'Project Zip: ' + quote.project_zip + '\n' + 'Due Date: ' + quote.bid_due + '\n' + 'Customers: ' + quote.customer_list
# print(processded_data)
sys.stdout.flush()


# def make_readme(quote):
#     name_of_file = 'README'
#     path = f'/Users/bryanbordeman/Desktop'
#     completeName = os.path.join(path, name_of_file + ".txt")

#     readme = open(completeName, "w")

#     opportunity_info = f'{processded_data}'

#     readme.write(opportunity_info)
#     readme.close()


