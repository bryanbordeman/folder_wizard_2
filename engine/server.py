# import sys
# print("Command executed from Python script")
# sys.stdout.flush()

import sys
import os
project_name = sys.argv[1]
project_category = sys.argv[2]
project_type = sys.argv[3]
manager = sys.argv[4]
project_zip = sys.argv[5]
due_date = sys.argv[6]
customers = sys.argv[7]

processded_data = 'Project Name: ' + project_name + '\n' + 'Project Category: ' + project_category + '\n' + 'Project Type: ' + project_type + '\n' + 'Manager: ' + manager + '\n' + 'Project Zip: ' + project_zip + '\n' + 'Due Date: ' + due_date + '\n' + 'Customers: ' + customers
print(processded_data)
sys.stdout.flush()


# def make_readme(quote):
#     name_of_file = str(processded_data)
#     path = f'./Users/bryanbordeman/Desktop'
#     completeName = os.path.join(path, name_of_file + ".txt")

#     readme = open(completeName, "w")

#     opportunity_info = f'{processded_data}'

#     readme.write(opportunity_info)
#     readme.close()

# make_readme(processded_data)