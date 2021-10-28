import json
from get_next_num import get_next_num


def main():
        quote = Opportunity(project_name = "Test Project", project_category="",project_type="", type_code="MRI-SEM", project_zip="", customer_list = [], bid_due="", manager="Bryan Bordeman")
        print(quote.quote)
        print(create_dirctory('service'))


class Opportunity:
        def __init__(self, project_name, project_category, project_type, type_code, project_zip, customer_list, bid_due, manager):
                self.quote_number = get_next_num("opportunity")
                self.project_name = project_name
                self.project_category = project_category
                self.project_type = project_type
                self.type_code = type_code
                self.project_zip = project_zip
                self.customer_list = customer_list
                self.bid_due = bid_due
                self.manager = manager
                self.manager_initials = self.get_manager_initials()
                self.quote = f'{self.quote_number} {self.manager_initials} {self.project_name} {self.type_code}'

        def get_manager_initials(self):
                f = open('../src/json/managerList.json',)
                data = json.load(f)
                manager_initials = data[self.manager]
                f.close()
                return manager_initials
               
def create_dirctory(data_type):
    '''make list from json data'''
    f = open('../src/json/directoryList.json',)
    data = json.load(f)
    if data_type == 'opportunity':
        opportunity_dir = data['opportunity_dir']
        f.close()
        return opportunity_dir
    elif data_type == 'project':
        project_dir = data['project_dir']
        f.close()
        return project_dir
    elif data_type == 'service':
        service_dir = data['service_dir']
        f.close()
        return service_dir



if __name__ == "__main__":
    main()
