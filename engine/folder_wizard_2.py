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
    quote.customer_list = 'Global Shielding'
    quote.manager = "BB"
    print(quote.directory.directory)
    print(quote.quote())
   

@dataclass
class Opportunity:
    quote_number: str = None
    project_name: str = None
    project_category: str = None
    project_type: str = None
    type_code: str = None
    project_zip: str = None
    customer_list: str = None
    bid_due: str = None
    manager: str = None
    directory: str = Opportunity_dir()
    
    def quote(self):
        quote = f'{self.quote_number} {self.manager} {self.project_name} {self.type_code}'
        return quote

            
if __name__ == "__main__":
    main()
