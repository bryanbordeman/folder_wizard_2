from dataclasses import dataclass
from create_directory import Opportunity_dir

def main():
    '''ONLY FOR TESTING'''
    quote = Opportunity()
    quote.quote_number = "Q21-000"
    quote.project_name = "Test project"
    quote.project_category = "MRI"
    quote.project_type = "Siemens"
    quote.type_code = 'MRI-SEM'
    quote.project_zip = "07004"
    quote.customer_list = ['Global Shielding', 'GPS']
    quote.manager = "BB"
    # print(quote.directory.directory)
    print(quote.customer_list)
    # project = Project()
    # project.project_number = '00000'
    # project.project_name = "Test project"
    # project.project_category = "MRI"
    # project.project_type = "Siemens"
    # project.type_code = 'MRI-SEM'
    # project.project_zip = "07004"
    # project.customer = 'Global Shielding'
    # project.quote_number = "Q21-000"
    # project.terms = 'NET 30'
    # project.tax = True
    # project.billing = 'QB'
    # project.labor_code = None
    # project.order_type = 'House'
    # project.price = 45.56
    # print(project.price)
   

@dataclass
class Opportunity:
    quote_number: str = None
    project_name: str = None
    project_category: str = None
    project_type: str = None
    type_code: str = None
    project_zip: str = None
    customer_list: list = None
    bid_due: str = None
    manager: str = None
    directory: str = Opportunity_dir()
    
    def quote(self):
        quote = f'{self.quote_number} {self.manager} {self.project_name} {self.type_code}'
        return quote

@dataclass
class Project(Opportunity):
    project_number: str = None
    customer: str = None
    terms: str = None
    tax: bool = None
    billing: str = None
    labor_code: str = None
    order_type: str = None
    price: float = None

    def project(self):
        project = f'{self.project_number} {self.project_name} {self.type_code}'
        return project
        
@dataclass
class Service(Project):
    pass   

if __name__ == "__main__":
    main()
