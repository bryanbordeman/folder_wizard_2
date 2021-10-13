# import sys
# print("Command executed from Python script")
# sys.stdout.flush()

import sys
import os
input = sys.argv[1]

processded_data = input
print('python side!!' + processded_data)
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