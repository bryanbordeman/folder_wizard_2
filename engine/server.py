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
quote_number = sys.argv[9]

# quote = Opportunity(quote_number = quote_number, project_name = project_name, project_category = project_category, project_type = project_type, type_code = type_code, project_zip = project_zip, customer_list = customers, bid_due = due_date, manager = manager)
quote = Opportunity()
quote.quote_number = quote_number
quote.project_name = project_name
quote.project_category = project_category
quote.project_type = project_type
quote.type_code = type_code
quote.project_zip = project_zip
quote.customer_list = customers
quote.manager = manager

processded_data = f'''Quote Number: {quote_number}\n
Project Name: {project_name}\n
Project Category: {project_category}\n
Project Type: {project_type}\n
Type Code: {type_code}\n
Manager: {manager}\n
Project Zip: {project_zip}\n
Due Date: {due_date}\n
Customers: {customers}
Directory: {quote.directory.directory}'''
print(processded_data)

sys.stdout.flush()


