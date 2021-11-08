import sys

project_name = sys.argv[1]
project_category = sys.argv[2]
project_type = sys.argv[3]
type_code = sys.argv[4]
manager = sys.argv[5]
project_zip = sys.argv[6]
due_date = sys.argv[7]
customers = sys.argv[8]
quote_number = sys.argv[9]


processded_data = f'''Quote Number: {quote_number}\n
Project Name: {project_name}\n
Project Category: {project_category}\n
Project Type: {project_type}\n
Type Code: {type_code}\n
Manager: {manager}\n
Project Zip: {project_zip}\n
Due Date: {due_date}\n
Customers: {customers}
'''
# print(processded_data)

sys.stdout.flush()

print('Log Created')